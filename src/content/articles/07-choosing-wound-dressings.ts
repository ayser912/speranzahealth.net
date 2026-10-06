import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'choosing-wound-dressings',
  order: 7,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.exudate, R.timers, R.schultz, R.iwii],
  related: ['chronic', 'education', 'npwt'],
  relatedArticles: ['home-wound-care-mistakes', 'wound-infection-warning-signs', 'venous-vs-arterial-leg-ulcers'],
  ar: {
    title: 'اختيار ضماد الجرح حسب الأنسجة والإفرازات | أيسر شواقفه CWS®',
    description: 'لا يوجد ضماد واحد مثالي لكل الجروح. تعرّف إلى أنواع الضمادات الرئيسية واستخداماتها، وكيف يختار المختص الضماد حسب نوع الأنسجة وكمية الإفرازات.',
    h1: 'اختيار ضماد الجرح حسب الأنسجة والإفرازات',
    card: 'اختيار ضماد الجرح',
    lead: 'يسأل كثيرون عن «أفضل ضماد للجروح». الإجابة الصحيحة: الضماد الأفضل هو الذي يناسب حالة الجرح الآن، وقد يتغير مع تقدم الالتئام. هذا المقال يشرح المنطق الذي يتبعه المختصون، وليس بديلًا عن تقييم الجرح.',
    sections: [
      {
        id: 'principles', h: 'ما الذي يحدد اختيار الضماد؟',
        list: {
          items: [
            '<strong>نوع الأنسجة في قاع الجرح:</strong> نسيج حبيبي أحمر صحي، أو نسيج ميت أصفر، أو قشرة سوداء، أو جلد جديد.',
            '<strong>كمية الإفرازات:</strong> جاف، أو قليل، أو متوسط، أو غزير.',
            '<strong>علامات العدوى</strong> أو خطرها المرتفع.',
            '<strong>عمق الجرح</strong> ووجود تجاويف تحتاج إلى حشو.',
            '<strong>حالة الجلد المحيط:</strong> هش، أو متهيج، أو متشبع بالرطوبة.',
            '<strong>الألم</strong> وعدد مرات التغيير الممكنة، وقدرة المريض أو الأسرة على العناية.',
          ],
        },
        after: ['الهدف العام هو بيئة رطبة متوازنة: لا جافة تعيق الخلايا، ولا مبللة تؤذي الجلد.'],
      },
      {
        id: 'types', h: 'الأنواع الرئيسية للضمادات',
        table: {
          caption: 'فئات الضمادات واستخداماتها الشائعة (أسماء علمية عامة دون علامات تجارية)',
          head: ['الفئة', 'استخدام شائع', 'غير مناسب عادة لـ'],
          rows: [
            ['الأغشية الشفافة (Films)', 'جروح سطحية بإفرازات قليلة، أو كضماد ثانوي', 'الإفرازات المتوسطة أو الغزيرة، والجلد الهش جدًا'],
            ['الهيدروكولويد (Hydrocolloids)', 'جروح سطحية بإفرازات قليلة إلى متوسطة', 'الجروح الملتهبة والإفرازات الغزيرة'],
            ['الهيدروجل (Hydrogels)', 'الجروح الجافة أو المغطاة بنسيج ميت لترطيبها وتليينه', 'الجروح كثيرة الإفرازات'],
            ['الإسفنج (Foams)', 'إفرازات متوسطة إلى غزيرة، وحماية من الضغط الخفيف', 'الجروح الجافة'],
            ['الألجينات والألياف الهلامية (Alginates / Gelling fibres)', 'إفرازات متوسطة إلى غزيرة، وحشو التجاويف', 'الجروح الجافة والقشرة السوداء الجافة'],
            ['الضمادات المضادة للميكروبات (فضة، يود، PHMB، عسل طبي)', 'العدوى الموضعية أو الخطر المرتفع، لفترة محددة ثم إعادة التقييم', 'الاستخدام الروتيني الطويل في جروح غير ملتهبة'],
            ['طبقات التماس غير اللاصقة (Contact layers)', 'حماية قاع الجرح الهش أو الطعوم الجلدية', 'الاستخدام دون ضماد ثانوي ماص'],
            ['الضمادات فائقة الامتصاص (Superabsorbers)', 'الإفرازات الغزيرة جدًا', 'الجروح الجافة أو قليلة الإفرازات'],
          ],
        },
        after: ['قد تكون لبعض المنتجات احتياطات خاصة، مثل الحذر من ضمادات اليود في أمراض الغدة الدرقية أو الجروح الكبيرة. يحدد الفريق المعالج ذلك.'],
      },
      {
        id: 'change', h: 'متى يتغير الضماد؟',
        list: {
          items: [
            'عندما تتغير حالة الجرح، مثل انتقاله من نسيج ميت إلى نسيج حبيبي صحي.',
            'عندما تزيد الإفرازات أو تقل بشكل واضح.',
            'عند ظهور علامات عدوى أو تهيّج في الجلد المحيط.',
            'إذا لم يظهر تقدم بعد فترة متابعة كافية، فيُعاد تقييم الخطة كاملة وليس الضماد وحده.',
          ],
        },
      },
      {
        id: 'note', h: 'ملاحظة مهمة', warn: true,
        body: [
          'لا تغيّر نوع الضماد أو عدد مرات تغييره دون استشارة الفريق المعالج، حتى لو نجح ضماد معيّن مع شخص آخر.',
          'المعلومات هنا تعليمية وعامة، ولا توصي بعلامة تجارية بعينها.',
        ],
      },
    ],
  },
  en: {
    title: 'Choosing Wound Dressings by Tissue Type and Exudate',
    description: 'There is no single perfect dressing. Learn the main dressing categories, what each is used for, and how specialists choose a dressing based on tissue type and exudate.',
    h1: 'Choosing wound dressings by tissue type and exudate',
    card: 'Choosing wound dressings',
    lead: 'People often ask for “the best wound dressing”. The honest answer: the best dressing is the one that suits the wound right now, and it may change as healing progresses. This article explains the reasoning specialists follow; it does not replace a wound assessment.',
    sections: [
      {
        id: 'principles', h: 'What determines the choice of dressing?',
        list: {
          items: [
            '<strong>The tissue in the wound bed:</strong> healthy red granulation, yellow slough, black eschar, or new skin.',
            '<strong>The amount of exudate:</strong> dry, low, moderate or high.',
            '<strong>Signs of infection</strong>, or a high risk of it.',
            '<strong>Wound depth</strong>, and any cavity that needs filling.',
            '<strong>The surrounding skin:</strong> fragile, irritated or waterlogged.',
            '<strong>Pain</strong>, how often the dressing can be changed, and what the patient or family can manage.',
          ],
        },
        after: ['The overall aim is balanced moisture: not so dry that cells can’t work, and not so wet that the skin is damaged.'],
      },
      {
        id: 'types', h: 'The main types of dressing',
        table: {
          caption: 'Dressing categories and their common uses (generic names, no brands)',
          head: ['Category', 'Common use', 'Usually not suitable for'],
          rows: [
            ['Films', 'Superficial wounds with low exudate, or as a secondary dressing', 'Moderate or high exudate, and very fragile skin'],
            ['Hydrocolloids', 'Superficial wounds with low to moderate exudate', 'Infected wounds and heavy exudate'],
            ['Hydrogels', 'Dry wounds or wounds covered with dead tissue, to rehydrate and soften it', 'Heavily exuding wounds'],
            ['Foams', 'Moderate to high exudate, with some cushioning', 'Dry wounds'],
            ['Alginates / gelling fibres', 'Moderate to high exudate, and filling cavities', 'Dry wounds and dry eschar'],
            ['Antimicrobial dressings (silver, iodine, PHMB, medical-grade honey)', 'Local infection or high risk, for a set period followed by review', 'Long-term routine use on wounds that are not infected'],
            ['Non-adherent contact layers', 'Protecting a fragile wound bed or skin graft', 'Use without an absorbent secondary dressing'],
            ['Superabsorbent dressings', 'Very heavy exudate', 'Dry or low-exudate wounds'],
          ],
        },
        after: ['Some products have specific precautions, such as caution with iodine dressings in thyroid disease or large wounds. The treating team decides this.'],
      },
      {
        id: 'change', h: 'When does the dressing change?',
        list: {
          items: [
            'When the wound changes, for example from dead tissue to healthy granulation.',
            'When exudate clearly increases or decreases.',
            'When signs of infection or irritation of the surrounding skin appear.',
            'If there is no progress after an adequate period, the whole plan is reassessed, not just the dressing.',
          ],
        },
      },
      {
        id: 'note', h: 'An important note', warn: true,
        body: [
          'Don’t change the dressing type, or how often it is changed, without advice from the treating team, even if a dressing worked for someone else.',
          'The information here is general education and does not recommend any specific brand.',
        ],
      },
    ],
  },
};
export default a;
