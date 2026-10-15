# Healing journeys gallery — cases.speranzahealth.net

A private, access-controlled gallery of consented, de-identified wound-healing journeys for Speranza Health.
It is a separate Vercel project (`speranza-cases`, root directory `gallery/`) that deploys automatically
when files in this folder change on `main`.

## How access works
- In **/admin → رموز الدخول**, create a personal grant for each person. You get:
  - an unguessable link (`/a/<id>`);
  - a 5-digit code, valid for 7 days by default, max 30.
- The code is shown once; only a salted hash is stored. Send link + code by WhatsApp (button on the page).
- **On the viewer's side:**
  - They must accept the terms each time they enter.
  - 5 wrong codes lock that link.
  - Sessions last 30 minutes.
- **Revoking:** "إلغاء" revokes a grant immediately; any open session stops working.
- Every entry, failed code and case view is listed in **سجل الدخول** (last 30 days).

## Protection of images
- **Storage:** a PRIVATE Vercel Blob store (`speranza-cases-private`, fra1). Media are only served by the app after a session check.
- **Watermark:** every image is re-rendered on each request with a tiled watermark: `SPERANZA HEALTH - CONFIDENTIAL` plus the viewer's reference (e.g. `REF SH-X4T22`) and the date/time. Responses are `no-store`.
- **Metadata:** uploaded images are downscaled in the browser and re-encoded on the server, so location, date and device data are removed. **Videos are not cleaned**: export them without location.
- **Viewer deterrents:** images are blurred until pressed and held; the page blurs when it loses focus; right-click, drag and long-press saving are blocked; print shows nothing.
- **What no website can do:** none of this can block a screenshot. The watermark is what makes a leak traceable.
- **Search engines:** `noindex` headers and robots.txt keep everything out of search engines.

## Publishing a case (admin)
1. **الحالات** → create a draft.
2. Add stages: day number, optional wound area in cm², title and note.
3. Upload photos or videos to each stage. Videos can be up to 300 MB.
4. Tick both consent boxes:
   - written consent is on file;
   - the images are de-identified.
5. Enter the consent date (and an internal reference without the patient's name), then **نشر في المعرض**.
   Publishing is refused until the consent fields are complete and at least one image exists.

## Environment variables (Vercel → speranza-cases → Settings → Environment Variables)
| Key | Set by | Purpose |
| --- | --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Vercel (store connection) | Private storage access |
| `SESSION_SECRET` | set at setup | Signs sessions and hashes codes. Changing it logs everyone out and invalidates all codes |
| `ADMIN_PASSWORD` | **Aissar only** | Admin login (10+ characters). 5 wrong tries lock admin login for 15 minutes |

After changing a variable, redeploy (Deployments → ⋯ → Redeploy).

## Plan
The Hobby (free) plan is fine while the gallery is "under construction". Upgrade to **Pro** before publishing real
cases, because Hobby is for non-commercial use.

## Local development
```bash
cd gallery && npm install && npm run build
STORE=fs SESSION_SECRET=local-dev-secret-at-least-32-characters ADMIN_PASSWORD=local-test-1234 node dev-server.mjs
# http://localhost:4600 — data is kept in ./.data
ADMIN_PW=local-test-1234 node test/e2e.mjs   # end-to-end check with synthetic images (needs Playwright)
```
