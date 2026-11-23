/**
 * LAUNCH SWITCHES — the one place that decides whether the hidden sections are public.
 * (Built 23 Nov 2026 at Aissar's request: "build them, but don't show them until I ask".)
 *
 * While a switch is `false`, its page is built and works, but:
 *   - nothing on the site links to it (menus, footer, buttons, breadcrumbs),
 *   - it carries <meta name="robots" content="noindex">,
 *   - it is left out of the sitemap, the site search and llms.txt.
 * Set a switch to `true`, run `npm test`, commit and push: the menu, footer, sitemap and search pick it up
 * automatically. The shop and its policy page are meant to go live together.
 *
 * Product data: src/content/shop.ts · Course data: src/content/courses.ts
 */
export const launch = {
  /** متجر الضمادات والأجهزة — /ar/wound-care-shop/ */
  shop: false,
  /** سياسة الدفع والتوصيل والاستبدال — /ar/payment-delivery-exchange/ */
  policies: false,
  /** متجر الدورات والكورسات — /ar/wound-care-courses/ */
  courses: false,
};
