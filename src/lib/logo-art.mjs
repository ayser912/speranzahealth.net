/**
 * Animated logo support (added 11 Nov 2026, Aissar chose "motion 5 + colours D", 2D only).
 * Reads the ORIGINAL logo files in public/brand/ and returns their exact path data, grouped into the
 * pieces of the drawing (each outer shape together with the holes/details inside it), so the wings can
 * move while the logo itself stays identical. Nothing about the shapes or colours is changed.
 * Layers 0–1 of every logo file are the mark (green star, gold bird); later layers are the wordmark.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ARGS = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };

function parse(d) {
  const cmds = []; let i = 0; const n = d.length;
  const skip = () => { while (i < n && /[\s,]/.test(d[i])) i++; };
  const num = () => {
    skip(); const m = d.slice(i).match(/^[-+]?(\d*\.\d+|\d+\.?)([eE][-+]?\d+)?/);
    if (!m) throw new Error(`logo-art: bad number at ${i}`); i += m[0].length; return parseFloat(m[0]);
  };
  const flag = () => { skip(); const c = d[i++]; if (c !== '0' && c !== '1') throw new Error('logo-art: bad arc flag'); return +c; };
  let cmd = null;
  while (true) {
    skip(); if (i >= n) break;
    if (/[a-zA-Z]/.test(d[i])) cmd = d[i++];
    const k = ARGS[cmd.toLowerCase()];
    if (k === 0) { cmds.push({ c: cmd, a: [] }); continue; }
    const a = [];
    for (let j = 0; j < k; j++) a.push(cmd.toLowerCase() === 'a' && (j === 3 || j === 4) ? flag() : num());
    cmds.push({ c: cmd, a });
    if (cmd === 'm') cmd = 'l'; else if (cmd === 'M') cmd = 'L';
  }
  return cmds;
}

/** Split a path into sub-paths (each starting with an absolute M; geometry unchanged) with bounding boxes. */
function split(d) {
  let cx = 0, cy = 0, sx = 0, sy = 0; const pieces = []; let cur = null;
  const pt = (x, y) => { cur.box[0] = Math.min(cur.box[0], x); cur.box[2] = Math.max(cur.box[2], x); cur.box[1] = Math.min(cur.box[1], y); cur.box[3] = Math.max(cur.box[3], y); };
  for (const { c, a } of parse(d)) {
    const rel = c === c.toLowerCase(); const C = c.toUpperCase();
    if (C === 'M') {
      const x = rel ? cx + a[0] : a[0]; const y = rel ? cy + a[1] : a[1];
      cur = { d: `M${+x.toFixed(3)} ${+y.toFixed(3)}`, box: [x, y, x, y] }; pieces.push(cur); cx = sx = x; cy = sy = y; continue;
    }
    cur.d += c + a.join(' ').replace(/ -/g, '-');
    if (C === 'Z') { cx = sx; cy = sy; continue; }
    if (C === 'H') { cx = rel ? cx + a[0] : a[0]; pt(cx, cy); continue; }
    if (C === 'V') { cy = rel ? cy + a[0] : a[0]; pt(cx, cy); continue; }
    if (C === 'A') { const x = rel ? cx + a[5] : a[5]; const y = rel ? cy + a[6] : a[6]; pt(x, y); cx = x; cy = y; continue; }
    for (let j = 0; j < a.length; j += 2) pt(rel ? cx + a[j] : a[j], rel ? cy + a[j + 1] : a[j + 1]);
    cx = rel ? cx + a[a.length - 2] : a[a.length - 2]; cy = rel ? cy + a[a.length - 1] : a[a.length - 1];
  }
  return pieces;
}

/** Group sub-paths: details/holes join the smallest outer piece that contains them (keeps the fill exact). */
function group(d) {
  const ps = split(d);
  const inside = (a, b) => a !== b && a.box[0] >= b.box[0] && a.box[1] >= b.box[1] && a.box[2] <= b.box[2] && a.box[3] <= b.box[3];
  const area = (p) => (p.box[2] - p.box[0]) * (p.box[3] - p.box[1]);
  const tops = ps.filter((p) => !ps.some((q) => inside(p, q)));
  const parent = new Map();
  for (const p of ps) if (!tops.includes(p)) parent.set(p, tops.filter((t) => inside(p, t)).sort((a, b) => area(a) - area(b))[0]);
  return tops.map((t) => ({ d: [t, ...ps.filter((p) => parent.get(p) === t)].map((p) => p.d).join(''), box: t.box }));
}

const cache = new Map();
/** @param {'horizontal'|'stacked'|'mark'} which */
export function logoArt(which) {
  if (cache.has(which)) return cache.get(which);
  const file = { horizontal: 'speranza-logo-horizontal.svg', stacked: 'speranza-logo.svg', mark: 'speranza-mark.svg' }[which];
  const svg = readFileSync(join(process.cwd(), 'public', 'brand', file), 'utf8');
  const viewBox = svg.match(/viewBox="([^"]+)"/)[1];
  const layers = [...svg.matchAll(/<path([^>]*)>/g)].map((m) => ({ fill: m[1].match(/fill="([^"]+)"/)[1], groups: group(m[1].match(/ d="([^"]+)"/)[1]) }));
  // centre of the mark (layers 0 and 1) = pivot for the wings
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of layers.slice(0, 2)) for (const g of l.groups) { x0 = Math.min(x0, g.box[0]); y0 = Math.min(y0, g.box[1]); x1 = Math.max(x1, g.box[2]); y1 = Math.max(y1, g.box[3]); }
  const ox = (x0 + x1) / 2, oy = (y0 + y1) / 2;
  const span = Math.max(...layers[1].groups.map((g) => Math.hypot((g.box[0] + g.box[2]) / 2 - ox, (g.box[1] + g.box[3]) / 2 - oy)));
  const out = {
    viewBox, ox: +ox.toFixed(1), oy: +oy.toFixed(1),
    layers: layers.map((l, li) => ({
      fill: l.fill,
      mark: li < 2,
      paths: l.groups.map((g) => {
        const dx = (g.box[0] + g.box[2]) / 2 - ox, dy = (g.box[1] + g.box[3]) / 2 - oy;
        // the outer gold feathers (left and right of the body, not the tail) are the wings
        const wing = li === 1 && Math.abs(dx) > span * 0.18 && dy < span * 0.5;
        return { d: g.d, wing, side: dx < 0 ? -1 : 1 };
      }),
    })),
  };
  cache.set(which, out);
  return out;
}
