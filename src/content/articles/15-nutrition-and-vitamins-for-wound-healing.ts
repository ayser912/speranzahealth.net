import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (clinical nutrition and essential vitamins in chronic wounds). */
const a: Article = {
  slug: 'nutrition-and-vitamins-for-wound-healing',
  order: 15,
  topic: 'articles',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.munozNutrition, R.stechmillerNutrition, R.piGuideline],
  related: ['chronic', 'pressure'],
  relatedArticles: ['kidney-disease-and-wound-healing', 'lab-tests-and-imaging-for-wounds', 'home-wound-care-mistakes'],
  ar: {
    title: 'التغذية العلاجية والفيتامينات الأساسية لالتئام الجروح المزمنة',
    description: 'دور البروتين والسعرات والسوائل وفيتامين C وA والزنك والحديد في التئام الجروح المزمنة، وعلامات سوء التغذية، ومتى تُستخدم المكملات بإشراف مختص.',
    h1: 'التغذية العلاجية والفيتامينات في علاج الجروح المزمنة',
    card: 'التغذية والفيتامينات لالتئام الجروح',
    lead: 'الجسم يبني الجرح من الداخل. من دون بروتين وسعرات وسوائل وفيتامينات كافية، يبطؤ الالتئام مهما كانت الضمادة جيدة، خصوصًا لدى كبار السن والمرضى طريحي الفراش.',
    sections: [
      {
        id: 'why', h: 'لماذا تهم التغذية؟',
        body: [
          'التئام الجرح عملية تحتاج إلى طاقة: بناء الكولاجين والأوعية الدموية الجديدة ومقاومة العدوى. والجرح الذي يفرز كثيرًا يفقد معه بروتينًا وسوائل.',
          'سوء التغذية من أهم أسباب تأخر الالتئام ومن عوامل خطر قرح الضغط، وغالبًا لا يُلاحظ لأنه قد يحدث حتى لدى أشخاص بوزن طبيعي أو زائد.',
        ],
      },
      {
        id: 'basics', h: 'الأساسيات: الطاقة والبروتين والسوائل',
        list: {
          items: [
            '<strong>السعرات:</strong> توصي الإرشادات الدولية لقرح الضغط عادة بنحو 30–35 سعرة حرارية لكل كيلوغرام من الوزن يوميًا للبالغ المعرّض لسوء التغذية، ويعدّلها أخصائي التغذية حسب الحالة.',
            '<strong>البروتين:</strong> نحو 1.25–1.5 غرام لكل كيلوغرام يوميًا للبالغ الذي لديه جرح وخطر سوء تغذية، ما لم تمنع ذلك حالة صحية مثل بعض أمراض الكلى. مصادره: اللحوم والدجاج والسمك والبيض والألبان والبقوليات.',
            '<strong>السوائل:</strong> شرب كافٍ من الماء ما لم يحدد الطبيب كمية معينة (كما في أمراض القلب والكلى). الجفاف يقلل التروية ويُضعف الجلد.',
          ],
        },
      },
      {
        id: 'micro', h: 'الفيتامينات والمعادن الأساسية',
        table: {
          caption: 'عناصر لها دور معروف في الالتئام (تُعوَّض عند وجود نقص، بإشراف مختص)',
          head: ['العنصر', 'دوره في الالتئام', 'مصادر غذائية'],
          rows: [
            ['فيتامين C', 'ضروري لتكوين الكولاجين ولعمل المناعة', 'الحمضيات، والفلفل، والفراولة، والكيوي، والبندورة'],
            ['فيتامين A', 'يدعم مرحلة الالتهاب الطبيعية وتكوّن الجلد الجديد', 'الكبدة، والبيض، والجزر، والبطاطا الحلوة، والخضار الورقية'],
            ['الزنك', 'يدخل في انقسام الخلايا وبناء البروتين والمناعة', 'اللحوم الحمراء، والمأكولات البحرية، والبقوليات، والمكسرات'],
            ['الحديد', 'لنقل الأكسجين عبر الهيموغلوبين، ونقصه يسبب فقر الدم', 'اللحوم الحمراء، والعدس، والسبانخ، مع مصدر لفيتامين C'],
            ['فيتامين D', 'يدعم المناعة والعضلات والعظام', 'التعرض المعتدل للشمس، والأسماك الدهنية، وصفار البيض'],
            ['فيتامين B12 وحمض الفوليك', 'لتكوين خلايا الدم الحمراء وانقسام الخلايا', 'اللحوم والألبان والبيض (B12)، والخضار الورقية والبقوليات (الفوليك)'],
            ['الأرجنين (حمض أميني)', 'قد يدعم تكوين الكولاجين والتروية، ويوجد في بعض المكملات المخصصة للجروح', 'اللحوم والمكسرات والبذور'],
          ],
        },
        after: ['لا يوجد دليل على أن الجرعات العالية من الفيتامينات تسرّع الالتئام لدى من لا يعاني نقصًا، وبعضها (مثل الزنك وفيتامين A) قد يضر بجرعات عالية أو لفترات طويلة.'],
      },
      {
        id: 'signs', h: 'علامات قد تدل على سوء التغذية',
        list: {
          items: [
            'نقص الوزن دون قصد (مثلًا أكثر من 5% خلال شهر أو 10% خلال ستة أشهر).',
            'قلة الأكل أو صعوبة البلع أو فقدان الشهية.',
            'ضعف العضلات والتعب.',
            'جرح لا يتقدم رغم العناية الجيدة.',
          ],
        },
      },
      {
        id: 'plan', h: 'كيف تُبنى الخطة الغذائية؟',
        list: {
          ordered: true,
          items: [
            'فحص غذائي بأداة معتمدة، ثم تقييم شامل من أخصائي التغذية العلاجية عند وجود خطر.',
            'خطة تراعي الأمراض الأخرى: السكري، وأمراض الكلى، وأمراض القلب.',
            'وجبات صغيرة متكررة غنية بالبروتين لمن يأكل قليلًا.',
            'مكملات غذائية فموية عالية البروتين عند الحاجة، بتوصية المختص.',
            'متابعة الوزن والأكل والجرح بانتظام.',
          ],
        },
      },
      {
        id: 'caution', h: 'تنبيهات', warn: true,
        list: {
          items: [
            'لا تبدأ مكملات أو فيتامينات بجرعات عالية دون استشارة، خصوصًا مع أمراض الكلى أو الكبد أو مع أدوية مميعة للدم.',
            'مريض السكري يحتاج إلى خطة تجمع بين التغذية الكافية وضبط السكر، لا إلى تقليل الأكل بشكل يضر بالجرح.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Clinical Nutrition and Key Vitamins for Chronic Wound Healing',
    description: 'The role of protein, energy, fluids, vitamins C and A, zinc and iron in chronic wound healing, signs of malnutrition, and when supplements are used under supervision.',
    h1: 'Clinical nutrition and vitamins in chronic wound care',
    card: 'Nutrition and vitamins for healing',
    lead: 'The body builds a wound from the inside. Without enough protein, energy, fluids and vitamins, healing slows however good the dressing is, especially in older adults and people confined to bed.',
    sections: [
      {
        id: 'why', h: 'Why does nutrition matter?',
        body: [
          'Wound healing takes energy: building collagen and new blood vessels and fighting infection. A heavily exuding wound also loses protein and fluid.',
          'Malnutrition is one of the main causes of delayed healing and a risk factor for pressure injuries. It is often missed because it can occur even in people of normal or high body weight.',
        ],
      },
      {
        id: 'basics', h: 'The basics: energy, protein and fluids',
        list: {
          items: [
            '<strong>Energy:</strong> international pressure-injury guidelines generally suggest about 30–35 kcal per kg of body weight a day for adults at risk of malnutrition, adjusted by the dietitian.',
            '<strong>Protein:</strong> about 1.25–1.5 g per kg a day for adults with a wound and risk of malnutrition, unless a condition such as some kidney diseases prevents it. Sources: meat, poultry, fish, eggs, dairy and legumes.',
            '<strong>Fluids:</strong> enough water unless the doctor has set a limit (as in heart or kidney disease). Dehydration reduces perfusion and weakens the skin.',
          ],
        },
      },
      {
        id: 'micro', h: 'Essential vitamins and minerals',
        table: {
          caption: 'Nutrients with a known role in healing (replaced when deficient, under supervision)',
          head: ['Nutrient', 'Role in healing', 'Food sources'],
          rows: [
            ['Vitamin C', 'Essential for collagen formation and immune function', 'Citrus fruit, peppers, strawberries, kiwi, tomatoes'],
            ['Vitamin A', 'Supports the normal inflammatory phase and new skin formation', 'Liver, eggs, carrots, sweet potato, leafy greens'],
            ['Zinc', 'Involved in cell division, protein building and immunity', 'Red meat, seafood, legumes, nuts'],
            ['Iron', 'Carries oxygen in haemoglobin; deficiency causes anaemia', 'Red meat, lentils, spinach, with a source of vitamin C'],
            ['Vitamin D', 'Supports immunity, muscles and bone', 'Sensible sun exposure, oily fish, egg yolk'],
            ['Vitamin B12 and folate', 'Needed for red blood cells and cell division', 'Meat, dairy and eggs (B12); leafy greens and legumes (folate)'],
            ['Arginine (an amino acid)', 'May support collagen formation and blood flow; found in some wound-specific supplements', 'Meat, nuts and seeds'],
          ],
        },
        after: ['There is no evidence that high doses of vitamins speed healing in people who are not deficient, and some (such as zinc and vitamin A) can be harmful at high doses or over long periods.'],
      },
      {
        id: 'signs', h: 'Signs that may point to malnutrition',
        list: {
          items: [
            'Unintended weight loss (for example more than 5% in a month or 10% in six months).',
            'Eating little, difficulty swallowing or loss of appetite.',
            'Muscle weakness and tiredness.',
            'A wound that does not progress despite good care.',
          ],
        },
      },
      {
        id: 'plan', h: 'How is a nutrition plan built?',
        list: {
          ordered: true,
          items: [
            'Screening with a validated tool, then a full assessment by a clinical dietitian when there is risk.',
            'A plan that accounts for other conditions: diabetes, kidney disease and heart disease.',
            'Small, frequent, protein-rich meals for people who eat little.',
            'High-protein oral nutritional supplements when needed, as recommended by the specialist.',
            'Regular follow-up of weight, intake and the wound.',
          ],
        },
      },
      {
        id: 'caution', h: 'Cautions', warn: true,
        list: {
          items: [
            'Don’t start high-dose supplements or vitamins without advice, especially with kidney or liver disease or blood-thinning medicines.',
            'People with diabetes need a plan that combines adequate nutrition with glucose control, not eating so little that the wound suffers.',
          ],
        },
      },
    ],
  },
};
export default a;
