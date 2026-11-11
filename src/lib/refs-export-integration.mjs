/**
 * Build step (11 Nov 2026): moves the generated references file (src/pages/references-export.html.ts) out of
 * dist/ so it is never published. On Aissar's laptop (where website/ sits inside the "Speranza health" work
 * folder next to CLAUDE.md) it is saved there as «مراجع الموقع - References.html»; elsewhere (GitHub Actions)
 * it is simply removed from the build.
 */
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const REFS_FILE_NAME = 'مراجع الموقع - References.html';

export default function refsExport() {
  return {
    name: 'refs-export',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const src = join(fileURLToPath(dir), 'references-export.html');
        if (!existsSync(src)) return;
        const html = readFileSync(src, 'utf8');
        unlinkSync(src);
        const work = resolve(process.cwd(), '..');
        if (existsSync(join(work, 'CLAUDE.md')) && existsSync(join(work, 'website'))) {
          writeFileSync(join(work, REFS_FILE_NAME), html);
          logger.info(`refs-export: updated ${join(work, REFS_FILE_NAME)}`);
        } else {
          logger.info('refs-export: not on the work laptop, file not saved (removed from the build)');
        }
      },
    },
  };
}
