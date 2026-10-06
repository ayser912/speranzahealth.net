import type { Article } from '../../lib/content-types';

/** All articles, collected from this folder. Each file exports `default` an Article. */
const modules = import.meta.glob<{ default: Article }>('./*.ts', { eager: true });
export const articles: Article[] = Object.entries(modules)
  .filter(([p]) => !p.endsWith('/index.ts'))
  .map(([, m]) => m.default)
  .sort((a, b) => a.order - b.order);

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesForTopic = (topic: string) => articles.filter((a) => a.topic === topic);
export const articlePath = (lang: 'ar' | 'en', slug: string) => `/${lang}/articles/${slug}/`;
