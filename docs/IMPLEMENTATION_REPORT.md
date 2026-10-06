# Implementation report — Phases 1, 2 and 3

**Project:** Official website of Aissar Shawaqfeh (أيسر شواقفه), RN, CWS®, at speranzahealth.net
**Date:** 6 October 2026
**Status:** All three phases are built, tested and committed. A private review copy is published for Aissar to browse. The site is not live yet: that needs hosting and DNS access.

## 1. What exists now

**48 indexable pages**: 24 in Arabic (RTL, the primary version) and 24 in English (LTR), plus a bilingual 404.

| Section | Pages (each in AR + EN) |
| --- | --- |
| Core | Home · About Aissar Shawaqfeh · Credentials and verification · Contact · Privacy policy · Medical disclaimer |
| Wound care (menu group) | Chronic wound care in Jordan · Pressure injuries · Diabetic foot wounds · Surgical wound care · NPWT / VAC |
| Education | Wound-care education and training |
| Articles | Articles index + 11 articles |

### Articles (initial topics 1–11)

| # | Article | Hub page |
| --- | --- | --- |
| 1 | When should you see a wound-care specialist? | Chronic wounds |
| 2 | Why does a chronic wound fail to heal? (TIME / TIMERS) | Chronic wounds |
| 3 | Pressure injury stages and warning signs | Pressure injuries |
| 4 | Diabetic foot wounds: common mistakes to avoid | Diabetic foot |
| 5 | What is VAC therapy? What to expect during NPWT | NPWT |
| 6 | Wound infection warning signs you should not ignore | Chronic wounds |
| 7 | Choosing wound dressings by tissue type and exudate | Chronic wounds |
| 8 | Wound care after surgery: a practical guide for home | Surgical wounds |
| 9 | Venous and arterial leg ulcers: what is the difference? | Chronic wounds |
| 10 | How to prepare for a wound-care assessment | Chronic wounds |
| 11 | Common mistakes in home wound care | Chronic wounds |

**Topic 12, an anonymised wound-care journey, is not written.** It needs the patient's documented written consent and de-identified material first.

## 2. Work completed

### Phase 1: foundation (5–6 October)
- Astro static site with Arabic and English routes, and a single settings file for every fact, contact detail and flag.
- A central schema builder; core pages; technical SEO (canonical, hreflang ar-JO / en-JO / x-default, Open Graph, sitemap, robots.txt, 404, 301 redirects).
- A consent-gated GA4 setup; a privacy-first contact form; bilingual sharing images.
- The public name changed to **أيسر شواقفه / Aissar Shawaqfeh**. The old About URL redirects, and the old spellings are kept only as schema `alternateName`.

### Phase 2: topic pages and article system
- Five clinical topic pages and the education page, built on one shared clinical template.
- That template puts the author box (name, RN, CWS®, link to credentials), the publication and last-review dates, a medical-review statement, an educational note, a contents list, amber emergency callouts, the professional CTA, related pages, related articles, references and the industry disclosure on **every** clinical page and article.
- **Article system:** each article is one data file holding both languages. The system builds the article pages, the index grouped by topic, related-article cards on the hub pages, three-level breadcrumbs, `Article` + `MedicalWebPage` + `BreadcrumbList` schema, and an `ItemList` on the index.
- **Navigation:** an accessible "Wound care" dropdown (keyboard, Esc and outside-click close it; it expands inline on mobile; without JavaScript it shows as a list). The footer now has a wound-care column. Every required page is reachable from the menu.

### Phase 3: content, linking, video readiness
- 11 articles, written Arabic first with professionally edited English (not literal translation). Each one cites primary sources.
- **Internal linking:** in-text links between topic pages and articles, "Related articles" cards, a "Back to [hub]" link on every article, homepage cards for every area plus featured articles, and About-page focus areas linked to their pages.
- **Video:** a privacy-friendly YouTube component (loads youtube-nocookie only on click) plus `VideoObject` schema. Both stay inactive until an original video exists. The "Watch educational videos" button appears automatically once the YouTube profile is marked verified.
- **Conversion events:** `video_play` added to the existing WhatsApp, phone, email, CTA and lead events.

### References used (verified sources)
These are the EPUAP/NPIAP/PPPIA guideline (4th edition, 2026) and the NPIAP staging paper; IWGDF 2023; IWII 2022; WUWHS exudate consensus 2019; EWMA NPWT document 2017; NICE NG125; WHO SSI guidelines 2018; ESVS 2022 venous guidelines; the Global Vascular Guidelines on CLTI (2019); Atkin TIMERS 2019; Schultz 2003; Frykberg & Banks 2015; and the Jordanian Nursing Council standards.

## 3. Test results (production build, 6 October 2026)

| Check | Result |
| --- | --- |
| Build | Passes: 49 pages, 0 errors |
| Internal links and anchors | 2,263 links across 58 HTML files, **0 broken** |
| SEO and structured data | 48 pages, 48 sitemap URLs, **0 errors**, 0 warnings. Titles ≤ 65 characters, descriptions ≤ 160, one H1 per page, no skipped heading levels, reciprocal hreflang, no Physician or LocalBusiness types |
| axe-core (WCAG 2.2 AA + best practice), all 48 pages | **0 violations** |
| Mobile at 390 px, all 48 pages | 0 horizontal overflow, 0 JavaScript errors |
| Lighthouse mobile (sample of every page type) | English 100/100/100/100; Arabic 99/100/100/100; CLS 0 everywhere |
| Claims review | No "best / first / only / guaranteed" claims about Aissar; no physician wording; no invented services, partners, testimonials or statistics |

Arabic Performance is 99 rather than 100 because Arabic pages preload three Arabic font weights so the text doesn't shift when fonts arrive.

## 4. Assumptions

1. The public name is أيسر شواقفه / Aissar Shawaqfeh, confirmed 6 October 2026.
2. **Patient services stay off** (`patientServicesConfirmed: false`): no home-visits page, no assessment-booking CTA, no LocalBusiness schema. Clinical pages tell patients to discuss their care with their treating team, and offer professionals training and contact.
3. **Training is described generically** (topics, audiences, formats). No institutions, durations or prices are named because none were given.
4. **Al-Wafi is named in the disclosure** (`src/lib/i18n.ts`). Change it if the employer prefers not to be named.
5. **Emergency number 911.**
6. **No physician reviewer is listed.** Pages state that they contain no diagnostic or prescribing guidance requiring physician review. A named reviewer can be added per page, with their written agreement.

## 5. Information still required from Aissar

| # | Item | Where it goes |
| --- | --- | --- |
| 1 | Are direct patient services provided now, and through which licensed entity or licence? | `flags.patientServicesConfirmed`, `flags.homeVisitsPage` |
| 2 | Is Speranza Health a registered organisation? | `flags.organizationConfirmed` |
| 3 | Confirmed service areas beyond Amman | `contact.serviceAreas` |
| 4 | Response hours | `contact.hours` |
| 5 | Approved professional photos | `person.photo`, About page, sharing images |
| 6 | Your direct ABWM directory listing link | `credentials → cws.verifyUrl` |
| 7 | Publishable nursing-licence wording | `nursingLicence` |
| 8 | Issuer of the Key Account Management certificate | `credentials → kam.issuer` |
| 9 | YouTube channel URL, and any original videos | `profiles → youtube`; `video` field on pages or articles |
| 10 | GA4 measurement ID and Search Console token | host environment variables |
| 11 | Al-Wafi's permission to be named, and to do outside clinical work | `i18n.ts → disclosure` |
| 12 | Hosting account (Cloudflare Pages recommended) and DNS access | deployment |
| 13 | Written consent and material for article 12, if wanted | new article file |
| 14 | A physician willing to be named as medical reviewer (optional) | `medicalReviewer` on relevant pages |

## 6. Next steps

1. Aissar reviews the published review copy and sends corrections.
2. Deploy to Cloudflare Pages, connect speranzahealth.net, add the GA4 and Search Console values, and submit the sitemap.
3. Re-run Lighthouse and the Rich Results Test on the live domain.
4. Update the LinkedIn and Instagram display names to the new spelling, and link both to the site.
5. Afterwards, publish new articles every two weeks (see the README).
