import { contact, site, type Lang } from '../config/site';

/**
 * Conversion links. Each link carries a short reference code ("ref") so enquiries can be
 * attributed to the page + placement that produced them, even inside WhatsApp, and a
 * matching data-track attribute set for GA4 events (see components/Analytics.astro).
 */

export interface TrackRef { lang: Lang; page: string; placement: string }

export const refCode = ({ lang, page, placement }: TrackRef) => `${lang}-${page}-${placement}`;

const greeting: Record<Lang, string> = {
  ar: 'مرحبًا، أتواصل معك من الموقع بخصوص استفسار مهني.',
  en: 'Hello, I am contacting you from the website with a professional enquiry.',
};

export function whatsappUrl(t: TrackRef, text?: string): string {
  const body = `${text ?? greeting[t.lang]}\n(ref: ${refCode(t)})`;
  return `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(body)}`;
}

export const telUrl = () => `tel:${contact.phoneE164}`;

export function mailtoUrl(t: TrackRef, subject?: string): string {
  const s = subject ?? (t.lang === 'ar' ? 'استفسار مهني من الموقع' : 'Professional enquiry from the website');
  return `mailto:${contact.email}?subject=${encodeURIComponent(`${s} [${refCode(t)}]`)}`;
}

/** UTM-tag an outbound link back to this site (for use in social bios, email signatures, QR codes). */
export function utm(url: string, source: string, medium: string, campaign: string): string {
  const u = new URL(url, `https://${site.domain}`);
  u.searchParams.set('utm_source', source);
  u.searchParams.set('utm_medium', medium);
  u.searchParams.set('utm_campaign', campaign);
  return u.toString();
}

/** data-* attributes consumed by the analytics click listener. */
export const track = (event: 'whatsapp_click' | 'phone_click' | 'email_click' | 'cta_click' | 'outbound_profile', t: TrackRef) => ({
  'data-track': event,
  'data-track-ref': refCode(t),
});
