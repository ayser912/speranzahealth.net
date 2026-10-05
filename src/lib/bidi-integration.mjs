/**
 * Build step: in Arabic (RTL) pages, a trailing "®" after a Latin term (e.g. "CWS®") is a
 * neutral character and the browser places it on the wrong side. Inserting an invisible
 * LEFT-TO-RIGHT MARK (U+200E) after it keeps "CWS®" rendered correctly. JSON-LD and other
 * <script> blocks are left untouched.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (p.endsWith('.html')) yield p;
  }
}

export default function bidiFix() {
  return {
    name: 'bidi-fix',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = join(fileURLToPath(dir), 'ar');
        let n = 0;
        for await (const file of walk(root)) {
          const html = await readFile(file, 'utf8');
          const parts = html.split(/(<script[\s\S]*?<\/script>)/g);
          const out = parts
            .map((p) => (p.startsWith('<script') ? p : p.replace(/([A-Za-z])®(?!‎)/g, '$1®‎')))
            .join('');
          if (out !== html) { await writeFile(file, out); n++; }
        }
        logger.info(`bidi-fix: updated ${n} Arabic page(s)`);
      },
    },
  };
}
