/**
 * Speranza Health — private healing-journeys gallery (cases.speranzahealth.net).
 * One function handles every route (see vercel.json rewrites). Nothing here is public:
 * pages need a valid personal session, media is served from a PRIVATE Blob store only
 * after that check, and images are watermarked per viewer.
 */
import { readJson, writeJson, putFile, readFile, listPaths, remove, videoUrl, isLocal } from '../lib/store.js';
import * as A from '../lib/auth.js';
import * as V from '../lib/views.js';
import * as AV from '../lib/admin-views.js';
import { ingest, watermarked, blurredCover } from '../lib/media.js';

const SEC_HEADERS = {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: blob:; media-src 'self' blob: https://*.blob.vercel-storage.com; connect-src 'self' https://vercel.com https://*.blob.vercel-storage.com https://blob.vercel-storage.com; style-src 'self'; script-src 'self'; font-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'; object-src 'none'",
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'same-origin',
  'X-Robots-Tag': 'noindex, nofollow, noarchive, noimageindex',
  'X-Content-Type-Options': 'nosniff',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), display-capture=()',
  'Cache-Control': 'private, no-store',
};
const res = (body, status = 200, headers = {}) => new Response(body, { status, headers: { ...SEC_HEADERS, ...headers } });
const html = (body, status = 200, headers = {}) => res(body, status, { 'Content-Type': 'text/html; charset=utf-8', ...headers });
const json = (data, status = 200) => res(JSON.stringify(data), status, { 'Content-Type': 'application/json' });
function redirect(location, cookies = []) {
  const h = new Headers({ ...SEC_HEADERS, Location: location });
  for (const c of cookies) h.append('Set-Cookie', c);
  return new Response(null, { status: 303, headers: h });
}

const ID = /^[A-Za-z0-9_-]{6,40}$/;
const now = () => new Date().toISOString();
const refChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newRef = () => 'SH-' + Array.from({ length: 5 }, () => refChars[Math.floor(Math.random() * refChars.length)]).join('');

async function log(type, grant = '-', kase = '-', detail = '') {
  const d = new Date();
  const month = d.toISOString().slice(0, 7);
  const safe = (s) => String(s || '-').replace(/[^A-Za-z0-9-]/g, '').slice(0, 40) || '-';
  await writeJson(`data/log/${month}/${String(d.getTime()).padStart(14, '0')}_${safe(type)}_${safe(grant)}_${safe(kase)}_${A.randomId(4)}.json`, { detail: String(detail).slice(0, 200) }).catch(() => {});
}
async function readLog() {
  const d = new Date();
  const months = [d.toISOString().slice(0, 7), new Date(d.getFullYear(), d.getMonth() - 1, 15).toISOString().slice(0, 7)];
  const paths = (await Promise.all(months.map((m) => listPaths(`data/log/${m}/`)))).flat();
  const cutoff = Date.now() - 30 * 86400000;
  return paths.map((p) => {
    const [ts, type, grant, kase] = p.split('/').pop().replace('.json', '').split('_');
    return { at: new Date(Number(ts)).toISOString(), t: Number(ts), type, grant, case: kase, detail: kase !== '-' ? `case ${kase}` : '' };
  }).filter((l) => l.t >= cutoff).sort((a, b) => b.t - a.t).slice(0, 300);
}

const readAll = async (prefix) => (await Promise.all((await listPaths(prefix)).filter((p) => p.endsWith('.json')).map((p) => readJson(p)))).filter(Boolean);
const getCase = (id) => (ID.test(id) ? readJson(`data/cases/${id}.json`) : null);
const saveCase = (c) => writeJson(`data/cases/${c.id}.json`, { ...c, updatedAt: now() });

function findMedia(c, mid) {
  for (const s of c.stages) for (const m of s.media) if (m.id === mid) return { s, m };
  return null;
}
const firstImage = (c) => [...c.stages].sort((a, b) => (a.day || 0) - (b.day || 0)).flatMap((s) => s.media).find((m) => m.type === 'image');

async function handle(request) {
  const url = new URL(request.url);
  const p = url.searchParams.get('__path') ?? url.pathname;
  url.searchParams.delete('__path');
  const path = ('/' + p.replace(/^\/+/, '')).replace(/\/+$/, '') || '/';
  const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'ar';
  const method = request.method;
  const seg = path.split('/').filter(Boolean);
  const T = V.T[lang];

  if (method === 'POST' && !A.sameOrigin(request)) return res('Forbidden', 403);
  try { A.assertConfigured(); } catch { return html(V.simple(lang, 'Not configured', 'SESSION_SECRET missing').html, 500); }

  /* ---------------- viewer ---------------- */
  if (path === '/') {
    if (await A.currentViewer(request)) return redirect(`/gallery?lang=${lang}`);
    return html(V.landing(lang));
  }

  if (seg[0] === 'a' && seg.length === 2) {
    const id = seg[1];
    const grant = ID.test(id) ? await readJson(`data/grants/${id}.json`) : null;
    if (!grant) return html(V.grantGone(lang, 'missing'), 404);
    const st = A.grantStatus(grant);
    if (st !== 'active') return html(V.grantGone(lang, st), 410);
    if (method === 'GET') return html(V.accessForm(lang, grant));
    if (method === 'POST') {
      const form = await request.formData();
      const code = String(form.get('code') || '').trim();
      if (form.get('accept') !== '1') return html(V.accessForm(lang, grant, { error: T.mustAccept }), 400);
      if (!/^\d{5}$/.test(code)) return html(V.accessForm(lang, grant, { error: T.codeFormat }), 400);
      if (!A.safeEqual(A.hashCode(grant.id, code), grant.codeHash)) {
        grant.failed = (grant.failed || 0) + 1;
        await writeJson(`data/grants/${grant.id}.json`, grant);
        const left = A.MAX_CODE_ATTEMPTS - grant.failed;
        await log(left <= 0 ? 'locked' : 'fail', grant.id);
        if (left <= 0) return html(V.grantGone(lang, 'locked'), 403);
        return html(V.accessForm(lang, grant, { error: T.wrongCode(left) }), 401);
      }
      grant.failed = 0;
      grant.uses = (grant.uses || 0) + 1;
      grant.lastUsedAt = now();
      grant.acceptedTermsAt = now();
      await writeJson(`data/grants/${grant.id}.json`, grant);
      await log('enter', grant.id);
      return redirect(`/gallery?lang=${lang}`, [A.viewerCookie(grant.id)]);
    }
  }

  if (path === '/logout' && method === 'POST') {
    const v = await A.currentViewer(request);
    if (v) await log('logout', v.grant.id);
    return redirect(`/?lang=${lang}`, [A.clearCookie('sv')]);
  }

  if (path === '/gallery') {
    const v = await A.currentViewer(request);
    if (!v) return redirect(`/?lang=${lang}`);
    const cases = (await readAll('data/cases/')).filter((c) => c.status === 'published')
      .map((c) => ({ ...c, cover: !!firstImage(c) }))
      .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
    return html(V.gallery(lang, cases, v.grant));
  }

  if (seg[0] === 'case' && seg.length === 2) {
    const v = await A.currentViewer(request);
    if (!v) return redirect(`/?lang=${lang}`);
    const c = await getCase(seg[1]);
    if (!c || c.status !== 'published') return html(V.simple(lang, T.notFound, '').html, 404);
    await log('view', v.grant.id, c.id);
    return html(V.caseView(lang, c, v.grant));
  }

  // media for viewers (and admin previews)
  if ((seg[0] === 'm' || seg[0] === 'v' || seg[0] === 'c') && seg.length === 3) {
    const v = await A.currentViewer(request);
    const admin = A.isAdmin(request);
    if (!v && !admin) return res('Unauthorized', 401);
    const c = await getCase(seg[1]);
    if (!c || (c.status !== 'published' && !admin)) return res('Not found', 404);
    if (seg[0] === 'c') {
      const m = firstImage(c);
      const buf = m && (await readFile(m.path));
      if (!buf) return res('Not found', 404);
      return res(await blurredCover(buf), 200, { 'Content-Type': 'image/jpeg' });
    }
    const hit = findMedia(c, seg[2]);
    if (!hit) return res('Not found', 404);
    if (seg[0] === 'v' && hit.m.type === 'video') return redirect(await videoUrl(hit.m.path, 300));
    if (seg[0] === 'm' && hit.m.type === 'image') {
      const buf = await readFile(hit.m.path);
      if (!buf) return res('Not found', 404);
      const stamp = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Amman', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',', '');
      const who = v ? `REF ${v.grant.ref}` : 'ADMIN PREVIEW';
      const out = await watermarked(buf, { width: 1400, lines: ['SPERANZA HEALTH - CONFIDENTIAL', `${who}  ${stamp}`] });
      return res(out, 200, { 'Content-Type': 'image/jpeg' });
    }
    return res('Not found', 404);
  }

  if (isLocal && seg[0] === '__local-media') {
    if (!(await A.currentViewer(request)) && !A.isAdmin(request)) return res('Unauthorized', 401);
    const buf = await readFile(decodeURIComponent(seg.slice(1).join('/')));
    return buf ? res(buf, 200, { 'Content-Type': 'video/mp4' }) : res('Not found', 404);
  }

  /* ---------------- admin ---------------- */
  if (seg[0] === 'admin') return handleAdmin(request, url, seg, method);

  return html(V.simple(lang, T.notFound, '').html, 404);
}

async function handleAdmin(request, url, seg, method) {
  const base = `${url.protocol}//${url.host}`;
  if (seg.length === 1) {
    if (method === 'POST') {
      const form = await request.formData();
      const r = await A.checkAdminPassword(form.get('password') || '');
      if (r.ok) { await log('admin'); return redirect('/admin/home', [A.adminCookie()]); }
      if (r.reason === 'not-configured') return html(AV.adminLogin({ notConfigured: true }), 503);
      await log('admin-fail');
      return html(AV.adminLogin({ error: r.reason === 'locked' ? 'تم إيقاف الدخول مؤقتًا بعد عدة محاولات خاطئة. حاول بعد 15 دقيقة.' : 'كلمة المرور غير صحيحة.' }), 401);
    }
    if (A.isAdmin(request)) return redirect('/admin/home');
    return html(AV.adminLogin({ notConfigured: (process.env.ADMIN_PASSWORD || '').length < 10 }));
  }
  if (!A.isAdmin(request)) return method === 'GET' ? redirect('/admin') : res('Unauthorized', 401);
  const [, a, b, c2, d] = seg;

  if (a === 'logout' && method === 'POST') return redirect('/admin', [A.clearCookie('sa')]);

  if (a === 'home') {
    const [grants, cases, log] = await Promise.all([readAll('data/grants/'), readAll('data/cases/'), readLog()]);
    return html(AV.adminHome({ grants, cases, log }));
  }

  if (a === 'log') {
    const [log, grants] = await Promise.all([readLog(), readAll('data/grants/')]);
    return html(AV.logPage({ log, grants }));
  }

  if (a === 'codes') {
    if (!b && method === 'POST') {
      const form = await request.formData();
      const label = String(form.get('label') || '').trim().slice(0, 60);
      const days = Math.min(30, Math.max(1, parseInt(form.get('days'), 10) || 7));
      if (!label) return redirect('/admin/codes');
      const id = A.randomId(18);
      const code = A.newCode();
      const grant = {
        id, ref: newRef(), label,
        phone: String(form.get('phone') || '').replace(/[^0-9+]/g, '').slice(0, 20),
        note: String(form.get('note') || '').slice(0, 120),
        codeHash: A.hashCode(id, code),
        createdAt: now(), expiresAt: new Date(Date.now() + days * 86400000).toISOString(),
        failed: 0, uses: 0, revoked: false,
      };
      await writeJson(`data/grants/${id}.json`, grant);
      const grants = await readAll('data/grants/');
      return html(AV.codesPage({ grants, created: { grant, code }, base }));
    }
    if (b && c2 === 'revoke' && method === 'POST' && ID.test(b)) {
      const g = await readJson(`data/grants/${b}.json`);
      if (g) { g.revoked = true; g.revokedAt = now(); await writeJson(`data/grants/${b}.json`, g); }
      return redirect('/admin/codes');
    }
    return html(AV.codesPage({ grants: await readAll('data/grants/'), base }));
  }

  if (a === 'cases') {
    if (!b) {
      if (method === 'POST') {
        const form = await request.formData();
        const title = String(form.get('title_ar') || '').trim().slice(0, 90);
        if (!title) return redirect('/admin/cases');
        const kase = { id: A.randomId(9), status: 'draft', title: { ar: title, en: '' }, stages: [{ id: A.randomId(6), day: 0, label: { ar: 'البداية', en: 'Start' }, note: { ar: '', en: '' }, media: [] }], consent: {}, createdAt: now() };
        await saveCase(kase);
        return redirect(`/admin/cases/${kase.id}`);
      }
      const cases = (await readAll('data/cases/')).sort((x, y) => (y.updatedAt || '').localeCompare(x.updatedAt || ''));
      return html(AV.casesPage({ cases }));
    }
    const kase = await getCase(b);
    if (!kase) return redirect('/admin/cases');
    const back = (msg, anchor = '') => redirect(`/admin/cases/${kase.id}${msg ? `?msg=${encodeURIComponent(msg)}` : ''}${anchor}`);

    if (!c2) {
      if (method === 'GET') return html(AV.caseEdit({ c: kase, msg: url.searchParams.get('msg') || '' }));
      const f = await request.formData();
      const g = (k, n = 120) => String(f.get(k) || '').trim().slice(0, n);
      for (const k of ['title', 'woundType', 'durationBefore', 'team', 'outcome']) kase[k] = { ar: g(`${k}_ar`), en: g(`${k}_en`) };
      kase.summary = { ar: g('summary_ar', 800), en: g('summary_en', 800) };
      if (!kase.title.ar) kase.title.ar = 'حالة بدون عنوان';
      kase.consent = { written: f.get('consent_written') === '1', deidentified: f.get('consent_deid') === '1', date: g('consent_date', 10), ref: g('consent_ref', 40) };
      const action = f.get('action');
      let msg = 'تم الحفظ.';
      if (action === 'publish') {
        const hasMedia = kase.stages.some((s) => s.media.length);
        if (!kase.consent.written || !kase.consent.deidentified || !kase.consent.date) msg = 'لم تُنشر: أكمل خانات الموافقة وتاريخها أولًا.';
        else if (!hasMedia) msg = 'لم تُنشر: أضف صورة واحدة على الأقل.';
        else { kase.status = 'published'; kase.publishedAt = kase.publishedAt || now(); msg = 'تم النشر في المعرض.'; }
      } else if (action === 'unpublish') { kase.status = 'draft'; msg = 'أُخفيت الحالة من المعرض.'; }
      await saveCase(kase);
      return back(msg);
    }
    if (c2 === 'delete' && method === 'POST') {
      await remove(kase.stages.flatMap((s) => s.media.map((m) => m.path)));
      await remove(`data/cases/${kase.id}.json`);
      return redirect('/admin/cases');
    }
    if (c2 === 'stages' && method === 'POST') {
      if (!d) {
        const maxDay = Math.max(0, ...kase.stages.map((s) => s.day || 0));
        kase.stages.push({ id: A.randomId(6), day: maxDay + 7, label: { ar: '', en: '' }, note: { ar: '', en: '' }, media: [] });
        await saveCase(kase);
        return back('أُضيفت مرحلة.');
      }
      const st = kase.stages.find((s) => s.id === d);
      if (!st) return back('');
      const f = await request.formData();
      if (f.get('action') === 'delete') {
        await remove(st.media.map((m) => m.path));
        kase.stages = kase.stages.filter((s) => s.id !== d);
        await saveCase(kase);
        return back('حُذفت المرحلة.');
      }
      st.day = Math.max(0, parseInt(f.get('day'), 10) || 0);
      const area = parseFloat(String(f.get('area') || '').replace(',', '.'));
      st.area = Number.isFinite(area) && area >= 0 ? Math.round(area * 10) / 10 : undefined;
      st.label = { ar: String(f.get('label_ar') || '').slice(0, 80), en: String(f.get('label_en') || '').slice(0, 80) };
      st.note = { ar: String(f.get('note_ar') || '').slice(0, 600), en: String(f.get('note_en') || '').slice(0, 600) };
      await saveCase(kase);
      return back('حُفظت المرحلة.', `#st-${st.id}`);
    }
    if (c2 === 'media' && seg[5] === 'delete' && method === 'POST') {
      const hit = findMedia(kase, d);
      if (hit) { await remove(hit.m.path); hit.s.media = hit.s.media.filter((m) => m.id !== d); await saveCase(kase); }
      return back('حُذف الملف.', hit ? `#st-${hit.s.id}` : '');
    }
  }

  if (a === 'media' && b && c2 && method === 'GET') {
    const kase = await getCase(b);
    const hit = kase && findMedia(kase, c2);
    if (!hit || hit.m.type !== 'image') return res('Not found', 404);
    const buf = await readFile(hit.m.path);
    const out = await watermarked(buf, { width: 480, lines: ['SPERANZA HEALTH - ADMIN', 'PREVIEW'] });
    return res(out, 200, { 'Content-Type': 'image/jpeg' });
  }

  if (a === 'api' && method === 'POST') {
    if (b === 'upload-image') {
      const kase = await getCase(url.searchParams.get('case') || '');
      const st = kase?.stages.find((s) => s.id === url.searchParams.get('stage'));
      if (!st) return json({ error: 'not-found' }, 404);
      const form = await request.formData();
      const file = form.get('file');
      if (!file || typeof file === 'string') return json({ error: 'no-file' }, 400);
      try {
        const out = await ingest(Buffer.from(await file.arrayBuffer()));
        const mid = A.randomId(8);
        const p = `media/${kase.id}/${mid}.jpg`;
        await putFile(p, out.buffer, 'image/jpeg');
        st.media.push({ id: mid, type: 'image', path: p, w: out.width, h: out.height, addedAt: now() });
        await saveCase(kase);
        return json({ ok: true, id: mid });
      } catch {
        return json({ error: 'bad-image' }, 400);
      }
    }
    if (b === 'video-token') {
      if (isLocal) return json({ error: 'local' }, 400);
      const { handleUpload } = await import('@vercel/blob/client');
      const body = await request.json();
      const r = await handleUpload({
        request, body,
        onBeforeGenerateToken: async (pathname) => {
          if (!/^media\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\.(mp4|mov)$/.test(pathname)) throw new Error('bad path');
          return { allowedContentTypes: ['video/mp4', 'video/quicktime'], maximumSizeInBytes: 300 * 1024 * 1024, addRandomSuffix: false, allowOverwrite: false };
        },
        onUploadCompleted: async () => {},
      });
      return json(r);
    }
    if (b === 'video-done' || b === 'upload-video-local') {
      const kase = await getCase(url.searchParams.get('case') || '');
      const st = kase?.stages.find((s) => s.id === url.searchParams.get('stage'));
      if (!st) return json({ error: 'not-found' }, 404);
      let p, mid;
      if (b === 'upload-video-local') {
        if (!isLocal) return json({ error: 'not-local' }, 400);
        const form = await request.formData();
        const file = form.get('file');
        mid = A.randomId(8);
        p = `media/${kase.id}/${mid}.mp4`;
        await putFile(p, Buffer.from(await file.arrayBuffer()), 'video/mp4');
      } else {
        const body = await request.json();
        p = String(body.pathname || '');
        const m = p.match(/^media\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\.(mp4|mov)$/);
        if (!m || m[1] !== kase.id) return json({ error: 'bad-path' }, 400);
        mid = m[2];
      }
      st.media.push({ id: mid, type: 'video', path: p, addedAt: now() });
      await saveCase(kase);
      return json({ ok: true, id: mid });
    }
  }
  return redirect('/admin/home');
}

async function entry(request) {
  try {
    return await handle(request);
  } catch (e) {
    console.error(e);
    return res('Something went wrong', 500, { 'Content-Type': 'text/plain; charset=utf-8' });
  }
}
export const GET = entry;
export const POST = entry;
export const HEAD = entry;
