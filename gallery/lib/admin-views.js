/** Admin pages (Arabic). Only reachable with the admin session. */
import { esc, MAIN, WA } from './views.js';
import { grantStatus } from './auth.js';

const fmt = (iso) => (iso ? new Date(iso).toLocaleString('en-GB', { timeZone: 'Asia/Amman', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—');
const statusAr = { active: 'فعّال', revoked: 'ملغى', locked: 'مقفل', expired: 'منتهي' };

export function adminLayout({ title, body, nav = true }) {
  return `<!doctype html>
<html lang="ar-JO" dir="rtl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><meta name="referrer" content="same-origin">
<title>${esc(title)} | إدارة المعرض</title>
<link rel="icon" href="https://speranzahealth.net/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/static/app.css">
<script src="/static/admin.js" defer></script>
</head><body class="admin">
<header class="top"><div class="wrap">
  <a class="brand" href="/admin/home"><img src="https://speranzahealth.net/brand/speranza-logo-horizontal.svg" alt="سبيرانزا هيلث" width="164" height="40"></a>
  <span class="pill">إدارة المعرض</span>
  ${nav ? `<nav class="anav"><a href="/admin/requests">الطلبات</a><a href="/admin/codes">رموز الدخول</a><a href="/admin/cases">الحالات</a><a href="/admin/log">سجل الدخول</a>
  <form method="post" action="/admin/logout"><button class="linkbtn" type="submit">خروج</button></form></nav>` : ''}
</div></header>
<main class="wrap">${body}</main></body></html>`;
}

export function adminLogin({ error = '', notConfigured = false } = {}) {
  return adminLayout({ title: 'دخول الإدارة', nav: false, body: `
  <section class="card narrow"><h1>دخول الإدارة</h1>
  ${notConfigured
    ? '<p class="error">لم تُضبط كلمة مرور الإدارة بعد. أضف المتغير <code>ADMIN_PASSWORD</code> (10 أحرف على الأقل) في إعدادات المشروع على Vercel ثم أعد النشر.</p>'
    : `<form method="post" action="/admin"><label class="field"><span>كلمة المرور</span><input type="password" name="password" autocomplete="current-password" required></label>
    ${error ? `<p class="error" role="alert">${esc(error)}</p>` : ''}<button class="btn" type="submit">دخول</button></form>`}
  </section>` });
}

export function adminHome({ grants, cases, log, requests = [] }) {
  const active = grants.filter((g) => grantStatus(g) === 'active').length;
  const pub = cases.filter((c) => c.status === 'published').length;
  return adminLayout({ title: 'لوحة التحكم', body: `
  <h1>لوحة التحكم</h1>
  ${requests.length ? `<p class="notice">لديك ${requests.length} طلب دخول جديد. <a href="/admin/requests">راجع الطلبات</a></p>` : ''}
  <ul class="kpis"><li><strong>${requests.length}</strong><span>طلب بانتظار المراجعة</span></li><li><strong>${active}</strong><span>رمز فعّال</span></li><li><strong>${pub}</strong><span>حالة منشورة</span></li>
  <li><strong>${cases.length - pub}</strong><span>مسودة</span></li><li><strong>${log.filter((l) => l.type === 'enter').length}</strong><span>دخول خلال 30 يومًا</span></li></ul>
  <p class="actions"><a class="btn" href="/admin/codes">إنشاء رمز دخول</a><a class="btn ghost" href="/admin/cases">إضافة حالة</a></p>
  <section class="card"><h2>تذكير</h2><ul>
    <li>لا تنشر أي حالة قبل الحصول على موافقة خطية موقّعة من المريض، وأحفظ النسخة الورقية أو PDF لديك.</li>
    <li>تأكد أن الصور لا تُظهر الوجه أو الوشوم أو الأسماء أو أساور المستشفى أو التواريخ.</li>
    <li>الصور تُنظَّف تلقائيًا من البيانات المخفية (الموقع والتاريخ والجهاز). الفيديو لا يُنظَّف: صدّره بدون موقع.</li>
  </ul></section>` });
}

export function codesPage({ grants, created = null, base }) {
  const rows = grants.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((g) => {
    const st = grantStatus(g);
    return `<tr><td><strong>${esc(g.label)}</strong>${g.phone ? `<br><span class="muted" dir="ltr">${esc(g.phone)}</span>` : ''}</td>
      <td dir="ltr">${esc(g.ref)}</td><td><span class="st st-${st}">${statusAr[st]}</span></td>
      <td>${fmt(g.createdAt)}</td><td>${fmt(g.expiresAt)}</td><td>${g.uses || 0}${g.lastUsedAt ? `<br><span class="muted">${fmt(g.lastUsedAt)}</span>` : ''}</td>
      <td>${st === 'active' || st === 'locked' ? `<form method="post" action="/admin/codes/${esc(g.id)}/revoke" data-confirm="إلغاء هذا الرمز؟"><button class="linkbtn danger" type="submit">إلغاء</button></form>` : ''}</td></tr>`;
  }).join('');
  let result = '';
  if (created) {
    const link = `${base}/a/${created.grant.id}`;
    const msg = `مرحبًا ${created.grant.label}،\nهذا رابط دخولك الشخصي إلى معرض رحلات الالتئام في سبيرانزا هيلث:\n${link}\nرمز الدخول: ${created.code}\nصالح حتى ${new Date(created.grant.expiresAt).toLocaleString('ar-JO-u-nu-latn', { timeZone: 'Asia/Amman', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}.\nالرابط والرمز شخصيان لك وحدك: يُرجى عدم مشاركتهما أو تصوير محتوى المعرض أو نشره.`;
    const phone = (created.grant.phone || '').replace(/[^0-9]/g, '').replace(/^00/, '').replace(/^0(?=7)/, '962');
    result = `<section class="card created" id="created"><h2>تم إنشاء الرمز</h2>
      <p>يظهر الرمز الآن فقط، ولا يُحفظ في النظام. أرسله للشخص مباشرة.</p>
      <dl class="facts"><div><dt>الرابط</dt><dd dir="ltr"><code>${esc(link)}</code></dd></div><div><dt>الرمز</dt><dd dir="ltr"><code class="big">${esc(created.code)}</code></dd></div><div><dt>المرجع</dt><dd dir="ltr">${esc(created.grant.ref)}</dd></div></dl>
      <textarea readonly rows="7" class="copybox" data-copy>${esc(msg)}</textarea>
      <p class="actions"><button class="btn ghost" type="button" data-copy-btn>نسخ الرسالة</button>
      ${phone ? `<a class="btn" href="https://wa.me/${esc(phone)}?text=${encodeURIComponent(msg)}" rel="noopener" target="_blank">إرسال عبر واتساب</a>` : ''}</p></section>`;
  }
  return adminLayout({ title: 'رموز الدخول', body: `
  <h1>رموز الدخول</h1>${result}
  <section class="card"><h2>رمز جديد</h2>
  <form method="post" action="/admin/codes" class="grid-form">
    <label class="field"><span>اسم الشخص أو الجهة *</span><input name="label" required maxlength="60"></label>
    <label class="field"><span>رقم الواتساب (اختياري)</span><input name="phone" inputmode="tel" dir="ltr" maxlength="20" placeholder="07XXXXXXXX"></label>
    <label class="field"><span>الصلاحية (أيام)</span><input name="days" type="number" min="1" max="30" value="7" required></label>
    <label class="field"><span>ملاحظة (اختياري)</span><input name="note" maxlength="120"></label>
    <button class="btn" type="submit">إنشاء الرابط والرمز</button>
  </form></section>
  <section class="card"><h2>كل الرموز</h2>
  ${grants.length ? `<div class="tablewrap"><table><thead><tr><th>الشخص</th><th>المرجع</th><th>الحالة</th><th>أُنشئ</th><th>ينتهي</th><th>مرات الدخول</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>` : '<p class="muted">لا توجد رموز بعد.</p>'}
  </section>` });
}

export function casesPage({ cases }) {
  return adminLayout({ title: 'الحالات', body: `
  <h1>الحالات</h1>
  <section class="card"><h2>حالة جديدة</h2>
  <form method="post" action="/admin/cases" class="grid-form">
    <label class="field"><span>عنوان الحالة *</span><input name="title_ar" required maxlength="90" placeholder="مثال: قرحة قدم سكري في الكعب"></label>
    <button class="btn" type="submit">إنشاء مسودة</button></form></section>
  <section class="card"><h2>كل الحالات</h2>
  ${cases.length ? `<ul class="alist">${cases.map((c) => `<li><a href="/admin/cases/${esc(c.id)}"><strong>${esc(c.title.ar)}</strong></a>
     <span class="st st-${c.status === 'published' ? 'active' : 'expired'}">${c.status === 'published' ? 'منشورة' : 'مسودة'}</span>
     <span class="muted">${c.stages.length} مراحل · ${c.stages.reduce((n, s) => n + s.media.length, 0)} ملفات · آخر تعديل ${fmt(c.updatedAt)}</span></li>`).join('')}</ul>` : '<p class="muted">لا توجد حالات بعد.</p>'}
  </section>` });
}

const f2 = (name, label, v, opts = {}) => `<label class="field"><span>${label}</span>${opts.area ? `<textarea name="${name}" rows="${opts.rows || 3}" maxlength="${opts.max || 800}">${esc(v || '')}</textarea>` : `<input name="${name}" value="${esc(v || '')}" maxlength="${opts.max || 120}"${opts.type ? ` type="${opts.type}"` : ''}${opts.dir ? ` dir="${opts.dir}"` : ''}${opts.step ? ` step="${opts.step}"` : ''}>`}</label>`;

export function caseEdit({ c, msg = '' }) {
  const stages = [...c.stages].sort((a, b) => (a.day || 0) - (b.day || 0));
  return adminLayout({ title: c.title.ar, body: `
  <p class="crumbs"><a href="/admin/cases">← كل الحالات</a></p>
  <h1>${esc(c.title.ar)} <span class="st st-${c.status === 'published' ? 'active' : 'expired'}">${c.status === 'published' ? 'منشورة' : 'مسودة'}</span></h1>
  ${msg ? `<p class="okmsg" role="status">${esc(msg)}</p>` : ''}
  <form method="post" action="/admin/cases/${esc(c.id)}" class="card">
    <h2>معلومات الحالة</h2>
    <div class="cols">
      <div><h3>العربية</h3>
        ${f2('title_ar', 'العنوان *', c.title.ar)}${f2('woundType_ar', 'نوع الجرح', c.woundType?.ar)}
        ${f2('durationBefore_ar', 'المدة قبل بدء الخطة', c.durationBefore?.ar)}${f2('team_ar', 'الفريق المشارك', c.team?.ar)}
        ${f2('summary_ar', 'ملخص قصير', c.summary?.ar, { area: true })}${f2('outcome_ar', 'النتيجة', c.outcome?.ar)}</div>
      <div><h3 lang="en">English (اختياري)</h3>
        ${f2('title_en', 'Title', c.title.en, { dir: 'ltr' })}${f2('woundType_en', 'Wound type', c.woundType?.en, { dir: 'ltr' })}
        ${f2('durationBefore_en', 'Duration before', c.durationBefore?.en, { dir: 'ltr' })}${f2('team_en', 'Team', c.team?.en, { dir: 'ltr' })}
        ${f2('summary_en', 'Summary', c.summary?.en, { area: true, dir: 'ltr' })}${f2('outcome_en', 'Outcome', c.outcome?.en, { dir: 'ltr' })}</div>
    </div>
    <fieldset class="consentbox"><legend>الموافقة (إلزامية قبل النشر)</legend>
      <label class="check"><input type="checkbox" name="consent_written" value="1"${c.consent?.written ? ' checked' : ''}> <span>لديّ موافقة خطية موقّعة من المريض (أو وليّه القانوني) على نشر صوره في هذا المعرض الخاص</span></label>
      <label class="check"><input type="checkbox" name="consent_deid" value="1"${c.consent?.deidentified ? ' checked' : ''}> <span>راجعت كل الصور: لا وجه ولا وشم ولا اسم ولا تاريخ ولا ما يدل على الهوية</span></label>
      <div class="cols">${f2('consent_date', 'تاريخ الموافقة', c.consent?.date, { type: 'date', dir: 'ltr' })}${f2('consent_ref', 'رقم مرجعي داخلي للموافقة (بدون اسم المريض)', c.consent?.ref, { dir: 'ltr', max: 40 })}</div>
    </fieldset>
    <p class="actions"><button class="btn" type="submit" name="action" value="save">حفظ</button>
    ${c.status === 'published'
      ? '<button class="btn ghost" type="submit" name="action" value="unpublish">إخفاء من المعرض</button>'
      : '<button class="btn ghost" type="submit" name="action" value="publish">نشر في المعرض</button>'}</p>
  </form>

  <section class="card"><h2>مراحل الالتئام</h2>
  ${stages.map((s) => `
    <div class="stage" id="st-${esc(s.id)}">
      <form method="post" action="/admin/cases/${esc(c.id)}/stages/${esc(s.id)}" class="cols stage-form">
        ${f2('day', 'اليوم (0 = البداية)', s.day, { type: 'number', dir: 'ltr' })}
        ${f2('area', 'مساحة الجرح سم² (اختياري)', s.area, { type: 'number', dir: 'ltr', step: '0.1' })}
        ${f2('label_ar', 'عنوان المرحلة', s.label?.ar)}${f2('label_en', 'Stage title (EN)', s.label?.en, { dir: 'ltr' })}
        ${f2('note_ar', 'ملاحظة', s.note?.ar, { area: true, rows: 2 })}${f2('note_en', 'Note (EN)', s.note?.en, { area: true, rows: 2, dir: 'ltr' })}
        <p class="actions"><button class="btn small" type="submit" name="action" value="save">حفظ المرحلة</button>
        <button class="linkbtn danger" type="submit" name="action" value="delete" data-confirm="حذف المرحلة وكل ملفاتها؟">حذف المرحلة</button></p>
      </form>
      <div class="thumbs">${s.media.map((m) => `<figure>${m.type === 'image' ? `<img src="/admin/media/${esc(c.id)}/${esc(m.id)}" alt="" loading="lazy">` : '<span class="vthumb">فيديو</span>'}
        <form method="post" action="/admin/cases/${esc(c.id)}/media/${esc(m.id)}/delete" data-confirm="حذف هذا الملف؟"><button class="linkbtn danger" type="submit">حذف</button></form></figure>`).join('')}</div>
      <div class="uploader" data-case="${esc(c.id)}" data-stage="${esc(s.id)}">
        <label class="btn ghost small">إضافة صور أو فيديو<input type="file" accept="image/*,video/mp4,video/quicktime" multiple hidden></label>
        <p class="up-status muted" role="status"></p></div>
    </div>`).join('') || '<p class="muted">لا توجد مراحل بعد.</p>'}
  <form method="post" action="/admin/cases/${esc(c.id)}/stages" class="addstage"><button class="btn ghost" type="submit">+ إضافة مرحلة</button></form>
  </section>

  <section class="card danger-zone"><h2>حذف الحالة</h2>
  <form method="post" action="/admin/cases/${esc(c.id)}/delete" data-confirm="حذف الحالة وكل صورها نهائيًا؟"><button class="btn danger" type="submit">حذف الحالة نهائيًا</button></form></section>` });
}

const roleAr = { patient: 'مريض', family: 'أسرة مريض', professional: 'كادر صحي', other: 'أخرى' };
export function requestsPage({ requests }) {
  return adminLayout({ title: 'طلبات الدخول', body: `
  <h1>طلبات الدخول</h1>
  <p class="muted">طلبات وصلت من نموذج «طلب رمز الدخول» على الموقع. عند القبول يُنشأ رابط ورمز صالحان 7 أيام، وتظهر رسالة واتساب جاهزة للإرسال. تُحذف بيانات الطلب بعد القبول أو الرفض، أو تلقائيًا بعد 30 يومًا.</p>
  <section class="card">${requests.length ? `<div class="tablewrap"><table><thead><tr><th>الاسم</th><th>واتساب</th><th>الصفة</th><th>التاريخ</th><th></th></tr></thead><tbody>
  ${requests.map((r) => `<tr><td><strong>${esc(r.name)}</strong></td><td dir="ltr">+${esc(r.phone)}</td><td>${roleAr[r.role] || ''}</td><td>${fmt(r.createdAt)}</td>
    <td class="rowactions"><form method="post" action="/admin/requests/${esc(r.id)}/approve"><button class="btn small" type="submit">قبول وإنشاء رمز</button></form>
    <form method="post" action="/admin/requests/${esc(r.id)}/reject" data-confirm="رفض الطلب وحذفه؟"><button class="linkbtn danger" type="submit">رفض</button></form></td></tr>`).join('')}
  </tbody></table></div>` : '<p class="muted">لا توجد طلبات جديدة.</p>'}</section>` });
}

export function logPage({ log, grants }) {
  const byId = Object.fromEntries(grants.map((g) => [g.id, g]));
  const typeAr = { request: 'طلب دخول من الموقع', enter: 'دخول', fail: 'رمز خاطئ', locked: 'إقفال', view: 'عرض حالة', logout: 'خروج', admin: 'دخول الإدارة', 'admin-fail': 'محاولة إدارة خاطئة' };
  return adminLayout({ title: 'سجل الدخول', body: `
  <h1>سجل الدخول</h1><p class="muted">آخر 30 يومًا، الأحدث أولًا.</p>
  <section class="card">${log.length ? `<div class="tablewrap"><table><thead><tr><th>الوقت</th><th>الحدث</th><th>الشخص</th><th>المرجع</th><th>تفاصيل</th></tr></thead><tbody>
  ${log.map((l) => `<tr><td>${fmt(l.at)}</td><td>${typeAr[l.type] || esc(l.type)}</td><td>${esc(byId[l.grant]?.label || '—')}</td><td dir="ltr">${esc(byId[l.grant]?.ref || '')}</td><td>${esc(l.detail || '')}</td></tr>`).join('')}
  </tbody></table></div>` : '<p class="muted">لا يوجد سجل بعد.</p>'}</section>` });
}

export { MAIN, WA };
