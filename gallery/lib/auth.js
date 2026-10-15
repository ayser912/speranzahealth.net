/**
 * Sessions, codes and throttling.
 *
 * Access model (decided with Aissar, 15 Oct 2026): every person gets a PERSONAL grant —
 * an unguessable link (/a/<grantId>) plus a 5-digit code, valid for 7 days by default.
 * Only a salted hash of the code is stored. 5 wrong codes lock that grant. The admin can
 * revoke a grant at any time; every successful entry and case view is logged.
 */
import crypto from 'node:crypto';
import { readJson, writeJson } from './store.js';

const SECRET = process.env.SESSION_SECRET || (process.env.STORE === 'fs' ? 'local-dev-secret-not-for-production' : '');
export const MAX_CODE_ATTEMPTS = 5;
export const VIEW_SESSION_MIN = 30;
export const ADMIN_SESSION_H = 8;

export function assertConfigured() {
  if (!SECRET || SECRET.length < 32) throw new Error('SESSION_SECRET is not configured');
}

const b64u = (buf) => Buffer.from(buf).toString('base64url');
export const randomId = (bytes = 16) => b64u(crypto.randomBytes(bytes));
export const newCode = () => String(crypto.randomInt(0, 100000)).padStart(5, '0');
export const hashCode = (grantId, code) => crypto.createHmac('sha256', SECRET).update(`code:${grantId}:${code}`).digest('base64url');
export function safeEqual(a, b) {
  const x = Buffer.from(String(a)); const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

/* ---------- signed cookies ---------- */
function sign(payload) {
  const body = b64u(JSON.stringify(payload));
  const mac = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  return `${body}.${mac}`;
}
function verify(token) {
  if (!token || !token.includes('.')) return null;
  const [body, mac] = token.split('.');
  const expect = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  if (!safeEqual(mac, expect)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (!p.exp || p.exp < Date.now()) return null;
    return p;
  } catch { return null; }
}
export function parseCookies(req) {
  const out = {};
  for (const part of (req.headers.get('cookie') || '').split(';')) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}
const secure = () => (process.env.STORE === 'fs' ? '' : '; Secure');
export function cookie(name, value, maxAgeSec) {
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAgeSec}${secure()}`;
}
export const clearCookie = (name) => `${name}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure()}`;

/* ---------- viewer session ---------- */
export function viewerCookie(grantId) {
  const exp = Date.now() + VIEW_SESSION_MIN * 60 * 1000;
  return cookie('sv', sign({ g: grantId, exp }), VIEW_SESSION_MIN * 60);
}
/** Returns { grant, session } when the session cookie is valid AND the grant is still active. */
export async function currentViewer(req) {
  const s = verify(parseCookies(req).sv);
  if (!s?.g) return null;
  const grant = await readJson(`data/grants/${s.g}.json`);
  if (!grant || grantStatus(grant) !== 'active') return null;
  return { grant, session: s };
}
export function grantStatus(g) {
  if (g.revoked) return 'revoked';
  if (g.failed >= MAX_CODE_ATTEMPTS) return 'locked';
  if (Date.parse(g.expiresAt) < Date.now()) return 'expired';
  return 'active';
}

/* ---------- admin session ---------- */
export function adminCookie() {
  return cookie('sa', sign({ a: 1, exp: Date.now() + ADMIN_SESSION_H * 3600 * 1000 }), ADMIN_SESSION_H * 3600);
}
export const isAdmin = (req) => !!verify(parseCookies(req).sa)?.a;

/** Admin password check with lockout: 5 failures → 15 minutes. Password lives only in ADMIN_PASSWORD. */
export async function checkAdminPassword(pw) {
  const expected = process.env.ADMIN_PASSWORD || '';
  if (expected.length < 10) return { ok: false, reason: 'not-configured' };
  const lock = (await readJson('data/admin-lock.json')) || { fails: 0, until: 0 };
  if (lock.until > Date.now()) return { ok: false, reason: 'locked', until: lock.until };
  const a = crypto.createHash('sha256').update(String(pw)).digest();
  const b = crypto.createHash('sha256').update(expected).digest();
  if (crypto.timingSafeEqual(a, b)) {
    if (lock.fails) await writeJson('data/admin-lock.json', { fails: 0, until: 0 });
    return { ok: true };
  }
  lock.fails += 1;
  if (lock.fails >= 5) { lock.until = Date.now() + 15 * 60 * 1000; lock.fails = 0; }
  await writeJson('data/admin-lock.json', lock);
  return { ok: false, reason: 'wrong' };
}

/** Same-origin check for every POST (cookies are SameSite=Strict as well). */
export function sameOrigin(req) {
  const origin = req.headers.get('origin');
  if (!origin) return true; // some browsers omit it on same-origin form posts
  try { return new URL(origin).host === new URL(req.url).host; } catch { return false; }
}
