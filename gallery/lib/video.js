/**
 * In-platform video room for remote consultations (Daily, https://www.daily.co — embedded inside
 * speranzahealth.net/…/consultation-room/, so the call happens on the platform; nothing is recorded).
 *
 * Env, set by Aissar: DAILY_API_KEY (Daily dashboard → Developers). Without it the room page says the
 * session link is not active yet, and the booking still works (confirmation email is still sent).
 */
const API = 'https://api.daily.co/v1';
const key = () => process.env.DAILY_API_KEY || '';
export const videoConfigured = () => !!key();

async function call(method, p, body) {
  const r = await fetch(API + p, {
    method,
    headers: { Authorization: `Bearer ${key()}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { const e = new Error(`daily ${r.status}: ${j.info || j.error || ''}`); e.status = r.status; e.info = j.info || ''; throw e; }
  return j;
}

/** Creates (or reuses) the private room for one booking. Returns { name, url }. */
export async function ensureRoom(b) {
  if (b.room?.url) return b.room;
  const name = `sh-${b.id}`.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40);
  const nbf = Math.floor((b.start - 30 * 60000) / 1000);
  const exp = Math.floor((b.end + 60 * 60000) / 1000);
  try {
    const r = await call('POST', '/rooms', {
      name,
      privacy: 'private',
      properties: { nbf, exp, eject_at_room_exp: true, max_participants: 4, enable_prejoin_ui: true, enable_chat: true, enable_screenshare: true, start_video_off: b.mode === 'voice' },
    });
    return { name: r.name, url: r.url };
  } catch (e) {
    if (e.status === 400 && /already exists/i.test(e.info)) {
      const r = await call('GET', `/rooms/${name}`);
      return { name: r.name, url: r.url };
    }
    throw e;
  }
}

/** A short-lived personal token for the room; the provider joins as owner. */
export async function joinUrl(room, { userName, owner, until }) {
  const r = await call('POST', '/meeting-tokens', {
    properties: { room_name: room.name, user_name: userName.slice(0, 60), is_owner: !!owner, exp: Math.floor(until / 1000) },
  });
  return `${room.url}?t=${encodeURIComponent(r.token)}`;
}

export async function deleteRoom(room) {
  if (!room?.name || !videoConfigured()) return;
  await call('DELETE', `/rooms/${room.name}`).catch(() => {});
}
