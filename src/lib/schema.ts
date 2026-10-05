/**
 * Centralised JSON-LD. Every page builds its graph from these functions, so professional
 * details are defined once (src/config/site.ts) and never retyped per page.
 * Rules enforced here: no Physician / MedicalBusiness / LocalBusiness types; Organization only
 * when flags.organizationConfirmed; sameAs only from verified profiles.
 */
import { site, person, credentials, profiles, flags, contact, type Lang } from '../config/site';
import { pages, path, type PageKey } from './routes';

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
    description: person.title[lang],
    url: abs(path(lang, 'about')),
    email: `mailto:${contact.email}`,
    knowsLanguage: ['ar', 'en'],
    address: { '@type': 'PostalAddress', addressLocality: person.city.en, addressCountry: person.countryCode },
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
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Registered Nurse',
      occupationLocation: { '@type': 'Country', name: 'Jordan' },
    },
    knowsAbout: person.knowsAbout,
    sameAs: profiles.filter((p) => p.verified).map((p) => p.url),
  };
  if (person.photo) node.image = abs(person.photo);
  return node;
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
  const url = abs(path(o.lang, o.key));
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
    page.audience = [
      { '@type': 'PeopleAudience', audienceType: 'Patients and caregivers' },
      { '@type': 'MedicalAudience', audienceType: 'Clinician' },
    ];
  }
  const graph: unknown[] = [websiteNode(o.lang), personNode(o.lang), page];
  if (flags.organizationConfirmed) graph.push(orgNode());
  if (o.key !== 'home') {
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push(
      breadcrumbNode(o.lang, [
        { name: pages.home.nav[o.lang], path: path(o.lang, 'home') },
        { name: pages[o.key].nav[o.lang], path: path(o.lang, o.key) },
      ]),
    );
  }
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
