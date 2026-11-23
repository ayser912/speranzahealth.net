/**
 * Remote consultation bookings (called from speranzahealth.net/…/remote-consultation/).
 *
 * Flow: the visitor picks a provider and a free slot → POST /consult/api/book → the slot is locked,
 * the booking is stored as confirmed, and the confirmation email (day, date, time, provider, room link,
 * calendar invite) goes to the client straight away, with a copy to the platform inbox.
 *
 * The directory (providers, hours) is the site's own src/config/consult.ts, read from
 * `${SITE_URL}/consult/providers.json` (cached 5 minutes).
 *
 * Storage layout
 *   data/consult/bookings/<id>.json            the booking (personal data deleted 30 days after the appointment)
 *   data/consult/slots/<providerId>/<startMs>.json   lock: one booking per provider per start time
 */
import { readJson, writeJson, createJsonExclusive, listPaths, remove } from './store.js';
import { hashCode, randomId, safeEqual } from './auth.js';
import { sendMail, mailConfigured, senderAddress } from './mail.js';
import { videoConfigured } from './video.js';
import * as M from './consult-mail.js';

export const SITE = (process.env.SITE_URL || 'https://speranzahealth.net').replace(/\/$/, '');
const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const pad = (n) => String(n).padStart(2, '0');

/* ---------------- directory ---------------- */
let cache = { at: 0, data: null };
export async function directory() {
  if (cache.data && Date.now() - cache.at < 5 * 60000) return cache.data;
  const r = await fetch(`${SITE}/consult/providers.json`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`providers.json ${r.status}`);
  cache = { at: Date.now(), data: await r.json() };
  return cache.data;
}
export const ready = () => mailConfigured() && (videoConfigured() || process.env.CONSULT_ALLOW_NO_VIDEO === '1');

/* ---------------- time zones (no library: Intl only) ---------------- */
export function validTz(tz) {
  try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch { return false; }
}
function tzOffset(ms, tz) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    .formatToParts(new Date(ms)).map((x) => [x.type, x.value]));
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second) - Math.floor(ms / 1000) * 1000;
}
/** Wall-clock time in a zone → UTC milliseconds (handles daylight-saving changes). */
function zoned(y, m, d, hh, mm, tz) {
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const off = tzOffset(guess, tz);
  const t = guess - off;
  const off2 = tzOffset(t, tz);
  return off2 === off ? t : guess - off2;
}
function ymdIn(ms, tz) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(ms)).map((x) => [x.type, x.value]));
  return { y: +p.year, m: +p.month, d: +p.day };
}

/** Every slot start (UTC ms) the provider offers in the booking window, before removing booked ones. */
export function offeredSlots(p, dir, nowMs = Date.now()) {
  if (!p?.bookable || !p.hours) return [];
  const step = p.slotMinutes * 60000;
  const min = nowMs + (dir.leadHours ?? 3) * 3600000;
  const max = nowMs + (dir.windowDays ?? 21) * 86400000;
  const today = ymdIn(nowMs, p.timezone);
  const out = [];
  for (let i = 0; i <= (dir.windowDays ?? 21) + 1; i++) {
    const cal = new Date(Date.UTC(today.y, today.m - 1, today.d + i, 12));
    const y = cal.getUTCFullYear(), m = cal.getUTCMonth() + 1, d = cal.getUTCDate();
    if ((p.daysOff || []).includes(`${y}-${pad(m)}-${pad(d)}`)) continue;
    for (const [a, b] of p.hours[DAYS[cal.getUTCDay()]] || []) {
      const [ah, am] = a.split(':').map(Number);
      const [bh, bm] = b.split(':').map(Number);
      const end = zoned(y, m, d, bh, bm, p.timezone);
      for (let t = zoned(y, m, d, ah, am, p.timezone); t + step <= end; t += step) if (t >= min && t <= max) out.push(t);
    }
  }
  return [...new Set(out)].sort((x, y) => x - y);
}

async function bookedStarts(providerId) {
  const paths = await listPaths(`data/consult/slots/${providerId}/`);
  return new Set(paths.map((p) => Number(p.split('/').pop().replace('.json', ''))).filter(Number.isFinite));
}

export async function freeSlots(providerId) {
  const dir = await directory();
  const p = dir.providers.find((x) => x.id === providerId);
  if (!p) return null;
  const taken = await bookedStarts(p.id);
  return { provider: p, slots: offeredSlots(p, dir).filter((t) => !taken.has(t)) };
}

/* ---------------- bookings ---------------- */
const keyHash = (id, role, key) => hashCode(`consult-${role}-${id}`, key);
const refChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newRef = () => 'SC-' + Array.from({ length: 6 }, () => refChars[Math.floor(Math.random() * refChars.length)]).join('');
const EMAIL = /^[^\s@<>()",;:]{1,64}@[^\s@<>()",;:]{1,190}\.[A-Za-z]{2,24}$/;
const roomLink = (b, key) => `${SITE}/${b.lang}/consultation-room/?b=${encodeURIComponent(b.id)}&k=${encodeURIComponent(key)}`;

export function normalizePhone(raw) {
  let d = String(raw || '').replace(/[\s()-]/g, '').replace(/^\+/, '').replace(/^00/, '');
  if (!/^\d+$/.test(d)) return '';
  if (/^07\d{8}$/.test(d)) d = '962' + d.slice(1);
  return d.length >= 8 && d.length <= 15 ? d : '';
}

export async function getBooking(id) {
  return /^[A-Za-z0-9_-]{6,40}$/.test(String(id || '')) ? readJson(`data/consult/bookings/${id}.json`) : null;
}
/** 'client' | 'host' | null for a booking + key from a link. */
export function roleFor(b, key) {
  if (!b || !key || typeof key !== 'string' || key.length > 64) return null;
  if (safeEqual(keyHash(b.id, 'client', key), b.clientKeyHash)) return 'client';
  if (safeEqual(keyHash(b.id, 'host', key), b.hostKeyHash)) return 'host';
  return null;
}

/** What the room page may show (no email/phone of the other side). */
export function publicView(b, role) {
  return {
    id: b.id, ref: b.ref, status: b.status, role,
    start: b.start, end: b.end, mode: b.mode, lang: b.lang, tz: b.tz,
    provider: { name: b.providerName, title: b.providerTitle, timezone: b.providerTz },
    specialty: b.specialtyName,
    client: role === 'host' ? { name: b.name } : { name: b.name },
    joinFrom: b.start - (role === 'host' ? 30 : (b.joinEarlyMinutes ?? 15)) * 60000,
    joinUntil: b.end + 30 * 60000,
    video: videoConfigured(),
  };
}

function notifyList(providerId) {
  const list = [process.env.CONSULT_NOTIFY_EMAIL || ''];
  try { const map = JSON.parse(process.env.CONSULT_PROVIDER_EMAILS || '{}'); if (map[providerId]) list.push(map[providerId]); } catch {}
  return [...new Set(list.map((s) => s.trim()).filter(Boolean))];
}

/**
 * Creates a confirmed booking. `input` comes from the site form.
 * Returns { ok, booking, emailed } or { error: 'invalid'|'taken'|'busy'|'not-ready', fields? }.
 */
export async function createBooking(input, { ipHash }) {
  if (!ready()) return { error: 'not-ready' };
  const lang = input.lang === 'en' ? 'en' : 'ar';
  const v = {
    name: String(input.name || '').trim().replace(/\s+/g, ' ').slice(0, 80),
    email: String(input.email || '').trim().toLowerCase().slice(0, 254),
    phone: normalizePhone(input.phone),
    mode: input.mode === 'voice' ? 'voice' : 'video',
    providerId: String(input.provider || ''),
    start: Number(input.start),
    tz: validTz(String(input.tz || '')) ? String(input.tz) : 'Asia/Amman',
  };
  const fields = {};
  if (!/^[\p{L}][\p{L}\p{M}' .-]{1,79}$/u.test(v.name)) fields.name = 1;
  if (!EMAIL.test(v.email)) fields.email = 1;
  if (!v.phone) fields.phone = 1;
  if (input.consent !== true && input.consent !== '1') fields.consent = 1;
  if (Object.keys(fields).length) return { error: 'invalid', fields };

  const dir = await directory();
  const p = dir.providers.find((x) => x.id === v.providerId);
  if (!p || !p.bookable) return { error: 'invalid', fields: { provider: 1 } };
  if (!p.modes.includes(v.mode)) v.mode = p.modes[0];
  if (!offeredSlots(p, dir).includes(v.start)) return { error: 'taken' };

  // Simple abuse limit: 3 bookings per network per day.
  const recent = (await allBookings()).filter((b) => b.ipHash === ipHash && Date.parse(b.createdAt) > Date.now() - 86400000);
  if (recent.length >= 3) return { error: 'busy' };

  const id = randomId(9);
  try {
    await createJsonExclusive(`data/consult/slots/${p.id}/${v.start}.json`, { id });
  } catch (e) {
    if (e.code === 'EEXIST') return { error: 'taken' };
    throw e;
  }
  const clientKey = randomId(18);
  const hostKey = randomId(18);
  const spec = dir.specialties.find((s) => s.id === p.specialty);
  const b = {
    id, ref: newRef(), status: 'confirmed', createdAt: new Date().toISOString(),
    providerId: p.id, providerName: p.name, providerTitle: p.title, providerTz: p.timezone,
    specialtyId: p.specialty, specialtyName: spec?.name || { ar: p.specialty, en: p.specialty },
    start: v.start, end: v.start + p.slotMinutes * 60000, minutes: p.slotMinutes, mode: v.mode,
    joinEarlyMinutes: dir.joinEarlyMinutes ?? 15,
    name: v.name, email: v.email, phone: v.phone, lang, tz: v.tz,
    clientKeyHash: keyHash(id, 'client', clientKey), hostKeyHash: keyHash(id, 'host', hostKey),
    ipHash, emails: [],
  };
  await writeJson(`data/consult/bookings/${id}.json`, b);

  const contact = dir.platform || {};
  const links = { client: roomLink(b, clientKey), host: roomLink({ ...b, lang: 'ar' }, hostKey) };
  let emailed = false;
  try {
    emailed = await sendMail({ to: b.email, replyTo: contact.email || senderAddress(), ...M.confirmation(b, links.client, contact), ics: M.ics(b, links.client, senderAddress()) });
    b.emails.push({ type: 'confirmation', at: new Date().toISOString(), ok: emailed });
  } catch (e) {
    console.error('confirmation email failed', e?.message);
    b.emails.push({ type: 'confirmation', at: new Date().toISOString(), ok: false });
  }
  const team = notifyList(p.id);
  if (team.length) {
    await sendMail({ to: team.join(', '), replyTo: b.email, ...M.teamNotice(b, links.host, emailed) }).catch((e) => console.error('team email failed', e?.message));
  }
  await writeJson(`data/consult/bookings/${id}.json`, b);
  return { ok: true, booking: publicView(b, 'client'), emailed, email: b.email, room: links.client };
}

export async function cancelBooking(b, by) {
  if (b.status !== 'confirmed') return b;
  b.status = 'cancelled';
  b.cancelledAt = new Date().toISOString();
  b.cancelledBy = by;
  await remove(`data/consult/slots/${b.providerId}/${b.start}.json`).catch(() => {});
  await writeJson(`data/consult/bookings/${b.id}.json`, b);
  const dir = await directory().catch(() => ({}));
  const contact = dir.platform || {};
  await sendMail({ to: b.email, replyTo: contact.email || senderAddress(), ...M.cancellation(b, contact) }).catch((e) => console.error('cancel email failed', e?.message));
  const team = notifyList(b.providerId);
  if (team.length) await sendMail({ to: team.join(', '), ...M.teamCancel(b, by) }).catch(() => {});
  return b;
}

export async function allBookings() {
  const paths = (await listPaths('data/consult/bookings/')).filter((p) => p.endsWith('.json'));
  return (await Promise.all(paths.map((p) => readJson(p)))).filter(Boolean);
}

/** Personal data is not kept: bookings are deleted 30 days after the appointment. */
export async function purgeOld(list) {
  const old = list.filter((b) => b.end < Date.now() - 30 * 86400000);
  if (old.length) {
    await remove(old.map((b) => `data/consult/bookings/${b.id}.json`));
    await remove(old.map((b) => `data/consult/slots/${b.providerId}/${b.start}.json`)).catch(() => {});
  }
  return list.filter((b) => !old.includes(b));
}
