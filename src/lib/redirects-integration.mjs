/** Writes host-level 301 rules (Netlify / Cloudflare Pages `_redirects`, Vercel `vercel.json`) next to the build. */
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export default function hostRedirects(list) {
  return {
    name: 'host-redirects',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const lines = list.flatMap(([from, to]) => {
          const bare = from.replace(/\/$/, '') || '/';
          return bare === '/' ? [`/ ${to} 301`] : [`${bare} ${to} 301`, `${bare}/ ${to} 301`];
        });
        await writeFile(join(out, '_redirects'), lines.join('\n') + '\n');
        const vercel = {
          trailingSlash: true,
          redirects: list.map(([from, to]) => ({ source: from.replace(/\/$/, '') || '/', destination: to, permanent: true })),
        };
        await writeFile(join(out, 'vercel.json'), JSON.stringify(vercel, null, 2));
        logger.info(`host-redirects: ${list.length} rules written`);
      },
    },
  };
}
