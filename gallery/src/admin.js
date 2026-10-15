/* Admin helpers: confirmations, copy button, and uploads.
   Images are downscaled in the browser (max 2400 px) and re-encoded again on the server, which removes
   location/date/device metadata. Videos go straight to private storage (up to 300 MB). */
import { upload } from '@vercel/blob/client';

document.querySelectorAll('form[data-confirm], button[data-confirm]').forEach((el) => {
  const form = el.tagName === 'FORM' ? el : el.form;
  const msg = el.getAttribute('data-confirm');
  if (el.tagName === 'FORM') form.addEventListener('submit', (e) => { if (!confirm(msg)) e.preventDefault(); });
  else el.addEventListener('click', (e) => { if (!confirm(msg)) e.preventDefault(); });
});

const copyBtn = document.querySelector('[data-copy-btn]');
if (copyBtn) copyBtn.addEventListener('click', async () => {
  const box = document.querySelector('[data-copy]');
  try { await navigator.clipboard.writeText(box.value); copyBtn.textContent = 'تم النسخ ✓'; } catch { box.select(); }
});

const rid = (n = 8) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'[b % 56]).join('');

async function downscale(file) {
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
  const scale = Math.min(1, 2400 / Math.max(bmp.width, bmp.height));
  const c = document.createElement('canvas');
  c.width = Math.round(bmp.width * scale);
  c.height = Math.round(bmp.height * scale);
  c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
  return new Promise((ok) => c.toBlob(ok, 'image/jpeg', 0.9));
}

document.querySelectorAll('.uploader').forEach((box) => {
  const input = box.querySelector('input[type=file]');
  const status = box.querySelector('.up-status');
  const kase = box.dataset.case;
  const stage = box.dataset.stage;
  input.addEventListener('change', async () => {
    const files = [...input.files];
    let done = 0, failed = 0;
    for (const f of files) {
      status.textContent = `جارٍ رفع ${done + failed + 1} من ${files.length}…`;
      try {
        if (f.type.startsWith('image/')) {
          const jpg = await downscale(f);
          const fd = new FormData();
          fd.append('file', jpg, 'image.jpg');
          const r = await fetch(`/admin/api/upload-image?case=${kase}&stage=${stage}`, { method: 'POST', body: fd });
          if (!r.ok) throw new Error('upload');
        } else if (f.type.startsWith('video/')) {
          if (f.size > 300 * 1024 * 1024) throw new Error('too big');
          const ext = f.type === 'video/quicktime' ? 'mov' : 'mp4';
          const pathname = `media/${kase}/${rid(10)}.${ext}`;
          let ok = false;
          try {
            const blob = await upload(pathname, f, {
              access: 'private', handleUploadUrl: '/admin/api/video-token', multipart: f.size > 20 * 1024 * 1024,
              onUploadProgress: (p) => { status.textContent = `جارٍ رفع الفيديو… ${Math.round(p.percentage)}%`; },
            });
            const r = await fetch(`/admin/api/video-done?case=${kase}&stage=${stage}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pathname: blob.pathname }) });
            ok = r.ok;
          } catch (e) {
            // Local development store: plain upload.
            const fd = new FormData();
            fd.append('file', f);
            const r = await fetch(`/admin/api/upload-video-local?case=${kase}&stage=${stage}`, { method: 'POST', body: fd });
            ok = r.ok;
          }
          if (!ok) throw new Error('video');
        } else throw new Error('type');
        done++;
      } catch {
        failed++;
      }
    }
    status.textContent = failed ? `تم رفع ${done}، وتعذّر رفع ${failed}.` : `تم رفع ${done} ملف.`;
    setTimeout(() => location.reload(), 700);
  });
});
