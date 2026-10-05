import type { APIRoute } from 'astro';
import { pages, langs, path, type PageKey } from '../lib/routes';

/** XML sitemap with ar-JO / en-JO alternates for every built page. */
export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://speranzahealth.net/').replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const keys = (Object.keys(pages) as PageKey[]).filter((k) => pages[k].built);
  const urls = keys.flatMap((k) =>
    langs.map((l) => {
      const alts = langs
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a === 'ar' ? 'ar-JO' : 'en-JO'}" href="${base}${path(a, k)}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${path('ar', k)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${base}${path(l, k)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${pages[k].priority.toFixed(1)}</priority>\n${alts}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
