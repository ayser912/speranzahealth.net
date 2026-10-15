// Bundles the admin uploader (uses @vercel/blob/client for large video uploads) into public/static/admin.js.
import { build } from 'esbuild';
await build({ entryPoints: ['src/admin.js'], bundle: true, minify: true, format: 'iife', target: 'es2020', outfile: 'public/static/admin.js', platform: 'browser', legalComments: 'none' });
console.log('built public/static/admin.js');
