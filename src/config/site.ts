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
  /** Professional photo — TODO: supply an approved photo, save it in public/images/ and set e.g. '/images/aissar-shawaqfeh-certified-wound-specialist-jordan.jpg' */
  photo: null as string | null,
  knowsAbout: [
    'Chronic wound care',
    'Pressure injuries',
    'Diabetic foot ulcers',
    'Surgical wound care',
    'Negative pressure wound therapy (NPWT)',
    'Wound dressing selection',
    'Wound care education',
  ],
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
    /** Public directory where the credential can be checked. TODO: replace with Aissar's direct listing URL once confirmed. */
    verifyUrl: 'https://abwmcertified.org/find-a-specialist/',
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
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayser-shawaqfeh-023ba0197/', verified: true },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/aissar_shawaqfeh912/', verified: true },
  /** TODO: create channel and set verified: true */
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@TODO', verified: false },
  { id: 'abwm', label: 'ABWM Directory', url: 'https://abwmcertified.org/find-a-specialist/', verified: false },
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

export const analytics = {
  ga4Id: (import.meta.env?.PUBLIC_GA4_ID as string | undefined) || '',
  gscVerification: (import.meta.env?.PUBLIC_GSC_VERIFICATION as string | undefined) || '',
};

export type Lang = 'ar' | 'en';
export const yearsExperience = () => new Date().getFullYear() - person.careerStartYear;
