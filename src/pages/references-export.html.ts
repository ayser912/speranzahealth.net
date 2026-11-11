/**
 * References export (Aissar, 11 Nov 2026: "remove every reference link from the website and keep them in a
 * separate file in the Speranza health folder on the desktop, updated whenever new articles are published").
 * This endpoint builds that file from the `refs` stored in the content files; src/lib/refs-export-integration.mjs
 * then moves it OUT of dist/ (so it is never published) into the work folder next to website/.
 */
import type { APIRoute } from 'astro';
import { articles, articlePath } from '../content/articles/index';
import { refs as dressingRefs } from '../content/dressings';
import { path, pages, type PageKey } from '../lib/routes';
import type { ClinicalPageData, Ref } from '../lib/content-types';

const topicFiles = import.meta.glob<{ default: ClinicalPageData }>('../content/pages/*.ts', { eager: true });
const keyOf: Record<string, PageKey> = { chronic: 'chronic', 'diabetic-foot': 'diabeticFoot', npwt: 'npwt', pressure: 'pressure', surgical: 'surgical' };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://speranzahealth.net/').replace(/\/$/, '');
  type Item = { ar: string; en: string; url: string; reviewed: string; refs: Ref[] };
  const topics: Item[] = Object.entries(topicFiles).map(([file, m]) => {
    const k = keyOf[file.split('/').pop()!.replace('.ts', '')];
    return { ar: m.default.ar.h1, en: m.default.en.h1, url: base + path('ar', k), reviewed: m.default.reviewed, refs: m.default.refs };
  }).sort((a, b) => a.ar.localeCompare(b.ar, 'ar'));
  const arts: Item[] = articles.map((a) => ({ ar: a.ar.h1, en: a.en.h1, url: base + articlePath('ar', a.slug), reviewed: a.reviewed, refs: a.refs }));
  const extra: Item[] = [{ ar: pages.dressings.nav.ar, en: pages.dressings.nav.en, url: base + path('ar', 'dressings'), reviewed: '', refs: dressingRefs }];

  const all = new Map<string, Ref>();
  for (const it of [...topics, ...arts, ...extra]) for (const r of it.refs) all.set(r.url, r);
  const unique = [...all.values()].sort((a, b) => a.text.localeCompare(b.text, 'en'));
  const today = new Date().toISOString().slice(0, 10);

  const block = (it: Item, n: number) => `
  <section>
    <h3><span class="n">${n}</span>${esc(it.ar)}</h3>
    <p class="meta" dir="ltr">${esc(it.en)}</p>
    <p class="meta"><a href="${esc(it.url)}">${esc(it.url)}</a>${it.reviewed ? ` · آخر مراجعة: ${it.reviewed}` : ''} · ${it.refs.length} مرجع</p>
    <ol dir="ltr">${it.refs.map((r) => `<li><a href="${esc(r.url)}">${esc(r.text)}</a></li>`).join('')}</ol>
  </section>`;
  let i = 0;
  const html = `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>مراجع موقع سبيرانزا هيلث</title>
<style>
body{margin:0;background:#f8f8f4;color:#10302a;font-family:'Segoe UI',Tahoma,sans-serif;line-height:1.7}
.wrap{max-width:980px;margin:0 auto;padding:28px 20px 60px}
h1{color:#064f3d;margin:0}h2{color:#064f3d;margin:36px 0 8px;border-bottom:2px solid #c9a35f;padding-bottom:4px}
h3{margin:0;font-size:1.1rem;color:#0a5c47}.n{display:inline-block;min-width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;background:#064f3d;color:#fff;font-size:.8rem;margin-inline-end:8px}
section{background:#fff;border:1px solid #dfe5e1;border-radius:14px;padding:14px 18px;margin:12px 0}
.meta{margin:2px 0;color:#3a514b;font-size:.88rem}ol{margin:8px 0 0;padding-left:1.4em;text-align:left;font-size:.92rem}li{margin-bottom:6px;overflow-wrap:anywhere}
a{color:#0a5c47}.note{background:#fff;border:1px solid #dfe5e1;border-inline-start:4px solid #c9a35f;border-radius:10px;padding:10px 14px}
</style></head><body><div class="wrap">
<h1>مراجع موقع سبيرانزا هيلث</h1>
<p class="note">هذا الملف يُنشأ تلقائيًا من محتوى الموقع عند كل بناء للموقع (npm test أو npm run build) على هذا الجهاز، فيبقى محدّثًا عند نشر أي مقال جديد. روابط المراجع غير منشورة على الموقع نفسه.<br>
آخر تحديث: <strong>${today}</strong> · ${topics.length} أدلة · ${arts.length} مقالًا · ${unique.length} مرجعًا مختلفًا.</p>
<h2>أدلة حسب نوع الجرح</h2>${topics.map((t) => block(t, ++i)).join('')}
<h2>المقالات</h2>${arts.map((t) => block(t, ++i)).join('')}
<h2>دليل الضمادات</h2>${extra.map((t) => block(t, ++i)).join('')}
<h2>قائمة موحّدة بكل المراجع (بدون تكرار)</h2>
<section><ol dir="ltr">${unique.map((r) => `<li><a href="${esc(r.url)}">${esc(r.text)}</a></li>`).join('')}</ol></section>
</div></body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
