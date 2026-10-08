/**
 * Centralised JSON-LD. Every page builds its graph from these functions, so professional
 * details are defined once (src/config/site.ts) and never retyped per page.
 * Rules enforced here: no Physician / MedicalBusiness / LocalBusiness types; Organization only
 * when flags.organizationConfirmed; sameAs only from verified profiles.
 */
import { site, person, credentials, profiles, flags, contact, type Lang } from '../config/site';
import { pages, path, type PageKey } from './routes';
import type { Video } from './content-types';

const base = () => (import.meta.env.SITE as string | undefined)?.replace(/\/$/, '') || `https://${site.domain}`;
export const abs = (p: string) => `${base()}${p}`;

export const ids = {
  person: () => `${base()}/#person`,
  website: () => `${base()}/#website`,
  org: () => `${base()}/#organization`,
};

export function personNode(lang: Lang) {
  const node: Record<string, unknown> = {
    '@type': 'Person',
    '@id': ids.person(),
    name: person.name[lang],
    alternateName: [person.name[lang === 'ar' ? 'en' : 'ar'], ...person.alternateNames.filter((n) => n !== person.name[lang])]
      .filter((v, i, a) => a.indexOf(v) === i),
    honorificSuffix: 'RN, CWS',
    jobTitle: person.jobTitleSchema,
    description: person.bio[lang],
    url: abs(path(lang, 'about')),
    email: `mailto:${contact.email}`,
    knowsLanguage: ['ar', 'en'],
    address: { '@type': 'PostalAddress', addressCountry: person.countryCode },
    areaServed: { '@type': 'Country', name: 'Jordan' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Jordan University of Science and Technology', url: 'https://www.just.edu.jo/' },
    hasCredential: credentials
      .filter((c) => c.clinical)
      .map((c) => ({
        '@type': 'EducationalOccupationalCredential',
        name: c.schemaName,
        credentialCategory: c.category,
        dateCreated: String(c.year),
        recognizedBy: { '@type': c.category === 'degree' ? 'CollegeOrUniversity' : 'Organization', name: c.issuer?.en, ...(c.issuerUrl ? { url: c.issuerUrl } : {}) },
      })),
    hasOccupation: [
      { '@type': 'Occupation', name: lang === 'ar' ? 'ممرض قانوني' : 'Registered Nurse', occupationLocation: { '@type': 'Country', name: 'Jordan' } },
      { '@type': 'Occupation', name: lang === 'ar' ? 'أخصائي معتمد في العناية بالجروح (CWS®)' : 'Certified Wound Specialist (wound care nurse)', occupationLocation: { '@type': 'Country', name: 'Jordan' }, skills: person.knowsAbout.en.join(', ') },
    ],
    knowsAbout: [...person.knowsAbout[lang], ...(lang === 'ar' ? person.knowsAbout.en : [])],
    sameAs: profiles.filter((p) => p.verified).map((p) => p.url),
  };
  if (person.photo) node.image = abs(person.photo);
  return node;
}

/** FAQPage node for a page's visible question-and-answer block (answers stripped to plain text). */
export function faqNode(lang: Lang, pagePath: string, items: Array<{ q: string; a: string }>) {
  const url = abs(pagePath);
  const plain = (h: string) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url: `${url}#faq`,
    inLanguage: lang === 'ar' ? 'ar-JO' : 'en-JO',
    isPartOf: { '@id': `${url}#webpage` },
    author: { '@id': ids.person() },
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: plain(it.a) } })),
  };
}

export function websiteNode(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': ids.website(),
    url: abs('/'),
    name: site.siteName[lang],
    alternateName: site.brandName,
    inLanguage: ['ar-JO', 'en-JO'],
    publisher: { '@id': flags.organizationConfirmed ? ids.org() : ids.person() },
  };
}

export function orgNode() {
  return { '@type': 'Organization', '@id': ids.org(), name: site.brandName, url: abs('/'), founder: { '@id': ids.person() } };
}

export function breadcrumbNode(lang: Lang, trail: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(trail[trail.length - 1].path)}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: abs(t.path) })),
  };
}

type PageType = 'WebPage' | 'ProfilePage' | 'AboutPage' | 'ContactPage' | 'MedicalWebPage' | 'CollectionPage';

export interface PageSchemaOpts {
  lang: Lang;
  key: PageKey;
  type: PageType;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  /** for MedicalWebPage */
  lastReviewed?: string;
  aboutTopic?: string;
  /** include ProfilePage mainEntity = Person */
  mainEntityPerson?: boolean;
}

export function pageGraph(o: PageSchemaOpts) {
  const trail = o.key === 'home' ? [] : [
    { name: pages.home.nav[o.lang], path: path(o.lang, 'home') },
    { name: pages[o.key].nav[o.lang], path: path(o.lang, o.key) },
  ];
  return docGraph({ ...o, path: path(o.lang, o.key), trail });
}

export interface DocGraphOpts extends Omit<PageSchemaOpts, 'key'> {
  path: string;
  /** breadcrumb trail including the current page; empty for the homepage */
  trail: Array<{ name: string; path: string }>;
  /** extra nodes (Article, VideoObject, ItemList …) */
  extra?: Array<Record<string, unknown>>;
  reviewedBy?: { name: string; title: string } | null;
}

/** Generic page graph: WebSite + Person + the page node (+ breadcrumb + extras). */
export function docGraph(o: DocGraphOpts) {
  const url = abs(o.path);
  const page: Record<string, unknown> = {
    '@type': o.type,
    '@id': `${url}#webpage`,
    url,
    name: o.title,
    description: o.description,
    inLanguage: o.lang === 'ar' ? 'ar-JO' : 'en-JO',
    isPartOf: { '@id': ids.website() },
    author: { '@id': ids.person() },
  };
  if (o.datePublished) page.datePublished = o.datePublished;
  if (o.dateModified) page.dateModified = o.dateModified;
  if (o.mainEntityPerson) page.mainEntity = { '@id': ids.person() };
  else page.about = o.aboutTopic ? { '@type': 'Thing', name: o.aboutTopic } : { '@id': ids.person() };
  if (o.type === 'MedicalWebPage') {
    if (o.lastReviewed) page.lastReviewed = o.lastReviewed;
    if (o.reviewedBy) page.reviewedBy = { '@type': 'Person', name: o.reviewedBy.name, jobTitle: o.reviewedBy.title };
    page.audience = [
      { '@type': 'PeopleAudience', audienceType: 'Patients and caregivers' },
      { '@type': 'MedicalAudience', audienceType: 'Clinician' },
    ];
  }
  const graph: unknown[] = [websiteNode(o.lang), personNode(o.lang), page];
  if (flags.organizationConfirmed) graph.push(orgNode());
  if (o.trail.length) {
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push(breadcrumbNode(o.lang, o.trail));
  }
  if (o.extra) graph.push(...o.extra);
  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Article schema for Phase 3 articles (kept here so the article system reuses the same Person). */
export function articleNode(o: {
  lang: Lang; url: string; headline: string; description: string; datePublished: string; dateModified: string;
  image?: string;
}) {
  // Note: medical review belongs on the article's WebPage node (WebPage.reviewedBy / lastReviewed),
  // not on Article. Add it there only when a named reviewer has agreed to be listed.
  return {
    '@type': 'Article',
    '@id': `${o.url}#article`,
    headline: o.headline,
    description: o.description,
    inLanguage: o.lang === 'ar' ? 'ar-JO' : 'en-JO',
    datePublished: o.datePublished,
    dateModified: o.dateModified,
    author: { '@id': ids.person() },
    publisher: { '@id': flags.organizationConfirmed ? ids.org() : ids.person() },
    mainEntityOfPage: o.url,
    ...(o.image ? { image: o.image } : {}),
  };
}

/** VideoObject — emit only for an original video actually embedded on the page. */
export function videoNode(lang: Lang, pagePath: string, v: Video) {
  return {
    '@type': 'VideoObject',
    '@id': `${abs(pagePath)}#video`,
    name: v.title[lang],
    description: v.description[lang],
    thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    inLanguage: lang === 'ar' ? 'ar-JO' : 'en-JO',
    author: { '@id': ids.person() },
  };
}
