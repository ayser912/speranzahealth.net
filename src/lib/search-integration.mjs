/**
 * Build step (added 11 Nov 2026): site search index.
 * After the build, reads every published HTML page in /ar/ and /en/, takes the text inside <main>,
 * splits it into sections at each h1/h2 heading (so a result can link straight to the right section),
 * and writes /ar/search-index.json and /en/search-index.json. The header search box and the search page
 * (src/lib/search-client.ts) load these files only when someone starts searching.
 * Indexing the built HTML means every page, article, name, number and table cell is searchable,
 * with nothing to keep in sync by hand.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (p.endsWith('.html')) yield p;
  }
}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z0-9]+);/gi, (m, e) => {
  if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(n) ? String.fromCodePoint(n) : m; }
  return ENT[e.toLowerCase()] ?? m;
});
/** Strip tags, decode entities, drop Arabic diacritics/tatweel and direction marks, collapse spaces. */
export const clean = (html) => decode(html.replace(/<[^>]+>/g, ' '))
  .replace(/[ً-ٰٟۖ-ۭـ​-‏‪-‮⁦-⁩]/g, '')
  .replace(/\s+/g, ' ').trim();

export function indexPage(html, url) {
  if (/http-equiv="refresh"/.test(html) || /name="robots" content="noindex/.test(html)) return [];
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!m) return [];
  let body = m[1]
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/g, ' ')
    .replace(/<form[\s\S]*?<\/form>/g, ' ');
  const pageTitle = clean(body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');
  const out = [];
  const re = /<h([12])([^>]*)>([\s\S]*?)<\/h\1>/g;
  let last = 0; let cur = { h: '', id: '' }; let hit;
  // "Related articles/pages" lists only repeat other pages' titles, so they are left out of the index.
  const SKIP = new Set(['relart-h', 'related-h']);
  const push = (chunk) => {
    if (SKIP.has(cur.id)) return;
    const x = clean(chunk);
    if (!x && !cur.h) return;
    out.push({ u: url + (cur.id ? `#${cur.id}` : ''), p: pageTitle, h: cur.h === pageTitle ? '' : cur.h, x });
  };
  while ((hit = re.exec(body))) {
    push(body.slice(last, hit.index));
    cur = { h: clean(hit[3]), id: hit[1] === '1' ? '' : (hit[2].match(/\bid="([^"]+)"/)?.[1] ?? '') };
    last = re.lastIndex;
  }
  push(body.slice(last));
  return out.filter((e) => e.x || e.h);
}

export default function searchIndex() {
  return {
    name: 'search-index',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        for (const lang of ['ar', 'en']) {
          const base = join(root, lang);
          const entries = [];
          for await (const file of walk(base)) {
            const rel = file.slice(root.length).split(sep).join('/').replace(/^\/?/, '/').replace(/index\.html$/, '');
            if (rel.includes('/search/')) continue;
            entries.push(...indexPage(await readFile(file, 'utf8'), rel));
          }
          await writeFile(join(base, 'search-index.json'), JSON.stringify(entries));
          logger.info(`search-index: ${lang} ${entries.length} sections`);
        }
      },
    },
  };
}
