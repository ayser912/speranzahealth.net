/**
 * Regenerates the 1200×630 social sharing images in public/og/ from the site config.
 * Usage (needs Playwright + Chromium): node scripts/make-og.mjs
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fonts = `file://${root}/public/fonts`;
const variants = {
  ar: { dir: 'rtl', name: 'أيسر شواقفه', title: 'ممرض قانوني وأخصائي معتمد في العناية بالجروح', place: 'الأردن', font: 'Plex' },
  en: { dir: 'ltr', name: 'Aissar Shawaqfeh', title: 'Registered Nurse and Certified Wound Specialist', place: 'Jordan', font: 'Inter' },
};
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined }).catch(() => chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }));
for (const [lang, v] of Object.entries(variants)) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(`<!doctype html><html dir="${v.dir}"><head><style>
    @font-face{font-family:Inter;src:url(${fonts}/inter-latin-var.woff2);font-weight:100 900}
    @font-face{font-family:Plex;src:url(${fonts}/plex-arabic-700.woff2);font-weight:700}
    @font-face{font-family:Plex;src:url(${fonts}/plex-arabic-400.woff2);font-weight:400}
    body{margin:0;width:1200px;height:630px;background:#f5f8f7;font-family:${v.font},Inter,sans-serif;color:#12302e;display:flex}
    .bar{width:24px;background:#0b6e69}
    .main{flex:1;padding:80px 90px;display:flex;flex-direction:column;justify-content:center}
    .mark{font-family:Inter;font-weight:800;font-size:64px;color:#0b6e69;letter-spacing:-1px;direction:ltr;unicode-bidi:isolate;align-self:flex-start}
    h1{font-size:92px;margin:24px 0 8px;font-weight:700;line-height:1.15}
    p{font-size:38px;margin:0;color:#3d5855;line-height:1.5}
    .foot{margin-top:40px;font-size:28px;color:#0b6e69;font-family:Inter;font-weight:600;direction:ltr;unicode-bidi:isolate;align-self:flex-start}
  </style></head><body><div class="bar"></div><div class="main">
    <div class="mark">CWS®</div><h1>${v.name}</h1><p>${v.title}</p><p>${v.place}</p>
    <div class="foot">speranzahealth.net</div></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(root, 'public/og', `${lang}.png`) });
  await page.close();
  console.log(`og/${lang}.png`);
}
await browser.close();
