# Speranza Health — speranzahealth.net (project memory for Claude Code)

Owner: **Aissar Shawaqfeh / أيسر شواقفه** (aissar.912@gmail.com). He writes mostly in Jordanian Arabic; answer in Arabic unless he writes in English.

## What this repo is
- **Website** (repo root): Astro static site, Arabic-first (`/ar/`, RTL) with a full English version (`/en/`, LTR). Live at https://speranzahealth.net.
- **Private case gallery** (`gallery/`): separate Node app on Vercel, live at https://cases.speranzahealth.net (Vercel project `speranza-cases`, root dir `gallery/`). See `gallery/README.md`.
- Full technical guide: `README.md` (where to edit what, feature flags, env vars, deploy). Read it before larger changes.

## Commands (run in the repo root)
```bash
npm install        # first time only (Node 20+; 22 recommended)
npm run dev        # local preview → http://localhost:4321/ar/
npm test           # build + internal link check + schema/SEO check — must pass before every push
```

## How changes go live
- `git push` to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds, runs the checks, deploys to **GitHub Pages**, then pings IndexNow. If a check fails, nothing is published.
- Check the run: `gh run list --limit 1` (or https://github.com/ayser912/speranzahealth.net/actions). The site updates ~1–2 minutes after a green run.
- Changes inside `gallery/` also redeploy the gallery on Vercel automatically.
- Always run `npm test` first, commit with a clear message, then push. Confirm with Aissar before force-pushes, deleting files/pages, or anything hard to undo.

## Single sources of truth (never duplicate these facts elsewhere)
| What | File |
| --- | --- |
| Name, titles, phone/WhatsApp/email, profiles, credentials, team, media, flags | `src/config/site.ts` |
| Remote consultation: specialty profiles, providers (doctors), their hours, booking settings | `src/config/consult.ts` |
| Videos (patients' awareness reels + professionals' videos, grouped by topic) | `src/content/videos.ts` |
| Launch switches for the hidden shop / policies / course store | `src/config/launch.ts` |
| Shop products (name, size, type, price, stock) and policy values | `src/content/shop.ts` |
| Courses (duration, price, online / in person) | `src/content/courses.ts` |
| URLs, nav order, redirects | `src/lib/routes.ts` |
| Shared UI strings | `src/lib/i18n.ts` |
| JSON-LD (pages call `pageGraph()`; never hand-write JSON-LD) | `src/lib/schema.ts` |
| Topic pages copy (AR+EN side by side) | `src/content/pages/*.ts` |
| Articles | `src/content/articles/NN-slug.ts` |
| Colours, fonts, header/nav, components | `src/styles/global.css` (+ `motion.css`) |

## Locked identity and wording (Aissar's decisions — do not change without him)
- Names: **أيسر شواقفه** / **Aissar Shawaqfeh** (spelling on the CWS® certificate). Old spellings only in schema `alternateName`.
- Title AR: **أخصائي جروح معتمد من البورد الأمريكي CWS®** · EN: **American Board–Certified Wound Specialist (CWS®)**.
- **Never** call him «ممرض» / "nurse" / "Registered Nurse" / "RN" anywhere on the site (decided 4 Nov 2026). Never physician/doctor/surgeon. No `Physician` schema; no `LocalBusiness`/`Organization` schema unless the flags say so.
- Scope of practice (23 Nov 2026): do **not** write that he is «ليس طبيبًا» / "not a physician"; describe him simply as a chronic wound specialist («أخصائي جروح مزمنة معتمد من البورد الأمريكي CWS®»), working within the multidisciplinary team. The scope section on the founder page carries a «احجز استشارة أونلاين / عن بعد الآن» button.
- No "best / first / only / number one" claims, no guaranteed healing or outcomes, no invented qualifications, testimonials, statistics or partnerships. Missing facts → clearly marked TODO, then ask him.
- Say "diabetic foot wound care", never "diabetic foot specialist".
- Audience (11 Nov 2026): Speranza Health is an **Arabic platform for people worldwide, with a focus on the Middle East**. Never describe the platform as Jordanian or limit services/training to Jordan. Factual items (his university, press headlines as published) may still name Jordan. **Do not mention Jordan's data-protection law** anywhere on the site (removed 23 Nov 2026). «Speranza» = «الأمل» / “hope” — never say it is Italian.
- Experience wording: "about 9 years in healthcare". **No employment information** (employer, job title, company) anywhere.
- Speranza Health is a digital platform, not yet a registered entity. Remote consultation is **live** since 11 Nov 2026 (`flags.remoteConsultationLive=true`, `patientServicesConfirmed=true`): diagnosis or medical advice through remote consultation with the relevant specialist, a home visit, or a clinic/centre appointment. Since 23 Nov 2026 it has its own page `/…/remote-consultation/` (first item in the header): a profile for every specialty with its providers and their hours, and **online booking inside the platform**. A booking is confirmed instantly and the client gets a confirmation email straight away (day, date, time, specialist, room link, calendar file); the platform inbox gets a copy. The call itself happens in `/…/consultation-room/` (noindex) with an embedded video room. Server: the gallery app (`gallery/lib/consult*.js`, admin page **الاستشارات**). Providers and hours: `src/config/consult.ts` only (never add a named provider without their written agreement). Online booking shows only when a provider has hours AND the server has `SMTP_USER`/`SMTP_PASS` and `DAILY_API_KEY` (see `gallery/README.md`); otherwise the page falls back to WhatsApp booking.
- Header (23 Nov 2026): «عن المؤسس» is **not** in the top navigation; it lives in the footer «روابط» menu.
- Header and footer redesign (24 Nov 2026, Aissar items 1, 11–14): the header is **one row** — logo, search, language, a separate «الاستشارة عن بعد» button, and a Menu button that opens **one side menu** (drawer) with every other entry (`Header.astro`; the consultation is never inside the menu; on phones it gets its own full-width row). Footer: brand + short description only (**no founder line, no emergency line** — the emergency strip at the top stays), then one bar with three menus («العناية بالجروح», «للكوادر الصحية», «روابط») that open on mouse hover or click/tap, then the contact links as small **3D icon tiles** (`ContactIcons.astro`: WhatsApp, phone, email, LinkedIn, Instagram, Facebook).
- Homepage (24 Nov 2026, items 2–10): a **compact** introduction, then two announcements side by side (remote consultation + ABWM preparation, `AbwmPromo variant="card"` without the form), then the awareness videos, then the contact band. Removed from the homepage: the meaning of Speranza, why we created it, services, the multidisciplinary team, how we work, featured articles. Don't bring them back without Aissar.
- Motion style (item 15, chosen 24 Nov 2026 from ten proposals): **3 «تموّج دائري» — circular ripple**. The side menu and its dimmed backdrop grow as circles out of the Menu button (`Header.astro` sets `--cx/--cy`); footer menus open as a circle from the bar; page-to-page: a green circle grows from the clicked point until it fills the screen, then shrinks to reveal the new page (cross-document view transitions; `BaseLayout.astro` head script + `.vt-ripple`; browsers without them just change page); buttons, menu entries and tabs ripple from the press point (BaseLayout script, `.rp`); the consultation button's colours flow green → deep gold → green (gold-ink stop keeps white-text contrast). All in `motion.css`, all off with prefers-reduced-motion.
- Storage (23 Nov 2026): public pages never say where data or images are stored (no hosting provider, cloud or region names).
- Training is for physicians, nurses, pharmacists and physiotherapists, anywhere in the world.
- Logo motion and colours (chosen 11 Nov 2026: "motion 5 + colours D", 2D only, NOT 3D): the header and homepage logos are drawn inline from the original files by `src/components/LogoArt.astro` + `src/lib/logo-art.mjs` (exact path data, never edit the shapes); the mark floats gently and the gold wings breathe (`motion.css`). Background = mint and gold mist (`--mist` in `global.css`) on the homepage hero and behind every page title. All motion is off with prefers-reduced-motion.
- Instagram videos are "educational/awareness" («تثقيفية», not «تعليمية»). Since 23 Nov 2026 they have their own page in the main menu («فيديوهات تثقيفية», `/ar/wound-care-videos/`): one card per topic, reels open in a click-to-load player, plus a search box; the homepage shows the newest four. Videos for professionals («فيديوهات تعليمية») are a separate page under «للكوادر الصحية».
- Professionals' section (23 Nov 2026), menu group «للكوادر الصحية»: Education and training, Videos for professionals (with "book the professional course now" CTAs), ABWM exam preparation (eligibility facts checked on abwmcertified.org on 23 Nov 2026; re-check before editing; the programme is independent, never imply ABWM affiliation or guaranteed passing), Wound-care community (membership terms = Aissar's draft to approve), Wound report tool (works entirely in the page, nothing is sent; never add wording about where data is stored). The ABWM announcement (`AbwmPromo`) appears on the homepage (card version) and the professionals' videos page (with the form).

## Hidden sections (built, not public) — how to show them
The **shop** (`/ar/wound-care-shop/`, item 7), the **payment, delivery and exchange policy** (`/ar/payment-delivery-exchange/`, item 8) and the **course store** (`/ar/wound-care-courses/`, item 11) are built and working, but hidden: no link anywhere, `noindex`, not in the sitemap, site search or llms.txt. They open only by typing the URL (for Aissar's review).
- To publish one when Aissar asks: set its switch to `true` in `src/config/launch.ts` (`shop`, `policies`, `courses`), run `npm test`, commit, push. Menus, footer, sitemap and search pick it up automatically. Publish `shop` and `policies` together.
- Before publishing the shop: replace the example products in `src/content/shop.ts` and set `exampleData = false`; confirm the currency; fill `policy` (payment methods, delivery areas/time/fee, exchange days, course cancellation). Before publishing courses: real data in `src/content/courses.ts`, `exampleData = false`.
- Orders and bookings are sent for confirmation by WhatsApp/email; nothing is paid on the site (no payment gateway yet).
- Site search (11 Nov 2026): header box on every page + `/ar/search/`, `/en/search/` (noindex). The index is built from the final HTML by `src/lib/search-integration.mjs` into `dist/{lang}/search-index.json`, so new pages are searchable automatically; it only exists after `npm run build` (use `npm run preview`, not `npm run dev`, to test search).
- Contact form: first name, preferred contact method, consent only. Booking form: name, email, WhatsApp, chosen time, consent only. Never ask for wound photos, diagnoses or documents. Emergencies are not handled through the site or WhatsApp.
- Patient images only with written consent + de-identification. Wound photos on public pages stay behind the "عرض الصور" veil (see `healing-journeys.astro`); strip EXIF, watermark `speranzahealth.net`.
- Every clinical page keeps: author box, credentials link, educational note, emergency guidance, reviewed date. **References are NOT shown on the site** (Aissar, 11 Nov 2026): keep `refs` in each content file anyway; every build writes them to «مراجع الموقع - References.html» in the work folder (see `src/pages/references-export.html.ts` + `src/lib/refs-export-integration.mjs`), so new articles appear there automatically.

## Safety and accounts
- Aissar types his own passwords and verification codes. Never ask for, read or store `ADMIN_PASSWORD`, tokens or `.env` values; never commit `.env`.
- DNS lives at Replit (Name.com). Do not touch Google Workspace MX/SPF/DKIM/DMARC, Clerk records, nameservers or domain ownership.
- OAuth/permission grants and anything that sends messages or publishes outside this repo: ask first.

## Quality bar
- Build passes with 0 link errors and 0 schema errors (58 indexable pages as of 11 Nov 2026). hreflang/lang codes are plain `ar` / `en`.
- Check Arabic RTL and English LTR, phone width (390px) and desktop. Header: one row on every width with the Menu button (side menu) and the consultation button beside it; at ≤30rem the consultation button drops to its own row.
- Respect `prefers-reduced-motion`; keep visible focus states and accessible contrast.

## Open items (as of 5 Nov 2026)
- Wound-type labels for the 8 example photos on the healing-journeys page (currently describe location) — waiting for Aissar.
- Licensed pathway for direct patient services; Speranza Health registration; video links; Vercel Pro before real cases go into the gallery.
