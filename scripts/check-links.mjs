/** Verifies every internal href/src in dist/ resolves to a built file, and every #fragment exists. */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
async function* walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) yield* walk(p); else yield p; } }
const exists = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };
const resolve = (urlPath) => { const clean = decodeURI(urlPath.split('#')[0].split('?')[0]); return clean.endsWith('/') ? join(dist, clean, 'index.html') : join(dist, clean); };

const files = []; for await (const f of walk(dist)) if (f.endsWith('.html')) files.push(f);
const idCache = new Map();
async function ids(file) {
  if (!idCache.has(file)) idCache.set(file, new Set([...(await readFile(file, 'utf8')).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return idCache.get(file);
}
let errors = 0, checked = 0;
for (const f of files) {
  const html = await readFile(f, 'utf8');
  for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(url)) continue;
    checked++;
    if (url.startsWith('#')) { if (url.length > 1 && !(await ids(f)).has(url.slice(1))) { console.error(`✗ ${f.replace(dist, '/')} → missing anchor ${url}`); errors++; } continue; }
    if (!url.startsWith('/')) { console.error(`✗ ${f.replace(dist, '/')} → relative link ${url}`); errors++; continue; }
    const target = resolve(url);
    if (!(await exists(target))) { console.error(`✗ ${f.replace(dist, '/')} → ${attr}="${url}" (not built)`); errors++; continue; }
    const hash = url.split('#')[1];
    if (hash && !(await ids(target)).has(hash)) { console.error(`✗ ${f.replace(dist, '/')} → missing anchor ${url}`); errors++; }
  }
}
console.log(`Links: ${checked} internal links checked across ${files.length} HTML files, ${errors} error(s).`);
process.exit(errors ? 1 : 0);
