/**
 * Browser code for remote consultation booking (/…/remote-consultation/) and the consultation room
 * (/…/consultation-room/). Talks to the booking server in the gallery app (see src/config/consult.ts → api).
 * Requests are sent as text/plain JSON so no CORS preflight is needed.
 */
type ProviderLite = { id: string; name: string; title: string; specialty: string; modes: string[]; minutes: number };
type Data = { api: string; lang: 'ar' | 'en'; roomPath: string; providers: ProviderLite[]; modeNames: Record<string, string>; ui: Record<string, string> };

const loc = (lang: string) => (lang === 'ar' ? 'ar-u-nu-latn' : 'en-GB');
const userTz = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Amman'; } catch { return 'Asia/Amman'; } };
const fmt = (ms: number, lang: string, o: Intl.DateTimeFormatOptions, tz = userTz()) => new Intl.DateTimeFormat(loc(lang), { timeZone: tz, ...(o.hour ? { hour12: true } : {}), ...o }).format(new Date(ms));
const dayKey = (ms: number) => fmt(ms, 'en', { year: 'numeric', month: '2-digit', day: '2-digit' });
const post = (url: string, body: unknown) => fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: JSON.stringify(body) });
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Record<string, string> = {}, text = '') => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  if (text) el.textContent = text;
  return el;
};
export function whenText(ms: number, lang: string, tz = userTz()) {
  return `${fmt(ms, lang, { weekday: 'long' }, tz)} ${fmt(ms, lang, { day: 'numeric', month: 'long', year: 'numeric' }, tz)} · ${fmt(ms, lang, { hour: 'numeric', minute: '2-digit' }, tz)}`;
}

/* ---------------------------------------------------------------- booking */
export function initBooking() {
  const root = document.querySelector<HTMLElement>('[data-consult]');
  const dataEl = document.getElementById('consult-data');
  if (!root || !dataEl) return;
  const D = JSON.parse(dataEl.textContent || '{}') as Data;
  const U = D.ui;
  const app = root.querySelector<HTMLElement>('[data-bk-app]');
  const fallback = root.querySelector<HTMLElement>('[data-bk-fallback]');
  const form = root.querySelector<HTMLFormElement>('[data-bk-form]');
  if (!app || !fallback || !form || !D.providers.length) return;
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector(sel) as T;
  const daysEl = q('[data-bk-days]'), timesEl = q('[data-bk-times]'), msgEl = q('[data-bk-slot-msg]'), sumEl = q('[data-bk-summary]');
  const done = q('[data-bk-done]'), submit = q<HTMLButtonElement>('[data-bk-submit]');
  const tz = userTz();
  q('[data-bk-tz]').textContent = `${U.tz}: ${tz}`;

  let slots: number[] = [];
  let day = '';
  let start = 0;
  let loadSeq = 0;
  const provider = () => D.providers.find((p) => p.id === (form.querySelector<HTMLInputElement>('input[name="provider"]:checked')?.value)) ?? D.providers[0];
  const setErr = (k: string, msg = '') => { const e = root.querySelector(`[data-err="${k}"]`); if (e) e.textContent = msg; };

  function summary() {
    const p = provider();
    sumEl.textContent = start ? `${p.name} · ${whenText(start, D.lang, tz)} (${p.minutes} ${U.minutes})` : '';
  }
  function drawTimes() {
    timesEl.replaceChildren();
    for (const t of slots.filter((s) => dayKey(s) === day)) {
      const b = h('button', { type: 'button', class: 'bk-chip', 'aria-pressed': String(t === start) }, fmt(t, D.lang, { hour: 'numeric', minute: '2-digit' }, tz));
      b.addEventListener('click', () => { start = t; setErr('slot'); drawTimes(); summary(); });
      timesEl.append(b);
    }
  }
  function drawDays() {
    daysEl.replaceChildren();
    const keys = [...new Set(slots.map(dayKey))];
    if (!keys.includes(day)) day = keys[0] ?? '';
    for (const k of keys) {
      const first = slots.find((s) => dayKey(s) === k)!;
      const b = h('button', { type: 'button', class: 'bk-day', 'aria-pressed': String(k === day) });
      b.append(h('span', {}, fmt(first, D.lang, { weekday: 'short' }, tz)), h('strong', {}, fmt(first, D.lang, { day: 'numeric', month: 'short' }, tz)));
      b.addEventListener('click', () => { day = k; start = 0; drawDays(); summary(); });
      daysEl.append(b);
    }
    drawTimes();
  }
  async function loadSlots() {
    const seq = ++loadSeq;
    const p = provider();
    slots = []; start = 0; day = '';
    daysEl.replaceChildren(); timesEl.replaceChildren(); summary();
    msgEl.textContent = U.loading;
    for (const m of ['video', 'voice']) {
      const row = form.querySelector<HTMLInputElement>(`input[name="mode"][value="${m}"]`)?.closest<HTMLElement>('.choice');
      if (row) row.hidden = !p.modes.includes(m);
    }
    const firstMode = form.querySelector<HTMLInputElement>(`input[name="mode"][value="${p.modes[0]}"]`);
    if (firstMode && !p.modes.includes((form.querySelector<HTMLInputElement>('input[name="mode"]:checked')?.value) || '')) firstMode.checked = true;
    try {
      const r = await fetch(`${D.api}/slots?provider=${encodeURIComponent(p.id)}`);
      const j = await r.json();
      if (seq !== loadSeq) return;
      slots = Array.isArray(j.slots) ? j.slots : [];
      msgEl.textContent = slots.length ? '' : U.noSlots;
      drawDays();
    } catch {
      if (seq === loadSeq) msgEl.textContent = U.errServer;
    }
  }

  form.addEventListener('change', (e) => { if ((e.target as HTMLInputElement).name === 'provider') loadSlots(); });
  document.querySelectorAll<HTMLAnchorElement>('[data-book-provider]').forEach((a) => a.addEventListener('click', () => {
    const r = form.querySelector<HTMLInputElement>(`input[name="provider"][value="${a.dataset.bookProvider}"]`);
    if (r && !r.checked) { r.checked = true; loadSlots(); }
  }));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const v = {
      name: String(f.get('name') || '').trim(), email: String(f.get('email') || '').trim(), phone: String(f.get('phone') || '').trim(),
      mode: String(f.get('mode') || 'video'), consent: f.get('consent') === '1', website: String(f.get('website') || ''),
    };
    const errs: Record<string, string> = {};
    if (!start) errs.slot = U.errSlot;
    if (!/^[\p{L}][\p{L}\p{M}' .-]{1,79}$/u.test(v.name)) errs.name = U.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) errs.email = U.errEmail;
    if (v.phone.replace(/\D/g, '').length < 8) errs.phone = U.errPhone;
    if (!v.consent) errs.consent = U.errConsent;
    for (const k of ['slot', 'name', 'email', 'phone', 'consent', 'form']) setErr(k, errs[k]);
    for (const k of ['name', 'email', 'phone']) form.querySelector(`[name="${k}"]`)?.setAttribute('aria-invalid', String(!!errs[k]));
    const firstBad = Object.keys(errs)[0];
    if (firstBad) { (form.querySelector(firstBad === 'slot' ? '.bk-day, .bk-chip' : `[name="${firstBad}"]`) as HTMLElement | null)?.focus(); return; }

    submit.disabled = true;
    const label = submit.textContent;
    submit.textContent = U.sending;
    try {
      const r = await post(`${D.api}/book`, { ...v, provider: provider().id, start, lang: D.lang, tz });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        form.hidden = true;
        done.hidden = false;
        q('[data-bk-done-when]').textContent = `${provider().name} · ${whenText(start, D.lang, tz)}`;
        q('[data-bk-done-email]').textContent = j.emailed ? U.doneEmail.replace('{email}', j.email) : U.doneNoEmail;
        q<HTMLAnchorElement>('[data-bk-done-room]').href = j.room;
        done.scrollIntoView({ behavior: 'smooth', block: 'center' });
        done.focus({ preventScroll: true });
        try { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'generate_lead', { method: 'consult_booking' }); } catch {}
      } else if (j.error === 'taken') {
        setErr('slot', U.errTaken); await loadSlots();
      } else if (j.error === 'invalid' && j.fields) {
        for (const k of Object.keys(j.fields)) setErr(k, U[`err${k[0].toUpperCase()}${k.slice(1)}`] || U.errServer);
      } else {
        setErr('form', j.error === 'busy' ? U.errBusy : U.errServer);
      }
    } catch {
      setErr('form', U.errServer);
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  });
  q('[data-bk-again]').addEventListener('click', () => { done.hidden = true; form.hidden = false; form.reset(); loadSlots(); });

  fetch(`${D.api}/status`).then((r) => r.json()).then((st) => {
    if (!st.ready) return;
    fallback.hidden = true;
    app.hidden = false;
    loadSlots();
  }).catch(() => {});
}

/* ---------------------------------------------------------------- room */
type RoomUi = Record<string, string>;
export function initRoom() {
  const root = document.querySelector<HTMLElement>('[data-room]');
  const dataEl = document.getElementById('room-data');
  if (!root || !dataEl) return;
  const D = JSON.parse(dataEl.textContent || '{}') as { api: string; lang: 'ar' | 'en'; ui: RoomUi; modeNames: Record<string, string> };
  const U = D.ui;
  const q = (sel: string) => root.querySelector(sel) as HTMLElement;
  const params = new URLSearchParams(location.search);
  let saved: { b?: string; k?: string } = {};
  try { saved = JSON.parse(sessionStorage.getItem('sh-room') || '{}'); } catch {}
  const b = params.get('b') || saved.b || '';
  const k = params.get('k') || saved.k || '';
  try { if (b && k) sessionStorage.setItem('sh-room', JSON.stringify({ b, k })); } catch {}
  const status = q('[data-room-status]');
  const details = q('[data-room-details]');
  const joinBtn = q('[data-room-join]') as HTMLButtonElement;
  const cancelBtn = q('[data-room-cancel]') as HTMLButtonElement;
  const stage = q('[data-room-stage]');
  const tz = userTz();
  // Keep the private key out of the address bar, history and referrers once read.
  if (b && k) history.replaceState(null, '', location.pathname);
  if (!b || !k) { status.textContent = U.missing; return; }

  let v: any = null;
  let timer = 0;
  function render() {
    if (!v) return;
    details.hidden = false;
    q('[data-room-provider]').textContent = `${v.provider.name[D.lang]} · ${v.provider.title[D.lang]}`;
    q('[data-room-specialty]').textContent = v.specialty[D.lang];
    q('[data-room-when]').textContent = `${whenText(v.start, D.lang, tz)} (${tz})`;
    q('[data-room-mode]').textContent = D.modeNames[v.mode] || v.mode;
    q('[data-room-ref]').textContent = v.ref;
    const now = Date.now();
    cancelBtn.hidden = !(v.status === 'confirmed' && now < v.start);
    if (v.status !== 'confirmed') { status.textContent = U.cancelled; joinBtn.hidden = true; return; }
    if (now > v.joinUntil) { status.textContent = U.ended; joinBtn.hidden = true; return; }
    joinBtn.hidden = false;
    if (now < v.joinFrom) {
      joinBtn.disabled = true;
      const mins = Math.ceil((v.joinFrom - now) / 60000);
      status.textContent = mins >= 120 ? U.opensAt.replace('{time}', fmt(v.joinFrom, D.lang, { weekday: 'long', hour: 'numeric', minute: '2-digit' }, tz)) : U.opensIn.replace('{time}', `${mins} ${U.minutes}`);
    } else {
      joinBtn.disabled = false;
      status.textContent = v.video ? U.open : U.noVideo;
      if (!v.video) joinBtn.disabled = true;
    }
  }
  async function load() {
    try {
      const r = await fetch(`${D.api}/booking?b=${encodeURIComponent(b)}&k=${encodeURIComponent(k)}`);
      if (!r.ok) { status.textContent = U.missing; return; }
      v = await r.json();
      render();
      clearInterval(timer);
      timer = window.setInterval(render, 20000);
    } catch { status.textContent = U.error; }
  }
  joinBtn.addEventListener('click', async () => {
    joinBtn.disabled = true;
    status.textContent = U.connecting;
    try {
      const r = await post(`${D.api}/join`, { b, k });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.url) { status.textContent = j.error === 'early' ? U.early : j.error === 'no-video' ? U.noVideo : U.error; joinBtn.disabled = false; return; }
      const frame = h('iframe', { src: j.url, title: U.frameTitle, allow: 'camera; microphone; fullscreen; display-capture; autoplay; speaker-selection', allowfullscreen: '' });
      stage.replaceChildren(frame);
      stage.hidden = false;
      status.textContent = U.inCall;
      joinBtn.hidden = true;
      stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch { status.textContent = U.error; joinBtn.disabled = false; }
  });
  cancelBtn.addEventListener('click', async () => {
    if (!confirm(U.confirmCancel)) return;
    cancelBtn.disabled = true;
    try {
      const r = await post(`${D.api}/cancel`, { b, k });
      const j = await r.json().catch(() => ({}));
      if (j.ok) { v = j.booking; render(); status.textContent = U.cancelledNow; } else { status.textContent = U.error; }
    } catch { status.textContent = U.error; }
    cancelBtn.disabled = false;
  });
  load();
}
