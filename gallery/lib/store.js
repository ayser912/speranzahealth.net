/**
 * Storage layer. Production: a PRIVATE Vercel Blob store (nothing is publicly reachable).
 * Local development/tests: STORE=fs keeps the same layout under ./.data.
 *
 * Layout
 *   data/grants/<grantId>.json   personal access grants (code stored only as a salted hash)
 *   data/cases/<caseId>.json     case records (draft or published)
 *   data/log/<yyyy-mm>/<ts>-<rand>.json   access log entries
 *   data/admin-lock.json         admin login throttling
 *   media/<caseId>/<mediaId>.<ext>        images (re-encoded, metadata stripped) and videos
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const useFs = process.env.STORE === 'fs';
const root = path.resolve(process.env.STORE_DIR || '.data');
let blob;
async function B() {
  if (!blob) blob = await import('@vercel/blob');
  return blob;
}

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const c of stream) chunks.push(Buffer.from(c));
  return Buffer.concat(chunks);
}

/** Read a JSON record (always the latest version, never a cached copy). */
export async function readJson(pathname) {
  if (useFs) {
    try { return JSON.parse(await fs.readFile(path.join(root, pathname), 'utf8')); } catch { return null; }
  }
  const { get } = await B();
  try {
    const r = await get(pathname, { access: 'private', useCache: false });
    if (!r || r.statusCode !== 200) return null;
    return JSON.parse((await streamToBuffer(r.stream)).toString('utf8'));
  } catch (e) {
    if (e?.name === 'BlobNotFoundError') return null;
    throw e;
  }
}

export async function writeJson(pathname, data) {
  const body = JSON.stringify(data);
  if (useFs) {
    const f = path.join(root, pathname);
    await fs.mkdir(path.dirname(f), { recursive: true });
    await fs.writeFile(f, body);
    return;
  }
  const { put } = await B();
  await put(pathname, body, { access: 'private', contentType: 'application/json', addRandomSuffix: false, allowOverwrite: true, cacheControlMaxAge: 60 });
}

export async function putFile(pathname, buffer, contentType) {
  if (useFs) {
    const f = path.join(root, pathname);
    await fs.mkdir(path.dirname(f), { recursive: true });
    await fs.writeFile(f, buffer);
    return;
  }
  const { put } = await B();
  await put(pathname, buffer, { access: 'private', contentType, addRandomSuffix: false, allowOverwrite: true });
}

export async function readFile(pathname) {
  if (useFs) {
    try { return await fs.readFile(path.join(root, pathname)); } catch { return null; }
  }
  const { get } = await B();
  try {
    const r = await get(pathname, { access: 'private' });
    if (!r || r.statusCode !== 200) return null;
    return streamToBuffer(r.stream);
  } catch (e) {
    if (e?.name === 'BlobNotFoundError') return null;
    throw e;
  }
}

/** List pathnames under a prefix. */
export async function listPaths(prefix) {
  if (useFs) {
    const out = [];
    async function walk(dir) {
      let entries = [];
      try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return; }
      for (const e of entries) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) await walk(p);
        else out.push(path.relative(root, p).split(path.sep).join('/'));
      }
    }
    await walk(path.join(root, prefix));
    return out.filter((p) => p.startsWith(prefix)).sort();
  }
  const { list } = await B();
  const out = [];
  let cursor;
  do {
    const r = await list({ prefix, cursor, limit: 1000 });
    out.push(...r.blobs.map((b) => b.pathname));
    cursor = r.hasMore ? r.cursor : undefined;
  } while (cursor);
  return out.sort();
}

export async function remove(pathnames) {
  const arr = [].concat(pathnames).filter(Boolean);
  if (!arr.length) return;
  if (useFs) {
    await Promise.all(arr.map((p) => fs.rm(path.join(root, p), { force: true })));
    return;
  }
  const { del } = await B();
  await del(arr);
}

/**
 * Short-lived URL for streaming a private video directly from storage (supports seeking).
 * Only issued after the viewer's session has been checked. Local mode serves through the app.
 */
export async function videoUrl(pathname, seconds = 300) {
  if (useFs) return `/__local-media/${encodeURIComponent(pathname)}`;
  const { issueSignedToken, presignUrl } = await B();
  const validUntil = Date.now() + seconds * 1000;
  const token = await issueSignedToken({ pathname, operations: ['get'], validUntil });
  const { presignedUrl } = await presignUrl(token, { operation: 'get', pathname, access: 'private', validUntil });
  return presignedUrl;
}

export const isLocal = useFs;
export const localRoot = root;
