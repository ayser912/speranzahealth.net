import { person, flags, type Lang } from '../config/site';

/**
 * Page registry. Every internal link is generated from here, so a slug change happens in one place.
 * `built: false` pages are planned (Phase 2/3) and are never linked or listed in the sitemap.
 */
export type PageKey =
  | 'home' | 'about' | 'credentials' | 'chronic' | 'contact' | 'privacy' | 'disclaimer'
  | 'pressure' | 'diabeticFoot' | 'surgical' | 'npwt' | 'education' | 'articles' | 'homeVisits';

interface PageDef {
  slug: string;
  nav: Record<Lang, string>;
  built: boolean;
  /** sitemap priority hint */
  priority: number;
}

export const pages: Record<PageKey, PageDef> = {
  home: { slug: '', nav: { ar: 'الرئيسية', en: 'Home' }, built: true, priority: 1.0 },
  about: { slug: person.aboutSlug, nav: { ar: 'عن أيسر', en: 'About Aissar' }, built: true, priority: 0.9 },
  credentials: { slug: 'credentials', nav: { ar: 'المؤهلات', en: 'Credentials' }, built: true, priority: 0.8 },
  chronic: { slug: 'chronic-wound-care-jordan', nav: { ar: 'الجروح المزمنة', en: 'Chronic wounds' }, built: true, priority: 0.9 },
  contact: { slug: 'contact', nav: { ar: 'التواصل', en: 'Contact' }, built: true, priority: 0.7 },
  privacy: { slug: 'privacy-policy', nav: { ar: 'سياسة الخصوصية', en: 'Privacy policy' }, built: true, priority: 0.3 },
  disclaimer: { slug: 'medical-disclaimer', nav: { ar: 'إخلاء المسؤولية الطبية', en: 'Medical disclaimer' }, built: true, priority: 0.3 },
  // Phase 2
  pressure: { slug: 'pressure-injury-care', nav: { ar: 'قرح الضغط', en: 'Pressure injuries' }, built: true, priority: 0.8 },
  diabeticFoot: { slug: 'diabetic-foot-wounds', nav: { ar: 'القدم السكري', en: 'Diabetic foot' }, built: true, priority: 0.8 },
  surgical: { slug: 'surgical-wound-care', nav: { ar: 'الجروح الجراحية', en: 'Surgical wounds' }, built: true, priority: 0.8 },
  npwt: { slug: 'negative-pressure-wound-therapy', nav: { ar: 'العلاج بالضغط السلبي', en: 'NPWT / VAC' }, built: true, priority: 0.8 },
  education: { slug: 'wound-care-education', nav: { ar: 'التعليم والتدريب', en: 'Education' }, built: true, priority: 0.7 },
  articles: { slug: 'articles', nav: { ar: 'المقالات', en: 'Articles' }, built: true, priority: 0.7 },
  homeVisits: { slug: 'home-wound-care-amman', nav: { ar: 'الزيارات المنزلية', en: 'Home visits' }, built: false && flags.homeVisitsPage, priority: 0.8 },
};

export const langs: Lang[] = ['ar', 'en'];
export const otherLang = (l: Lang): Lang => (l === 'ar' ? 'en' : 'ar');

/** Absolute path (with trailing slash) for a page in a language. */
export function path(lang: Lang, key: PageKey): string {
  const { slug } = pages[key];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

export const isBuilt = (key: PageKey) => pages[key].built;

/** Wound-care topic pages, shown as the "Wound care" menu group and footer column. */
export const careNav: PageKey[] = ['chronic', 'pressure', 'diabeticFoot', 'surgical', 'npwt'];
export const careLabel: Record<Lang, string> = { ar: 'العناية بالجروح', en: 'Wound care' };
/** Main navigation, in display order. 'care' renders the careNav group as a submenu. */
export const mainNav: Array<PageKey | 'care'> = ['about', 'care', 'education', 'articles', 'credentials', 'contact'];
/** Footer "site" column. */
export const footerNav: PageKey[] = ['about', 'credentials', 'education', 'articles', 'contact', 'privacy', 'disclaimer'];

/** 301 redirects (from → to). Consumed by public/_redirects generation and vercel.json. */
export function redirects(): Array<[string, string]> {
  const out: Array<[string, string]> = [['/', '/ar/']];
  for (const l of langs) {
    for (const alias of person.aboutSlugAliases) out.push([`/${l}/${alias}/`, path(l, 'about')]);
  }
  out.push(['/about/', path('en', 'about')]);
  out.push(['/contact/', path('ar', 'contact')]);
  return out;
}
