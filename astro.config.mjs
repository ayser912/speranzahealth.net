// @ts-check
import { defineConfig } from 'astro/config';
import bidiFix from './src/lib/bidi-integration.mjs';
import hostRedirects from './src/lib/redirects-integration.mjs';
import { redirects } from './src/lib/routes.ts';

// The production URL is read from SITE_URL so staging/preview builds can override it.
const site = process.env.SITE_URL || 'https://speranzahealth.net';
const redirectList = redirects();

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  prefetch: false,
  // Static fallback pages (meta refresh + canonical) for hosts without redirect rules.
  redirects: Object.fromEntries(redirectList.map(([from, to]) => [from.replace(/\/$/, '') || '/', to])),
  integrations: [bidiFix(), hostRedirects(redirectList)],
});
