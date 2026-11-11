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
  | 'dry' | 'lowModerate' | 'moderateHeavy' | 'veryHigh' | 'infected' | 'cavity' | 'superficial' | 'fragile' | 'odour' | 'venous';

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
export const reviewed = '2026-11-11';

export const refs: Ref[] = [R.exudate, R.niceDressings, R.dhivya, R.iwii, R.timers, R.schultz, R.ewmaNpwt, R.partschCompression, R.esvsVenous, R.islLymphedema];

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
  venous: { ar: 'دوالي أو تورم (سوائل) أو قرحة وريدية', en: 'Varicose veins, oedema or venous ulcer' },
};
export const tagOrder: DressingTag[] = ['dry', 'lowModerate', 'moderateHeavy', 'veryHigh', 'infected', 'cavity', 'superficial', 'fragile', 'odour', 'venous'];

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
  {
    // Added 11 Nov 2026 at Aissar's request: compression for varicose veins, oedema/lymphoedema and venous ulcers.
    id: 'compression',
    h: { ar: 'الضمادات الضاغطة (الشادّة)', en: 'Compression bandages and garments' },
    p: {
      ar: 'الضغط العلاجي يساعد الأوردة والأوعية اللمفاوية على إرجاع الدم والسوائل من الساق، فيخفف التورم ويحسّن التئام القرحة الوريدية ويقلل عودتها. هو أساس علاج القرح الوريدية، ويُستخدم في الدوالي وتورم الساقين (السوائل) والوذمة اللمفاوية، لكن فقط بعد التأكد من سلامة الشرايين.',
      en: 'Compression helps the veins and lymphatic vessels return blood and fluid from the leg, reducing swelling, helping venous ulcers heal and lowering the chance they return. It is the foundation of venous ulcer treatment and is used for varicose veins, leg swelling (oedema) and lymphoedema, but only once the arteries are confirmed healthy.',
    },
    items: [
      {
        id: 'short-stretch', term: 'Short-stretch (inelastic) bandage', tags: ['venous'],
        name: { ar: 'الرباط قصير المطاطية (غير المرن)', en: 'Short-stretch bandages' },
        what: { ar: 'رباط قليل التمدد يعطي ضغطًا مرتفعًا أثناء المشي وحركة عضلة الساق، وضغطًا أقل أثناء الراحة.', en: 'A bandage with little stretch that gives high pressure when walking and the calf muscle works, and lower pressure at rest.' },
        partsH: { ar: 'الخصائص', en: 'Properties' },
        parts: { ar: ['ضغط عمل مرتفع وضغط راحة منخفض', 'يُلف عادة فوق طبقة حشو قطنية'], en: ['High working pressure, low resting pressure', 'Usually applied over a padding layer'] },
        uses: { ar: ['القرح الوريدية', 'الوذمة اللمفاوية في مرحلة تقليل التورم', 'المرضى الذين يمشون'], en: ['Venous leg ulcers', 'Lymphoedema in the swelling-reduction phase', 'Patients who walk'] },
        note: { ar: 'يحتاج إلى من تدرّب على لفّه، ويُعاد لفّه كلما ارتخى مع نقص التورم.', en: 'Needs a trained person to apply it, and re-applying as it loosens when swelling goes down.' },
      },
      {
        id: 'long-stretch', term: 'Long-stretch (elastic) bandage', tags: ['venous'],
        name: { ar: 'الرباط طويل المطاطية (المرن)', en: 'Long-stretch bandages' },
        what: { ar: 'رباط مرن يتمدد كثيرًا ويعطي ضغطًا ثابتًا تقريبًا في الحركة والراحة.', en: 'An elastic bandage that stretches a lot and gives fairly constant pressure during movement and at rest.' },
        partsH: { ar: 'الخصائص', en: 'Properties' },
        parts: { ar: ['ضغط مستمر حتى أثناء الراحة', 'بعضه بعلامات تساعد على شده بالدرجة الصحيحة'], en: ['Sustained pressure even at rest', 'Some have markers to help apply the right tension'] },
        uses: { ar: ['القرح الوريدية', 'تورم الساقين', 'المرضى قليلو الحركة، حسب تقييم المختص'], en: ['Venous leg ulcers', 'Leg swelling', 'Less mobile patients, as assessed by a specialist'] },
        notFor: { ar: 'اللفّ الذاتي دون تدريب، لأن الشد الزائد قد يسبب أذى', en: 'Self-application without training, because over-tightening can cause harm' },
      },
      {
        id: 'multilayer', term: 'Multi-layer compression system', tags: ['venous'],
        name: { ar: 'أنظمة الضغط متعددة الطبقات', en: 'Multi-layer compression systems' },
        what: { ar: 'مجموعة جاهزة من طبقتين أو أربع طبقات تجمع الحشو والرباط الضاغط والطبقة اللاصقة، لتعطي ضغطًا علاجيًا ثابتًا لعدة أيام.', en: 'A ready kit of two or four layers combining padding, compression bandage and a cohesive outer layer, giving steady therapeutic pressure for several days.' },
        partsH: { ar: 'الأنواع', en: 'Types' },
        parts: { ar: ['نظام الطبقتين', 'نظام الأربع طبقات', 'أنظمة بضغط مخفّض عند ضعف بسيط في الشرايين، بقرار المختص'], en: ['Two-layer systems', 'Four-layer systems', 'Reduced-compression kits for mild arterial disease, as a specialist decides'] },
        uses: { ar: ['القرح الوريدية', 'تورم الساقين المزمن'], en: ['Venous leg ulcers', 'Chronic leg swelling'] },
        note: { ar: 'يبقى عادة من 3 إلى 7 أيام، ويُغيّر أبكر عند التسرب أو الانزلاق أو الألم.', en: 'Usually stays on for 3–7 days, changed sooner if it leaks, slips or causes pain.' },
      },
      {
        id: 'stockings', term: 'Compression stockings', tags: ['venous'],
        name: { ar: 'الجوارب الضاغطة', en: 'Compression stockings' },
        what: { ar: 'جوارب طبية يكون ضغطها أعلى عند الكاحل ويقل تدريجيًا نحو الأعلى، وتُختار بالمقاس الصحيح ودرجة الضغط المناسبة.', en: 'Medical stockings with the highest pressure at the ankle, reducing gradually upwards, chosen in the correct size and pressure class.' },
        partsH: { ar: 'درجات الضغط (حسب المعيار الأوروبي)', en: 'Pressure classes (European standard)' },
        parts: { ar: ['الدرجة 1: 18–21 ملم زئبق', 'الدرجة 2: 23–32 ملم زئبق', 'الدرجة 3: 34–46 ملم زئبق', 'أطقم خاصة لعلاج القرح الوريدية (جورب داخلي وخارجي)'], en: ['Class 1: 18–21 mmHg', 'Class 2: 23–32 mmHg', 'Class 3: 34–46 mmHg', 'Ulcer kits (liner plus outer stocking)'] },
        uses: { ar: ['دوالي الساقين', 'الوقاية من عودة القرحة الوريدية بعد التئامها', 'المحافظة على نتيجة علاج الوذمة اللمفاوية'], en: ['Varicose veins', 'Preventing venous ulcer recurrence after healing', 'Maintaining lymphoedema treatment results'] },
        note: { ar: 'تختلف قيم الدرجات قليلًا بين المعايير (البريطاني والأوروبي والأمريكي)، لذلك تُحدد الدرجة بوصفة المختص. تُلبس صباحًا قبل أن يزداد التورم.', en: 'Class values differ slightly between standards (British, European, American), so the class is set by the specialist’s prescription. Put them on in the morning before swelling builds.' },
      },
      {
        id: 'wraps', term: 'Adjustable compression wraps', tags: ['venous'],
        name: { ar: 'الأربطة الضاغطة القابلة للتعديل', en: 'Adjustable compression wraps' },
        what: { ar: 'أشرطة متداخلة بلاصق مثل الفيلكرو تُلف حول الساق ويمكن شدها أو إرخاؤها خلال اليوم.', en: 'Overlapping hook-and-loop straps wrapped around the leg that can be tightened or loosened during the day.' },
        partsH: { ar: 'الخصائص', en: 'Properties' },
        parts: { ar: ['يمكن للمريض أو أسرته لبسها بعد التدريب', 'بعضها بدليل يحدد الضغط المطلوب'], en: ['Can be applied by the patient or family after training', 'Some have a guide showing the target pressure'] },
        uses: { ar: ['الوذمة اللمفاوية', 'القرح الوريدية', 'من يصعب عليه لبس الجوارب'], en: ['Lymphoedema', 'Venous leg ulcers', 'People who find stockings hard to put on'] },
      },
      {
        id: 'ipc', term: 'Intermittent pneumatic compression', tags: ['venous'],
        name: { ar: 'أجهزة الضغط الهوائي المتقطع', en: 'Intermittent pneumatic compression' },
        what: { ar: 'جهاز يملأ أكمامًا حول الساق بالهواء على مراحل ثم يفرغها، ليدفع الدم والسوائل نحو الأعلى.', en: 'A pump that inflates sleeves around the leg in stages and then deflates them, pushing blood and fluid upwards.' },
        partsH: { ar: 'المكونات', en: 'Parts' },
        parts: { ar: ['مضخة هوائية', 'كم واحد أو عدة حجرات'], en: ['Air pump', 'Single or multi-chamber sleeve'] },
        uses: { ar: ['الوذمة اللمفاوية', 'علاج مساند للقرح الوريدية عندما لا يمكن استخدام الرباط', 'الوقاية من جلطات الأوردة في المستشفى'], en: ['Lymphoedema', 'An adjunct for venous ulcers when bandaging is not possible', 'Preventing vein clots in hospital'] },
        notFor: { ar: 'جلطة وريدية حديثة غير معالجة، أو فشل القلب غير المضبوط، أو عدوى نشطة في الساق', en: 'An untreated recent deep vein thrombosis, uncontrolled heart failure, or active leg infection' },
      },
    ],
  },
];
