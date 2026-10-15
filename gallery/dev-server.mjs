// Local development server: STORE=fs SESSION_SECRET=... ADMIN_PASSWORD=... node dev-server.mjs
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

process.env.STORE ||= 'fs';
const { GET, POST, HEAD } = await import('./api/app.js');
const types = { '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.txt': 'text/plain' };
const port = Number(process.env.PORT || 4600);

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname.startsWith('/static/') || /^\/(favicon[^/]*|robots\.txt)$/.test(url.pathname)) {
    try {
      const f = path.join('public', path.normalize(url.pathname));
      const buf = await readFile(f);
      res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
      return res.end(buf);
    } catch { res.writeHead(404); return res.end(); }
  }
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const body = chunks.length ? Buffer.concat(chunks) : undefined;
  const request = new Request(url, { method: req.method, headers: req.headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : body, duplex: 'half' });
  const fn = { GET, POST, HEAD }[req.method] || GET;
  const r = await fn(request);
  const headers = {};
  r.headers.forEach((v, k) => { if (k !== 'set-cookie') headers[k] = v; });
  const cookies = r.headers.getSetCookie?.() || [];
  if (cookies.length) headers['set-cookie'] = cookies;
  res.writeHead(r.status, headers);
  res.end(Buffer.from(await r.arrayBuffer()));
}).listen(port, () => console.log(`gallery dev server on http://localhost:${port}`));
