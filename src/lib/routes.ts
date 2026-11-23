import { person, flags, type Lang } from '../config/site';
import { launch } from '../config/launch';

/**
 * Page registry. Every internal link is generated from here, so a slug change happens in one place.
 * `built: false` pages are planned (Phase 2/3) and are never linked or listed in the sitemap.
 * `hidden: true` pages are built and reachable by direct URL only (see src/config/launch.ts): never linked,
 * noindex, and left out of the sitemap and the site search.
 */
export type PageKey =
  | 'home' | 'about' | 'chronic' | 'contact' | 'legal'
  | 'pressure' | 'diabeticFoot' | 'surgical' | 'npwt' | 'education' | 'articles' | 'homeVisits' | 'dressings' | 'journeys' | 'consult'
  | 'videos' | 'proVideos' | 'abwm' | 'community' | 'reportTool'
  | 'shop' | 'policies' | 'courses';

interface PageDef {
  slug: string;
  nav: Record<Lang, string>;
  built: boolean;
  /** true = built but not public yet (launch switches in src/config/launch.ts) */
  hidden?: boolean;
  /** sitemap priority hint */
  priority: number;
}

export const pages: Record<PageKey, PageDef> = {
  home: { slug: '', nav: { ar: 'الرئيسية', en: 'Home' }, built: true, priority: 1.0 },
  about: { slug: person.aboutSlug, nav: { ar: 'عن المؤسس', en: 'About the founder' }, built: true, priority: 0.9 },
  chronic: { slug: 'chronic-wound-care-jordan', nav: { ar: 'الجروح المزمنة', en: 'Chronic wounds' }, built: true, priority: 0.9 },
  contact: { slug: 'contact', nav: { ar: 'التواصل', en: 'Contact' }, built: true, priority: 0.7 },
  /** Remote consultation: specialty profiles, providers, hours and online booking (23 Nov 2026). */
  consult: { slug: 'remote-consultation', nav: { ar: 'الاستشارة عن بعد', en: 'Remote consultation' }, built: true, priority: 0.9 },
  legal: { slug: 'privacy-and-disclaimer', nav: { ar: 'الخصوصية وإخلاء المسؤولية', en: 'Privacy & disclaimer' }, built: true, priority: 0.3 },
  // Phase 2
  pressure: { slug: 'pressure-injury-care', nav: { ar: 'قرح الضغط', en: 'Pressure injuries' }, built: true, priority: 0.8 },
  diabeticFoot: { slug: 'diabetic-foot-wounds', nav: { ar: 'القدم السكري', en: 'Diabetic foot' }, built: true, priority: 0.8 },
  surgical: { slug: 'surgical-wound-care', nav: { ar: 'الجروح الجراحية', en: 'Surgical wounds' }, built: true, priority: 0.8 },
  npwt: { slug: 'negative-pressure-wound-therapy', nav: { ar: 'العلاج بالضغط السلبي', en: 'NPWT / VAC' }, built: true, priority: 0.8 },
  dressings: { slug: 'advanced-wound-dressings', nav: { ar: 'ضمادات الجروح الحديثة', en: 'Dressings' }, built: true, priority: 0.8 },
  journeys: { slug: 'healing-journeys', nav: { ar: 'معرض الحالات', en: 'Case gallery' }, built: true, priority: 0.6 },
  education: { slug: 'wound-care-education', nav: { ar: 'التعليم والتدريب', en: 'Education and training' }, built: true, priority: 0.7 },
  /** Wound-care hub (merged with the former Articles section on 15 Oct 2026): guides by wound type + articles. */
  articles: { slug: 'wound-care', nav: { ar: 'العناية بالجروح', en: 'Wound care' }, built: true, priority: 0.8 },
  homeVisits: { slug: 'home-wound-care', nav: { ar: 'الزيارات المنزلية', en: 'Home visits' }, built: false && flags.homeVisitsPage, priority: 0.8 },
  // 23 Nov 2026 (Aissar, items 6, 10, 12): patient videos in the main menu; a section for healthcare professionals.
  videos: { slug: 'wound-care-videos', nav: { ar: 'فيديوهات تثقيفية', en: 'Videos' }, built: true, priority: 0.7 },
  proVideos: { slug: 'professional-wound-care-videos', nav: { ar: 'فيديوهات تعليمية للكوادر الصحية', en: 'Videos for professionals' }, built: true, priority: 0.6 },
  abwm: { slug: 'abwm-exam-preparation', nav: { ar: 'التحضير لامتحان البورد الأمريكي ABWM', en: 'ABWM exam preparation' }, built: true, priority: 0.7 },
  community: { slug: 'wound-care-community', nav: { ar: 'مجتمع العناية بالجروح', en: 'Wound-care community' }, built: true, priority: 0.6 },
  reportTool: { slug: 'wound-report-tool', nav: { ar: 'أداة تقارير الجروح', en: 'Wound report tool' }, built: true, priority: 0.6 },
  // Built but hidden until Aissar asks (items 7, 8, 11) — switches in src/config/launch.ts.
  shop: { slug: 'wound-care-shop', nav: { ar: 'المتجر', en: 'Shop' }, built: true, hidden: !launch.shop, priority: 0.6 },
  policies: { slug: 'payment-delivery-exchange', nav: { ar: 'الدفع والتوصيل والاستبدال', en: 'Payment, delivery and exchange' }, built: true, hidden: !launch.policies, priority: 0.3 },
  courses: { slug: 'wound-care-courses', nav: { ar: 'الدورات والكورسات', en: 'Courses' }, built: true, hidden: !launch.courses, priority: 0.6 },
};

export const langs: Lang[] = ['ar', 'en'];
export const otherLang = (l: Lang): Lang => (l === 'ar' ? 'en' : 'ar');

/** Absolute path (with trailing slash) for a page in a language. */
export function path(lang: Lang, key: PageKey): string {
  const { slug } = pages[key];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

export const isBuilt = (key: PageKey) => pages[key].built;
/** Built AND not hidden: the only pages that may be linked, listed in the sitemap or indexed. */
export const isPublic = (key: PageKey) => pages[key].built && !pages[key].hidden;

/** Wound-care topic pages, shown as the "Wound care" menu group and footer column. */
export const careNav: PageKey[] = ['chronic', 'pressure', 'diabeticFoot', 'surgical', 'npwt'];
export const careLabel: Record<Lang, string> = { ar: 'العناية بالجروح', en: 'Wound care' };
/** Pages for healthcare professionals, shown as the "For professionals" menu group and footer column. */
export const proNav: PageKey[] = ['education', 'proVideos', 'abwm', 'courses', 'community', 'reportTool'];
export const proLabel: Record<Lang, string> = { ar: 'للكوادر الصحية', en: 'For professionals' };

/** Menu groups (rendered as submenus). Hidden pages drop out of every list automatically. */
export type NavGroupKey = 'care' | 'pros';
export const navGroups: Record<NavGroupKey, { label: Record<Lang, string>; hub?: { key: PageKey; label: Record<Lang, string> }; items: PageKey[] }> = {
  care: { label: careLabel, hub: { key: 'articles', label: { ar: 'كل الأدلة والمقالات', en: 'All guides and articles' } }, items: careNav },
  pros: { label: proLabel, items: proNav },
};

/** Parent page in the breadcrumb trail. */
export const parentOf = (key: PageKey): PageKey | undefined => {
  if (careNav.includes(key)) return 'articles';
  if (proNav.includes(key) && key !== 'education') return 'education';
  if (key === 'policies' && isPublic('shop')) return 'shop';
  return undefined;
};
/** Main navigation, in display order. Group keys render as submenus; hidden pages are skipped. */
/** «عن المؤسس» lives in the footer links only, not in the header (Aissar, 23 Nov 2026). */
export const mainNav: Array<PageKey | NavGroupKey> = ['consult', 'care', 'videos', 'dressings', 'journeys', 'pros', 'shop', 'contact'];
/** Footer "site" column. Hidden pages are skipped. */
export const footerNav: PageKey[] = ['about', 'consult', 'videos', 'dressings', 'journeys', 'shop', 'contact', 'policies', 'legal'];

/** Credentials live on the About page (merged 6 Oct 2026). */
export const credentialsHref = (lang: Lang) => `${path(lang, 'about')}#credentials`;

/** 301 redirects (from → to). Consumed by public/_redirects generation and vercel.json. */
export function redirects(): Array<[string, string]> {
  const out: Array<[string, string]> = [['/', '/ar/']];
  for (const l of langs) {
    for (const alias of person.aboutSlugAliases) out.push([`/${l}/${alias}/`, path(l, 'about')]);
  }
  // Former Articles index → wound-care hub; the dressings article was merged into the dressings guide.
  for (const l of langs) {
    out.push([`/${l}/articles/`, path(l, 'articles')]);
    out.push([`/${l}/articles/choosing-wound-dressings/`, path(l, 'dressings')]);
  }
  out.push(['/about/', path('en', 'about')]);
  out.push(['/contact/', path('ar', 'contact')]);
  return out;
}
