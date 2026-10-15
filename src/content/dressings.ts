/**
 * "Advanced wound dressings / ضمادات الجروح الحديثة" — content supplied by Aissar as three charts (15 Oct 2026),
 * expanded into short plain-language explanations. Generic categories only: never brand names.
 * Each dressing has `tags` that drive the "by wound situation" finder on the page.
 */
import { R } from './refs';
import type { Ref } from '../lib/content-types';

type L = { ar: string; en: string };
type LL = { ar: string[]; en: string[] };

export type DressingTag =
  | 'dry' | 'lowModerate' | 'moderateHeavy' | 'veryHigh' | 'infected' | 'cavity' | 'superficial' | 'fragile' | 'odour';

export interface Dressing {
  id: string;
  /** English technical name, shown in both languages */
  term: string;
  name: L;
  what: L;
  /** heading for `parts` (materials, sources, systems …) */
  partsH: L;
  parts: LL;
  uses?: LL;
  /** situations where the type is usually not suitable (merged from the former «choosing dressings» article) */
  notFor?: L;
  note?: L;
  /** registry page with more detail */
  more?: { key: 'npwt'; label: L };
  tags: DressingTag[];
}

export interface DressingGroup { id: string; h: L; p: L; items: Dressing[] }

export const published = '2026-10-15';
export const reviewed = '2026-10-15';

export const refs: Ref[] = [R.exudate, R.niceDressings, R.dhivya, R.iwii, R.timers, R.schultz, R.ewmaNpwt];

export const tagLabels: Record<DressingTag, L> = {
  dry: { ar: 'جرح جاف أو فيه نسيج ميت', en: 'Dry or necrotic wound' },
  lowModerate: { ar: 'إفرازات قليلة إلى متوسطة', en: 'Low to moderate exudate' },
  moderateHeavy: { ar: 'إفرازات متوسطة إلى غزيرة', en: 'Moderate to heavy exudate' },
  veryHigh: { ar: 'إفرازات غزيرة جدًا', en: 'Very high exudate' },
  infected: { ar: 'جرح ملتهب (عدوى)', en: 'Infected wound' },
  cavity: { ar: 'جرح عميق أو تجويفي', en: 'Cavity wound' },
  superficial: { ar: 'جرح سطحي', en: 'Superficial wound' },
  fragile: { ar: 'جلد هش أو تمزق جلدي', en: 'Fragile skin or skin tear' },
  odour: { ar: 'رائحة كريهة', en: 'Malodorous wound' },
};
export const tagOrder: DressingTag[] = ['dry', 'lowModerate', 'moderateHeavy', 'veryHigh', 'infected', 'cavity', 'superficial', 'fragile', 'odour'];

const materials: L = { ar: 'المواد', en: 'Materials' };
const usesIn: L = { ar: 'تُستخدم عادة في', en: 'Typically used for' };
export { usesIn };

export const groups: DressingGroup[] = [
  {
    id: 'core',
    h: { ar: 'الأنواع الأساسية', en: 'Core dressing types' },
    p: { ar: 'الفئات الأكثر استخدامًا في العناية الحديثة بالجروح، ويُختار بينها غالبًا حسب كمية الإفرازات ووجود العدوى.', en: 'The most widely used categories in modern wound care, usually chosen by the amount of exudate and whether infection is present.' },
    items: [
      {
        id: 'antimicrobial', term: 'Antimicrobial', tags: ['infected'],
        name: { ar: 'الضمادات المضادة للميكروبات', en: 'Antimicrobial dressings' },
        what: { ar: 'تقلّل الحمل البكتيري في الجرح.', en: 'Reduce the bacterial load in the wound.' },
        partsH: { ar: 'أمثلة على المواد الفعّالة', en: 'Active agents' },
        parts: { ar: ['الفضة (Ag)', 'اليود', 'العسل الطبي', 'الكيتوزان (Chitosan)'], en: ['Silver (Ag)', 'Iodine', 'Medical-grade honey', 'Chitosan'] },
        uses: { ar: ['الجروح الملتهبة (المصابة بالعدوى)', 'الجروح ذات الخطر المرتفع للعدوى، حسب تقييم المختص'], en: ['Infected wounds', 'Wounds at high risk of infection, as assessed by a specialist'] },
        notFor: { ar: 'الاستخدام الروتيني الطويل في جروح غير ملتهبة', en: 'Long-term routine use on wounds that are not infected' },
        note: { ar: 'تُستخدم لفترة محددة ثم يُعاد تقييم الحاجة إليها. ولبعضها احتياطات خاصة، مثل الحذر من ضمادات اليود في أمراض الغدة الدرقية أو الجروح الكبيرة.', en: 'Used for a set period, then the need for them is reassessed. Some have specific precautions, such as caution with iodine dressings in thyroid disease or large wounds.' },
      },
      {
        id: 'alginate', term: 'Alginate', tags: ['moderateHeavy', 'infected', 'cavity'],
        name: { ar: 'الألجينات', en: 'Alginate dressings' },
        what: { ar: 'ألياف مستخلصة من الطحالب البحرية تتحول إلى هلام عند امتصاص الإفرازات.', en: 'Seaweed-derived fibres that turn into a gel as they absorb exudate.' },
        partsH: materials,
        parts: { ar: ['ألجينات الكالسيوم (Ca)', 'غنية بحمض الغولورونيك (High G)'], en: ['Calcium alginate (Ca)', 'High guluronic acid (High G)'] },
        uses: { ar: ['إفرازات متوسطة إلى غزيرة', 'الجروح الملتهبة', 'الجروح التجويفية (حشو التجاويف)'], en: ['Moderate to heavy exudate', 'Infected wounds', 'Cavity wounds (filling cavities)'] },
        notFor: { ar: 'الجروح الجافة والقشرة السوداء الجافة', en: 'Dry wounds and dry eschar' },
      },
      {
        id: 'hydrocolloid', term: 'Hydrocolloid', tags: ['lowModerate'],
        name: { ar: 'الهيدروكولويد', en: 'Hydrocolloid dressings' },
        what: { ar: 'ضماد يحتوي على مواد مكوِّنة للهلام تتفاعل مع الإفرازات وتحافظ على رطوبة الجرح.', en: 'Contain gel-forming agents that interact with exudate and keep the wound moist.' },
        partsH: materials,
        parts: { ar: ['مواد مكوِّنة للهلام (Gel-forming agents)'], en: ['Gel-forming agents'] },
        uses: { ar: ['إفرازات قليلة إلى متوسطة'], en: ['Low to moderate exudate'] },
        notFor: { ar: 'الجروح الملتهبة والإفرازات الغزيرة', en: 'Infected wounds and heavy exudate' },
      },
      {
        id: 'foam', term: 'Foam', tags: ['moderateHeavy'],
        name: { ar: 'الإسفنج (الفوم)', en: 'Foam dressings' },
        what: { ar: 'إسفنج ماص يحتفظ بالإفرازات بعيدًا عن الجرح، وبعضه بطبقة سيليكون لطيفة على الجلد.', en: 'Absorbent foam that holds exudate away from the wound, some with a gentle silicone layer.' },
        partsH: materials,
        parts: { ar: ['بولي يوريثان (Polyurethane)', 'سيليكون (Silicone)'], en: ['Polyurethane', 'Silicone'] },
        uses: { ar: ['إفرازات متوسطة إلى غزيرة'], en: ['Moderate to heavy exudate'] },
        notFor: { ar: 'الجروح الجافة', en: 'Dry wounds' },
      },
      {
        id: 'hydrogel', term: 'Hydrogel', tags: ['dry'],
        name: { ar: 'الهيدروجل', en: 'Hydrogel' },
        what: { ar: 'هلام مائي يضيف الرطوبة إلى الجرح الجاف ويساعد على تليين النسيج الميت.', en: 'A water-based gel that adds moisture to a dry wound and helps soften dead tissue.' },
        partsH: materials,
        parts: { ar: ['هلام مائي نشط غير متشكّل (Hydroactive amorphous gel)'], en: ['Hydroactive amorphous gel'] },
        uses: { ar: ['الجروح الجافة', 'الجروح ذات النسيج الميت (النخر)'], en: ['Dry wounds', 'Necrotic wounds (dead tissue)'] },
        notFor: { ar: 'الجروح كثيرة الإفرازات', en: 'Heavily exuding wounds' },
      },
    ],
  },
  {
    id: 'specific',
    h: { ar: 'ضمادات لاحتياجات خاصة', en: 'Dressings for specific needs' },
    p: { ar: 'أنواع تُختار لهدف محدد: دعم بناء النسيج، أو امتصاص كميات كبيرة جدًا من الإفرازات، أو حماية الجلد الهش، أو التحكم بالرائحة.', en: 'Chosen for a specific goal: supporting new tissue, handling very large volumes of exudate, protecting fragile skin, or controlling odour.' },
    items: [
      {
        id: 'collagen', term: 'Collagen', tags: [],
        name: { ar: 'الكولاجين', en: 'Collagen dressings' },
        what: { ar: 'ضمادات من الكولاجين تدعم تكوّن نسيج جديد في قاع الجرح.', en: 'Collagen-based dressings that support new tissue forming in the wound bed.' },
        partsH: { ar: 'المصدر والأنواع', en: 'Sources and types' },
        parts: { ar: ['مصدر بقري أو سمكي أو من الأغنام', 'كولاجين مع ORC أو الفضة', 'مع عوامل نمو (Growth factors)'], en: ['Bovine, fish or ovine source', 'Collagen with ORC or silver', 'With growth factors'] },
        uses: { ar: ['الجروح المزمنة المتوقفة عن التقدم، حسب تقييم المختص'], en: ['Chronic wounds that have stopped progressing, as assessed by a specialist'] },
        note: { ar: 'ORC: سليلوز مؤكسد مُعاد تكوينه (Oxidised regenerated cellulose).', en: 'ORC: oxidised regenerated cellulose.' },
      },
      {
        id: 'superabsorbent', term: 'Superabsorbent', tags: ['veryHigh'],
        name: { ar: 'الضمادات فائقة الامتصاص', en: 'Superabsorbent dressings' },
        what: { ar: 'تحتوي على بوليمرات تحبس كميات كبيرة من الإفرازات داخل الضماد.', en: 'Contain polymers that lock large volumes of exudate inside the dressing.' },
        partsH: materials,
        parts: { ar: ['بوليمرات فائقة الامتصاص (Superabsorbent polymers)'], en: ['Superabsorbent polymers'] },
        uses: { ar: ['الجروح ذات الإفرازات الغزيرة جدًا'], en: ['Wounds with very high exudate'] },
        notFor: { ar: 'الجروح الجافة أو قليلة الإفرازات', en: 'Dry or low-exudate wounds' },
      },
      {
        id: 'film', term: 'Film', tags: ['superficial'],
        name: { ar: 'الأغشية الشفافة', en: 'Film dressings' },
        what: { ar: 'غشاء رقيق شفاف يسمح بمراقبة الجرح دون إزالة الضماد.', en: 'A thin transparent film that lets the wound be checked without removing the dressing.' },
        partsH: materials,
        parts: { ar: ['غشاء بولي يوريثان شفاف'], en: ['Transparent polyurethane film'] },
        uses: { ar: ['الجروح السطحية', 'مواقع القسطرة الوريدية (الكانيولا)', 'ضماد ثانوي فوق ضماد آخر'], en: ['Superficial wounds', 'IV cannula sites', 'As a secondary dressing'] },
        notFor: { ar: 'الإفرازات المتوسطة أو الغزيرة، والجلد الهش جدًا', en: 'Moderate or heavy exudate, and very fragile skin' },
      },
      {
        id: 'silicone', term: 'Silicone', tags: ['fragile'],
        name: { ar: 'ضمادات السيليكون', en: 'Silicone dressings' },
        what: { ar: 'طبقة سيليكون لا تلتصق بالجرح، فتقلّل الألم وأذى الجلد عند تغيير الضماد.', en: 'A silicone layer that does not stick to the wound, reducing pain and skin damage at dressing changes.' },
        partsH: { ar: 'الخاصية الأساسية', en: 'Key property' },
        parts: { ar: ['طبقة غير مؤذية وغير لاصقة (Atraumatic, non-adherent)'], en: ['Atraumatic, non-adherent layer'] },
        uses: { ar: ['الجلد الهش', 'التمزقات الجلدية (Skin tears)'], en: ['Fragile skin', 'Skin tears'] },
      },
      {
        id: 'charcoal', term: 'Charcoal', tags: ['odour'],
        name: { ar: 'ضمادات الفحم النشط', en: 'Charcoal dressings' },
        what: { ar: 'تحتوي على فحم نشط يمتص الروائح الصادرة عن الجرح.', en: 'Contain activated charcoal that absorbs wound odour.' },
        partsH: { ar: 'الوظيفة', en: 'Function' },
        parts: { ar: ['التحكم بالرائحة'], en: ['Odour control'] },
        uses: { ar: ['الجروح ذات الرائحة الكريهة'], en: ['Malodorous wounds'] },
      },
    ],
  },
  {
    id: 'advanced',
    h: { ar: 'العلاجات والأنظمة المتقدمة', en: 'Advanced therapies and systems' },
    p: { ar: 'حلول تُستخدم غالبًا في الجروح المعقدة أو صعبة الالتئام، بقرار من الفريق المعالج وتحت إشراف متخصص.', en: 'Options usually reserved for complex or hard-to-heal wounds, decided by the treating team and used under specialist supervision.' },
    items: [
      {
        id: 'skin-substitutes', term: 'Bioengineered skin substitutes', tags: [],
        name: { ar: 'بدائل الجلد المهندَسة حيويًا', en: 'Bioengineered skin substitutes' },
        what: { ar: 'منتجات حيوية تدعم إغلاق الجرح، وتحتوي على أنسجة ظهارية خلوية.', en: 'Biological products that support wound closure and contain cellularised epithelial tissue.' },
        partsH: { ar: 'التركيب', en: 'Composition' },
        parts: { ar: ['أنسجة ظهارية خلوية (Cellularized epithelial tissues)'], en: ['Cellularised epithelial tissue'] },
        uses: { ar: ['الجروح صعبة الالتئام، تحت إشراف فريق متخصص'], en: ['Hard-to-heal wounds, under a specialist team'] },
      },
      {
        id: 'contact-layer', term: 'Contact layer', tags: [],
        name: { ar: 'طبقات التماس', en: 'Contact layers' },
        what: { ar: 'طبقة رقيقة توضع مباشرة على قاع الجرح لحمايته ومنع التصاق الضماد الثانوي به.', en: 'A thin layer placed directly on the wound bed to protect it and stop the secondary dressing sticking.' },
        partsH: { ar: 'الأنواع', en: 'Types' },
        parts: { ar: ['مشبعة بالفازلين (Petroleum)', 'مشبعة بالبارافين (Paraffin)'], en: ['Petroleum-impregnated', 'Paraffin-impregnated'] },
        uses: { ar: ['حماية قاع الجرح الهش', 'حماية الطعوم الجلدية'], en: ['Protecting a fragile wound bed', 'Protecting skin grafts'] },
        note: { ar: 'تحتاج عادة إلى ضماد ثانوي ماص فوقها.', en: 'Usually needs an absorbent secondary dressing on top.' },
      },
      {
        id: 'npwt', term: 'NPWT', tags: [],
        name: { ar: 'العلاج بالضغط السلبي', en: 'Negative pressure wound therapy' },
        what: { ar: 'جهاز يطبّق ضغطًا سلبيًا مضبوطًا على الجرح عبر إسفنج أو شاش وأنبوب متصل بالجهاز.', en: 'A device that applies controlled negative pressure to the wound through foam or gauze and tubing.' },
        partsH: { ar: 'الأنظمة', en: 'Systems' },
        parts: {
          ar: ['نظام VAC', 'NPWT للجروح الجراحية المغلقة (للمساعدة في الوقاية من عدوى موقع العملية SSI)', 'نظام البطن المفتوح (Open abdomen)', 'نظام الغسيل (Irrigation / Instillation)'],
          en: ['VAC system', 'Incisional NPWT for closed surgical wounds (to help prevent surgical site infection, SSI)', 'Open abdomen system', 'Irrigation (instillation) system'],
        },
        more: { key: 'npwt', label: { ar: 'اقرأ عن العلاج بالضغط السلبي', en: 'Read about negative pressure wound therapy' } },
      },
    ],
  },
];
