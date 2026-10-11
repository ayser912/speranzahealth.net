import type { APIRoute } from 'astro';
import { site, brand, flags, person, credentials, contact, profiles, team, media, featuredVideo } from '../config/site';
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
  L.push(`# ${site.siteName.en} (${site.siteName.ar}) — Wound care in Jordan, founded by ${person.name.en}, RN, CWS®`);
  L.push('');
  L.push(`> ${brand.description.en} ${brand.meaning.en}.`);
  L.push('');
  L.push(`> ${brand.description.ar} ${brand.meaning.ar}.`);
  L.push('');
  L.push('## Services');
  L.push(`- Remote consultation (video or voice) coordinated with the multidisciplinary medical team${flags.remoteConsultationLive ? '' : ' — coming soon; the physician team is being finalised'}: ${team.filter((t) => t.id !== 'other').map((t) => t.en).join(', ')}. Diagnosis and prescribing stay with the responsible physician; not for emergencies; does not replace a clinical examination when one is needed.`);
  L.push('- Guidance by wound type: chronic wounds, pressure injuries, diabetic foot wounds, surgical wounds, negative pressure wound therapy (NPWT/VAC).');
  L.push('- Education and training for nurses and healthcare teams.');
  L.push('- Educational articles for patients and families (Arabic and English).');
  L.push('');
  L.push(`## Founder: ${person.name.en} (${person.name.ar})`);
  L.push('');
  L.push(`> ${person.bio.en}`);
  L.push('');
  L.push(`> ${person.bio.ar}`);
  L.push('');
  L.push('## Key facts about the founder');
  L.push(`- Name: ${person.name.en} (Arabic: ${person.name.ar}). Other spellings: ${person.alternateNames.join(', ')}.`);
  L.push(`- Title: ${person.title.en} / ${person.title.ar}`);
  L.push(`- Credentials: ${credentials.map((c) => `${c.name.en} — ${c.issuer.en} (${c.year})`).join('; ')}; Registered Nurse licensed in Jordan.`);
  L.push(`- Verify CWS®: ${cws.verifyUrl}`);
  L.push(`- Areas: ${person.knowsAbout.en.join('; ')}.`);
  L.push(`- Works with a multidisciplinary team: ${team.map((t) => t.en).join(', ')}.`);
  L.push(`- Serves: all of Jordan. Languages: Arabic, English.`);
  L.push(`- Scope: Registered Nurse and wound specialist, not a physician. Diagnosis, prescribing and surgical decisions stay with the physician. The site gives education, not individual medical advice; emergencies are not handled online.`);
  L.push(`- Contact: ${abs(path('en', 'contact'))} · WhatsApp ${contact.phoneDisplay} · ${contact.email}`);
  if (verified.length) L.push(`- Profiles: ${verified.map((p) => `${p.label}${p.owner === 'brand' ? ' (Speranza Health)' : ''} ${p.url}`).join(' · ')}`);
  L.push('');
  L.push('## In the media');
  L.push(`- [${featuredVideo.title.en}](${abs(path('en', 'about'))}): ${featuredVideo.outlet.en}, ${featuredVideo.uploadDate}. ${featuredVideo.description.en}`);
  for (const m of media.filter((x) => x.kind === 'news')) L.push(`- [${m.headline.ar}](${m.url}): ${m.outlet.en}${m.date ? `, ${m.date}` : ''} (Arabic). ${m.headline.en}.`);
  L.push('');
  for (const lang of ['en', 'ar'] as const) {
    L.push(lang === 'en' ? '## Main pages (English)' : '## الصفحات الرئيسية (العربية)');
    L.push(`- [${pages.home.nav[lang]}](${abs(path(lang, 'home'))}): ${lang === 'en' ? 'Speranza Health: meaning of the name, purpose, services' : 'سبيرانزا هيلث: معنى الاسم، الهدف، الخدمات'}`);
    L.push(`- [${pages.about.nav[lang]}](${abs(path(lang, 'about'))}): ${lang === 'en' ? 'the founder: profile, interview, credentials and verification, press, FAQ' : 'المؤسس: نبذة، مقابلة، المؤهلات والتحقق، الإعلام، أسئلة شائعة'}`);
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
