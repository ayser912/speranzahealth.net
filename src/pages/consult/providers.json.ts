import type { APIRoute } from 'astro';
import { consult, providers, specialties, isBookable } from '../../config/consult';
import { contact } from '../../config/site';

/**
 * Public copy of the consultation directory (src/config/consult.ts) for the booking server
 * (gallery app, cases.speranzahealth.net), which builds the free slots and checks every booking against it.
 * Only public profile facts are here; no contact details.
 */
export const GET: APIRoute = () => {
  const body = {
    version: 1,
    generatedAt: new Date().toISOString(),
    leadHours: consult.leadHours,
    windowDays: consult.windowDays,
    joinEarlyMinutes: consult.joinEarlyMinutes,
    /** shown in emails (reply-to, WhatsApp for changes) */
    platform: { email: contact.email, whatsapp: contact.whatsappE164 },
    specialties: specialties.map((s) => ({ id: s.id, name: s.name })),
    providers: providers.map((p) => ({
      id: p.id,
      specialty: p.specialty,
      name: p.name,
      title: p.title,
      languages: p.languages,
      modes: p.modes,
      timezone: p.timezone,
      slotMinutes: p.slotMinutes,
      hours: p.hours,
      daysOff: p.daysOff ?? [],
      bookable: isBookable(p),
    })),
  };
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
