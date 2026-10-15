import sharp from 'sharp';
import { ingest, watermarked } from '/home/claude/site/gallery/lib/media.js';
const img = await sharp({ create: { width: 1600, height: 1200, channels: 3, background: { r: 200, g: 150, b: 140 } } }).jpeg().withMetadata({ exif: { IFD0: { Make: 'TestPhone' } } }).toBuffer();
console.log('in meta exif?', !!(await sharp(img).metadata()).exif);
const ing = await ingest(img);
console.log('ingested exif?', !!(await sharp(ing.buffer).metadata()).exif, ing.width, ing.height);
const wm = await watermarked(ing.buffer, { width: 1200, lines: ['SPERANZA HEALTH - CONFIDENTIAL', 'REF 7F3K2A  2026-10-15 22:10'] });
await sharp(wm).toFile('/tmp/claude-0/-home-claude/76cac9ec-6225-53de-9159-536ca5c3d959/scratchpad/wm.jpg');
console.log('ok', wm.length);
