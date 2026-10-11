/**
 * Regenerates the 1200×630 social sharing images in public/og/ (Speranza Health logo + tagline).
 * Usage (needs Playwright + Chromium): node scripts/make-og.mjs
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFileSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fonts = `file://${root}/public/fonts`;
const logo = readFileSync(join(root, 'public/brand/speranza-logo.svg'), 'utf8')
  .replace('<svg', '<svg style="height:330px;width:auto;display:block"');
const variants = {
  ar: { dir: 'rtl', line: 'سبيرانزا تعني «الأمل»', sub: 'العناية بالجروح بفريق متعدد التخصصات في الأردن', font: 'Plex' },
  en: { dir: 'ltr', line: 'Speranza means “hope”', sub: 'Wound care with a multidisciplinary team in Jordan', font: 'Inter' },
};
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined }).catch(() => chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }));
for (const [lang, v] of Object.entries(variants)) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(`<!doctype html><html dir="${v.dir}"><head><style>
    @font-face{font-family:Inter;src:url(${fonts}/inter-latin-var.woff2);font-weight:100 900}
    @font-face{font-family:Plex;src:url(${fonts}/plex-arabic-700.woff2);font-weight:700}
    @font-face{font-family:Plex;src:url(${fonts}/plex-arabic-400.woff2);font-weight:400}
    body{margin:0;width:1200px;height:630px;background:#fdfcf7;font-family:${v.font},Inter,sans-serif;color:#10302a;display:flex;align-items:center;gap:70px;padding:0 90px;box-sizing:border-box;position:relative}
    body::after{content:"";position:absolute;inset:auto 0 0 0;height:14px;background:linear-gradient(90deg,#064f3d,#0a6b52 60%,#c9a35f)}
    .txt{flex:1}
    h1{font-size:58px;margin:0 0 18px;font-weight:700;line-height:1.3;color:#064f3d}
    p{font-size:34px;margin:0;color:#3a514b;line-height:1.5}
    .foot{margin-top:36px;font-size:26px;color:#8a6a2c;font-family:Inter;font-weight:600;direction:ltr;unicode-bidi:isolate;display:inline-block}
  </style></head><body>${logo}<div class="txt"><h1>${v.line}</h1><p>${v.sub}</p><div class="foot">speranzahealth.net</div></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(root, 'public/og', `${lang}.png`) });
  await page.close();
  console.log(`og/${lang}.png`);
}
await browser.close();
