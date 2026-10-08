import type { APIRoute } from 'astro';

/**
 * Everything is open to search engines and AI assistants on purpose: being read by them is how
 * the site gets found and cited. The named group lists the main AI crawlers explicitly so the
 * intent is unambiguous (some only crawl when named).
 */
const aiAgents = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',            // OpenAI / ChatGPT
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',       // Anthropic / Claude
  'PerplexityBot', 'Perplexity-User',                   // Perplexity
  'Google-Extended', 'Bingbot', 'Applebot', 'Applebot-Extended', 'CCBot', 'DuckAssistBot', 'meta-externalagent',
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://speranzahealth.net/').replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiAgents.map((a) => `User-agent: ${a}`),
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
