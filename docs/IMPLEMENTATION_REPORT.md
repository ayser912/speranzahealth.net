# Implementation report — Phase 1

**Project:** Official website of Ayser Shawaqfeh, RN, CWS®, at speranzahealth.net
**Date:** 5 October 2026
**Status:** Phase 1 complete, built and tested. Not yet deployed: hosting and DNS need your accounts.

## 1. Starting point

- There was no existing website repository. The only source material was `Ayser_Shawaqfeh_SEO_Plan_2026.docx`, plus the facts Ayser confirmed in conversation (domain, email, WhatsApp, education, career, certificates, profiles).
- Stack chosen: **Astro 7** static site with no UI framework and self-hosted fonts. This was the simplest way to hit the Lighthouse targets and make Arabic right-to-left a first-class layout.

## 2. Completed in Phase 1

### Architecture
- Arabic and English routes `/ar/…` and `/en/…` with identical slugs. `/` redirects 301 to `/ar/` (Arabic first).
- **One configuration file** (`src/config/site.ts`) for every professional and contact fact.
- **One page registry** (`src/lib/routes.ts`) for slugs, navigation, sitemap and redirects.
- **One central schema system** (`src/lib/schema.ts`), so the Person is defined once and referenced by `@id` on every page.
- Feature flags keep unconfirmed services switched off: patient services, home-visits page and Organization schema.

### Pages (Arabic and English, 14 indexable pages)

| Page | Arabic | English | Schema type |
| --- | --- | --- | --- |
| Home | `/ar/` | `/en/` | WebPage |
| About Ayser Shawaqfeh | `/ar/about-ayser-shawaqfeh/` | `/en/about-ayser-shawaqfeh/` | ProfilePage → Person |
| Credentials & verification | `/ar/credentials/` | `/en/credentials/` | AboutPage → Person |
| Chronic wound care in Jordan | `/ar/chronic-wound-care-jordan/` | `/en/chronic-wound-care-jordan/` | MedicalWebPage |
| Contact | `/ar/contact/` | `/en/contact/` | ContactPage |
| Privacy policy | `/ar/privacy-policy/` | `/en/privacy-policy/` | WebPage |
| Medical disclaimer | `/ar/medical-disclaimer/` | `/en/medical-disclaimer/` | WebPage |
| 404 (bilingual, noindex) | `/404.html` | | none |

The homepage title, H1 and meta description follow the project brief. The English meta description was shortened to 152 characters so it isn't truncated in search results.

### Trust and medical safety
- An emergency notice (nearest ER or 911) appears on every page, plus a stronger version on the Contact page.
- The clinical page carries an author box (name, RN, CWS®, link to credentials), the publication date, the last-review date, a medical-review statement, an educational-purpose note, scope-of-practice wording, six primary references and the professional disclosure.
- The industry-role disclosure appears on the About page, the clinical page and the disclaimer, and in the footer.
- Claims were checked against the brief's restrictions: Ayser is never called a physician, there is no Physician schema, no "best/first/only", no promised outcomes, and no testimonials or statistics.

### Conversion
- WhatsApp, call and email buttons. Every link carries a `ref` code identifying its page and placement, plus GA4 event attributes.
- Contact form with first name, city, reason, preferred method and consent. It runs client-side validation with accessible error messages, stores no data, and opens a pre-filled WhatsApp message or email.
- `?reason=education` pre-selects the training reason. The education CTAs on Home, About and Chronic use it.

### Technical SEO
- A unique title and meta description on every page, plus canonical, hreflang `ar-JO` / `en-JO` / `x-default`, Open Graph and Twitter tags, and 1200×630 sharing images in Arabic and English.
- `sitemap.xml` with hreflang alternates, `robots.txt` and a custom 404.
- 301 redirects in `_redirects` (Netlify/Cloudflare) and `vercel.json`, plus HTML fallbacks. These cover `/`, `/about/`, `/contact/` and the alternate About spellings (`about-aissar-shawaqfeh`, `about-aysar-shawaqfeh`).
- Semantic HTML with one H1 per page, breadcrumbs (visible and in schema), and no thin placeholder pages: Phase 2 topics are listed without links until their pages exist.
- Search Console verification and GA4 run on environment variables. GA4 is consent-gated: no requests and no cookies before *Accept*.

## 3. Test results (all run on the production build)

| Check | Result |
| --- | --- |
| `npm run build` | Passes, 0 errors |
| Internal links and anchors (`check:links`) | 389 links across 24 HTML files, **0 broken** |
| SEO and structured data (`check:schema`) | 14 pages, 14 sitemap URLs, **0 errors**: JSON-LD valid, no forbidden types, no dangling `@id`, 1 H1 per page, unique titles and descriptions, reciprocal hreflang |
| axe-core (WCAG 2.2 AA + best practice) | **0 violations** on all pages |
| Lighthouse mobile, English pages | 100 / 100 / 100 / 100 (Performance / Accessibility / Best Practices / SEO) |
| Lighthouse mobile, Arabic pages | 98–99 / 100 / 100 / 100. CLS 0, LCP about 2.0 s under Lighthouse's simulated slow 4G |
| Mobile layout at 390 px | No horizontal overflow on any page (checked by script and screenshots) |
| Keyboard | Skip link is the first focus stop; visible focus ring; Esc closes the mobile menu |
| Form | Empty submit shows 5 errors and focuses the first; invalid names are rejected; a valid submit produces the correct WhatsApp message; without JavaScript the form hides and direct links remain |
| Consent | Without consent: 0 Google requests and 0 cookies. After *Accept*, GA loads and the choice persists; *Decline* persists |

**Why Arabic Performance is 98–99, not 100:** Arabic pages preload three Arabic font weights plus Inter (about 180 KB) so the text doesn't jump when fonts arrive (CLS went from 0.34 to 0). That download pushes simulated LCP to about 2.0 s. The figures will improve on a CDN, and they're well above the target of 90.

**Not yet testable here:** Google's Rich Results Test and the live Core Web Vitals field data both need the site to be deployed on its public URL.

## 4. Assumptions made

1. **Public spelling "Ayser Shawaqfeh"**, as in the project brief, and it matches LinkedIn and Instagram. The certificate spelling "AISSAR SHAWAQFEH" appears on the Credentials page and in schema `alternateName`. Switching takes about 5 minutes (see README).
2. **Patient services are off** (`patientServicesConfirmed: false`), because no licensed pathway has been confirmed yet. That means no home-visits page, no "book an assessment" CTA, and no LocalBusiness or Organization schema.
3. **Contact details** (aissar@speranzahealth.net, +962 79 883 9394) were taken from Ayser's message of 5 October 2026.
4. **Experience** is described as "about 9 years" and computed from the 2017 start year, so it updates automatically each year.
5. **Training offer:** the site says Ayser offers lectures and workshops for healthcare teams. It does not name institutions, because none were given.
6. **Al-Wafi** is named in the disclosure. If the employer doesn't allow that, change it to "a medical supplies distributor in Jordan" in `src/lib/i18n.ts`.
7. **Emergency number 911** (Jordan's unified emergency number).

## 5. Information still required from Ayser

| # | Item | Where it goes |
| --- | --- | --- |
| 1 | Final public name spelling: Ayser or Aissar | `site.ts → person` |
| 2 | Are direct patient services provided now? Through which licensed entity or licence? | `flags.patientServicesConfirmed`, `flags.homeVisitsPage` |
| 3 | Is Speranza Health a registered organisation? | `flags.organizationConfirmed` |
| 4 | Confirmed service areas beyond Amman | `contact.serviceAreas` |
| 5 | Response hours | `contact.hours` |
| 6 | Approved professional photo, plus a landscape photo | `person.photo`, About page, OG images |
| 7 | Direct ABWM directory link for your listing | `credentials → cws.verifyUrl` |
| 8 | Publishable nursing-licence wording (body, year) | `nursingLicence` |
| 9 | Issuer of the Key Account Management certificate | `credentials → kam.issuer` |
| 10 | YouTube channel URL | `profiles → youtube` (set `verified: true`) |
| 11 | GA4 measurement ID and Search Console token | host environment variables |
| 12 | Al-Wafi permission to be named, and to do outside clinical work | `i18n.ts → disclosure` |
| 13 | Hosting account (Cloudflare Pages recommended) and DNS access for speranzahealth.net | deployment |

## 6. Next: Phase 2 and Phase 3

- **Phase 2:** Pressure injuries, Diabetic foot, Surgical wounds, NPWT/VAC, Education & training, and the article system with an index, the author block, Article + BreadcrumbList schema, and per-article references and review dates. The templates and schema builders (`articleNode`) are ready.
- **Phase 3:** the 12 initial articles (topic 12 only with written consent), video embeds with VideoObject, a deeper internal-linking pass, the home-visits page if confirmed, and a re-run of Lighthouse on the live domain.
- The **Google Business Profile** is prepared in `docs/google-business-profile.md`. It has not been created.
