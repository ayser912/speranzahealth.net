# Aissar Shawaqfeh — official website (speranzahealth.net)

Bilingual (Arabic-first, RTL / English, LTR) static website for **Aissar Shawaqfeh (أيسر شواقفه), RN, CWS®**, built with [Astro](https://astro.build). It outputs plain HTML/CSS with almost no JavaScript, so it is fast, cheap to host and easy for Google to read.

## Quick start

Requirements: Node.js 20 or newer.

```bash
npm install          # once
npm run dev          # local preview at http://localhost:4321/ar/
npm run build        # production build into dist/
npm run preview      # serve the built dist/ locally
npm test             # build + internal link check + SEO/structured-data check
```

## Where to edit things

| What you want to change | File |
| --- | --- |
| Name, titles, phone, WhatsApp, email, social links, credentials, career, feature flags | `src/config/site.ts` (the **only** place for these facts) |
| Page URLs (slugs), navigation order, redirects | `src/lib/routes.ts` |
| Shared interface text (buttons, emergency notice, disclosure) | `src/lib/i18n.ts` |
| Structured data (JSON-LD) | `src/lib/schema.ts` (pages call `pageGraph()`; never write JSON-LD by hand in a page) |
| Page text | `src/pages/[lang]/*.astro` (each file holds the Arabic and English copy side by side) |
| Colours, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| Social sharing images | `public/og/ar.png`, `public/og/en.png` (regenerate with `node scripts/make-og.mjs`) |

### Feature flags (`src/config/site.ts → flags`)

| Flag | Default | Turn on only when |
| --- | --- | --- |
| `patientServicesConfirmed` | `false` | A licensed pathway for direct patient services is confirmed. Adds "Coordinate an assessment or referral" to the contact form. |
| `homeVisitsPage` | `false` | Home visits are confirmed as legally provided through a licensed entity (page not built yet). |
| `organizationConfirmed` | `false` | Speranza Health is a registered organisation. Emits `Organization` schema and makes it the publisher. |
| `industryDisclosure` | `true` | Keep on while Ayser works for a wound-care product distributor. |

### Profiles

In `profiles`, only entries with `verified: true` appear on the site and in schema `sameAs`. Set YouTube to `verified: true` once the channel exists.

### Public name spelling

Confirmed by Ayser on 6 October 2026: **أيسر شواقفه** (Arabic) and **Aissar Shawaqfeh** (English, matching the CWS® certificate). Older spellings (Ayser Shawaqfeh, آيسر شواقفة, …) are kept only in schema `alternateName`, and the old About URL `/…/about-ayser-shawaqfeh/` 301-redirects to `/…/about-aissar-shawaqfeh/`.

To change the name again: edit `person.name`, `siteName` and `aboutSlug` in `src/config/site.ts`, move the old slug into `aboutSlugAliases`, search the page files for the old spelling, regenerate the OG images (`node scripts/make-og.mjs`) and run `npm test`.

## Adding a page (Phase 2)

1. In `src/lib/routes.ts`, set `built: true` for the page key (e.g. `pressure`) and add it to `mainNav`/`footerNav` if wanted.
2. Create `src/pages/[lang]/<slug>.astro`. Copy `chronic-wound-care-jordan.astro` as the template: it already includes the breadcrumbs, author box, dates, educational note, references and disclosure.
3. Use `type: 'MedicalWebPage'` in `pageGraph()` for clinical pages.
4. Run `npm test`. The sitemap, hreflang and link checks update automatically.

## Environment variables

Copy `.env.example` to `.env` (never commit `.env`), or set these in your host's dashboard:

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Production URL, default `https://speranzahealth.net`. Used for canonical, hreflang, sitemap and Open Graph. |
| `PUBLIC_GA4_ID` | Google Analytics 4 measurement ID (`G-…`). Leave empty to disable analytics and hide the cookie banner. |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console HTML-tag token (the `content` value only). |

**Analytics behaviour.** GA4 loads only after the visitor clicks *Accept*. Before that, no Google requests are made and no cookies are set. The tracked events are `whatsapp_click`, `phone_click`, `email_click`, `cta_click`, `outbound_profile` and `generate_lead` (contact form). Every WhatsApp and email link also carries a `ref` code (e.g. `ar-home-hero`), so you can see which page produced an enquiry even inside WhatsApp.

## Contact form

The form stores nothing and needs no server. After validation it opens WhatsApp (or the visitor's email app) with a short pre-filled message that the visitor reviews and sends. It asks only for first name, city, reason, preferred contact method and consent. It never requests photos, diagnoses or documents. Without JavaScript the form hides itself and the direct WhatsApp, phone and email links remain.

## Deployment

The build output is the static folder `dist/`. Recommended host: **Cloudflare Pages** (free, fast in Jordan, supports the generated `_redirects`).

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages: *Create project → Connect to Git*. Build command: `npm run build`. Output directory: `dist`. Environment variables as above.
3. Add the custom domain `speranzahealth.net` (and `www` redirecting to it).
4. In Google Search Console, add the domain property, verify (DNS, or the `PUBLIC_GSC_VERIFICATION` tag), then submit `https://speranzahealth.net/sitemap.xml`.

Netlify works the same way (`_redirects` is also supported). On Vercel, the generated `dist/vercel.json` holds the redirects. On plain hosting (cPanel), upload the contents of `dist/`. Redirects then fall back to the generated HTML redirect pages.

## Quality checks included

- `scripts/check-links.mjs`: every internal link and `#anchor` resolves.
- `scripts/check-schema.mjs`: valid JSON-LD with no Physician/LocalBusiness types and no dangling `@id`; exactly one H1 and no skipped heading levels; unique titles and descriptions; canonical, reciprocal hreflang (ar-JO, en-JO, x-default) and sitemap coverage; correct `lang`/`dir`.
- A build step (`src/lib/bidi-integration.mjs`) keeps "CWS®" rendering correctly inside Arabic text.

## Project structure

```
src/
  config/site.ts          single source of truth (facts, contact, flags)
  lib/routes.ts           page registry, paths, redirects
  lib/schema.ts           JSON-LD builders (Person, ProfilePage, BreadcrumbList, Article…)
  lib/i18n.ts             shared UI strings, date formatting
  lib/links.ts            WhatsApp/phone/email links with ref codes + UTM helper
  layouts/BaseLayout.astro  <head>: SEO, hreflang, OG, fonts, JSON-LD
  components/             Header, Footer, EmergencyBar, AuthorBox, References, Disclosure, …
  pages/[lang]/           Arabic + English pages (one file per page, both languages)
  pages/sitemap.xml.ts, robots.txt.ts, 404.astro
public/fonts/             self-hosted IBM Plex Sans Arabic (400/600/700) + Inter variable
public/og/                1200×630 sharing images
scripts/                  checks + OG image generator
docs/                     handover report, Google Business Profile preparation
```
