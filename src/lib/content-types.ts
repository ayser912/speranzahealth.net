import type { Lang } from '../config/site';
import type { PageKey } from './routes';

/** One section of a clinical page or article. Arabic and English copies share the same `id`s. */
export interface Section {
  id: string;
  h: string;
  body?: string[];
  list?: { intro?: string; items: string[]; ordered?: boolean };
  table?: { caption: string; head: string[]; rows: string[][] };
  /** paragraphs after the list/table */
  after?: string[];
  /** render the body + list inside an amber warning callout */
  warn?: boolean;
  /** h3 subsections */
  subs?: Array<{ h: string; body?: string[]; list?: string[] }>;
}

export interface LangCopy {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
  /** short label used in cards and related-link lists */
  card?: string;
  /** Plain, answer-first questions people (and AI assistants) ask. Rendered visibly and as FAQPage schema. `a` may contain simple links. */
  faq?: FaqItem[];
}

export interface FaqItem { q: string; a: string }

export interface Ref { text: string; url: string }

export interface Video {
  youtubeId: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  uploadDate: string; // ISO date
  duration: string; // ISO 8601, e.g. PT4M30S
}

export interface ClinicalPageData {
  published: string;
  reviewed: string;
  /** Kept in the data only: not shown on the site; exported to the references file in the work folder (11 Nov 2026). */
  refs: Ref[];
  related: PageKey[];
  ar: LangCopy;
  en: LangCopy;
  video?: Video;
  /** photo shown after the first section instead of the illustration (e.g. the NPWT device, brand blurred) */
  photo?: { src: string; w: number; h: number; alt: Record<Lang, string>; caption: Record<Lang, string> };
  /** original explanatory illustration shown after the first section */
  illustration?: 'team' | 'time' | 'pressure' | 'foot' | 'npwt' | 'surgical';
  /** physician who reviewed the content (only with their written agreement) */
  medicalReviewer?: { name: string; title: string } | null;
}

export interface Article extends ClinicalPageData {
  slug: string;
  /** hub page this article belongs to (drives breadcrumbs-free grouping and related links) */
  topic: PageKey;
  /** order on the articles index */
  order: number;
  relatedArticles: string[];
}
