/**
 * Client-side site search (added 11 Nov 2026). Loads /{lang}/search-index.json (built by
 * src/lib/search-integration.mjs) on first use and matches a word, a phrase, part of a word,
 * a number or a name. Arabic letter variants are folded (أ/إ/آ→ا, ى→ي, ة→ه, ؤ→و, ئ→ي) and Arabic
 * digits count as Latin digits, so «قرحه» finds «قرحة» and «٢٠» finds «20».
 */
export interface Entry { u: string; p: string; h: string; x: string }
export interface Hit { e: Entry; score: number; snippet: string }

const cache: Record<string, Promise<Entry[]>> = {};
export function loadIndex(lang: string): Promise<Entry[]> {
  return (cache[lang] ??= fetch(`/${lang}/search-index.json`).then((r) => (r.ok ? r.json() : [])).catch(() => []));
}

const MAP: Record<string, string> = { 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ٱ': 'ا', 'ى': 'ي', 'ة': 'ه', 'ؤ': 'و', 'ئ': 'ي' };
/** One-to-one character folding, so positions in the folded text match the original text. */
export const fold = (s: string) => s.replace(/[أإآٱىةؤئ٠-٩۰-۹A-Z]/g, (c) => {
  const code = c.charCodeAt(0);
  if (code >= 0x660 && code <= 0x669) return String(code - 0x660);
  if (code >= 0x6f0 && code <= 0x6f9) return String(code - 0x6f0);
  return MAP[c] ?? c.toLowerCase();
});
const prepQuery = (q: string) => fold(q.replace(/[ً-ٰٟـ]/g, '')).replace(/["'«»“”؟?!.,،؛:]/g, ' ').replace(/\s+/g, ' ').trim();
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const count = (hay: string, needle: string) => { let n = 0, i = 0; while ((i = hay.indexOf(needle, i)) !== -1 && n < 20) { n++; i += needle.length; } return n; };

function snippet(x: string, terms: string[], phrase: string): string {
  const fx = fold(x);
  let at = phrase ? fx.indexOf(phrase) : -1;
  if (at < 0) at = Math.min(...terms.map((t) => { const i = fx.indexOf(t); return i < 0 ? Infinity : i; }));
  if (!Number.isFinite(at)) at = 0;
  const start = Math.max(0, at - 70);
  const end = Math.min(x.length, at + 170);
  const part = x.slice(start, end); const fpart = fx.slice(start, end);
  // mark every occurrence of every term (longest first, no overlaps)
  const marks: Array<[number, number]> = [];
  for (const t of [...terms].sort((a, b) => b.length - a.length)) {
    let i = 0;
    while (t && (i = fpart.indexOf(t, i)) !== -1) {
      const j = i + t.length;
      if (!marks.some(([a, b]) => i < b && j > a)) marks.push([i, j]);
      i = j;
    }
  }
  marks.sort((a, b) => a[0] - b[0]);
  let out = ''; let pos = 0;
  for (const [a, b] of marks) { out += esc(part.slice(pos, a)) + '<mark>' + esc(part.slice(a, b)) + '</mark>'; pos = b; }
  out += esc(part.slice(pos));
  return (start > 0 ? '… ' : '') + out + (end < x.length ? ' …' : '');
}

export function search(index: Entry[], query: string, limit = 50): Hit[] {
  const phrase = prepQuery(query);
  if (phrase.length < 2 && !/\d/.test(phrase)) return [];
  const terms = [...new Set(phrase.split(' ').filter(Boolean))];
  const digits = phrase.replace(/\D/g, '');
  const numeric = digits.length >= 4 && !/[^\d\s+\-()]/.test(query.trim());
  const scoreOf = (e: Entry, all: boolean) => {
    const fp = fold(e.p), fh = fold(e.h), fx = fold(e.x);
    if (numeric) {
      const nd = fx.replace(/[\s\-+()]/g, '');
      return nd.includes(digits) || nd.includes(digits.replace(/^0/, '962')) ? 20 : 0;
    }
    const present = terms.filter((t) => fp.includes(t) || fh.includes(t) || fx.includes(t));
    if (all ? present.length < terms.length : present.length === 0) return 0;
    let s = 0;
    if (terms.length > 1) { if (fp.includes(phrase)) s += 50; if (fh.includes(phrase)) s += 30; s += Math.min(count(fx, phrase), 5) * 10; }
    for (const t of present) { if (fp.includes(t)) s += 8; if (fh.includes(t)) s += 6; s += Math.min(count(fx, t), 5); }
    return all ? s : s / 3;
  };
  let scored = index.map((e) => ({ e, score: scoreOf(e, true) })).filter((h) => h.score > 0);
  if (!scored.length) scored = index.map((e) => ({ e, score: scoreOf(e, false) })).filter((h) => h.score > 0);
  scored.sort((a, b) => b.score - a.score);
  // at most 3 sections per page
  const perPage: Record<string, number> = {};
  const out: Hit[] = [];
  for (const h of scored) {
    const page = h.e.u.split('#')[0];
    perPage[page] = (perPage[page] ?? 0) + 1;
    if (perPage[page] > 3) continue;
    out.push({ ...h, snippet: snippet(h.e.x || h.e.h, terms, terms.length > 1 ? phrase : '') });
    if (out.length >= limit) break;
  }
  return out;
}

export const resultHtml = (h: Hit) =>
  `<a href="${esc(h.e.u)}"><span class="sr-title">${esc(h.e.p)}${h.e.h ? ` <span class="sr-sep" aria-hidden="true">›</span> ${esc(h.e.h)}` : ''}</span><span class="sr-snip">${h.snippet}</span></a>`;
