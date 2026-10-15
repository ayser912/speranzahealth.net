// End-to-end check against the local dev server (synthetic images only).
import { chromium } from 'playwright';
const BASE = 'http://localhost:4600';
const SHOTS = process.env.SHOTS || '/tmp';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ok = (c, m) => { if (!c) { console.error('FAIL:', m); process.exitCode = 1; } else console.log('ok -', m); };

// ---- admin
const admin = await b.newPage({ viewport: { width: 1280, height: 900 } });
admin.on('dialog', (d) => d.accept());
await admin.goto(`${BASE}/admin`);
await admin.fill('input[name=password]', 'wrong-password-x');
await admin.click('button[type=submit]');
ok((await admin.textContent('body')).includes('غير صحيحة'), 'admin wrong password rejected');
await admin.fill('input[name=password]', process.env.ADMIN_PW);
await admin.click('button[type=submit]');
ok(admin.url().endsWith('/admin/home'), 'admin login');

await admin.goto(`${BASE}/admin/codes`);
await admin.fill('input[name=label]', 'د. اختبار');
await admin.fill('input[name=phone]', '0790000000');
await admin.click('form.grid-form button[type=submit]');
const link = (await admin.textContent('.created dd code')).trim();
const code = (await admin.textContent('.created code.big')).trim();
ok(/\/a\/[A-Za-z0-9_-]{20,}$/.test(link) && /^\d{5}$/.test(code), `grant created ${code}`);
ok((await admin.getAttribute('.created a.btn', 'href')).startsWith('https://wa.me/962790000000?text='), 'whatsapp send link uses 962 number');
await admin.screenshot({ path: `${SHOTS}/admin-codes.png`, fullPage: true });

// ---- viewer before any case: under construction
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const v = await ctx.newPage();
await v.goto(link);
await v.screenshot({ path: `${SHOTS}/viewer-access.png`, fullPage: true });
await v.check('input[name=accept]');
await v.fill('input[name=code]', code === '00000' ? '11111' : '00000');
await v.click('button[type=submit]');
ok((await v.textContent('.error')).includes('4'), 'wrong code shows attempts left');
await v.check('input[name=accept]');
await v.fill('input[name=code]', code);
await v.click('button[type=submit]');
ok(v.url().includes('/gallery'), 'correct code enters gallery');
ok((await v.textContent('body')).includes('قيد الإنشاء'), 'under-construction state shown');
await v.screenshot({ path: `${SHOTS}/viewer-construction.png`, fullPage: true });

// ---- admin creates and publishes a case
await admin.goto(`${BASE}/admin/cases`);
await admin.fill('input[name=title_ar]', 'قرحة قدم سكري في الكعب (حالة تجريبية)');
await admin.click('form.grid-form button[type=submit]');
const caseUrl = admin.url();
ok(/\/admin\/cases\/[A-Za-z0-9_-]+$/.test(caseUrl), 'case draft created');
await admin.setInputFiles('.uploader input[type=file]', ['test/s1.jpg']);
await admin.waitForLoadState('load'); await admin.waitForTimeout(1500);
await admin.click('form.addstage button');
await admin.waitForLoadState('load');
const uploaders = admin.locator('.uploader input[type=file]');
await uploaders.nth(1).setInputFiles(['test/s2.jpg']);
await admin.waitForTimeout(1500);
await admin.click('form.addstage button');
await admin.waitForLoadState('load');
await admin.locator('.uploader input[type=file]').nth(2).setInputFiles(['test/s3.jpg']);
await admin.waitForTimeout(1500);
// areas + labels
const forms = admin.locator('form.stage-form');
const vals = [[0, 12.5, 'البداية'], [7, 7.2, 'بعد أسبوع'], [14, 1.8, 'بعد أسبوعين']];
for (let i = 0; i < 3; i++) {
  const f = admin.locator('form.stage-form').nth(i);
  await f.locator('input[name=day]').fill(String(vals[i][0]));
  await f.locator('input[name=area]').fill(String(vals[i][1]));
  await f.locator('input[name=label_ar]').fill(vals[i][2]);
  await f.locator('button[value=save]').click();
  await admin.waitForLoadState('load');
}
ok((await admin.locator('.thumbs img').count()) === 3, '3 images uploaded');
await admin.click('button[value=publish]');
ok((await admin.textContent('.okmsg')).includes('لم تُنشر'), 'publish blocked without consent');
await admin.check('input[name=consent_written]');
await admin.check('input[name=consent_deid]');
await admin.fill('input[name=consent_date]', '2026-10-10');
await admin.fill('input[name=woundType_ar]', 'قرحة قدم سكري');
await admin.fill('input[name=team_ar]', 'جراحة الأوعية الدموية، الأمراض المعدية، التغذية العلاجية');
await admin.click('button[value=publish]');
ok((await admin.textContent('.okmsg')).includes('تم النشر'), 'published with consent');
await admin.screenshot({ path: `${SHOTS}/admin-case.png`, fullPage: true });

// ---- viewer sees the case
await v.goto(`${BASE}/gallery`);
ok((await v.locator('.case-card').count()) === 1, 'case listed');
await v.screenshot({ path: `${SHOTS}/viewer-gallery.png`, fullPage: true });
await v.click('.case-card');
await v.waitForLoadState('networkidle');
const img = v.locator('.timeline img').first();
const src = await img.getAttribute('src');
const r = await v.request.get(BASE + src);
ok(r.status() === 200 && r.headers()['content-type'] === 'image/jpeg' && r.headers()['cache-control'].includes('no-store'), 'image served watermarked & no-store');
await v.screenshot({ path: `${SHOTS}/viewer-case.png`, fullPage: true });
const shot = v.locator('.timeline .shot').first();
await shot.scrollIntoViewIfNeeded();
const box = await shot.boundingBox();
await v.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await v.mouse.down();
await v.waitForTimeout(300);
await shot.screenshot({ path: `${SHOTS}/viewer-revealed.png` });
await v.mouse.up();

// unauthenticated access to media is refused
const anon = await b.newContext();
const ar = await anon.request.get(BASE + src);
ok(ar.status() === 401, 'media refused without session');

// ---- revoke → viewer loses access
await admin.goto(`${BASE}/admin/codes`);
await admin.click('form[action$="/revoke"] button');
await admin.waitForLoadState('load');
await v.goto(`${BASE}/gallery`);
ok(!v.url().includes('/gallery'), 'revoked grant loses access');
const rr = await v.request.get(BASE + src);
ok(rr.status() === 401, 'revoked grant cannot load media');

// ---- lockout after 5 wrong codes
await admin.goto(`${BASE}/admin/codes`);
await admin.fill('input[name=label]', 'Lock test');
await admin.click('form.grid-form button[type=submit]');
const link2 = (await admin.textContent('.created dd code')).trim();
const code2 = (await admin.textContent('.created code.big')).trim();
const w = await (await b.newContext()).newPage();
for (let i = 0; i < 5; i++) {
  await w.goto(link2);
  if (!(await w.locator('input[name=code]').count())) break;
  await w.check('input[name=accept]');
  await w.fill('input[name=code]', String((Number(code2) + 1 + i) % 100000).padStart(5, '0'));
  await w.click('button[type=submit]');
}
await w.goto(link2);
ok((await w.textContent('h1')).includes('أُغلق'), 'grant locked after 5 wrong codes');

await admin.goto(`${BASE}/admin/log`);
await admin.screenshot({ path: `${SHOTS}/admin-log.png`, fullPage: true });
ok((await admin.locator('tbody tr').count()) >= 5, 'access log populated');
await b.close();
