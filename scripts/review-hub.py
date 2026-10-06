"""Writes the review hub page (index.html) listing every page in both languages. Usage: review-hub.py <outdir>"""
import json, sys, os, html
OUT = sys.argv[1]
idx = json.load(open(os.path.join(OUT, '_pages.json'), encoding='utf-8'))
idx['index.html'] = {'ar': 'الصفحة الرئيسية', 'en': 'Homepage'}
os.remove(os.path.join(OUT, '_pages.json'))
groups = [
  ('Main pages', 'الصفحات الرئيسية', ['index.html', 'about-aissar-shawaqfeh/index.html', 'wound-care-education/index.html', 'contact/index.html']),
  ('Wound care', 'العناية بالجروح', ['chronic-wound-care-jordan/index.html', 'pressure-injury-care/index.html', 'diabetic-foot-wounds/index.html', 'surgical-wound-care/index.html', 'negative-pressure-wound-therapy/index.html']),
  ('Articles', 'المقالات', ['articles/index.html'] + sorted([k for k in idx if k.startswith('articles/') and k != 'articles/index.html'], key=lambda k: k)),
  ('Legal', 'الصفحات القانونية', ['privacy-and-disclaimer/index.html']),
]
seen = set(k for _, _, ks in groups for k in ks)
missing = [k for k in idx if k not in seen]
assert not missing, missing
rows = []
for en, ar, keys in groups:
    rows.append(f'<section class="group"><h2><span lang="en">{en}</span><span lang="ar" dir="rtl">{ar}</span></h2><ul class="pages">')
    for k in keys:
        e = idx[k]
        rows.append(f'<li><a class="ar" lang="ar" dir="rtl" href="ar/{k}">{html.escape(e["ar"])}</a><a class="en" lang="en" href="en/{k}">{html.escape(e["en"])}</a></li>')
    rows.append('</ul></section>')
total = len(idx) * 2
page = f'''<title>Aissar Shawaqfeh Website</title>
<meta name="robots" content="noindex, nofollow">
<style>
/* Layout: one centred column; two language entry tiles, then a two-column page index (Arabic | English) per group. */
@font-face {{ font-family: "Plex Arabic"; font-weight: 400; src: url(fonts/plex-arabic-400.woff2) format("woff2"); }}
@font-face {{ font-family: "Plex Arabic"; font-weight: 700; src: url(fonts/plex-arabic-700.woff2) format("woff2"); }}
@font-face {{ font-family: "Inter Site"; font-weight: 100 900; src: url(fonts/inter-latin-var.woff2) format("woff2"); }}
:root {{
  --bg: #f5f8f7; --panel: #ffffff; --ink: #12302e; --muted: #4a6461; --line: #cfdad7; --teal: #0b6e69; --mint: #e3f0ec;
  --font-en: "Inter Site", "Segoe UI", system-ui, sans-serif; --font-ar: "Plex Arabic", "Segoe UI", Tahoma, sans-serif;
}}
@media (prefers-color-scheme: dark) {{ :root:not([data-theme="light"]) {{ --bg: #0f1d1c; --panel: #152826; --ink: #e4efec; --muted: #a6bdb9; --line: #2b4440; --teal: #5cc4bc; --mint: #1c3532; color-scheme: dark; }} }}
:root[data-theme="dark"] {{ --bg: #0f1d1c; --panel: #152826; --ink: #e4efec; --muted: #a6bdb9; --line: #2b4440; --teal: #5cc4bc; --mint: #1c3532; color-scheme: dark; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--font-en); font-size: 16px; line-height: 1.55; }}
[lang="ar"] {{ font-family: var(--font-ar); }}
.wrap {{ max-width: 60rem; margin: 0 auto; padding-inline: 16px; padding-block: 2.5rem 3rem; display: grid; gap: 2rem; }}
header h1 {{ margin: 0; font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.3rem); line-height: 1.25; text-wrap: balance; }}
header h1 [lang="ar"] {{ display: block; font-size: 0.85em; color: var(--muted); font-weight: 700; }}
header p {{ margin: 0.75rem 0 0; color: var(--muted); max-width: 62ch; }}
.status {{ display: inline-block; margin-top: 1rem; font-size: 0.85rem; padding: 0.2rem 0.7rem; border-radius: 999px; background: var(--mint); color: var(--teal); font-weight: 600; }}
.entries {{ display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); }}
.entry {{ display: grid; gap: 0.35rem; text-decoration: none; color: var(--ink); background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 1.25rem 1.4rem; }}
.entry:hover {{ border-color: var(--teal); }}
.entry:focus-visible, a:focus-visible {{ outline: 3px solid var(--teal); outline-offset: 2px; }}
.entry strong {{ font-size: 1.35rem; color: var(--teal); }}
.entry span {{ color: var(--muted); font-size: 0.95rem; }}
.group h2 {{ display: flex; justify-content: space-between; gap: 1rem; font-size: 1rem; margin: 0 0 0.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--line); }}
.pages {{ list-style: none; margin: 0; padding: 0; }}
.pages li {{ display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1.5rem; padding-block: 0.6rem; border-bottom: 1px solid var(--line); }}
.pages a {{ color: var(--ink); text-decoration-color: var(--line); text-underline-offset: 0.2em; min-width: 0; }}
.pages a:hover {{ color: var(--teal); text-decoration-color: var(--teal); }}
.pages .ar {{ order: 2; text-align: right; }}
.pages .en {{ order: 1; }}
.note {{ font-size: 0.9rem; color: var(--muted); border-top: 1px solid var(--line); padding-top: 1rem; margin: 0; }}
@media (max-width: 34rem) {{ .pages li {{ grid-template-columns: 1fr; }} .pages .ar {{ order: 1; }} .pages .en {{ order: 2; }} }}
</style>
<main class="wrap">
  <header>
    <h1>Aissar Shawaqfeh website <span lang="ar" dir="rtl">موقع أيسر شواقفه</span></h1>
    <p>Review copy of speranzahealth.net: {total} pages in Arabic and English, exactly as they will be published. Open a language to browse it like the live site, or jump to any page below.</p>
    <span class="status">Review copy, not yet live</span>
  </header>
  <nav class="entries" aria-label="Choose a language">
    <a class="entry" href="ar/index.html" lang="ar" dir="rtl"><strong>الموقع العربي</strong><span>النسخة الأساسية للموقع، من اليمين إلى اليسار</span></a>
    <a class="entry" href="en/index.html"><strong>English site</strong><span>The complete English version</span></a>
  </nav>
  {''.join(rows)}
  <p class="note">Inside this preview, WhatsApp, phone and email buttons may not open an app, and the contact form may not launch WhatsApp; they work normally on the real domain. Search engines are told not to index this copy.</p>
</main>
'''
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(page)
print('hub written')
