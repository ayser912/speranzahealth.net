/** Email texts for remote consultation bookings (Arabic and English). */
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const loc = (lang) => (lang === 'ar' ? 'ar-u-nu-latn' : 'en-GB');

export function when(ms, tz, lang) {
  const f = (o) => new Intl.DateTimeFormat(loc(lang), { timeZone: tz, ...o }).format(new Date(ms));
  return {
    day: f({ weekday: 'long' }),
    date: f({ day: 'numeric', month: 'long', year: 'numeric' }),
    time: f({ hour: 'numeric', minute: '2-digit', hour12: true }),
    offset: new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'shortOffset' }).formatToParts(new Date(ms)).find((p) => p.type === 'timeZoneName')?.value || '',
  };
}
const waLink = (n) => (n ? `https://wa.me/${n}` : '');

const L = {
  ar: {
    dir: 'rtl', brand: 'سبيرانزا هيلث',
    subject: (w) => `تأكيد موعد استشارتك عن بعد: ${w.day} ${w.date}، ${w.time}`,
    title: 'تم تأكيد موعد استشارتك عن بعد',
    hello: (n) => `مرحبًا ${n}،`,
    intro: 'تم تأكيد موعدك على منصة سبيرانزا هيلث. هذه تفاصيل الاستشارة:',
    ref: 'رقم الحجز', provider: 'المختص', specialty: 'التخصص', type: 'نوع الاستشارة',
    modes: { video: 'استشارة مرئية داخل منصة سبيرانزا هيلث', voice: 'استشارة صوتية داخل منصة سبيرانزا هيلث' },
    day: 'اليوم', date: 'التاريخ', time: 'الوقت', yourTz: 'بتوقيتك', duration: 'المدة', minutes: (m) => `${m} دقيقة`,
    providerTime: 'الوقت بتوقيت المختص',
    join: 'دخول غرفة الاستشارة',
    joinNote: (m) => `تُفتح الغرفة قبل الموعد بـ ${m} دقيقة. الرابط شخصي، فلا تشاركه مع أحد. أضفنا الموعد كملف تقويم مرفق بهذه الرسالة.`,
    prepH: 'قبل الموعد',
    prep: ['اتصال إنترنت جيد، ومكان هادئ وإضاءة جيدة.', 'استخدم متصفح Chrome أو Safari حديثًا، واسمح باستخدام الكاميرا والميكروفون.', 'جهّز قائمة الأدوية التي تستخدمها وأي تقارير سابقة لتتحدث عنها خلال الاستشارة.', 'لا ترسل صورًا أو تقارير طبية قبل الاتفاق مع المختص على طريقة آمنة.'],
    changeH: 'الإلغاء أو التغيير',
    change: (wa) => `لإلغاء الموعد افتح رابط الغرفة نفسه واضغط «إلغاء الموعد». لتغيير الموعد ${wa ? `راسلنا على <a href="${wa}">واتساب</a>` : 'تواصل معنا'} أو احجز موعدًا جديدًا من الموقع.`,
    emergency: 'الحالات الطارئة لا تُدار عن بعد: عند وجود احمرار ينتشر حول الجرح أو حرارة أو نزيف لا يتوقف، توجّه فورًا إلى أقرب قسم طوارئ.',
    footer: 'سبيرانزا هيلث · منصة عربية للعناية بالجروح · speranzahealth.net',
    cSubject: (w) => `إلغاء موعد الاستشارة: ${w.day} ${w.date}، ${w.time}`,
    cTitle: 'تم إلغاء موعد الاستشارة',
    cIntro: 'نؤكد إلغاء الموعد التالي:',
    cAgain: 'يمكنك حجز موعد جديد في أي وقت من صفحة الاستشارة عن بعد.',
    book: 'احجز موعدًا جديدًا',
  },
  en: {
    dir: 'ltr', brand: 'Speranza Health',
    subject: (w) => `Your remote consultation is confirmed: ${w.day} ${w.date}, ${w.time}`,
    title: 'Your remote consultation is confirmed',
    hello: (n) => `Hello ${n},`,
    intro: 'Your appointment on the Speranza Health platform is confirmed. Here are the details:',
    ref: 'Booking reference', provider: 'Specialist', specialty: 'Specialty', type: 'Consultation type',
    modes: { video: 'Video consultation on the Speranza Health platform', voice: 'Voice consultation on the Speranza Health platform' },
    day: 'Day', date: 'Date', time: 'Time', yourTz: 'your time', duration: 'Duration', minutes: (m) => `${m} minutes`,
    providerTime: 'Time for the specialist',
    join: 'Enter the consultation room',
    joinNote: (m) => `The room opens ${m} minutes before the appointment. The link is personal, so please don’t share it. A calendar file for the appointment is attached.`,
    prepH: 'Before the appointment',
    prep: ['A good internet connection, and a quiet, well-lit place.', 'Use an up-to-date Chrome or Safari, and allow the camera and microphone.', 'Have a list of the medicines you take and any previous reports ready to talk about.', 'Please don’t send photos or medical reports until a secure method has been agreed with the specialist.'],
    changeH: 'Cancel or change',
    change: (wa) => `To cancel, open the room link and press “Cancel appointment”. To change the time, ${wa ? `message us on <a href="${wa}">WhatsApp</a>` : 'contact us'} or book a new appointment on the website.`,
    emergency: 'Emergencies are not managed remotely: if there is redness spreading around the wound, fever or bleeding that will not stop, go to the nearest emergency department immediately.',
    footer: 'Speranza Health · Arabic wound-care platform · speranzahealth.net',
    cSubject: (w) => `Consultation cancelled: ${w.day} ${w.date}, ${w.time}`,
    cTitle: 'Your consultation has been cancelled',
    cIntro: 'We confirm that the following appointment is cancelled:',
    cAgain: 'You can book a new appointment at any time on the remote consultation page.',
    book: 'Book a new appointment',
  },
};

function layout(lang, title, inner) {
  const t = L[lang];
  return `<!doctype html><html lang="${lang}" dir="${t.dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(title)}</title></head>
<body style="margin:0;background:#f8f8f4;color:#10302a;font-family:Tahoma,Arial,sans-serif;line-height:1.7">
<div style="max-width:600px;margin:0 auto;padding:24px 16px" dir="${t.dir}">
<p style="margin:0 0 16px"><img src="https://speranzahealth.net/brand/speranza-logo-horizontal.svg" alt="${esc(t.brand)}" width="164" height="40" style="display:block"></p>
<div style="background:#fff;border:1px solid #d3dcd6;border-radius:14px;padding:24px">
<h1 style="margin:0 0 12px;font-size:22px;color:#064f3d">${esc(title)}</h1>
${inner}
</div>
<p style="font-size:12px;color:#3a514b;margin-top:16px">${esc(t.footer)}</p>
</div></body></html>`;
}

function detailRows(b, lang) {
  const t = L[lang];
  const w = when(b.start, b.tz, lang);
  const rows = [
    [t.ref, `<span dir="ltr">${esc(b.ref)}</span>`],
    [t.provider, `${esc(b.providerName[lang])}<br><span style="color:#3a514b;font-size:13px">${esc(b.providerTitle[lang])}</span>`],
    [t.specialty, esc(b.specialtyName[lang])],
    [t.type, esc(t.modes[b.mode])],
    [t.day, esc(w.day)],
    [t.date, esc(w.date)],
    [t.time, `<strong>${esc(w.time)}</strong> <span style="color:#3a514b;font-size:13px">(${esc(t.yourTz)}${lang === 'ar' ? '،' : ','} <span dir="ltr">${esc(w.offset)}</span>)</span>`],
    [t.duration, esc(t.minutes(b.minutes))],
  ];
  const pw = b.providerTz ? when(b.start, b.providerTz, lang) : null;
  if (pw && pw.offset !== w.offset) {
    rows.push([t.providerTime, `${esc(pw.day)} ${esc(pw.time)} <span dir="ltr" style="color:#3a514b;font-size:13px">(${esc(pw.offset)})</span>`]);
  }
  const html = `<table role="presentation" style="width:100%;border-collapse:collapse;margin:8px 0 20px">${rows.map(([k, v]) => `<tr><th scope="row" style="text-align:start;vertical-align:top;padding:8px 0;border-bottom:1px solid #e5efe9;color:#3a514b;font-weight:600;width:38%">${esc(k)}</th><td style="padding:8px 0;border-bottom:1px solid #e5efe9">${v}</td></tr>`).join('')}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${String(v).replace(/<br>/g, ' — ').replace(/<[^>]+>/g, '')}`).join('\n');
  return { html, text, w };
}

export function confirmation(b, link, contact = {}) {
  const lang = b.lang, t = L[lang];
  const d = detailRows(b, lang);
  const wa = waLink(contact.whatsapp);
  const html = layout(lang, t.title, `
<p style="margin:0 0 8px">${esc(t.hello(b.name))}</p>
<p style="margin:0 0 8px">${esc(t.intro)}</p>
${d.html}
<p style="margin:0 0 8px"><a href="${esc(link)}" style="display:inline-block;background:#0a5c47;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:6px">${esc(t.join)}</a></p>
<p style="margin:0 0 20px;font-size:13px;color:#3a514b">${esc(t.joinNote(b.joinEarlyMinutes ?? 15))}<br><span dir="ltr" style="word-break:break-all">${esc(link)}</span></p>
<h2 style="font-size:16px;margin:0 0 6px">${esc(t.prepH)}</h2>
<ul style="margin:0 0 16px;padding-inline-start:20px">${t.prep.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
<h2 style="font-size:16px;margin:0 0 6px">${esc(t.changeH)}</h2>
<p style="margin:0 0 16px">${t.change(wa)}</p>
<p style="margin:0;padding:12px;background:#fff3dc;color:#6b3a00;border-radius:6px;font-size:14px">${esc(t.emergency)}</p>`);
  const text = `${t.title}\n\n${t.hello(b.name)}\n${t.intro}\n\n${d.text}\n\n${t.join}: ${link}\n${t.joinNote(b.joinEarlyMinutes ?? 15)}\n\n${t.prepH}:\n- ${t.prep.join('\n- ')}\n\n${t.changeH}: ${t.change(wa).replace(/<[^>]+>/g, '')}${wa ? ` ${wa}` : ''}\n\n${t.emergency}\n\n${t.footer}`;
  return { subject: t.subject(d.w), html, text };
}

export function cancellation(b, contact = {}) {
  const lang = b.lang, t = L[lang];
  const d = detailRows(b, lang);
  const book = `https://speranzahealth.net/${lang}/remote-consultation/`;
  const html = layout(lang, t.cTitle, `
<p style="margin:0 0 8px">${esc(t.hello(b.name))}</p>
<p style="margin:0 0 8px">${esc(t.cIntro)}</p>
${d.html}
<p style="margin:0 0 12px">${esc(t.cAgain)}</p>
<p style="margin:0"><a href="${book}" style="display:inline-block;background:#0a5c47;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:6px">${esc(t.book)}</a></p>`);
  return { subject: t.cSubject(d.w), html, text: `${t.cTitle}\n\n${t.hello(b.name)}\n${t.cIntro}\n\n${d.text}\n\n${t.cAgain}\n${book}` };
}

/** Copy for the platform inbox / the provider: client contact + the provider's own room link. */
export function teamNotice(b, hostLink, clientEmailed) {
  const d = detailRows({ ...b, tz: b.providerTz || 'Asia/Amman' }, 'ar');
  const html = layout('ar', 'حجز استشارة جديد', `
<p style="margin:0 0 8px">تم حجز استشارة جديدة وتأكيدها تلقائيًا.</p>
${d.html}
<table role="presentation" style="width:100%;border-collapse:collapse;margin:0 0 16px">
<tr><th scope="row" style="text-align:start;padding:6px 0;width:38%;color:#3a514b">اسم العميل</th><td>${esc(b.name)}</td></tr>
<tr><th scope="row" style="text-align:start;padding:6px 0;color:#3a514b">البريد</th><td dir="ltr">${esc(b.email)}</td></tr>
<tr><th scope="row" style="text-align:start;padding:6px 0;color:#3a514b">واتساب</th><td dir="ltr"><a href="https://wa.me/${esc(b.phone)}">+${esc(b.phone)}</a></td></tr>
<tr><th scope="row" style="text-align:start;padding:6px 0;color:#3a514b">توقيت العميل</th><td dir="ltr">${esc(b.tz)}</td></tr>
<tr><th scope="row" style="text-align:start;padding:6px 0;color:#3a514b">إيميل التأكيد للعميل</th><td>${clientEmailed ? 'أُرسل' : '<strong style="color:#b3261e">لم يُرسل — تواصل مع العميل</strong>'}</td></tr>
</table>
<p style="margin:0 0 8px"><a href="${esc(hostLink)}" style="display:inline-block;background:#0a5c47;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:6px">دخول الغرفة كمختص</a></p>
<p style="margin:0;font-size:13px;color:#3a514b">هذا الرابط للمختص فقط (يدخل كمشرف على الغرفة). لا ترسله للعميل.</p>`);
  return { subject: `حجز جديد: ${b.providerName.ar} · ${d.w.day} ${d.w.date} ${d.w.time}`, html, text: `حجز استشارة جديد\n\n${d.text}\n\nالعميل: ${b.name}\n${b.email}\n+${b.phone}\n\nرابط المختص: ${hostLink}` };
}

export function teamCancel(b, by) {
  const d = detailRows({ ...b, tz: b.providerTz || 'Asia/Amman' }, 'ar');
  const who = by === 'client' ? 'العميل' : by === 'host' ? 'المختص' : 'الإدارة';
  return { subject: `إلغاء حجز: ${b.providerName.ar} · ${d.w.day} ${d.w.date} ${d.w.time}`, html: layout('ar', 'تم إلغاء حجز', `<p>ألغى ${who} هذا الموعد، وأصبح الوقت متاحًا للحجز من جديد.</p>${d.html}<p>العميل: ${esc(b.name)} · <span dir="ltr">${esc(b.email)}</span></p>`), text: `تم إلغاء حجز (${who})\n\n${d.text}` };
}

/** Calendar file (iCalendar, UTC). */
export function ics(b, link, organizer) {
  const lang = b.lang;
  const stamp = (ms) => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const fold = (s) => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
  const title = lang === 'ar' ? `استشارة عن بعد: ${b.providerName.ar}` : `Remote consultation: ${b.providerName.en}`;
  const desc = `${lang === 'ar' ? 'رقم الحجز' : 'Booking reference'}: ${b.ref}\n${lang === 'ar' ? 'دخول الغرفة' : 'Room'}: ${link}`;
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Speranza Health//Remote consultation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT', `UID:${b.id}@speranzahealth.net`, `DTSTAMP:${stamp(Date.now())}`, `DTSTART:${stamp(b.start)}`, `DTEND:${stamp(b.end)}`,
    `SUMMARY:${fold(title)}`, `DESCRIPTION:${fold(desc)}`, `URL:${link}`, `ORGANIZER;CN=Speranza Health:mailto:${organizer}`, 'STATUS:CONFIRMED',
    'BEGIN:VALARM', 'TRIGGER:-PT30M', 'ACTION:DISPLAY', `DESCRIPTION:${fold(title)}`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR', '',
  ].join('\r\n');
}
