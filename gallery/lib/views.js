/** HTML for the viewer side (Arabic first, English available). */
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const MAIN = 'https://speranzahealth.net';
export const WA = '962798839394';

export const T = {
  ar: {
    dir: 'rtl', other: 'en', otherLabel: 'English',
    brand: 'سبيرانزا هيلث',
    galleryName: 'معرض رحلات الالتئام',
    privateNote: 'معرض خاص',
    landingH: 'معرض رحلات الالتئام',
    landingP: 'حالات حقيقية موثّقة بالصور لمراحل التئام جروح مختلفة، نُشرت بموافقة خطية من أصحابها وبعد إخفاء ما يدل على هويتهم. المعرض غير متاح للعامة، والدخول برابط ورمز شخصيين يرسلهما فريق سبيرانزا عند الطلب.',
    howH: 'كيف أحصل على الدخول؟',
    how: ['اطلب الدخول من فريق سبيرانزا عبر واتساب.', 'يصلك رابط شخصي ورمز من 5 أرقام، صالحان لمدة 7 أيام.', 'افتح الرابط، واقرأ الشروط ووافق عليها، ثم أدخل الرمز.'],
    request: 'اطلب رمز الدخول عبر واتساب',
    requestBtn: 'اطلب رمز الدخول',
    reqH: 'طلب رمز دخول المعرض',
    reqP: 'املأ الطلب، وسيراجعه فريق سبيرانزا ويرسل لك رابطًا شخصيًا ورمزًا عبر واتساب. لا تكتب أي معلومات صحية.',
    reqName: 'الاسم',
    reqPhone: 'رقم الواتساب',
    reqPhoneHint: 'مثال: 0791234567',
    reqRole: 'صفتك',
    roles: { patient: 'مريض', family: 'أحد أفراد أسرة مريض', professional: 'كادر صحي', other: 'أخرى' },
    reqTerms: 'أوافق على شروط المشاهدة، وعلى استخدام اسمي ورقمي فقط لإرسال الرمز.',
    reqSend: 'إرسال الطلب',
    reqPrivacy: 'تُحذف بيانات الطلب بعد معالجته، أو خلال 30 يومًا كحد أقصى.',
    reqErrName: 'اكتب اسمك (حرفان على الأقل).',
    reqErrPhone: 'اكتب رقم واتساب صحيحًا.',
    reqErrRole: 'اختر صفتك.',
    reqErrTerms: 'يجب الموافقة على الشروط.',
    reqErrBusy: 'وصلنا عدد كبير من الطلبات. حاول لاحقًا أو تواصل معنا عبر واتساب.',
    doneH: 'وصلنا طلبك',
    doneP: 'سيراجع فريق سبيرانزا طلبك ويرسل لك الرابط والرمز عبر واتساب على الرقم الذي كتبته. إذا كان المعرض قيد الإنشاء، فسنرسله لك عند الافتتاح.',
    doneNotify: 'أبلغ الفريق عبر واتساب (اختياري)',
    doneNotifyMsg: (name) => `مرحبًا، أرسلت طلب رمز دخول لمعرض رحلات الالتئام باسم ${name}.\n(عبر الموقع · طلب دخول المعرض)`,
    requestMsg: 'مرحبًا، أرغب بطلب رمز دخول لمعرض رحلات الالتئام في سبيرانزا هيلث.\n(عبر الموقع · معرض رحلات الالتئام)',
    back: 'العودة إلى الموقع',
    termsH: 'شروط الدخول',
    terms: [
      'المعرض لأغراض التثقيف الصحي وللاطلاع على جودة العناية فقط، ولا يقدّم تشخيصًا أو نصيحة طبية فردية.',
      'الرابط والرمز شخصيان لي وحدي، وأتعهد بعدم مشاركتهما مع أي شخص آخر.',
      'أتعهد بعدم تصوير الشاشة أو حفظ أو نشر أي صورة أو فيديو من المعرض.',
      'أعلم أن كل صورة تحمل علامة مائية مرتبطة برمزي الشخصي، وأن الدخول يُسجَّل.',
      'أعلم أن الصور طبية وقد تكون مزعجة لبعض الأشخاص.',
      'أعلم أن الحالات نُشرت بموافقة خطية من أصحابها، وأن النتائج تختلف من حالة لأخرى.',
    ],
    accept: 'قرأت الشروط وأوافق عليها',
    codeLabel: 'رمز الدخول (5 أرقام)',
    enter: 'دخول المعرض',
    wrongCode: (left) => `الرمز غير صحيح. المحاولات المتبقية: ${left}.`,
    mustAccept: 'يجب الموافقة على الشروط أولًا.',
    codeFormat: 'أدخل الرمز المكوّن من 5 أرقام.',
    grantGone: { revoked: 'تم إلغاء هذا الرابط.', locked: 'أُغلق هذا الرابط بعد عدة محاولات خاطئة.', expired: 'انتهت صلاحية هذا الرابط.', missing: 'الرابط غير صحيح.' },
    grantGoneP: 'اطلب رابطًا جديدًا من فريق سبيرانزا.',
    validUntil: 'صالح حتى',
    welcome: 'مرحبًا بك في المعرض',
    sessionNote: 'تنتهي الجلسة تلقائيًا بعد 30 دقيقة.',
    wmNote: 'الصور مغطاة. اضغط مطولًا على الصورة لعرضها. كل صورة تحمل علامة مائية برمزك الشخصي.',
    logout: 'خروج',
    constructionH: 'المعرض قيد الإنشاء',
    constructionP: 'نعمل حاليًا على تجهيز الحالات وتوثيق مراحلها بعد الحصول على موافقة أصحابها. ستظهر هنا قريبًا.',
    casesH: 'الحالات',
    open: 'عرض الحالة',
    woundType: 'نوع الجرح',
    before: 'المدة قبل بدء الخطة',
    team: 'الفريق المشارك',
    outcome: 'النتيجة',
    timeline: 'مراحل الالتئام',
    day: (d) => (d === 0 ? 'البداية' : `اليوم ${d}`),
    area: 'مساحة الجرح',
    areaChart: 'تطور مساحة الجرح (سم²)',
    compare: 'مقارنة البداية والمرحلة الأخيرة',
    consent: 'نُشرت بموافقة خطية موثّقة من صاحب الحالة، بعد إخفاء ما يدل على هويته.',
    vary: 'هذه الحالة للتثقيف فقط. النتائج تختلف من حالة لأخرى، ولا تُغني عن تقييم فريقك المعالج.',
    holdToView: 'اضغط مطولًا للعرض',
    allCases: 'كل الحالات',
    video: 'فيديو',
    notFound: 'غير موجود',
  },
  en: {
    dir: 'ltr', other: 'ar', otherLabel: 'العربية',
    brand: 'Speranza Health',
    galleryName: 'Healing journeys gallery',
    privateNote: 'Private gallery',
    landingH: 'Healing journeys gallery',
    landingP: 'Real, photo-documented healing stages of different wounds, published with each patient’s written consent and with anything identifying removed. The gallery is not public: access is by a personal link and code sent by the Speranza team on request.',
    howH: 'How do I get access?',
    how: ['Ask the Speranza team on WhatsApp.', 'You receive a personal link and a 5-digit code, valid for 7 days.', 'Open the link, read and accept the terms, then enter the code.'],
    request: 'Request an access code on WhatsApp',
    requestBtn: 'Request an access code',
    reqH: 'Request gallery access',
    reqP: 'Fill in the request and the Speranza team will review it and send you a personal link and code on WhatsApp. Please don’t include any health information.',
    reqName: 'Name',
    reqPhone: 'WhatsApp number',
    reqPhoneHint: 'e.g. 0791234567 or +962791234567',
    reqRole: 'You are',
    roles: { patient: 'A patient', family: 'A family member of a patient', professional: 'A healthcare professional', other: 'Other' },
    reqTerms: 'I accept the terms of viewing, and that my name and number are used only to send the code.',
    reqSend: 'Send request',
    reqPrivacy: 'Request details are deleted once handled, or within 30 days at the latest.',
    reqErrName: 'Enter your name (at least 2 letters).',
    reqErrPhone: 'Enter a valid WhatsApp number.',
    reqErrRole: 'Choose an option.',
    reqErrTerms: 'Please accept the terms.',
    reqErrBusy: 'We have received many requests. Please try later or message us on WhatsApp.',
    doneH: 'Request received',
    doneP: 'The Speranza team will review your request and send the link and code on WhatsApp to the number you entered. If the gallery is still being prepared, we will send it when it opens.',
    doneNotify: 'Let the team know on WhatsApp (optional)',
    doneNotifyMsg: (name) => `Hello, I have sent a request for access to the healing journeys gallery under the name ${name}.\n(Via the website · Gallery access request)`,
    requestMsg: 'Hello, I would like to request an access code for the Speranza Health healing journeys gallery.\n(Via the website · Healing journeys gallery)',
    back: 'Back to the website',
    termsH: 'Terms of access',
    terms: [
      'The gallery is for health education and to show the quality of care only. It does not provide diagnosis or individual medical advice.',
      'The link and code are personal to me, and I will not share them with anyone.',
      'I will not take screenshots of, save or publish any image or video from the gallery.',
      'I understand every image carries a watermark linked to my personal code, and that access is logged.',
      'I understand the images are medical and may be upsetting to some people.',
      'I understand the cases are published with written patient consent and that results vary from case to case.',
    ],
    accept: 'I have read and accept the terms',
    codeLabel: 'Access code (5 digits)',
    enter: 'Enter the gallery',
    wrongCode: (left) => `Incorrect code. Attempts left: ${left}.`,
    mustAccept: 'Please accept the terms first.',
    codeFormat: 'Enter the 5-digit code.',
    grantGone: { revoked: 'This link has been cancelled.', locked: 'This link was locked after several incorrect attempts.', expired: 'This link has expired.', missing: 'This link is not valid.' },
    grantGoneP: 'Please ask the Speranza team for a new link.',
    validUntil: 'Valid until',
    welcome: 'Welcome to the gallery',
    sessionNote: 'Your session ends automatically after 30 minutes.',
    wmNote: 'Images are covered. Press and hold an image to view it. Every image carries a watermark with your personal code.',
    logout: 'Sign out',
    constructionH: 'The gallery is being prepared',
    constructionP: 'We are preparing the cases and documenting their stages after obtaining each patient’s consent. They will appear here soon.',
    casesH: 'Cases',
    open: 'View case',
    woundType: 'Wound type',
    before: 'Duration before the plan',
    team: 'Team involved',
    outcome: 'Outcome',
    timeline: 'Healing stages',
    day: (d) => (d === 0 ? 'Start' : `Day ${d}`),
    area: 'Wound area',
    areaChart: 'Wound area over time (cm²)',
    compare: 'Start vs latest stage',
    consent: 'Published with the patient’s documented written consent, with anything identifying removed.',
    vary: 'This case is for education only. Results vary from case to case and do not replace an assessment by your own care team.',
    holdToView: 'Press and hold to view',
    allCases: 'All cases',
    video: 'Video',
    notFound: 'Not found',
  },
};
export const pick = (o, lang) => (o && (o[lang] || o.ar || o.en)) || '';

export function layout(lang, { title, body, path = '/', bodyClass = '' }) {
  const t = T[lang];
  const otherHref = `${path}${path.includes('?') ? '&' : '?'}lang=${t.other}`;
  return `<!doctype html>
<html lang="${lang === 'ar' ? 'ar-JO' : 'en-JO'}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">
<meta name="referrer" content="same-origin">
<title>${esc(title)} | ${esc(t.brand)}</title>
<link rel="icon" href="https://speranzahealth.net/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/static/app.css">
<script src="/static/viewer.js" defer></script>
</head>
<body class="${bodyClass}">
<header class="top"><div class="wrap">
  <a class="brand" href="${MAIN}/${lang}/"><img src="https://speranzahealth.net/brand/speranza-logo-horizontal.svg" alt="${esc(t.brand)}" width="164" height="40"></a>
  <span class="pill">${esc(t.privateNote)}</span>
  <a class="lang" href="${esc(otherHref)}" lang="${t.other}">${esc(t.otherLabel)}</a>
</div></header>
<main class="wrap">${body}</main>
<footer class="foot"><div class="wrap"><p>© ${new Date().getFullYear()} ${esc(t.brand)} · <a href="${MAIN}/${lang}/">speranzahealth.net</a></p></div></footer>
</body></html>`;
}

const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export function landing(lang) {
  const t = T[lang];
  return layout(lang, { title: t.galleryName, body: `
  <section class="card hero">
    <h1>${esc(t.landingH)}</h1>
    <p class="lead">${esc(t.landingP)}</p>
    <h2>${esc(t.howH)}</h2>
    <ol class="steps">${t.how.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
    <p class="actions"><a class="btn" href="/request?lang=${lang}">${esc(t.requestBtn)}</a>
    <a class="btn ghost" href="${esc(waLink(t.requestMsg))}" rel="noopener">${esc(t.request)}</a></p>
  </section>` });
}

export function requestForm(lang, { errors = {}, v = {}, status = 200 } = {}) {
  const t = T[lang];
  const err = (k) => (errors[k] ? `<p class="error" id="e-${k}">${esc(errors[k])}</p>` : '');
  const inv = (k) => (errors[k] ? ` aria-invalid="true" aria-describedby="e-${k}"` : '');
  return layout(lang, { title: t.reqH, path: '/request', body: `
  <section class="card narrow">
    <h1>${esc(t.reqH)}</h1>
    <p>${esc(t.reqP)}</p>
    ${errors.busy ? `<p class="error" role="alert">${esc(errors.busy)}</p>` : ''}
    <form method="post" action="/request?lang=${lang}" novalidate>
      <label class="field"><span>${esc(t.reqName)}</span><input name="name" value="${esc(v.name || '')}" maxlength="60" autocomplete="given-name" required${inv('name')}></label>${err('name')}
      <label class="field"><span>${esc(t.reqPhone)}</span><input name="phone" value="${esc(v.phone || '')}" inputmode="tel" autocomplete="tel" dir="ltr" maxlength="20" placeholder="${esc(t.reqPhoneHint)}" required${inv('phone')}></label>${err('phone')}
      <fieldset class="field roles"><legend>${esc(t.reqRole)}</legend>
        ${Object.entries(t.roles).map(([k, l]) => `<label class="check"><input type="radio" name="role" value="${k}"${v.role === k ? ' checked' : ''}> <span>${esc(l)}</span></label>`).join('')}
      </fieldset>${err('role')}
      <h2>${esc(t.termsH)}</h2>
      <ol class="terms">${t.terms.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
      <label class="check"><input type="checkbox" name="accept" value="1"${inv('accept')}> <span>${esc(t.reqTerms)}</span></label>${err('accept')}
      <div class="hp" aria-hidden="true"><label>Website <input name="website" tabindex="-1" autocomplete="off"></label></div>
      <button class="btn" type="submit">${esc(t.reqSend)}</button>
      <p class="muted">${esc(t.reqPrivacy)}</p>
    </form>
  </section>` });
}

export function requestDone(lang, name) {
  const t = T[lang];
  return layout(lang, { title: t.doneH, body: `
  <section class="card narrow hero">
    <h1>✓ ${esc(t.doneH)}</h1>
    <p>${esc(t.doneP)}</p>
    <p class="actions"><a class="btn ghost" href="${esc(waLink(t.doneNotifyMsg(name)))}" rel="noopener">${esc(t.doneNotify)}</a>
    <a class="btn ghost" href="${MAIN}/${lang}/">${esc(t.back)}</a></p>
  </section>` });
}

export function grantGone(lang, status) {
  const t = T[lang];
  return layout(lang, { title: t.galleryName, body: `
  <section class="card narrow">
    <h1>${esc(t.grantGone[status] || t.grantGone.missing)}</h1>
    <p>${esc(t.grantGoneP)}</p>
    <p class="actions"><a class="btn" href="${esc(waLink(t.requestMsg))}" rel="noopener">${esc(t.request)}</a></p>
  </section>` });
}

export function accessForm(lang, grant, { error = '' } = {}) {
  const t = T[lang];
  const until = new Date(grant.expiresAt).toLocaleDateString(lang === 'ar' ? 'ar-JO-u-nu-latn' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return layout(lang, { title: t.galleryName, path: `/a/${grant.id}`, body: `
  <section class="card narrow">
    <h1>${esc(t.galleryName)}</h1>
    <p class="muted">${esc(t.validUntil)}: ${esc(until)}</p>
    <form method="post" action="/a/${esc(grant.id)}?lang=${lang}" class="access" novalidate>
      <h2>${esc(t.termsH)}</h2>
      <ol class="terms">${t.terms.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
      <label class="check"><input type="checkbox" name="accept" value="1" required> <span>${esc(t.accept)}</span></label>
      <label class="field"><span>${esc(t.codeLabel)}</span>
        <input name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{5}" maxlength="5" required dir="ltr" class="code"></label>
      ${error ? `<p class="error" role="alert">${esc(error)}</p>` : ''}
      <button class="btn" type="submit">${esc(t.enter)}</button>
    </form>
  </section>` });
}

function media(lang, c, m, label) {
  const t = T[lang];
  if (m.type === 'video') {
    return `<figure class="shot video protected" data-hold>
      <video src="/v/${esc(c.id)}/${esc(m.id)}" controls controlslist="nodownload noremoteplayback" disablepictureinpicture preload="none" playsinline></video>
      <span class="vwm" aria-hidden="true"></span>
      <figcaption>${esc(label)} · ${esc(t.video)}</figcaption></figure>`;
  }
  const ratio = m.w && m.h ? ` width="${m.w}" height="${m.h}"` : '';
  return `<figure class="shot protected" data-hold tabindex="0" role="button" aria-label="${esc(t.holdToView)}: ${esc(label)}">
    <img src="/m/${esc(c.id)}/${esc(m.id)}" alt="${esc(label)}" loading="lazy" draggable="false"${ratio}>
    <span class="cover" aria-hidden="true">${esc(t.holdToView)}</span>
    <figcaption>${esc(label)}</figcaption></figure>`;
}

function areaChart(lang, stages) {
  const pts = stages.filter((s) => typeof s.area === 'number' && !Number.isNaN(s.area));
  if (pts.length < 2) return '';
  const t = T[lang];
  const W = 560, H = 200, P = 34;
  const maxX = Math.max(...pts.map((p) => p.day || 0)) || 1;
  const maxY = Math.max(...pts.map((p) => p.area)) || 1;
  const x = (d) => P + (d / maxX) * (W - 2 * P);
  const y = (a) => H - P - (a / maxY) * (H - 2 * P);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.day || 0).toFixed(1)},${y(p.area).toFixed(1)}`).join(' ');
  const dots = pts.map((p) => `<circle cx="${x(p.day || 0).toFixed(1)}" cy="${y(p.area).toFixed(1)}" r="4.5"/><text x="${x(p.day || 0).toFixed(1)}" y="${(y(p.area) - 10).toFixed(1)}" text-anchor="middle">${p.area}</text>`).join('');
  const labels = pts.map((p) => `<text class="ax" x="${x(p.day || 0).toFixed(1)}" y="${H - 10}" text-anchor="middle">${esc(t.day(p.day || 0))}</text>`).join('');
  return `<figure class="chart"><figcaption>${esc(t.areaChart)}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t.areaChart)}: ${pts.map((p) => `${t.day(p.day || 0)} ${p.area}`).join('، ')}" dir="ltr">
      <line class="base" x1="${P}" y1="${H - P}" x2="${W - P}" y2="${H - P}"/>
      <path d="${line}"/>${dots}${labels}
    </svg></figure>`;
}

export function gallery(lang, cases, grant) {
  const t = T[lang];
  const list = cases.length
    ? `<h2>${esc(t.casesH)}</h2><ul class="cases">${cases.map((c) => `
        <li><a class="case-card" href="/case/${esc(c.id)}?lang=${lang}">
          ${c.cover ? `<img src="/c/${esc(c.id)}/cover" alt="" loading="lazy">` : '<span class="ph"></span>'}
          <span class="cc-body"><strong>${esc(pick(c.title, lang))}</strong><span>${esc(pick(c.woundType, lang))}</span>
          <span class="cc-meta">${c.stages.length} · ${esc(t.timeline)}</span></span></a></li>`).join('')}</ul>`
    : `<section class="card construction"><span class="spin" aria-hidden="true"></span><h2>${esc(t.constructionH)}</h2><p>${esc(t.constructionP)}</p></section>`;
  return layout(lang, { title: t.galleryName, path: '/gallery', bodyClass: 'secure', body: `
  <section class="bar">
    <div><h1>${esc(t.welcome)}</h1><p class="muted">${esc(t.sessionNote)} · <bdi dir="ltr">REF ${esc(grant.ref)}</bdi></p></div>
    <form method="post" action="/logout?lang=${lang}"><button class="btn ghost" type="submit">${esc(t.logout)}</button></form>
  </section>
  <p class="notice">${esc(t.wmNote)}</p>
  ${list}` });
}

export function caseView(lang, c, grant) {
  const t = T[lang];
  const stages = [...c.stages].sort((a, b) => (a.day || 0) - (b.day || 0));
  const firstImg = stages.flatMap((s) => s.media.filter((m) => m.type === 'image').map((m) => ({ s, m })))[0];
  const lastImg = [...stages].reverse().flatMap((s) => [...s.media].reverse().filter((m) => m.type === 'image').map((m) => ({ s, m })))[0];
  const facts = [
    [t.woundType, pick(c.woundType, lang)],
    [t.before, pick(c.durationBefore, lang)],
    [t.team, pick(c.team, lang)],
    [t.outcome, pick(c.outcome, lang)],
  ].filter(([, v]) => v);
  const compare = firstImg && lastImg && firstImg.m.id !== lastImg.m.id ? `
    <section class="card"><h2>${esc(t.compare)}</h2>
      <div class="compare protected" data-compare data-hold>
        <img src="/m/${esc(c.id)}/${esc(lastImg.m.id)}" alt="${esc(pick(lastImg.s.label, lang) || t.day(lastImg.s.day || 0))}" draggable="false">
        <div class="cmp-top"><img src="/m/${esc(c.id)}/${esc(firstImg.m.id)}" alt="${esc(pick(firstImg.s.label, lang) || t.day(firstImg.s.day || 0))}" draggable="false"></div>
        <input type="range" min="0" max="100" value="50" aria-label="${esc(t.compare)}">
        <span class="cover" aria-hidden="true">${esc(t.holdToView)}</span>
      </div></section>` : '';
  return layout(lang, { title: pick(c.title, lang), path: `/case/${c.id}`, bodyClass: 'secure', body: `
  <p class="crumbs"><a href="/gallery?lang=${lang}">← ${esc(t.allCases)}</a></p>
  <article>
    <header class="card">
      <h1>${esc(pick(c.title, lang))}</h1>
      ${pick(c.summary, lang) ? `<p class="lead">${esc(pick(c.summary, lang))}</p>` : ''}
      ${facts.length ? `<dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : ''}
      <p class="consent">✓ ${esc(t.consent)}</p>
    </header>
    <p class="notice">${esc(t.wmNote)} · <bdi dir="ltr">REF ${esc(grant.ref)}</bdi></p>
    ${areaChart(lang, stages)}
    ${compare}
    <section><h2>${esc(t.timeline)}</h2>
      <ol class="timeline">${stages.map((s) => `
        <li><div class="tl-head"><span class="tl-day">${esc(t.day(s.day || 0))}</span><h3>${esc(pick(s.label, lang))}</h3>${typeof s.area === 'number' ? `<span class="tl-area">${esc(t.area)}: ${s.area} cm²</span>` : ''}</div>
          ${pick(s.note, lang) ? `<p>${esc(pick(s.note, lang))}</p>` : ''}
          <div class="shots">${s.media.map((m) => media(lang, c, m, pick(s.label, lang) || t.day(s.day || 0))).join('')}</div></li>`).join('')}
      </ol></section>
    <p class="vary">${esc(t.vary)}</p>
  </article>` });
}

export function simple(lang, title, msg, status = 200) {
  return { status, html: layout(lang, { title, body: `<section class="card narrow"><h1>${esc(title)}</h1><p>${esc(msg)}</p></section>` }) };
}
