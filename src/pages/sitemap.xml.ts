import type { APIRoute } from 'astro';
import { pages, langs, path, type PageKey } from '../lib/routes';
import { articles, articlePath } from '../content/articles/index';
import type { Lang } from '../config/site';

/** XML sitemap with ar-JO / en-JO alternates for every built page and article. */
export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://speranzahealth.net/').replace(/\/$/, '');
  const today = new Date().toISOString().slice(0, 10);
  const entries: Array<{ paths: Record<Lang, string>; lastmod: string; priority: number }> = [
    ...(Object.keys(pages) as PageKey[]).filter((k) => pages[k].built)
      .map((k) => ({ paths: { ar: path('ar', k), en: path('en', k) }, lastmod: today, priority: pages[k].priority })),
    ...articles.map((a) => ({ paths: { ar: articlePath('ar', a.slug), en: articlePath('en', a.slug) }, lastmod: a.reviewed, priority: 0.6 })),
  ];
  const urls = entries.flatMap((e) =>
    langs.map((l) => {
      const alts = langs
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a === 'ar' ? 'ar-JO' : 'en-JO'}" href="${base}${e.paths[a]}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${e.paths.ar}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${base}${e.paths[l]}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <priority>${e.priority.toFixed(1)}</priority>\n${alts}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
