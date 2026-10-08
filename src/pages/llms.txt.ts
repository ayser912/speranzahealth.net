import type { APIRoute } from 'astro';
import { person, credentials, contact, profiles, team } from '../config/site';
import { pages, path, type PageKey } from '../lib/routes';
import { articles, articlePath } from '../content/articles/index';
import { abs } from '../lib/schema';
import chronic from '../content/pages/chronic';
import pressure from '../content/pages/pressure';
import diabeticFoot from '../content/pages/diabetic-foot';
import surgical from '../content/pages/surgical';
import npwt from '../content/pages/npwt';

/**
 * /llms.txt — a plain-language map of the site for AI assistants (llmstxt.org convention).
 * Generated from the same config and content files as the pages, so it never drifts from them.
 */
const topics: Array<[PageKey, { ar: { title: string; description: string }; en: { title: string; description: string } }]> = [
  ['chronic', chronic], ['pressure', pressure], ['diabeticFoot', diabeticFoot], ['surgical', surgical], ['npwt', npwt],
];

export const GET: APIRoute = () => {
  const cws = credentials.find((c) => c.id === 'cws')!;
  const verified = profiles.filter((p) => p.verified);
  const L: string[] = [];
  L.push(`# ${person.name.en} (${person.name.ar}), RN, CWS® — Wound care in Jordan`);
  L.push('');
  L.push(`> ${person.bio.en}`);
  L.push('');
  L.push(`> ${person.bio.ar}`);
  L.push('');
  L.push('## Key facts');
  L.push(`- Name: ${person.name.en} (Arabic: ${person.name.ar}). Other spellings: ${person.alternateNames.join(', ')}.`);
  L.push(`- Title: ${person.title.en} / ${person.title.ar}`);
  L.push(`- Credentials: ${credentials.map((c) => `${c.name.en} — ${c.issuer.en} (${c.year})`).join('; ')}; Registered Nurse licensed in Jordan.`);
  L.push(`- Verify CWS®: ${cws.verifyUrl}`);
  L.push(`- Areas: ${person.knowsAbout.en.join('; ')}.`);
  L.push(`- Works with a multidisciplinary team: ${team.map((t) => t.en).join(', ')}.`);
  L.push(`- Serves: all of Jordan. Languages: Arabic, English.`);
  L.push(`- Scope: Registered Nurse and wound specialist, not a physician. Diagnosis, prescribing and surgical decisions stay with the physician. The site gives education, not individual medical advice; emergencies are not handled online.`);
  L.push(`- Contact: ${abs(path('en', 'contact'))} · WhatsApp ${contact.phoneDisplay} · ${contact.email}`);
  if (verified.length) L.push(`- Profiles: ${verified.map((p) => `${p.label} ${p.url}`).join(' · ')}`);
  L.push('');
  for (const lang of ['en', 'ar'] as const) {
    L.push(lang === 'en' ? '## Main pages (English)' : '## الصفحات الرئيسية (العربية)');
    L.push(`- [${pages.home.nav[lang]}](${abs(path(lang, 'home'))})`);
    L.push(`- [${pages.about.nav[lang]}](${abs(path(lang, 'about'))}): ${lang === 'en' ? 'profile, credentials and verification, FAQ' : 'نبذة، المؤهلات والتحقق، أسئلة شائعة'}`);
    for (const [k, d] of topics) L.push(`- [${d[lang].title}](${abs(path(lang, k))}): ${d[lang].description}`);
    L.push(`- [${pages.education.nav[lang]}](${abs(path(lang, 'education'))})`);
    L.push(`- [${pages.contact.nav[lang]}](${abs(path(lang, 'contact'))})`);
    L.push('');
    L.push(lang === 'en' ? '## Articles (English)' : '## المقالات (العربية)');
    for (const a of articles) L.push(`- [${a[lang].title}](${abs(articlePath(lang, a.slug))}): ${a[lang].description}`);
    L.push('');
  }
  L.push('## Optional');
  L.push(`- [Privacy and medical disclaimer](${abs(path('en', 'legal'))})`);
  L.push(`- [Sitemap](${abs('/sitemap.xml')})`);
  L.push('');
  return new Response(L.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
