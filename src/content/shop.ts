/**
 * SHOP DATA — every product of the (hidden) shop lives in this one file (Aissar, item 7, 23 Nov 2026).
 * Edit a line to change a name, size, type, price or stock; add a line to add a product.
 * The shop is hidden until launch.shop is set to true in src/config/launch.ts.
 *
 *   id        unique, lowercase, no spaces (used by the cart)
 *   cat       one of the category ids below
 *   name      product name in Arabic and English
 *   size      size or pack, e.g. '10 × 10 cm' (shown as written)
 *   type      classification (التصنيف), e.g. foam, alginate, class 2 stocking
 *   price     price per unit in `currency`
 *   stock     quantity available now (0 = shown as "out of stock" and cannot be added to the cart)
 *   unit      optional: what one unit is (piece, box of 10 …)
 *   sizes     optional: sizes the customer chooses from, each with its own stock, e.g. [{ size: 'S', stock: 4 }, …]
 *             (then `size` is only the label shown on the card and `stock` is ignored)
 *
 * ⚠ EXAMPLE DATA: the products, prices and stock below are placeholders to show how the shop works.
 * Replace them with Aissar's real list, then set `exampleData` to false (it removes the draft banner).
 */

type T = { ar: string; en: string };

export const exampleData = true;

/** TODO (Aissar): confirm the currency the shop sells in. */
export const currency = { code: 'JOD', ar: 'د.أ', en: 'JOD', name: { ar: 'الدينار الأردني (د.أ)', en: 'Jordanian dinars (JOD)' }, decimals: 2 };

/** Policy values shown on the payment, delivery and exchange page. `null` = still to be decided (shown as such). */
export const policy: {
  paymentMethods: T | null;
  deliveryAreas: T | null;
  deliveryTime: T | null;
  deliveryFee: T | null;
  exchangeDays: number | null;
  courseCancellation: T | null;
} = {
  paymentMethods: null,
  deliveryAreas: null,
  deliveryTime: null,
  deliveryFee: null,
  exchangeDays: null,
  courseCancellation: null,
};

export type CategoryId = 'dressings' | 'npwt' | 'ostomy' | 'abpi' | 'compression';
export const categories: Array<{ id: CategoryId; icon: string; name: T; desc: T }> = [
  { id: 'dressings', icon: 'bandage', name: { ar: 'ضمادات الجروح', en: 'Wound dressings' }, desc: { ar: 'ضمادات حديثة بأنواعها: فوم، ألجينات، هيدروكولويد، هيدروجل، مضادة للميكروبات، فائقة الامتصاص، أغشية شفافة وطبقات تلامس.', en: 'Advanced dressings of every type: foam, alginate, hydrocolloid, hydrogel, antimicrobial, superabsorbent, film and contact layers.' } },
  { id: 'npwt', icon: 'pump', name: { ar: 'أجهزة الضغط السلبي (VAC)', en: 'Negative pressure (VAC) devices' }, desc: { ar: 'أجهزة العلاج بالضغط السلبي ومستلزماتها من الضمادات والعبوات.', en: 'Negative pressure wound therapy devices and their dressing kits and canisters.' } },
  { id: 'ostomy', icon: 'stoma', name: { ar: 'مستلزمات الكولوستومي', en: 'Colostomy supplies' }, desc: { ar: 'أكياس بقطعة واحدة أو قطعتين، وقواعد، ومعجون وبودرة وحلقات حماية الجلد.', en: 'One- and two-piece bags, base plates, paste, powder and skin barrier rings.' } },
  { id: 'abpi', icon: 'doppler', name: { ar: 'أجهزة قياس ABPI', en: 'ABPI devices' }, desc: { ar: 'أجهزة دوبلر محمولة ومستلزمات قياس مؤشر الكاحل والعضد.', en: 'Handheld Doppler devices and supplies for measuring the ankle–brachial pressure index.' } },
  { id: 'compression', icon: 'sock', name: { ar: 'الجوارب والأربطة الضاغطة', en: 'Compression stockings and bandages' }, desc: { ar: 'جوارب ضاغطة بدرجات وأطوال مختلفة، وأنظمة الرباط الضاغط.', en: 'Compression stockings in different classes and lengths, and compression bandage systems.' } },
];

export interface Product { id: string; cat: CategoryId; name: T; size: string; type: T; price: number; stock: number; unit?: T; sizes?: Array<{ size: string; stock: number }> }
const piece = { ar: 'قطعة', en: 'piece' };
const box10 = { ar: 'علبة 10 قطع', en: 'box of 10' };
const pair = { ar: 'زوج', en: 'pair' };

export const products: Product[] = [
  // ---- Dressings ----
  { id: 'foam-sil-10', cat: 'dressings', name: { ar: 'ضماد فوم سيليكون بحواف لاصقة', en: 'Bordered silicone foam dressing' }, size: '10 × 10 cm', type: { ar: 'فوم', en: 'Foam' }, price: 2.5, stock: 120, unit: piece },
  { id: 'foam-sil-15', cat: 'dressings', name: { ar: 'ضماد فوم سيليكون بحواف لاصقة', en: 'Bordered silicone foam dressing' }, size: '15 × 15 cm', type: { ar: 'فوم', en: 'Foam' }, price: 4, stock: 60, unit: piece },
  { id: 'foam-heel', cat: 'dressings', name: { ar: 'ضماد فوم للكعب', en: 'Heel foam dressing' }, size: '22 × 23 cm', type: { ar: 'فوم', en: 'Foam' }, price: 6.5, stock: 8, unit: piece },
  { id: 'alginate-10', cat: 'dressings', name: { ar: 'ضماد ألجينات الكالسيوم', en: 'Calcium alginate dressing' }, size: '10 × 10 cm', type: { ar: 'ألجينات', en: 'Alginate' }, price: 2, stock: 80, unit: piece },
  { id: 'alginate-rope', cat: 'dressings', name: { ar: 'شريط ألجينات للتجاويف', en: 'Alginate cavity rope' }, size: '2 × 30 cm', type: { ar: 'ألجينات', en: 'Alginate' }, price: 3, stock: 40, unit: piece },
  { id: 'silver-alg-10', cat: 'dressings', name: { ar: 'ضماد ألجينات بالفضة', en: 'Silver alginate dressing' }, size: '10 × 10 cm', type: { ar: 'مضاد للميكروبات (فضة)', en: 'Antimicrobial (silver)' }, price: 5.5, stock: 45, unit: piece },
  { id: 'honey-10', cat: 'dressings', name: { ar: 'ضماد العسل الطبي', en: 'Medical-grade honey dressing' }, size: '10 × 10 cm', type: { ar: 'مضاد للميكروبات (عسل)', en: 'Antimicrobial (honey)' }, price: 4.5, stock: 0, unit: piece },
  { id: 'hydrocolloid-10', cat: 'dressings', name: { ar: 'ضماد هيدروكولويد', en: 'Hydrocolloid dressing' }, size: '10 × 10 cm', type: { ar: 'هيدروكولويد', en: 'Hydrocolloid' }, price: 2.2, stock: 70, unit: piece },
  { id: 'hydrogel-15g', cat: 'dressings', name: { ar: 'جل مرطّب للجروح (هيدروجل)', en: 'Hydrogel' }, size: '15 g', type: { ar: 'هيدروجل', en: 'Hydrogel' }, price: 3.5, stock: 50, unit: piece },
  { id: 'sap-20', cat: 'dressings', name: { ar: 'ضماد فائق الامتصاص', en: 'Superabsorbent dressing' }, size: '20 × 20 cm', type: { ar: 'فائق الامتصاص', en: 'Superabsorbent' }, price: 3.8, stock: 35, unit: piece },
  { id: 'film-10', cat: 'dressings', name: { ar: 'غشاء شفاف لاصق', en: 'Transparent film dressing' }, size: '10 × 12 cm', type: { ar: 'غشاء شفاف', en: 'Film' }, price: 0.8, stock: 200, unit: piece },
  { id: 'contact-10', cat: 'dressings', name: { ar: 'طبقة تلامس سيليكون', en: 'Silicone contact layer' }, size: '10 × 18 cm', type: { ar: 'طبقة تلامس', en: 'Contact layer' }, price: 3.2, stock: 25, unit: piece },
  { id: 'collagen-10', cat: 'dressings', name: { ar: 'ضماد كولاجين', en: 'Collagen dressing' }, size: '10 × 10 cm', type: { ar: 'كولاجين', en: 'Collagen' }, price: 7, stock: 12, unit: piece },
  { id: 'charcoal-10', cat: 'dressings', name: { ar: 'ضماد الكربون النشط', en: 'Activated charcoal dressing' }, size: '10 × 10 cm', type: { ar: 'كربون نشط', en: 'Charcoal' }, price: 3, stock: 20, unit: piece },
  // ---- NPWT ----
  { id: 'npwt-device', cat: 'npwt', name: { ar: 'جهاز ضغط سلبي محمول', en: 'Portable NPWT device' }, size: '—', type: { ar: 'جهاز', en: 'Device' }, price: 450, stock: 2, unit: piece },
  { id: 'npwt-kit-m', cat: 'npwt', name: { ar: 'طقم ضماد فوم للضغط السلبي', en: 'NPWT foam dressing kit' }, size: 'M', type: { ar: 'مستلزمات', en: 'Supplies' }, price: 28, stock: 15, unit: piece },
  { id: 'npwt-kit-l', cat: 'npwt', name: { ar: 'طقم ضماد فوم للضغط السلبي', en: 'NPWT foam dressing kit' }, size: 'L', type: { ar: 'مستلزمات', en: 'Supplies' }, price: 34, stock: 10, unit: piece },
  { id: 'npwt-canister', cat: 'npwt', name: { ar: 'عبوة تجميع للضغط السلبي', en: 'NPWT canister' }, size: '300 ml', type: { ar: 'مستلزمات', en: 'Supplies' }, price: 12, stock: 18, unit: piece },
  // ---- Ostomy ----
  { id: 'ost-1pc', cat: 'ostomy', name: { ar: 'كيس كولوستومي بقطعة واحدة قابل للقص', en: 'One-piece cut-to-fit colostomy bag' }, size: '15–60 mm', type: { ar: 'قطعة واحدة', en: 'One-piece' }, price: 18, stock: 30, unit: box10 },
  { id: 'ost-base', cat: 'ostomy', name: { ar: 'قاعدة كولوستومي (نظام القطعتين)', en: 'Two-piece base plate' }, size: '50 mm', type: { ar: 'قطعتان', en: 'Two-piece' }, price: 16, stock: 20, unit: box10 },
  { id: 'ost-bag2', cat: 'ostomy', name: { ar: 'كيس لنظام القطعتين', en: 'Two-piece bag' }, size: '50 mm', type: { ar: 'قطعتان', en: 'Two-piece' }, price: 14, stock: 20, unit: box10 },
  { id: 'ost-paste', cat: 'ostomy', name: { ar: 'معجون حماية الجلد حول الفتحة', en: 'Stoma paste' }, size: '60 g', type: { ar: 'حماية الجلد', en: 'Skin protection' }, price: 7, stock: 25, unit: piece },
  { id: 'ost-powder', cat: 'ostomy', name: { ar: 'بودرة الستوما', en: 'Stoma powder' }, size: '25 g', type: { ar: 'حماية الجلد', en: 'Skin protection' }, price: 6, stock: 25, unit: piece },
  { id: 'ost-ring', cat: 'ostomy', name: { ar: 'حلقات حماية الجلد', en: 'Barrier rings' }, size: '48 mm', type: { ar: 'حماية الجلد', en: 'Skin protection' }, price: 12, stock: 0, unit: box10 },
  // ---- ABPI ----
  { id: 'doppler-8', cat: 'abpi', name: { ar: 'جهاز دوبلر وعائي محمول', en: 'Handheld vascular Doppler' }, size: '8 MHz', type: { ar: 'جهاز قياس ABPI', en: 'ABPI device' }, price: 180, stock: 3, unit: piece },
  { id: 'abpi-auto', cat: 'abpi', name: { ar: 'جهاز قياس ABPI آلي', en: 'Automated ABPI device' }, size: '—', type: { ar: 'جهاز قياس ABPI', en: 'ABPI device' }, price: 650, stock: 1, unit: piece },
  { id: 'doppler-gel', cat: 'abpi', name: { ar: 'جل الموجات فوق الصوتية', en: 'Ultrasound gel' }, size: '250 ml', type: { ar: 'مستلزمات', en: 'Supplies' }, price: 2.5, stock: 40, unit: piece },
  { id: 'bp-cuff', cat: 'abpi', name: { ar: 'كفّ ضغط للساق والذراع', en: 'Blood pressure cuff (arm and ankle)' }, size: '22–32 cm', type: { ar: 'مستلزمات', en: 'Supplies' }, price: 15, stock: 6, unit: piece },
  // ---- Compression ----
  { id: 'cs-c1-knee', cat: 'compression', name: { ar: 'جورب ضاغط تحت الركبة', en: 'Below-knee compression stocking' }, size: 'S / M / L', type: { ar: 'الدرجة 1 (18–21 mmHg)', en: 'Class 1 (18–21 mmHg)' }, price: 14, stock: 0, unit: pair, sizes: [{ size: 'S', stock: 8 }, { size: 'M', stock: 10 }, { size: 'L', stock: 6 }] },
  { id: 'cs-c2-knee', cat: 'compression', name: { ar: 'جورب ضاغط تحت الركبة', en: 'Below-knee compression stocking' }, size: 'S / M / L', type: { ar: 'الدرجة 2 (23–32 mmHg)', en: 'Class 2 (23–32 mmHg)' }, price: 18, stock: 0, unit: pair, sizes: [{ size: 'S', stock: 6 }, { size: 'M', stock: 8 }, { size: 'L', stock: 6 }] },
  { id: 'cs-c2-thigh', cat: 'compression', name: { ar: 'جورب ضاغط حتى الفخذ', en: 'Thigh-high compression stocking' }, size: 'S / M / L', type: { ar: 'الدرجة 2 (23–32 mmHg)', en: 'Class 2 (23–32 mmHg)' }, price: 26, stock: 0, unit: pair, sizes: [{ size: 'S', stock: 3 }, { size: 'M', stock: 4 }, { size: 'L', stock: 0 }] },
  { id: 'cs-c3-knee', cat: 'compression', name: { ar: 'جورب ضاغط تحت الركبة', en: 'Below-knee compression stocking' }, size: 'M / L', type: { ar: 'الدرجة 3 (34–46 mmHg)', en: 'Class 3 (34–46 mmHg)' }, price: 24, stock: 0, unit: pair, sizes: [{ size: 'M', stock: 2 }, { size: 'L', stock: 2 }] },
  { id: 'cs-ted', cat: 'compression', name: { ar: 'جوارب الوقاية من الجلطات', en: 'Anti-embolism stockings' }, size: 'S / M / L', type: { ar: 'وقائية', en: 'Anti-embolism' }, price: 9, stock: 0, unit: pair, sizes: [{ size: 'S', stock: 10 }, { size: 'M', stock: 12 }, { size: 'L', stock: 8 }] },
  { id: 'cb-2layer', cat: 'compression', name: { ar: 'نظام رباط ضاغط بطبقتين', en: 'Two-layer compression bandage system' }, size: '—', type: { ar: 'رباط ضاغط', en: 'Compression bandage' }, price: 16, stock: 14, unit: piece },
  { id: 'cb-4layer', cat: 'compression', name: { ar: 'نظام رباط ضاغط بأربع طبقات', en: 'Four-layer compression bandage system' }, size: '—', type: { ar: 'رباط ضاغط', en: 'Compression bandage' }, price: 22, stock: 0, unit: piece },
];

export const formatPrice = (v: number, lang: 'ar' | 'en') =>
  `${v.toFixed(currency.decimals)} ${currency[lang]}`;

/** Total stock of a product (the sum of its sizes when it has sizes). */
export const stockOf = (p: Product) => (p.sizes ? p.sizes.reduce((s, v) => s + v.stock, 0) : p.stock);
/** Cart id of one size of a product. */
export const variantId = (p: Product, size: string) => `${p.id}--${size.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;
