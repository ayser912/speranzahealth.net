/**
 * SINGLE SOURCE OF TRUTH for every professional and contact detail on the site.
 * Edit values here only — pages, footer, schema and contact links all read from this file.
 *
 * Items marked TODO are waiting for confirmation from Aissar. Do not replace a TODO with a
 * guess: leave it null/false until the fact is confirmed and publishable.
 */

export const site = {
  /** Brand / site name shown in titles and Open Graph. */
  siteName: { ar: 'أيسر شواقفه', en: 'Aissar Shawaqfeh' },
  /** Organisation the domain belongs to. Not emitted as Organization schema until confirmed (see flags). */
  brandName: 'Speranza Health',
  domain: 'speranzahealth.net',
  defaultLang: 'ar' as const,
  locales: { ar: 'ar-JO', en: 'en-JO' },
  ogLocale: { ar: 'ar_JO', en: 'en_JO' },
};

export const person = {
  /**
   * Public display name (confirmed by Aissar 2026-10-06; English matches the CWS certificate).
   * To change it, edit `name` AND `aboutSlug` below and move the old slug into
   * `aboutSlugAliases` — 301 redirects from old URLs are generated automatically.
   */
  name: { ar: 'أيسر شواقفه', en: 'Aissar Shawaqfeh' },
  /** Spelling printed on the CWS® certificate (shown on the Credentials page for verification). */
  certificateName: 'AISSAR SHAWAQFEH',
  /** Every other spelling people use — emitted only as schema alternateName, never shown as the name. */
  alternateNames: ['Ayser Shawaqfeh', 'آيسر شواقفة', 'أيسر شواقفة', 'Aysar Shawaqfeh', 'Aysar Shawagfeh', 'Aisar Shawaqfeh'],
  aboutSlug: 'about-aissar-shawaqfeh',
  /** Slugs of the other spelling that should 301 to aboutSlug. */
  aboutSlugAliases: ['about-ayser-shawaqfeh', 'about-aysar-shawaqfeh', 'about'],
  postNominals: 'RN, CWS®',
  title: {
    ar: 'ممرض قانوني وأخصائي معتمد في العناية بالجروح CWS®',
    en: 'Registered Nurse and Certified Wound Specialist, CWS®, in Jordan',
  },
  shortTitle: {
    ar: 'ممرض قانوني · أخصائي جروح معتمد CWS®',
    en: 'Registered Nurse · Certified Wound Specialist (CWS®)',
  },
  jobTitleSchema: 'Registered Nurse and Certified Wound Specialist',
  country: { ar: 'الأردن', en: 'Jordan' },
  countryCode: 'JO',
  /** Approx. years in healthcare (since 2017). Update yearly or compute. */
  careerStartYear: 2017,
  /**
   * Professional photo supplied by Aissar (9 Oct 2026). Files in public/images/ as
   * <photo>-864|480.webp|jpg; the 864 JPEG is the canonical image used in schema.
   * Set to null to hide the photo everywhere.
   */
  photo: '/images/aissar-shawaqfeh-certified-wound-specialist-jordan' as string | null,
  /** One-paragraph factual summary, reused by schema description and llms.txt. Keep it free of superlatives. */
  bio: {
    ar: `أيسر شواقفه (Aissar Shawaqfeh) ممرض قانوني وأخصائي معتمد في العناية بالجروح CWS® في الأردن، بخبرة تمتد لنحو ${new Date().getFullYear() - 2017} سنوات في القطاع الصحي. يعمل في العناية بالجروح المزمنة وقرح الضغط وجروح القدم السكري والجروح الجراحية والعلاج بالضغط السلبي (VAC)، بالتنسيق مع فريق متعدد التخصصات، ويقدّم التثقيف والتدريب للمرضى والأسر والكوادر الصحية في جميع أنحاء الأردن.`,
    en: `Aissar Shawaqfeh (أيسر شواقفه) is a Registered Nurse and Certified Wound Specialist (CWS®) in Jordan with about ${new Date().getFullYear() - 2017} years in healthcare. He works in chronic wound care, pressure injuries, diabetic foot wounds, surgical wounds and negative pressure wound therapy (VAC), coordinated with a multidisciplinary team, and provides education and training for patients, families and healthcare teams across Jordan.`,
  },
  knowsAbout: {
    en: [
      'Chronic wound care',
      'Pressure injuries (pressure ulcers, bedsores)',
      'Diabetic foot ulcers and diabetic foot wound care',
      'Surgical wound care',
      'Negative pressure wound therapy (NPWT / VAC)',
      'Wound assessment and dressing selection',
      'Wound infection recognition',
      'Wound care education and training',
    ],
    ar: [
      'العناية بالجروح المزمنة',
      'قرح الضغط (قرح الفراش)',
      'جروح القدم السكري',
      'العناية بالجروح الجراحية',
      'العلاج بالضغط السلبي (VAC)',
      'تقييم الجروح واختيار الضمادات',
      'التعرف على علامات التهاب الجروح',
      'التعليم والتدريب في العناية بالجروح',
    ],
  },
};

/** Clinical qualifications — rendered on the About page and in schema. */
export const credentials = [
  {
    id: 'cws',
    name: { ar: 'أخصائي معتمد في العناية بالجروح (CWS®)', en: 'Certified Wound Specialist (CWS®)' },
    schemaName: 'Certified Wound Specialist (CWS)',
    issuer: { ar: 'American Board of Wound Management (ABWM)', en: 'American Board of Wound Management (ABWM)' },
    issuerUrl: 'https://abwmcertified.org/',
    year: 2026,
    category: 'certification',
    /** Aissar's listing in the public ABWM directory (confirmed 9 Oct 2026). */
    verifyUrl: 'https://abwmcertified.org/find-a-specialist/?last_name=SHAWAQFEH',
    clinical: true,
  },
  {
    id: 'bsn',
    name: { ar: 'بكالوريوس التمريض', en: 'Bachelor of Science in Nursing' },
    schemaName: 'Bachelor of Science in Nursing',
    issuer: { ar: 'جامعة العلوم والتكنولوجيا الأردنية', en: 'Jordan University of Science and Technology' },
    issuerUrl: 'https://www.just.edu.jo/',
    year: 2017,
    category: 'degree',
    verifyUrl: null,
    clinical: true,
  },
] as const;

/** Nursing licence: publish only what Aissar approves. */
export const nursingLicence = {
  /** TODO: confirm licensing body wording and whether the licence year/number may be published. */
  body: { ar: 'مجلس التمريض الأردني / وزارة الصحة', en: 'Jordanian Nursing Council / Ministry of Health' },
  status: { ar: 'ممرض قانوني مرخّص في الأردن', en: 'Registered Nurse licensed in Jordan' },
  publishNumber: false,
};

/** All contact channels. Used by header, footer, contact page and tracking links. */
export const contact = {
  email: 'aissar@speranzahealth.net',
  /** E.164 without "+" for wa.me links */
  whatsappE164: '962798839394',
  phoneE164: '+962798839394',
  phoneDisplay: '+962 79 883 9394',
  /** TODO: confirm public response hours, e.g. { ar: 'الأحد–الخميس، 9 صباحًا – 6 مساءً', en: 'Sun–Thu, 9 am – 6 pm' } (null = not shown) */
  hours: null as { ar: string; en: string } | null,
  /** The website serves all of Jordan. */
  serviceArea: { ar: 'جميع أنحاء الأردن', en: 'All of Jordan' },
};

/** Profiles: only `verified: true` entries are emitted in schema sameAs and shown publicly. */
export const profiles = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/aissar-shawaqfeh-cws/', verified: true },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/aissar_shawaqfeh912/', verified: true },
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/ayser.alshawaqfeh', verified: true },
  /** TODO: create channel and set verified: true */
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@TODO', verified: false },
  /** A directory search, not a profile page, so it stays out of schema sameAs; it is used as the credential's verify link. */
  { id: 'abwm', label: 'ABWM Directory', url: 'https://abwmcertified.org/find-a-specialist/?last_name=SHAWAQFEH', verified: false },
] as const;

/**
 * Decisions that unlock features. Keep false until Aissar confirms in writing.
 * - patientServicesConfirmed: a licensed pathway for direct patient services exists → enables
 *   "coordinate an assessment" CTAs.
 * - homeVisitsPage: enables a home-visits page (not built).
 * - organizationConfirmed: Speranza Health is a real registered organisation → emit Organization schema.
 * - brandNeutralNote: show the short "educational and brand-neutral" note on clinical pages.
 */
export const flags = {
  patientServicesConfirmed: false,
  homeVisitsPage: false,
  organizationConfirmed: false,
  brandNeutralNote: true,
};

/**
 * Multidisciplinary team (MDT) that care is coordinated with, as stated by Aissar (6 Oct 2026).
 * Shown on the home, about and wound-care pages. Do not add named individuals or institutions
 * without their written agreement.
 */
export const team = [
  { id: 'ortho', ar: 'جراحة العظام', en: 'Orthopaedic surgery' },
  { id: 'vascular', ar: 'جراحة الأوعية الدموية', en: 'Vascular surgery' },
  { id: 'general', ar: 'الجراحة العامة', en: 'General surgery' },
  { id: 'plastic', ar: 'الجراحة التجميلية والترميمية', en: 'Plastic and reconstructive surgery' },
  { id: 'podiatry', ar: 'طب وجراحة القدم (Podiatry)', en: 'Podiatry' },
  { id: 'id', ar: 'الأمراض المعدية', en: 'Infectious diseases' },
  { id: 'nutrition', ar: 'التغذية العلاجية', en: 'Clinical nutrition' },
  { id: 'other', ar: 'وغيرهم من الكوادر الصحية حسب حاجة كل حالة', en: 'Other healthcare professionals as each case requires' },
] as const;

/**
 * Educational videos. Add entries as they are published (YouTube id or Instagram reel URL).
 * Until the list has entries, video sections link to the Instagram profile instead.
 * Never include patient footage without documented written consent.
 */
export const videos: Array<{
  id: string;
  /** 'youtube' → embedded with a privacy-friendly player; 'instagram' → linked */
  platform: 'youtube' | 'instagram';
  /** YouTube video id, or full Instagram reel URL */
  ref: string;
  title: { ar: string; en: string };
  /** registry key of the page this video belongs to; 'home' shows on the homepage */
  page: string;
  uploadDate?: string;
  duration?: string;
}> = [];

/**
 * Featured video on the homepage: Radio Al-Balad 92.5 interview (file supplied by Aissar, 10 Oct 2026;
 * recorded 13 Jul 2026 per file metadata and press coverage). Self-hosted in public/media/.
 */
export const featuredVideo = {
  src: '/media/radio-al-balad-interview-aissar-shawaqfeh.mp4',
  /** base path; -poster.jpg / .webp beside it */
  poster: '/media/radio-al-balad-interview-poster',
  width: 640,
  height: 360,
  uploadDate: '2026-07-13',
  duration: 'PT6M39S',
  inLanguage: 'ar',
  outlet: { ar: 'راديو البلد 92.5 · برنامج «طلة صبح»', en: 'Radio Al-Balad 92.5 · “Tallet Sobeh” morning show' },
  title: {
    ar: 'أيسر شواقفه على راديو البلد: العناية بالجروح في الأردن',
    en: 'Aissar Shawaqfeh on Radio Al-Balad: wound care in Jordan',
  },
  description: {
    ar: 'حوار عن اعتماد أخصائي الجروح CWS®، وحاجة الأردن إلى تخصصات دقيقة وتوثيق للخبرة في رعاية الجروح، ومخاطر الخلطات الشعبية على الجروح.',
    en: 'A conversation about the CWS® credential, why Jordan needs specialised, documented wound-care expertise, and the risks of folk remedies on wounds. The interview is in Arabic.',
  },
};

/**
 * Experience figures shown under the homepage video. Supplied by Aissar (10 Oct 2026) from his own
 * records; shown with a note saying so. Never put them in structured data or in "best/first" claims.
 * Wording keeps a nurse's scope: "cared for", "supported", "worked with".
 */
export const stats: Array<{ value: number; suffix: string; percent?: boolean; ar: string; en: string }> = [
  { value: 1700, suffix: '+', ar: 'حالة جروح تمت رعايتها', en: 'Wound cases cared for' },
  { value: 5000, suffix: '+', ar: 'عملية جراحية شارك فيها', en: 'Surgical procedures supported' },
  { value: 11, suffix: '+', ar: 'مستشفى عمل معها', en: 'Hospitals worked with' },
  { value: 50, suffix: '+', ar: 'طبيبًا عمل معهم', en: 'Physicians worked with' },
  { value: 97, suffix: '%+', percent: true, ar: 'رضا المرضى', en: 'Patient satisfaction' },
  { value: 99, suffix: '%+', percent: true, ar: 'رضا الأطباء', en: 'Physician satisfaction' },
];
export const statsNote = {
  ar: 'أرقام تقريبية من سجلات أيسر الشخصية خلال سنوات عمله في القطاع الصحي.',
  en: 'Approximate figures from Aissar’s own records over his years in healthcare.',
};

/**
 * Press coverage and professional activity, shown on the About page ("In the media").
 * News items are also emitted as Person.subjectOf. Headlines are quoted as published.
 */
export const media: Array<{
  kind: 'news' | 'post';
  url: string;
  outlet: { ar: string; en: string };
  date?: string;
  headline: { ar: string; en: string };
}> = [
  {
    kind: 'news',
    url: 'https://ammannet.net/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1/%D9%85%D9%85%D8%B1%D8%B6-%D8%A3%D8%B1%D8%AF%D9%86%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86-%D8%A8%D8%AD%D8%A7%D8%AC%D8%A9-%D8%A5%D9%84%D9%89-%D8%AA%D8%AE%D8%B5%D8%B5%D8%A7%D8%AA-%D8%AF%D9%82%D9%8A%D9%82%D8%A9-%D9%81%D9%8A-%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%B1%D9%88%D8%AD-%D9%84%D9%85%D9%88%D8%A7%D9%83%D8%A8%D8%A9-%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%8A%D9%8A%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9',
    outlet: { ar: 'عمّان نت', en: 'Ammannet' },
    headline: {
      ar: 'ممرض أردني: الأردن بحاجة إلى تخصصات دقيقة في رعاية الجروح لمواكبة المعايير العالمية',
      en: 'Jordanian nurse: Jordan needs specialised wound-care disciplines to keep pace with global standards',
    },
  },
  {
    kind: 'news',
    url: 'https://www.altaj.news/article/569879',
    outlet: { ar: 'التاج الإخباري', en: 'Altaj News' },
    date: '2026-07-13',
    headline: {
      ar: 'الشواقفة: الأردن بحاجة إلى تخصصات دقيقة في رعاية الجروح لمواكبة المعايير العالمية',
      en: 'Shawaqfeh: Jordan needs specialised wound-care disciplines to keep pace with global standards',
    },
  },
  {
    kind: 'news',
    url: 'https://alwakaai.com/article/724399',
    outlet: { ar: 'الوقائع الإخبارية', en: 'Al-Waqai News' },
    date: '2026-06-23',
    headline: {
      ar: 'إنجاز أردني نوعي.. أيسر شواقفة يحصد أول شهادة «أخصائي جروح معتمد» من البورد الأمريكي في المملكة',
      en: 'A distinctive Jordanian achievement: Ayser Shawaqfeh earns the Kingdom’s first “Certified Wound Specialist” credential from the American board',
    },
  },
  {
    kind: 'post',
    url: 'https://www.facebook.com/alsaudihospital/posts/pfbid0xUoWE9ywkVZTLVjtRMD85wZx3stMtLZfNq9q7L6KYqpGf4fcFH3CJ9UFs4xVXwbyl',
    outlet: { ar: 'المستشفى السعودي (فيسبوك)', en: 'Saudi Hospital (Facebook)' },
    headline: { ar: 'لقطات من محاضرة قدّمها أيسر في المستشفى', en: 'Photos from a lecture Aissar gave at the hospital' },
  },
  {
    kind: 'post',
    url: 'https://www.facebook.com/ayser.alshawaqfeh/posts/pfbid02KDCtuXcb6q8zF38bv85iPgnnrn3FypKog3qNmnqH6ujfwjxyLfyLqfP7dXXRVcsSl',
    outlet: { ar: 'فيسبوك أيسر', en: 'Aissar on Facebook' },
    headline: { ar: 'إعلان الحصول على شهادة أخصائي الجروح المعتمد CWS®', en: 'Announcing the Certified Wound Specialist (CWS®) credential' },
  },
  {
    kind: 'post',
    url: 'https://www.facebook.com/ayser.alshawaqfeh/posts/pfbid02kYdM7Bw6UX3ymGaAKWwDtZ9cNHQBDt3LxMmDSd3Xywyua6gFMBWr4QYnwGfT4Zqcl',
    outlet: { ar: 'فيسبوك أيسر', en: 'Aissar on Facebook' },
    headline: { ar: 'منشور تثقيفي عن حلول العلاج بالضغط السلبي (NPWT) المتقدمة', en: 'Educational post on advanced negative pressure wound therapy (NPWT)' },
  },
];

export const analytics = {
  ga4Id: (import.meta.env?.PUBLIC_GA4_ID as string | undefined) || '',
  gscVerification: (import.meta.env?.PUBLIC_GSC_VERIFICATION as string | undefined) || '',
};

export type Lang = 'ar' | 'en';
export const yearsExperience = () => new Date().getFullYear() - person.careerStartYear;
