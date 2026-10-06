import type { Lang } from '../config/site';

/** Shared interface strings. Page body copy lives in the page files. */
export const ui = {
  ar: {
    dir: 'rtl',
    skip: 'انتقل إلى المحتوى',
    menu: 'القائمة',
    close: 'إغلاق',
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    emergency: 'حالة طارئة؟ هذا الموقع وWhatsApp لا يديران الحالات الطارئة. توجّه فورًا إلى أقرب قسم طوارئ أو اتصل بالرقم 911.',
    emergencyShort: 'للحالات الطارئة: أقرب قسم طوارئ أو 911',
    whatsapp: 'تواصل عبر WhatsApp',
    call: 'اتصال',
    email: 'البريد الإلكتروني',
    credentialsCta: 'المؤهلات والتحقق',
    contactCta: 'تواصل معنا',
    educationCta: 'استفسر عن التدريب والتعليم',
    linkedinCta: 'تواصل عبر LinkedIn',
    authorBy: 'إعداد',
    published: 'تاريخ النشر',
    reviewed: 'آخر مراجعة',
    references: 'المراجع',
    educationalNote: 'هذه المعلومات تثقيفية عامة ولا تغني عن التقييم الطبي الفردي. لا تغيّر علاجك أو ضماداتك دون استشارة الفريق المعالج.',
    breadcrumbHome: 'الرئيسية',
    footerAbout: 'محتوى تثقيفي من ممرض قانوني وأخصائي معتمد في العناية بالجروح. لا يقدّم هذا الموقع تشخيصًا أو وصفات علاجية، ولا يُعد عيادة طبية.',
    rights: 'جميع الحقوق محفوظة',
    disclosureTitle: 'استقلالية المحتوى',
    disclosure: 'المحتوى على هذا الموقع تثقيفي ومستقل ولا يروّج لأي علامة تجارية، ويتم اختيار أي منتج لأي مريض بناءً على التقييم السريري وخطة الفريق المعالج.',
    consentText: 'نستخدم ملفات تعريف الارتباط للتحليلات فقط بعد موافقتك، لفهم كيفية استخدام الموقع. لا نجمع معلومات صحية.',
    consentAccept: 'موافق',
    consentDecline: 'رفض',
    privacyLink: 'سياسة الخصوصية',
    profiles: 'الملفات المهنية',
    contactTitle: 'التواصل',
  },
  en: {
    dir: 'ltr',
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    switchLang: 'العربية',
    switchLangLabel: 'التبديل إلى العربية',
    emergency: 'Emergency? This website and WhatsApp do not handle emergencies. Go to the nearest emergency department or call 911 immediately.',
    emergencyShort: 'Emergencies: nearest emergency department or 911',
    whatsapp: 'Message on WhatsApp',
    call: 'Call',
    email: 'Email',
    credentialsCta: 'Credentials and verification',
    contactCta: 'Get in touch',
    educationCta: 'Ask about wound-care education',
    linkedinCta: 'Connect on LinkedIn',
    authorBy: 'Written by',
    published: 'Published',
    reviewed: 'Last reviewed',
    references: 'References',
    educationalNote: 'This information is general education and does not replace an individual medical assessment. Do not change your treatment or dressings without speaking to your care team.',
    breadcrumbHome: 'Home',
    footerAbout: 'Educational content from a Registered Nurse and Certified Wound Specialist. This website does not provide diagnosis or prescriptions and is not a medical clinic.',
    rights: 'All rights reserved',
    disclosureTitle: 'Independent content',
    disclosure: 'Content on this website is educational and independent and does not promote any brand. Product choices for any patient follow clinical assessment and the treating team’s plan.',
    consentText: 'We use analytics cookies only with your consent, to understand how the site is used. We never collect health information.',
    consentAccept: 'Accept',
    consentDecline: 'Decline',
    privacyLink: 'Privacy policy',
    profiles: 'Professional profiles',
    contactTitle: 'Contact',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export const t = (lang: Lang) => ui[lang];

/** Format an ISO date for display in the page language (Gregorian calendar, Latin digits for clarity). */
export function formatDate(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-JO-u-nu-latn' : 'en-GB', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(d);
}
