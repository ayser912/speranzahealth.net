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
| Name, titles, phone/WhatsApp/email, profiles, credentials, team, videos, media, flags | `src/config/site.ts` |
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
- No "best / first / only / number one" claims, no guaranteed healing or outcomes, no invented qualifications, testimonials, statistics or partnerships. Missing facts → clearly marked TODO, then ask him.
- Say "diabetic foot wound care", never "diabetic foot specialist".
- Audience (11 Nov 2026): Speranza Health is an **Arabic platform for people worldwide, with a focus on the Middle East**. Never describe the platform as Jordanian or limit services/training to Jordan. Factual items (his university, press headlines as published, privacy law) may still name Jordan. «Speranza» = «الأمل» / “hope” — never say it is Italian.
- Experience wording: "about 9 years in healthcare". **No employment information** (employer, job title, company) anywhere.
- Speranza Health is a digital platform, not yet a registered entity. Remote consultation is **live** since 11 Nov 2026 (`flags.remoteConsultationLive=true`, `patientServicesConfirmed=true`): diagnosis or medical advice through remote consultation with the relevant specialist, a home visit, or a clinic/centre appointment. Booking is by WhatsApp/contact page for now; an online booking flow is a later step.
- Training is for physicians, nurses, pharmacists and physiotherapists, anywhere in the world.
- Logo motion and colours (chosen 11 Nov 2026: "motion 5 + colours D", 2D only, NOT 3D): the header and homepage logos are drawn inline from the original files by `src/components/LogoArt.astro` + `src/lib/logo-art.mjs` (exact path data, never edit the shapes); the mark floats gently and the gold wings breathe (`motion.css`). Background = mint and gold mist (`--mist` in `global.css`) on the homepage hero and behind every page title. All motion is off with prefers-reduced-motion.
- Instagram videos are "educational/awareness" («تثقيفية», not «تعليمية») and live on the homepage.
- Articles keep references collapsed and link to the full list on the wound-care hub (`/…/wound-care/#all-references`).
- Site search (11 Nov 2026): header box on every page + `/ar/search/`, `/en/search/` (noindex). The index is built from the final HTML by `src/lib/search-integration.mjs` into `dist/{lang}/search-index.json`, so new pages are searchable automatically; it only exists after `npm run build` (use `npm run preview`, not `npm run dev`, to test search).
- Contact form: first name, preferred contact method, consent only. Never ask for wound photos, diagnoses or documents. Emergencies are not handled through the site or WhatsApp.
- Patient images only with written consent + de-identification. Wound photos on public pages stay behind the "عرض الصور" veil (see `healing-journeys.astro`); strip EXIF, watermark `speranzahealth.net`.
- Every clinical page keeps: author box, credentials link, educational note, emergency guidance, references, reviewed date.

## Safety and accounts
- Aissar types his own passwords and verification codes. Never ask for, read or store `ADMIN_PASSWORD`, tokens or `.env` values; never commit `.env`.
- DNS lives at Replit (Name.com). Do not touch Google Workspace MX/SPF/DKIM/DMARC, Clerk records, nameservers or domain ownership.
- OAuth/permission grants and anything that sends messages or publishes outside this repo: ask first.

## Quality bar
- Build passes with 0 link errors and 0 schema errors (58 indexable pages as of 11 Nov 2026). hreflang/lang codes are plain `ar` / `en`.
- Check Arabic RTL and English LTR, phone width (390px) and desktop. Header: tabs visible on desktop/tablet; the Menu button appears only at ≤48rem.
- Respect `prefers-reduced-motion`; keep visible focus states and accessible contrast.

## Open items (as of 5 Nov 2026)
- Wound-type labels for the 8 example photos on the healing-journeys page (currently describe location) — waiting for Aissar.
- Licensed pathway for direct patient services; Speranza Health registration; video links; Vercel Pro before real cases go into the gallery.
