/**
 * REMOTE CONSULTATION — specialty profiles, providers and their availability (Aissar, 23 Nov 2026).
 * The ONLY place to add a doctor/provider or change consultation hours.
 *
 * - Specialties come from `team` in site.ts (plus chronic wound care first). Add a short `about` here.
 * - A provider appears on /…/remote-consultation/ under their specialty. They can be booked online only
 *   when `hours` is filled in. Never add a named provider without their written agreement.
 * - Hours are weekly windows in the provider's own time zone ("HH:MM" 24h). Visitors see them converted
 *   to their own time. Slots are `slotMinutes` long. `daysOff` blocks single dates (YYYY-MM-DD).
 * - The booking server (gallery app, cases.speranzahealth.net) reads the published copy of this file at
 *   /consult/providers.json, so a change goes live with the next push (≈ 5 min cache on the server).
 */
import { person, team, type Lang } from './site';

export type Day = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
export const days: Day[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
export type Mode = 'video' | 'voice';

export interface Provider {
  /** url-safe id: lower-case letters, digits and dashes */
  id: string;
  /** specialty id: 'wound' or an id from `team` in site.ts */
  specialty: string;
  name: Record<Lang, string>;
  title: Record<Lang, string>;
  /** one or two factual sentences, optional */
  about?: Record<Lang, string>;
  /** link to a fuller profile page, optional */
  profileHref?: Record<Lang, string>;
  languages: Lang[];
  modes: Mode[];
  /** IANA time zone the hours are written in */
  timezone: string;
  slotMinutes: number;
  /** weekly availability; null = not published yet (shown as “hours to be announced”, not bookable) */
  hours: Partial<Record<Day, Array<[string, string]>>> | null;
  daysOff?: string[];
}

export const consult = {
  /** Booking API (gallery app on Vercel). Override with PUBLIC_CONSULT_API for local testing. */
  api: ((import.meta.env?.PUBLIC_CONSULT_API as string | undefined) || 'https://cases.speranzahealth.net/consult/api').replace(/\/$/, ''),
  /** The room opens this many minutes before the appointment. */
  joinEarlyMinutes: 15,
  /** Earliest booking: this many hours from now; latest: this many days ahead. */
  leadHours: 3,
  windowDays: 21,
};

/** What each specialty covers in wound care (short, educational). Missing ids fall back to `genericAbout`. */
const about: Record<string, Record<Lang, string>> = {
  wound: {
    ar: 'تقييم الجروح المزمنة والجروح التي لا تلتئم كما يُتوقع، واختيار الضمادات، ومتابعة التقدّم، وتثقيف المريض والأسرة.',
    en: 'Assessment of chronic wounds and wounds that are not healing as expected, dressing selection, progress follow-up and patient and family education.',
  },
  ortho: {
    ar: 'الجروح المرتبطة بالعظام والمفاصل والكسور، والتهاب العظم، والجروح بعد عمليات العظام.',
    en: 'Wounds related to bones, joints and fractures, bone infection, and wounds after orthopaedic surgery.',
  },
  vascular: {
    ar: 'تقييم الدورة الدموية في الساقين والقدمين، وقرح الأوردة والشرايين، وقرار إعادة التروية.',
    en: 'Assessment of blood flow in the legs and feet, venous and arterial ulcers, and decisions about restoring circulation.',
  },
  general: {
    ar: 'الجروح الجراحية ومضاعفاتها، والخراجات، وتنظيف الجروح جراحيًا عند الحاجة.',
    en: 'Surgical wounds and their complications, abscesses, and surgical wound cleaning when needed.',
  },
  plastic: {
    ar: 'تغطية الجروح الكبيرة أو العميقة بالترقيع والسدائل، وترميم الأنسجة.',
    en: 'Covering large or deep wounds with grafts and flaps, and tissue reconstruction.',
  },
  podiatry: {
    ar: 'العناية بالقدم السكري، وتخفيف الضغط عن القدم، والأحذية والنعال المناسبة.',
    en: 'Diabetic foot care, offloading pressure from the foot, and suitable footwear and insoles.',
  },
  id: {
    ar: 'تشخيص التهاب الجروح والعظام، واختيار المضاد الحيوي المناسب ومدته.',
    en: 'Diagnosing wound and bone infection, and choosing the right antibiotic and its duration.',
  },
  endocrine: {
    ar: 'ضبط السكري والغدد، لأن ارتفاع السكر يبطئ التئام الجروح.',
    en: 'Managing diabetes and hormone conditions, because high blood sugar slows wound healing.',
  },
  nephrology: {
    ar: 'أمراض الكلى وأثرها على التئام الجروح، وتعديل الأدوية حسب وظائف الكلى.',
    en: 'Kidney disease and its effect on wound healing, and adjusting medicines to kidney function.',
  },
  nutrition: {
    ar: 'تقييم التغذية والبروتين والفيتامينات التي يحتاجها الجسم لالتئام الجرح.',
    en: 'Assessing nutrition, protein and the vitamins the body needs to heal a wound.',
  },
  dermatology: {
    ar: 'أمراض الجلد حول الجرح، والتهابات الجلد والحساسية، والتقرحات الجلدية.',
    en: 'Skin conditions around the wound, skin inflammation and allergy, and skin ulcers.',
  },
};
const genericAbout: Record<Lang, string> = {
  ar: 'يُنسَّق الرأي مع هذا التخصص حسب حاجة الحالة.',
  en: 'This specialty is consulted as each case requires.',
};

export interface Specialty { id: string; name: Record<Lang, string>; about: Record<Lang, string> }
export const specialties: Specialty[] = [
  { id: 'wound', name: { ar: 'العناية بالجروح المزمنة', en: 'Chronic wound care' }, about: about.wound },
  ...team.filter((m) => m.id !== 'other').map((m) => ({ id: m.id, name: { ar: m.ar, en: m.en }, about: about[m.id] ?? genericAbout })),
];

/**
 * Providers. TODO (Aissar): add each doctor/provider (name, specialty, title, languages, hours) once they
 * have agreed in writing to be listed. Until `hours` is set, the profile shows “hours to be announced”.
 */
export const providers: Provider[] = [
  {
    id: 'aissar-shawaqfeh',
    specialty: 'wound',
    name: person.name,
    title: { ar: 'أخصائي جروح مزمنة معتمد من البورد الأمريكي CWS®', en: 'American Board–certified chronic wound specialist (CWS®)' },
    profileHref: { ar: `/ar/${person.aboutSlug}/`, en: `/en/${person.aboutSlug}/` },
    languages: ['ar', 'en'],
    modes: ['video', 'voice'],
    timezone: 'Asia/Amman',
    slotMinutes: 30,
    /** TODO (Aissar): consultation hours, e.g. { sun: [['17:00', '21:00']], mon: [['17:00', '21:00']] } */
    hours: null,
  },
];

export const isBookable = (p: Provider) => !!p.hours && Object.values(p.hours).some((w) => w && w.length > 0);
export const providersFor = (specialtyId: string) => providers.filter((p) => p.specialty === specialtyId);
