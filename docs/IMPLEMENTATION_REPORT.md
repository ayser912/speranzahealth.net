# Implementation report — Phases 1, 2 and 3

**Project:** Official website of Aissar Shawaqfeh (أيسر شواقفه), RN, CWS®, at speranzahealth.net
**Date:** 6 October 2026
**Status:** All three phases are built and tested. **Live since 8 October 2026 at https://speranzahealth.net** (GitHub Pages, HTTPS enforced, `www` redirects to the main domain).

## 1. What exists now (simplified 6 October 2026)

**32 indexable pages**: 16 in Arabic (RTL, the primary version) and 16 in English. Pages that covered the same concept were merged, cutting the total from 48 to 32.

| Section | Pages (each in AR + EN) |
| --- | --- |
| Core | Home · About (includes credentials and verification) · Contact · Privacy and medical disclaimer |
| Wound care (menu group) | Chronic wounds · Pressure injuries · Diabetic foot · Surgical wounds · NPWT / VAC. Each is one complete page per wound type. |
| Education | Wound-care education and training |
| Articles | Index + 5 articles: when to see a specialist and how to prepare · wound infection warning signs · choosing dressings · venous vs arterial leg ulcers · home wound-care mistakes |

### Changes requested on 6 October 2026
- **Fewer pages:** About and Credentials merged; Privacy and Disclaimer merged; five articles folded into their topic pages (pressure stages, diabetic foot mistakes, NPWT daily life, after-surgery care, why chronic wounds stall); "preparing for an assessment" merged into "when to see a specialist".
- **Less personal detail:** the career timeline, the employer, the Key Account role and certificate, and the AI certificate were removed. Experience now reads "about 9 years in healthcare". Article bylines are one compact line.
- **No employment wording:** the employer disclosure was replaced with a brand-neutral note ("content is educational, independent and does not promote any brand").
- **Jordan, not Amman:** all copy, titles, schema (`areaServed: Jordan`, no city) and sharing images now say Jordan.
- **Contact form:** first name, preferred contact method and consent only. City and reason were removed.
- **Multidisciplinary team:** a new section on the home, about and every clinical page lists orthopaedic, vascular, general and plastic surgery, podiatry, infectious diseases, clinical nutrition and other healthcare professionals, with a team diagram.
- **Pictures and videos:** six original explanatory illustrations (team, TIME framework, pressure points, diabetic foot check, NPWT parts, surgical wound signs); a photo slot in the hero and About page (ready for an approved photo); and a video section on every main page. It embeds videos from `videos` in the settings file and links to Instagram until videos are added.

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
| Build | Passes: 33 pages, 0 errors |
| Internal links and anchors | 1,365 links across 42 HTML files, **0 broken** |
| SEO and structured data | 32 pages, 32 sitemap URLs, **0 errors**, 0 warnings. Titles ≤ 65 characters, descriptions ≤ 160, one H1 per page, no skipped heading levels, reciprocal hreflang, no Physician or LocalBusiness types |
| axe-core (WCAG 2.2 AA + best practice), all 32 pages | **0 violations** |
| Mobile at 390 px, all 32 pages | 0 horizontal overflow, 0 JavaScript errors |
| Lighthouse mobile (sample) | English 100/100/100/100; Arabic 99/100/100/100; CLS 0 |
| Claims review | No "best / first / only / guaranteed" claims about Aissar; no physician wording; no invented services, partners, testimonials or statistics |

Arabic Performance is 99 rather than 100 because Arabic pages preload three Arabic font weights so the text doesn't shift when fonts arrive.

## 4. Assumptions

1. The public name is أيسر شواقفه / Aissar Shawaqfeh, confirmed 6 October 2026.
2. **Patient services stay off** (`patientServicesConfirmed: false`): no home-visits page, no assessment-booking CTA, no LocalBusiness schema. Clinical pages tell patients to discuss their care with their treating team, and offer professionals training and contact.
3. **Training is described generically** (topics, audiences, formats). No institutions, durations or prices are named because none were given.
4. **No employment information** appears anywhere on the site (removed at Aissar's request).
5. **Emergency number 911.**
6. **No physician reviewer is listed.** Pages state that they contain no diagnostic or prescribing guidance requiring physician review. A named reviewer can be added per page, with their written agreement.

## 5. Information still required from Aissar

| # | Item | Where it goes |
| --- | --- | --- |
| 1 | Are direct patient services provided now, and through which licensed entity or licence? | `flags.patientServicesConfirmed`, `flags.homeVisitsPage` |
| 2 | Is Speranza Health a registered organisation? | `flags.organizationConfirmed` |
| 3 | Response hours | `contact.hours` |
| 6 | Publishable nursing-licence wording | `nursingLicence` |
| 7 | Video links (Instagram reels or YouTube) for each topic | `videos` in `src/config/site.ts` |
| 8 | GA4 measurement ID and Search Console token | host environment variables |
| 10 | Written consent and material for article 12, if wanted | new article file |
| 11 | A physician willing to be named as medical reviewer (optional) | `medicalReviewer` on relevant pages |

## 6. Next steps

1. Aissar reviews the live site and sends corrections.
2. Add the GA4 and Search Console values (GitHub → Settings → Secrets and variables → Actions → Variables), verify the domain in Search Console and submit the sitemap.
3. Re-run Lighthouse and the Rich Results Test on the live domain.
4. Update the LinkedIn and Instagram display names to the new spelling, and link both to the site.
5. Afterwards, publish new articles every two weeks (see the README).

## 7. Deployment record (8 October 2026)

- **Hosting:** GitHub Pages, repository `ayser912/speranzahealth.net`, source = GitHub Actions (`.github/workflows/deploy.yml`). Each push to `main` builds, runs the link and schema checks, then deploys.
- **Domain:** bought through Replit (registrar Name.com via Replit). DNS is edited in Replit: project *Speranza Oncology* → Domains → speranzahealth.net → DNS Records.
- **DNS changes made by Aissar:**
  - Removed `A @ 34.111.179.208` (the Speranza Oncology Replit app).
  - Added `A @` 185.199.108.153 / .109.153 / .110.153 / .111.153 and `CNAME www → ayser912.github.io`.
- **Email fix (Google Workspace):** added SPF `v=spf1 include:_spf.google.com ~all`, moved the Google DKIM key to host `google._domainkey`, and removed the two misplaced root TXT records. DMARC (`p=reject`), MX `smtp.google.com`, Google site verification, Replit verification and the five Clerk CNAMEs were left unchanged.
- **Verified live:** HTTPS certificate issued and enforced; `/` redirects to `/ar/`; Arabic RTL and English pages, sitemap, robots.txt, old About URL redirect and custom 404 all respond correctly; `www` redirects to the main domain.
- **Side effect:** the Speranza Oncology app is no longer on speranzahealth.net and stays reachable at `speranza-oncology.replit.app`. Its Clerk sign-in may need a subdomain such as `app.speranzahealth.net` if it is still used.
- **Recommended check:** in Google Workspace Admin → Apps → Gmail → Authenticate email, confirm DKIM shows "Authenticating email". Then send a test email to a Gmail address and confirm SPF, DKIM and DMARC all show PASS under "Show original".

## 8. Update — 9 October 2026
- **Professional photo** (supplied by Aissar) now shows in the homepage hero and on the About page, in Arabic and English. It is served as WebP with a JPEG fallback (480 and 864 px, 9–44 KB) and included in the Person schema as `image`.
- **ABWM verification link:** `https://abwmcertified.org/find-a-specialist/?last_name=SHAWAQFEH`, confirmed to list Aissar Shawaqfeh, CWS, RN. It is used everywhere the site says "Verify the credential".
- **Search engines:** Google Search Console is verified (HTML file `public/google4645688bd33bc0da.html`, which must stay), the sitemap is submitted and 4 key pages are queued for indexing. Bing Webmaster Tools was imported from Search Console; the sitemap was read with 32 URLs.
- Checks: 0 broken links, 0 schema errors, 0 axe violations, Lighthouse mobile 98–100.

## 9. Update — 10 October 2026
- **Homepage feature** between the hero and "Wound care": the Radio Al-Balad 92.5 interview ("Tallet Sobeh", 13 July 2026, 6:39). The 15 MB video is self-hosted in `public/media/` and loads nothing until play; it has a custom play button and VideoObject schema.
- **Experience figures** under the video (supplied by Aissar, labelled as approximate figures from his own records): 1,700+ wound cases, 5,000+ surgical procedures supported, 11+ hospitals, 50+ physicians, 97%+ patient satisfaction, 99%+ physician satisfaction. Wording keeps a nurse's scope. The figures are not in structured data.
- **About → In the media:** Ammannet, Altaj News (13 Jul 2026), Al-Waqai (23 Jun 2026), a Saudi Hospital lecture post and two of Aissar's Facebook posts. The news items are also in Person.subjectOf. The Facebook profile has been added to sameAs.
- Checks: 0 broken links, 0 schema errors, 0 axe violations, Lighthouse mobile 97–100.
