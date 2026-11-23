/**
 * Outgoing email (consultation confirmations). Works with any SMTP account; the default is the
 * Speranza Health Google Workspace mailbox (smtp.gmail.com:465 with an App Password).
 *
 * Env (Vercel → speranza-cases → Settings → Environment Variables), set by Aissar:
 *   SMTP_USER   sending mailbox, e.g. aissar@speranzahealth.net
 *   SMTP_PASS   its App Password (never committed, never shown)
 *   SMTP_HOST / SMTP_PORT   optional, default smtp.gmail.com / 465
 *   MAIL_FROM   optional display sender, default "Speranza Health | سبيرانزا هيلث" <SMTP_USER>
 * Local tests: MAIL_TRANSPORT=file writes every message to ./.data/mail/*.eml instead of sending.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const fileMode = () => process.env.MAIL_TRANSPORT === 'file';
export const mailConfigured = () => fileMode() || !!(process.env.SMTP_USER && process.env.SMTP_PASS);
export const senderAddress = () => process.env.SMTP_USER || 'no-reply@speranzahealth.net';

let transport;
async function getTransport() {
  if (transport) return transport;
  const nodemailer = (await import('nodemailer')).default;
  if (fileMode()) {
    transport = nodemailer.createTransport({ streamTransport: true, buffer: true, newline: 'unix' });
  } else {
    const port = Number(process.env.SMTP_PORT || 465);
    transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transport;
}

/** Sends one message. Returns true when the SMTP server accepted it. */
export async function sendMail({ to, subject, html, text, replyTo, ics }) {
  if (!mailConfigured()) return false;
  const t = await getTransport();
  const from = process.env.MAIL_FROM || `"Speranza Health | سبيرانزا هيلث" <${senderAddress()}>`;
  const info = await t.sendMail({
    from, to, subject, html, text, replyTo,
    ...(ics ? { icalEvent: { method: 'PUBLISH', filename: 'consultation.ics', content: ics } } : {}),
  });
  if (fileMode()) {
    const dir = path.resolve(process.env.STORE_DIR || '.data', 'mail');
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, `${Date.now()}-${String(to).replace(/[^a-z0-9@.]/gi, '_')}.eml`), info.message);
  }
  return true;
}
