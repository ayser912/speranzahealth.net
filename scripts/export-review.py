"""Builds a relative-link copy of dist/ for previewing the site without a server (e.g. as a hosted review artifact).
Usage: python3 scripts/export-review.py <outdir>"""
import os, re, sys, shutil, html, json
DIST = os.path.join(os.path.dirname(__file__), '..', 'dist')
OUT = sys.argv[1]
shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)

pages = []
for root, _, files in os.walk(DIST):
    for f in files:
        src = os.path.join(root, f); rel = os.path.relpath(src, DIST)
        if f.endswith('.html'):
            txt = open(src, encoding='utf-8').read()
            if 'http-equiv="refresh"' in txt or rel in ('index.html', '404.html'):
                continue
            pages.append((rel, txt))
        elif rel.startswith(('fonts/',)) or rel in ('favicon.svg',):
            os.makedirs(os.path.dirname(os.path.join(OUT, rel)) or OUT, exist_ok=True)
            shutil.copy(src, os.path.join(OUT, rel))

def to_rel(target, here_dir):
    path, sep, rest = target.partition('?') if '?' in target else (target.split('#')[0], '', '')
    frag = ''
    if '#' in target and '?' not in target:
        frag = '#' + target.split('#', 1)[1]
    query = ('?' + rest) if sep else ''
    if '#' in query:
        query, frag = query.split('#', 1); frag = '#' + frag
    p = path.lstrip('/')
    if p == '' : p = 'index.html'
    elif p.endswith('/'): p += 'index.html'
    return os.path.relpath(p, here_dir) + query + frag

for rel, txt in pages:
    here = os.path.dirname(rel) or '.'
    txt = re.sub(r'(\s(?:href|src))="(/[^"/][^"]*|/)"', lambda m: f'{m.group(1)}="{to_rel(m.group(2), here)}"', txt)
    txt = re.sub(r'url\(/fonts/', lambda m: 'url(' + os.path.relpath('fonts', here) + '/', txt)
    txt = txt.replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex, nofollow">')
    txt = re.sub(r'<link rel="manifest"[^>]*>', '', txt)
    dst = os.path.join(OUT, rel); os.makedirs(os.path.dirname(dst), exist_ok=True)
    open(dst, 'w', encoding='utf-8').write(txt)

# page index for the hub
def meta(txt):
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', txt, re.S)
    t = re.sub('<[^>]+>', ' ', h1.group(1)) if h1 else ''
    return html.unescape(re.sub(r'\s+', ' ', t)).replace('‎', '').strip()
index = {}
for rel, txt in pages:
    lang, rest = rel.split('/', 1)
    index.setdefault(rest, {})[lang] = meta(txt)
json.dump(index, open(os.path.join(OUT, '_pages.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(pages), 'pages exported to', OUT)
