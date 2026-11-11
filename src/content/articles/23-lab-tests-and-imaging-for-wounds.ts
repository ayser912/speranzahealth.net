import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/**
 * Added 11 Nov 2026 at Aissar's request: the main laboratory tests and imaging for chronic wounds and infection,
 * with typical adult reference ranges for men and women. Ranges are typical values from common references
 * (MedlinePlus, ADA, KDIGO); every laboratory publishes its own, and the page says so.
 */
const a: Article = {
  slug: 'lab-tests-and-imaging-for-wounds',
  order: 23,
  topic: 'articles',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.medlineLabs, R.adaClassification, R.kdigoCkd, R.iwgdfInfection, R.iwgdfPad, R.munozNutrition],
  related: ['chronic', 'diabeticFoot'],
  relatedArticles: ['inflammation-and-infection-in-chronic-wounds', 'kidney-disease-and-wound-healing', 'diabetes-types-treatment-and-myths'],
  ar: {
    title: 'الفحوصات المخبرية والأشعة للجروح المزمنة والقيم الطبيعية',
    description: 'أهم الفحوصات المخبرية والأشعة في الجروح المزمنة والالتهابات: ماذا يقيس كل فحص، والقيم الطبيعية التقريبية للذكور والإناث، ومتى يُطلب كل نوع من الأشعة.',
    h1: 'أهم الفحوصات المخبرية والأشعة في الجروح المزمنة والالتهابات',
    card: 'الفحوصات المخبرية والأشعة للجروح',
    lead: 'الجرح المزمن نافذة على صحة الجسم كله. الفحوصات تساعد الفريق على معرفة سبب تأخر الالتئام، واكتشاف العدوى ومدى عمقها، ومتابعة الاستجابة للعلاج.',
    sections: [
      {
        id: 'note', h: 'قبل قراءة الأرقام', warn: true,
        body: [
          'القيم التالية تقريبية للبالغين، وتختلف قليلًا بين المختبرات وطرق القياس والأعمار. اعتمد دائمًا على المدى المطبوع في تقرير مختبرك، ودع الطبيب يفسّر النتيجة ضمن الحالة كاملة. النتيجة خارج المدى لا تعني بالضرورة مرضًا، والنتيجة الطبيعية لا تنفي وجوده.',
        ],
      },
      {
        id: 'cbc', h: 'صورة الدم الكاملة (CBC)',
        table: {
          caption: 'صورة الدم: القيم الطبيعية التقريبية للبالغين',
          head: ['الفحص', 'الذكور', 'الإناث', 'أهميته للجرح'],
          rows: [
            ['الهيموغلوبين (Hb)', '13.5–17.5 غ/دل', '12.0–15.5 غ/دل', 'انخفاضه (فقر الدم) يقلل الأكسجين الواصل إلى الجرح'],
            ['الهيماتوكريت (Hct)', '41–50%', '36–44%', 'نسبة كريات الدم الحمراء في الدم'],
            ['كريات الدم البيضاء (WBC)', '4.0–11.0 × 10⁹/ل', '4.0–11.0 × 10⁹/ل', 'ارتفاعها قد يشير إلى عدوى، لكنها قد تكون طبيعية في العدوى لدى كبار السن ومرضى السكري'],
            ['العدلات (Neutrophils)', '40–70% من البيضاء', '40–70% من البيضاء', 'ترتفع غالبًا في العدوى البكتيرية'],
            ['الخلايا اللمفاوية (Lymphocytes)', '20–40% من البيضاء', '20–40% من البيضاء', 'انخفاضها قد يرافق سوء التغذية أو ضعف المناعة'],
            ['الصفائح الدموية (PLT)', '150–400 × 10⁹/ل', '150–400 × 10⁹/ل', 'مهمة قبل الإنضار أو الجراحة'],
          ],
        },
      },
      {
        id: 'inflammation', h: 'مؤشرات الالتهاب والعدوى',
        table: {
          caption: 'مؤشرات الالتهاب: القيم التقريبية للبالغين',
          head: ['الفحص', 'الذكور', 'الإناث', 'أهميته للجرح'],
          rows: [
            ['البروتين التفاعلي CRP', 'أقل من 5 ملغ/ل (بعض المختبرات أقل من 10)', 'أقل من 5 ملغ/ل (بعض المختبرات أقل من 10)', 'يرتفع بسرعة مع العدوى والالتهاب، ومفيد لمتابعة الاستجابة للعلاج'],
            ['سرعة الترسيب ESR', 'حتى 15 ملم/ساعة تحت 50 سنة، وحتى 20 فوقها', 'حتى 20 ملم/ساعة تحت 50 سنة، وحتى 30 فوقها', 'ارتفاعها الشديد (مثلًا أكثر من 70) يرفع احتمال التهاب العظم في قرحة القدم السكري'],
            ['البروكالسيتونين (PCT)', 'أقل من 0.1 نانوغرام/مل', 'أقل من 0.1 نانوغرام/مل', 'ارتفاعه (أكثر من 0.5) يرجّح عدوى بكتيرية جهازية'],
            ['اللاكتات (Lactate)', 'أقل من 2 ملمول/ل', 'أقل من 2 ملمول/ل', 'ارتفاعه مع عدوى قد يدل على الإنتان ويحتاج إلى طوارئ'],
          ],
        },
      },
      {
        id: 'glucose', h: 'السكر',
        table: {
          caption: 'فحوصات السكر لدى البالغين (حسب الجمعية الأمريكية للسكري ADA)',
          head: ['الفحص', 'طبيعي (الذكور والإناث)', 'ما قبل السكري', 'سكري'],
          rows: [
            ['السكر الصائم', '70–99 ملغ/دل (3.9–5.5 ملمول/ل)', '100–125 ملغ/دل', '126 ملغ/دل أو أكثر'],
            ['السكر التراكمي HbA1c', 'أقل من 5.7%', '5.7–6.4%', '6.5% أو أكثر (والهدف لكثير من مرضى السكري أقل من 7%)'],
          ],
        },
        after: ['السكر غير المضبوط يبطئ الالتئام ويزيد خطر العدوى، وارتفاعه المفاجئ لدى مريض سكري مضبوط قد يكون أول علامة على عدوى في الجرح.'],
      },
      {
        id: 'kidney', h: 'وظائف الكلى والأملاح',
        table: {
          caption: 'وظائف الكلى والأملاح: القيم التقريبية للبالغين',
          head: ['الفحص', 'الذكور', 'الإناث', 'أهميته للجرح'],
          rows: [
            ['الكرياتينين', '0.74–1.35 ملغ/دل (65–120 ميكرومول/ل)', '0.59–1.04 ملغ/دل (52–92 ميكرومول/ل)', 'لتقييم وظيفة الكلى وتعديل جرعات الأدوية والمضادات الحيوية'],
            ['معدل الترشيح eGFR', '90 أو أكثر مل/دقيقة/1.73م²', '90 أو أكثر مل/دقيقة/1.73م²', 'أقل من 60 لثلاثة أشهر يعني مرضًا كلويًا مزمنًا'],
            ['اليوريا (BUN)', '7–20 ملغ/دل', '7–20 ملغ/دل', 'ارتفاعها قد يدل على الجفاف أو ضعف الكلى'],
            ['البوتاسيوم', '3.5–5.0 ملمول/ل', '3.5–5.0 ملمول/ل', 'مهم قبل الجراحة ولدى مرضى الكلى'],
            ['الصوديوم', '135–145 ملمول/ل', '135–145 ملمول/ل', 'اضطرابه قد يرافق الجفاف أو بعض الأدوية'],
          ],
        },
      },
      {
        id: 'nutrition', h: 'الحالة الغذائية والفيتامينات',
        table: {
          caption: 'فحوصات التغذية: القيم التقريبية للبالغين',
          head: ['الفحص', 'الذكور', 'الإناث', 'أهميته للجرح'],
          rows: [
            ['الألبومين', '3.5–5.0 غ/دل', '3.5–5.0 غ/دل', 'ينخفض مع الالتهاب والمرض المزمن، لذلك لا يُستخدم وحده لتشخيص سوء التغذية'],
            ['البريألبومين', '15–36 ملغ/دل', '15–36 ملغ/دل', 'يتغير أسرع من الألبومين، ويتأثر بالالتهاب أيضًا'],
            ['الفيريتين (مخزون الحديد)', '24–336 نانوغرام/مل', '11–307 نانوغرام/مل', 'انخفاضه يدل على نقص الحديد، ويرتفع مع الالتهاب'],
            ['فيتامين D (25-OH)', '20–50 نانوغرام/مل كافٍ لمعظم الناس', '20–50 نانوغرام/مل كافٍ لمعظم الناس', 'بعض الجهات تعتمد 30 حدًا أدنى'],
            ['فيتامين B12', '200–900 بيكوغرام/مل', '200–900 بيكوغرام/مل', 'نقصه يسبب فقر الدم وقد يزيد اعتلال الأعصاب'],
            ['الزنك', '60–120 ميكروغرام/دل', '60–120 ميكروغرام/دل', 'نقصه يبطئ الالتئام'],
          ],
        },
      },
      {
        id: 'microbiology', h: 'الفحوصات الجرثومية',
        list: {
          items: [
            '<strong>مزرعة الجرح:</strong> تُؤخذ عند وجود علامات عدوى فقط، بعد تنظيف الجرح، والأفضل عينة نسيجية من قاع الجرح بدل مسحة من الإفرازات السطحية.',
            '<strong>عينة العظم:</strong> الأدق لتشخيص التهاب العظم وتحديد الجرثومة.',
            '<strong>مزرعة الدم:</strong> عند الحرارة أو الاشتباه بالإنتان.',
          ],
        },
      },
      {
        id: 'imaging', h: 'الأشعة والتصوير',
        table: {
          caption: 'أنواع التصوير الشائعة في الجروح المزمنة (يحدد الطبيب ما يلزم)',
          head: ['الفحص', 'ماذا يُظهر', 'متى يُطلب عادة'],
          rows: [
            ['الأشعة السينية (X-ray)', 'تغيرات العظم، والأجسام الغريبة، والغاز في الأنسجة', 'أول فحص عند الشك بالتهاب العظم أو بعد الحوادث، لكن تغيرات العظم قد لا تظهر في أول أسبوعين'],
            ['الرنين المغناطيسي (MRI)', 'العظم والأنسجة الرخوة والخراجات بدقة عالية', 'الأدق عادة لتشخيص التهاب العظم ومدى انتشار العدوى'],
            ['التصوير المقطعي (CT)', 'تفاصيل العظم والغاز والخراجات العميقة', 'عندما لا يتوفر الرنين أو لتخطيط الجراحة'],
            ['الموجات فوق الصوتية والدوبلر', 'تجمعات السوائل، وجلطات الأوردة، وتدفق الدم في الشرايين والأوردة', 'تقييم القرح الوريدية والشريانية والخراجات السطحية'],
            ['قياس ABPI وضغط إصبع القدم', 'كفاية التروية الدموية', 'قبل الرباط الضاغط، وفي كل جرح مزمن في الساق أو القدم'],
            ['تصوير الشرايين (CTA أو MRA أو القسطرة)', 'خريطة الشرايين ومكان الانسداد', 'قبل توسيع الشريان أو جراحة المجازة'],
            ['المسح النووي أو PET', 'نشاط العدوى في العظم', 'في حالات مختارة عندما لا يمكن إجراء الرنين'],
          ],
        },
        after: ['قيم ABPI والتروية التفصيلية في: <a href="/ar/articles/tissue-perfusion-and-wound-healing/">التروية الدموية والتئام الجروح</a>.'],
      },
    ],
  },
  en: {
    title: 'Lab Tests and Imaging for Chronic Wounds: Normal Ranges',
    description: 'The main laboratory tests and imaging for chronic wounds and infection: what each test measures, typical normal ranges for men and women, and when each scan is used.',
    h1: 'Key laboratory tests and imaging for chronic wounds and infection',
    card: 'Lab tests and imaging for wounds',
    lead: 'A chronic wound is a window on the health of the whole body. Tests help the team find why healing is delayed, detect infection and how deep it goes, and follow the response to treatment.',
    sections: [
      {
        id: 'note', h: 'Before you read the numbers', warn: true,
        body: [
          'The values below are approximate adult ranges and vary slightly between laboratories, methods and ages. Always use the range printed on your laboratory report, and let the doctor interpret the result in the context of the whole case. A result outside the range does not necessarily mean disease, and a normal result does not rule it out.',
        ],
      },
      {
        id: 'cbc', h: 'Complete blood count (CBC)',
        table: {
          caption: 'Blood count: approximate adult normal ranges',
          head: ['Test', 'Men', 'Women', 'Why it matters for wounds'],
          rows: [
            ['Haemoglobin (Hb)', '13.5–17.5 g/dL', '12.0–15.5 g/dL', 'Low levels (anaemia) reduce oxygen delivery to the wound'],
            ['Haematocrit (Hct)', '41–50%', '36–44%', 'The proportion of red cells in the blood'],
            ['White blood cells (WBC)', '4.0–11.0 × 10⁹/L', '4.0–11.0 × 10⁹/L', 'A rise may suggest infection, but it can stay normal in infection in older adults and people with diabetes'],
            ['Neutrophils', '40–70% of white cells', '40–70% of white cells', 'Often raised in bacterial infection'],
            ['Lymphocytes', '20–40% of white cells', '20–40% of white cells', 'Low levels can accompany malnutrition or weak immunity'],
            ['Platelets (PLT)', '150–400 × 10⁹/L', '150–400 × 10⁹/L', 'Important before debridement or surgery'],
          ],
        },
      },
      {
        id: 'inflammation', h: 'Markers of inflammation and infection',
        table: {
          caption: 'Inflammatory markers: approximate adult values',
          head: ['Test', 'Men', 'Women', 'Why it matters for wounds'],
          rows: [
            ['C-reactive protein (CRP)', 'Below 5 mg/L (some labs below 10)', 'Below 5 mg/L (some labs below 10)', 'Rises quickly with infection and inflammation; useful for following the response to treatment'],
            ['ESR', 'Up to 15 mm/h under 50 years, up to 20 over 50', 'Up to 20 mm/h under 50 years, up to 30 over 50', 'A very high ESR (for example above 70) makes osteomyelitis more likely in a diabetic foot ulcer'],
            ['Procalcitonin (PCT)', 'Below 0.1 ng/mL', 'Below 0.1 ng/mL', 'A rise (above 0.5) points towards systemic bacterial infection'],
            ['Lactate', 'Below 2 mmol/L', 'Below 2 mmol/L', 'A rise with infection may indicate sepsis and needs emergency care'],
          ],
        },
      },
      {
        id: 'glucose', h: 'Blood glucose',
        table: {
          caption: 'Glucose tests in adults (American Diabetes Association criteria)',
          head: ['Test', 'Normal (men and women)', 'Prediabetes', 'Diabetes'],
          rows: [
            ['Fasting glucose', '70–99 mg/dL (3.9–5.5 mmol/L)', '100–125 mg/dL', '126 mg/dL or higher'],
            ['HbA1c', 'Below 5.7%', '5.7–6.4%', '6.5% or higher (the target for many people with diabetes is below 7%)'],
          ],
        },
        after: ['Uncontrolled glucose slows healing and raises infection risk, and a sudden rise in someone whose diabetes is usually well controlled can be the first sign of wound infection.'],
      },
      {
        id: 'kidney', h: 'Kidney function and salts',
        table: {
          caption: 'Kidney function and salts: approximate adult values',
          head: ['Test', 'Men', 'Women', 'Why it matters for wounds'],
          rows: [
            ['Creatinine', '0.74–1.35 mg/dL (65–120 µmol/L)', '0.59–1.04 mg/dL (52–92 µmol/L)', 'Assesses kidney function and guides medicine and antibiotic doses'],
            ['eGFR', '90 or more mL/min/1.73 m²', '90 or more mL/min/1.73 m²', 'Below 60 for three months means chronic kidney disease'],
            ['Urea (BUN)', '7–20 mg/dL', '7–20 mg/dL', 'A rise may suggest dehydration or reduced kidney function'],
            ['Potassium', '3.5–5.0 mmol/L', '3.5–5.0 mmol/L', 'Important before surgery and in kidney disease'],
            ['Sodium', '135–145 mmol/L', '135–145 mmol/L', 'Disturbances can accompany dehydration or some medicines'],
          ],
        },
      },
      {
        id: 'nutrition', h: 'Nutritional status and vitamins',
        table: {
          caption: 'Nutrition tests: approximate adult values',
          head: ['Test', 'Men', 'Women', 'Why it matters for wounds'],
          rows: [
            ['Albumin', '3.5–5.0 g/dL', '3.5–5.0 g/dL', 'Falls with inflammation and chronic illness, so it is not used alone to diagnose malnutrition'],
            ['Prealbumin', '15–36 mg/dL', '15–36 mg/dL', 'Changes faster than albumin, but is also affected by inflammation'],
            ['Ferritin (iron stores)', '24–336 ng/mL', '11–307 ng/mL', 'Low levels mean iron deficiency; it rises with inflammation'],
            ['Vitamin D (25-OH)', '20–50 ng/mL adequate for most people', '20–50 ng/mL adequate for most people', 'Some bodies use 30 as the lower limit'],
            ['Vitamin B12', '200–900 pg/mL', '200–900 pg/mL', 'Deficiency causes anaemia and can worsen neuropathy'],
            ['Zinc', '60–120 µg/dL', '60–120 µg/dL', 'Deficiency slows healing'],
          ],
        },
      },
      {
        id: 'microbiology', h: 'Microbiology',
        list: {
          items: [
            '<strong>Wound culture:</strong> taken only when there are signs of infection, after cleansing; a tissue sample from the wound bed is better than a swab of surface exudate.',
            '<strong>Bone sample:</strong> the most accurate way to diagnose osteomyelitis and identify the organism.',
            '<strong>Blood culture:</strong> with fever or suspected sepsis.',
          ],
        },
      },
      {
        id: 'imaging', h: 'Imaging',
        table: {
          caption: 'Common imaging in chronic wounds (the doctor decides what is needed)',
          head: ['Test', 'What it shows', 'When it is usually requested'],
          rows: [
            ['X-ray', 'Bone changes, foreign bodies and gas in tissue', 'The first test when osteomyelitis is suspected or after trauma, though bone changes may not show in the first two weeks'],
            ['MRI', 'Bone, soft tissue and abscesses in high detail', 'Usually the most accurate test for osteomyelitis and the extent of infection'],
            ['CT', 'Bone detail, gas and deep abscesses', 'When MRI is unavailable, or for surgical planning'],
            ['Ultrasound and Doppler', 'Fluid collections, vein clots, and blood flow in arteries and veins', 'Assessing venous and arterial ulcers and superficial abscesses'],
            ['ABPI and toe pressures', 'Whether blood supply is adequate', 'Before compression, and in every chronic leg or foot wound'],
            ['Angiography (CTA, MRA or catheter)', 'A map of the arteries and the site of blockage', 'Before angioplasty or bypass surgery'],
            ['Nuclear scan or PET', 'Activity of infection in bone', 'In selected cases when MRI is not possible'],
          ],
        },
        after: ['ABPI and perfusion values are explained in: <a href="/en/articles/tissue-perfusion-and-wound-healing/">Blood perfusion and wound healing</a>.'],
      },
    ],
  },
};
export default a;
