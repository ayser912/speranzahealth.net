import { contact, site, type Lang } from '../config/site';
import { pages, type PageKey } from './routes';
import { articleBySlug } from '../content/articles/index';

/**
 * Conversion links. Each link carries a short reference code ("ref") so enquiries can be
 * attributed to the page + placement that produced them, even inside WhatsApp, and a
 * matching data-track attribute set for GA4 events (see components/Analytics.astro).
 */

export interface TrackRef { lang: Lang; page: string; placement: string }

export const refCode = ({ lang, page, placement }: TrackRef) => `${lang}-${page}-${placement}`;

/** Pre-filled message wording approved by Aissar (15 Oct 2026). */
export const greeting: Record<Lang, string> = {
  ar: 'مرحبًا، أرغب بالتواصل مع فريق سبيرانزا هيلث بخصوص استفسار.',
  en: 'Hello, I would like to contact the Speranza Health team with an enquiry.',
};

/** Human-readable name of the page a message came from, e.g. "صفحة التواصل" / "Contact page". */
export function sourceLabel(lang: Lang, page: string): string {
  if (page === 'home') return lang === 'ar' ? 'الصفحة الرئيسية' : 'Home page';
  if (page in pages) {
    const nav = pages[page as PageKey].nav[lang];
    return lang === 'ar' ? `صفحة ${nav}` : `${nav} page`;
  }
  if (page.startsWith('article-')) {
    const a = articleBySlug(page.slice(8));
    const name = a ? (a[lang].card ?? a[lang].h1) : '';
    return lang === 'ar' ? `مقال${name ? `: ${name}` : ''}` : `Article${name ? `: ${name}` : ''}`;
  }
  return '';
}

/** Second line of every pre-filled message: "(عبر الموقع · صفحة التواصل)". Keeps attribution readable. */
export function sourceLine(t: TrackRef): string {
  const via = t.lang === 'ar' ? 'عبر الموقع' : 'Via the website';
  const label = sourceLabel(t.lang, t.page);
  return `(${via}${label ? ` · ${label}` : ''})`;
}

export function whatsappUrl(t: TrackRef, text?: string): string {
  const body = `${text ?? greeting[t.lang]}\n${sourceLine(t)}`;
  return `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(body)}`;
}

export const telUrl = () => `tel:${contact.phoneE164}`;

export function mailtoUrl(t: TrackRef, subject?: string): string {
  const s = subject ?? (t.lang === 'ar' ? 'استفسار لفريق سبيرانزا هيلث' : 'Enquiry for the Speranza Health team');
  return `mailto:${contact.email}?subject=${encodeURIComponent(`${s} ${sourceLine(t)}`)}&body=${encodeURIComponent(`${greeting[t.lang]}\n${sourceLine(t)}\n`)}`;
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
