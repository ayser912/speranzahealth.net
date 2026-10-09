/**
 * SEO + structured-data checks on dist/:
 *  - JSON-LD parses; no forbidden types (Physician, MedicalBusiness, LocalBusiness, MedicalClinic)
 *  - every {"@id"} reference resolves inside the page graph; Person has name/hasCredential/sameAs
 *  - exactly one <h1>; heading levels never skip downward (h2→h4)
 *  - unique <title> and meta description; canonical present; hreflang ar-JO/en-JO/x-default reciprocal
 *  - <html lang/dir> correct per section
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
async function* walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) yield* walk(p); else yield p; } }
const FORBIDDEN = ['Physician', 'MedicalBusiness', 'LocalBusiness', 'MedicalClinic', 'Hospital', 'Dentist'];
let errors = 0;
const err = (f, m) => { console.error(`✗ ${f}: ${m}`); errors++; };
const titles = new Map(), descs = new Map(), canon = new Map(), alternates = new Map();

for await (const file of walk(dist)) {
  if (!file.endsWith('.html')) continue;
  const rel = file.replace(dist, '/').replace(/index\.html$/, '');
  const html = await readFile(file, 'utf8');
  if (/http-equiv="refresh"/.test(html)) continue; // redirect stubs
  if (/^google-site-verification:/.test(html)) continue; // Search Console verification file (must stay as Google wrote it)
  const noindex = /name="robots" content="noindex/.test(html);

  // html lang/dir
  const htmlTag = html.match(/<html[^>]*>/)[0];
  if (rel.startsWith('/ar/') && !/lang="ar-JO"[^>]*dir="rtl"/.test(htmlTag)) err(rel, 'Arabic page missing lang="ar-JO" dir="rtl"');
  if (rel.startsWith('/en/') && !/lang="en-JO"[^>]*dir="ltr"/.test(htmlTag)) err(rel, 'English page missing lang="en-JO" dir="ltr"');

  // headings
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) err(rel, `expected 1 <h1>, found ${h1s.length}`);
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  levels.forEach((l, i) => { if (i && l > levels[i - 1] + 1) err(rel, `heading jumps h${levels[i - 1]} → h${l}`); });

  if (noindex) continue;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const can = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!title) err(rel, 'missing <title>'); else (titles.get(title) ? err(rel, `duplicate title with ${titles.get(title)}`) : titles.set(title, rel));
  if (!desc) err(rel, 'missing meta description'); else (descs.get(desc) ? err(rel, `duplicate description with ${descs.get(desc)}`) : descs.set(desc, rel));
  if (title && title.replace(/‎/g, '').length > 65) console.warn(`! ${rel}: title ${title.length} chars (may truncate)`);
  if (desc && desc.length > 170) console.warn(`! ${rel}: description ${desc.length} chars (may truncate)`);
  if (!can) err(rel, 'missing canonical'); else canon.set(rel, can);
  const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  for (const h of ['ar-JO', 'en-JO', 'x-default']) if (!alts[h]) err(rel, `missing hreflang ${h}`);
  alternates.set(can, alts);
  if (!/property="og:image"/.test(html)) err(rel, 'missing og:image');

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) { err(rel, 'no JSON-LD'); continue; }
  for (const [, raw] of blocks) {
    let data; try { data = JSON.parse(raw); } catch (e) { err(rel, `invalid JSON-LD: ${e.message}`); continue; }
    // Google requires full ISO 8601 date-times (with time zone) for these properties.
    for (const m of raw.matchAll(/"(datePublished|dateModified|uploadDate)":"([^"]*)"/g)) {
      if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2}|Z)$/.test(m[2])) err(rel, `${m[1]} "${m[2]}" is not a full ISO 8601 date-time`);
    }
    const nodes = data['@graph'] || [data];
    const idset = new Set(nodes.map((n) => n['@id']).filter(Boolean));
    const walkObj = (o, cb) => { if (o && typeof o === 'object') { cb(o); Object.values(o).forEach((v) => walkObj(v, cb)); } };
    walkObj(data, (o) => {
      const types = [].concat(o['@type'] || []);
      types.forEach((t) => FORBIDDEN.includes(t) && err(rel, `forbidden schema type ${t}`));
      if (o['@id'] && Object.keys(o).length === 1 && !idset.has(o['@id'])) err(rel, `dangling @id reference ${o['@id']}`);
    });
    const person = nodes.find((n) => n['@type'] === 'Person');
    if (!person) err(rel, 'Person node missing');
    else {
      for (const k of ['name', 'jobTitle', 'hasCredential', 'knowsAbout', 'sameAs']) if (!person[k] || (Array.isArray(person[k]) && !person[k].length)) err(rel, `Person.${k} missing`);
    }
    if (rel !== '/ar/' && rel !== '/en/' && !nodes.find((n) => n['@type'] === 'BreadcrumbList')) err(rel, 'BreadcrumbList missing on inner page');
  }
}
// reciprocal hreflang
for (const [can, alts] of alternates) for (const h of ['ar-JO', 'en-JO']) {
  const back = alternates.get(alts[h]);
  if (!back) err(can, `hreflang ${h} target ${alts[h]} has no page`);
  else if (back['ar-JO'] !== alts['ar-JO'] || back['en-JO'] !== alts['en-JO']) err(can, `hreflang not reciprocal with ${alts[h]}`);
}
// canonical matches own URL
for (const [rel, can] of canon) if (!can.endsWith(rel)) err(rel, `canonical ${can} does not match page path`);

// sitemap
const sm = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const can of canon.values()) if (!locs.includes(can)) err('sitemap.xml', `missing ${can}`);
for (const l of locs) if (![...canon.values()].includes(l)) err('sitemap.xml', `lists unknown URL ${l}`);
console.log(`SEO/schema: ${canon.size} indexable pages, ${locs.length} sitemap URLs, ${errors} error(s).`);
process.exit(errors ? 1 : 0);
