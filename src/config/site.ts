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
  city: { ar: 'عمّان', en: 'Amman' },
  country: { ar: 'الأردن', en: 'Jordan' },
  countryCode: 'JO',
  /** Approx. years in healthcare (since 2017). Update yearly or compute. */
  careerStartYear: 2017,
  /** Professional photo — TODO: supply approved photo, then set path e.g. '/images/ayser-shawaqfeh-certified-wound-specialist-amman.jpg' */
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

/** Education, certification and career — rendered on About/Credentials and in schema. */
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
  {
    id: 'ai-health',
    name: { ar: 'الذكاء الاصطناعي في الرعاية الصحية', en: 'Artificial Intelligence in Healthcare' },
    schemaName: 'Artificial Intelligence in Healthcare',
    issuer: { ar: 'RCSI University of Medicine and Health Sciences', en: 'RCSI University of Medicine and Health Sciences' },
    issuerUrl: 'https://www.rcsi.com/',
    year: 2026,
    category: 'certificate',
    verifyUrl: null,
    clinical: false,
  },
  {
    id: 'kam',
    name: { ar: 'إدارة الحسابات الرئيسية', en: 'Key Account Management' },
    schemaName: 'Key Account Management certificate',
    /** TODO: confirm issuing body (null = not shown) */
    issuer: null,
    issuerUrl: null,
    year: 2025,
    category: 'certificate',
    verifyUrl: null,
    clinical: false,
  },
] as const;

/** Nursing licence: publish only what Aissar approves. */
export const nursingLicence = {
  /** TODO: confirm licensing body wording and whether the licence year/number may be published. */
  body: { ar: 'مجلس التمريض الأردني / وزارة الصحة', en: 'Jordanian Nursing Council / Ministry of Health' },
  status: { ar: 'ممرض قانوني مرخّص في الأردن', en: 'Registered Nurse licensed in Jordan' },
  publishNumber: false,
};

export const career = [
  {
    from: 2017, to: 2019,
    role: { ar: 'ممرض عناية حثيثة', en: 'Intensive Care Unit (ICU) Nurse' },
    org: { ar: 'المستشفى الاستشاري، عمّان', en: 'Istishari Hospital, Amman' },
  },
  {
    from: 2019, to: null,
    role: { ar: 'Key Account Specialist — خط العناية بالجروح', en: 'Key Account Specialist — Wound Care Line' },
    org: { ar: 'مستودع أدوية الوافي، عمّان', en: 'Al-Wafi Drug Store, Amman' },
  },
] as const;

/** All contact channels. Used by header, footer, contact page and tracking links. */
export const contact = {
  email: 'aissar@speranzahealth.net',
  /** E.164 without "+" for wa.me links */
  whatsappE164: '962798839394',
  phoneE164: '+962798839394',
  phoneDisplay: '+962 79 883 9394',
  /** TODO: confirm public response hours, e.g. { ar: 'الأحد–الخميس، 9 صباحًا – 6 مساءً', en: 'Sun–Thu, 9 am – 6 pm' } (null = not shown) */
  hours: null as { ar: string; en: string } | null,
  /** TODO: confirm service areas actually served */
  serviceAreas: { ar: ['عمّان'], en: ['Amman'] },
};

/** Profiles: only `verified: true` entries are emitted in schema sameAs and shown publicly. */
export const profiles = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayser-shawaqfeh-023ba0197/', verified: true },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/ayser_shawaqfeh/', verified: true },
  /** TODO: create channel and set verified: true */
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@TODO', verified: false },
  { id: 'abwm', label: 'ABWM Directory', url: 'https://abwmcertified.org/find-a-specialist/', verified: false },
] as const;

/**
 * Decisions that unlock features. Keep false until Aissar confirms in writing.
 * - patientServicesConfirmed: a licensed pathway for direct patient services exists → enables
 *   "coordinate an assessment" CTAs.
 * - homeVisitsPage: enables /ar/home-wound-care-amman/ (not built in Phase 1).
 * - organizationConfirmed: Speranza Health is a real registered organisation → emit Organization schema.
 * - industryDisclosure: show the employment disclosure on product-related pages.
 */
export const flags = {
  patientServicesConfirmed: false,
  homeVisitsPage: false,
  organizationConfirmed: false,
  industryDisclosure: true,
};

export const analytics = {
  ga4Id: (import.meta.env?.PUBLIC_GA4_ID as string | undefined) || '',
  gscVerification: (import.meta.env?.PUBLIC_GSC_VERIFICATION as string | undefined) || '',
};

export type Lang = 'ar' | 'en';
export const yearsExperience = () => new Date().getFullYear() - person.careerStartYear;
