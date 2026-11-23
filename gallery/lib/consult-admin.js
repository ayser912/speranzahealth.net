/** Admin page: remote consultation bookings (made on speranzahealth.net/…/remote-consultation/). */
import { esc } from './views.js';
import { adminLayout } from './admin-views.js';

const at = (ms) => new Date(ms).toLocaleString('en-GB', { timeZone: 'Asia/Amman', weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
const modeAr = { video: 'مرئية', voice: 'صوتية' };
const stAr = { confirmed: 'مؤكد', cancelled: 'ملغى' };

function row(b, actions) {
  const mailFailed = (b.emails || []).some((e) => e.type === 'confirmation' && !e.ok);
  return `<tr><td><strong>${esc(at(b.start))}</strong><br><span class="muted">${esc(b.minutes)} دقيقة · ${modeAr[b.mode] || ''}</span></td>
    <td>${esc(b.providerName?.ar)}<br><span class="muted">${esc(b.specialtyName?.ar)}</span></td>
    <td>${esc(b.name)}<br><span class="muted" dir="ltr">${esc(b.email)}</span><br><a dir="ltr" href="https://wa.me/${esc(b.phone)}" rel="noopener">+${esc(b.phone)}</a></td>
    <td dir="ltr">${esc(b.ref)}</td>
    <td><span class="st st-${b.status === 'confirmed' ? 'active' : 'revoked'}">${stAr[b.status] || esc(b.status)}</span>${mailFailed ? '<br><span class="error">إيميل التأكيد لم يُرسل: تواصل مع العميل</span>' : ''}</td>
    <td>${actions ? `<form method="post" action="/admin/consults/${esc(b.id)}/cancel" data-confirm="إلغاء هذا الموعد؟ سيصل إيميل إلغاء للعميل."><button class="linkbtn danger" type="submit">إلغاء</button></form>` : ''}</td></tr>`;
}

function table(list, actions) {
  if (!list.length) return '<p class="muted">لا يوجد.</p>';
  return `<div class="tablewrap"><table><thead><tr><th>الموعد (بتوقيت عمّان)</th><th>المختص</th><th>العميل</th><th>رقم الحجز</th><th>الحالة</th><th></th></tr></thead>
  <tbody>${list.map((b) => row(b, actions)).join('')}</tbody></table></div>`;
}

export function consultsPage({ bookings, ready, mail, video }) {
  const upcoming = bookings.filter((b) => b.status === 'confirmed' && b.end > Date.now()).sort((x, y) => x.start - y.start);
  const past = bookings.filter((b) => !upcoming.includes(b)).sort((x, y) => y.start - x.start).slice(0, 50);
  const missing = [
    !mail ? 'أضف <code>SMTP_USER</code> و <code>SMTP_PASS</code> (لإرسال إيميل التأكيد).' : '',
    !video ? 'أضف <code>DAILY_API_KEY</code> (لغرفة الفيديو داخل المنصة).' : '',
  ].filter(Boolean).join(' ');
  return adminLayout({ title: 'الاستشارات عن بعد', body: `
  <h1>الاستشارات عن بعد</h1>
  ${!ready ? `<p class="notice">الحجز الإلكتروني غير مفعّل بعد على الموقع. ${missing}</p>` : ''}
  <p class="muted">كل حجز يُؤكَّد تلقائيًا ويصل للعميل إيميل التأكيد فورًا (اليوم والتاريخ والوقت والمختص ورابط الغرفة). تُحذف بيانات الحجز بعد 30 يومًا من الموعد. المختصون وأوقاتهم تُعدّل في <code>src/config/consult.ts</code> في الموقع.</p>
  <section class="card"><h2>المواعيد القادمة (${upcoming.length})</h2>${table(upcoming, true)}</section>
  <section class="card"><h2>السابقة والملغاة</h2>${table(past, false)}</section>` });
}
