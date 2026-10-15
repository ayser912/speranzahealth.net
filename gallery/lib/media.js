/**
 * Image processing.
 * - ingest(): re-encodes every uploaded image (auto-rotates, strips ALL metadata incl. GPS/date/device),
 *   caps the size, and stores a JPEG.
 * - watermarked(): burns a tiled, semi-transparent watermark with the viewer's reference and the
 *   date/time into the pixels on every request, so any saved copy or screenshot shows where it came from.
 * Text is drawn as vector paths from a bundled font, so no system fonts are needed on the server.
 */
import sharp from 'sharp';
import opentype from 'opentype.js';
import { readFileSync } from 'node:fs';

let font;
function getFont() {
  if (!font) {
    const buf = readFileSync(new URL('../fonts/wm.ttf', import.meta.url));
    font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  }
  return font;
}

export async function ingest(buffer) {
  const img = sharp(buffer, { failOn: 'error' }).rotate();
  const out = await img
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });
  // sharp drops EXIF/XMP/IPTC by default unless withMetadata() is called — we never call it.
  return { buffer: out.data, width: out.info.width, height: out.info.height };
}

function textPath(text, size) {
  const f = getFont();
  const p = f.getPath(text, 0, 0, size);
  const bb = p.getBoundingBox();
  return { d: p.toPathData(1), w: bb.x2 - bb.x1, h: bb.y2 - bb.y1, x1: bb.x1, y1: bb.y1 };
}

/** Returns a watermarked JPEG resized to `width`. */
export async function watermarked(buffer, { width = 1400, lines }) {
  const base = sharp(buffer).resize({ width, withoutEnlargement: true });
  const meta = await base.clone().toBuffer({ resolveWithObject: true });
  const W = meta.info.width, H = meta.info.height;
  const size = Math.max(14, Math.round(W / 46));
  const t1 = textPath(lines[0], size);
  const t2 = textPath(lines[1], Math.round(size * 0.8));
  const tileW = Math.max(t1.w, t2.w) + size * 3;
  const tileH = (t1.h + t2.h) + size * 3.2;
  const group = (dx, dy) => `
    <g transform="translate(${dx},${dy})">
      <path d="${t1.d}" transform="translate(${-t1.x1},${-t1.y1})" />
      <path d="${t2.d}" transform="translate(${-t2.x1},${-t2.y1 + t1.h + size * 0.45})" />
    </g>`;
  let tiles = '';
  const diag = Math.ceil(Math.hypot(W, H));
  for (let y = -diag; y < diag; y += tileH) {
    const shift = (Math.round(y / tileH) % 2) * (tileW / 2);
    for (let x = -diag; x < diag; x += tileW) tiles += group(x + shift, y);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <g transform="translate(${W / 2},${H / 2}) rotate(-28)" fill="#ffffff" fill-opacity="0.30" stroke="#000000" stroke-opacity="0.22" stroke-width="${Math.max(0.6, size / 28)}">
      ${tiles}
    </g></svg>`;
  return base
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
}

/** Small, heavily blurred cover for case cards (no watermark needed: nothing identifiable is visible). */
export async function blurredCover(buffer) {
  return sharp(buffer).resize({ width: 480, height: 320, fit: 'cover' }).blur(28).modulate({ saturation: 0.6 }).jpeg({ quality: 60 }).toBuffer();
}
