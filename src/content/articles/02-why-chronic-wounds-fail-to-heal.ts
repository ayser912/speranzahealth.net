import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'why-chronic-wounds-fail-to-heal',
  order: 2,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.frykberg, R.schultz, R.timers, R.iwii],
  related: ['chronic', 'pressure', 'diabeticFoot'],
  relatedArticles: ['when-to-see-a-wound-care-specialist', 'venous-vs-arterial-leg-ulcers', 'choosing-wound-dressings'],
  ar: {
    title: 'لماذا لا يلتئم الجرح المزمن؟ الأسباب وإطار TIME | أيسر شواقفه',
    description: 'الأسباب الأكثر شيوعًا لتأخر التئام الجروح المزمنة: ضعف التروية، والعدوى والـ biofilm، والضغط، والسكري، والتغذية، وكيف يقيّم المختصون الجرح بإطار TIME.',
    h1: 'لماذا لا يلتئم الجرح المزمن؟',
    card: 'لماذا لا يلتئم الجرح المزمن؟',
    lead: 'عندما يبقى الجرح مفتوحًا لأسابيع، يكون السؤال الأهم ليس «ما الضماد الأفضل؟» بل «ما الذي يمنع الالتئام؟». معرفة السبب هي الخطوة الأولى لأي خطة ناجحة.',
    sections: [
      {
        id: 'stuck', h: 'جرح «عالق» في مرحلة الالتهاب',
        body: [
          'في الجرح الطبيعي تكون مرحلة الالتهاب قصيرة وتمهّد لبناء نسيج جديد. في الجرح المزمن يستمر الالتهاب، فتتراكم مواد تحلل الأنسجة الجديدة قبل أن تكتمل، ويبقى الجرح في حلقة مفرغة.',
          'كسر هذه الحلقة يتطلب معالجة السبب الأساسي إلى جانب العناية الموضعية بالجرح.',
        ],
      },
      {
        id: 'body', h: 'أسباب تتعلق بصحة المريض',
        list: {
          items: [
            '<strong>ضعف التروية الدموية:</strong> بدون دم كافٍ لا يصل الأكسجين والغذاء إلى الجرح.',
            '<strong>السكري:</strong> ارتفاع السكر يضعف المناعة وعمل الخلايا المسؤولة عن الالتئام.',
            '<strong>الضغط المستمر:</strong> كما في قرح الضغط وباطن قدم مريض السكري.',
            '<strong>التورم المزمن في الساقين:</strong> كما في أمراض الأوردة.',
            '<strong>سوء التغذية ونقص البروتين والسوائل.</strong>',
            '<strong>التدخين</strong> الذي يقلل وصول الأكسجين إلى الأنسجة.',
            '<strong>بعض الأدوية</strong> مثل الكورتيزون وبعض أدوية علاج الأورام والمناعة.',
          ],
        },
      },
      {
        id: 'wound', h: 'أسباب في الجرح نفسه',
        list: {
          items: [
            '<strong>الأنسجة الميتة</strong> في قاع الجرح تعيق نمو النسيج الجديد وتغذي البكتيريا.',
            '<strong>العدوى أو الـ biofilm:</strong> طبقة من البكتيريا تلتصق بسطح الجرح وتحمي نفسها، وقد لا تظهر عليها علامات العدوى الواضحة.',
            '<strong>عدم توازن الرطوبة:</strong> الجرح الجاف جدًا يبطئ حركة الخلايا، والإفرازات الكثيرة تؤذي الجلد المحيط.',
            '<strong>حواف الجرح</strong> المتليفة أو الملتفة للداخل لا تسمح بتقدم الجلد الجديد.',
            '<strong>الإصابة المتكررة</strong> للجرح، مثل الاحتكاك أو نزع الضماد بطريقة خاطئة.',
          ],
        },
      },
      {
        id: 'time', h: 'كيف يقيّم المختصون الجرح: إطار TIME',
        body: ['يستخدم أخصائيو الجروح إطارًا منظّمًا لا ينسى أي عنصر:'],
        table: {
          caption: 'إطار TIME لتحضير قاع الجرح',
          head: ['العنصر', 'السؤال الذي يطرحه المختص'],
          rows: [
            ['T — الأنسجة (Tissue)', 'هل يوجد نسيج ميت أو متليف يحتاج إلى إزالة؟'],
            ['I — العدوى والالتهاب (Infection / Inflammation)', 'هل توجد علامات عدوى أو biofilm تحتاج إلى معالجة؟'],
            ['M — الرطوبة (Moisture)', 'هل الجرح جاف جدًا أو رطب جدًا؟ وهل الجلد المحيط سليم؟'],
            ['E — الحواف (Edge)', 'هل تتقدم الحواف أم أنها متوقفة أو ملتفة؟'],
          ],
        },
        after: ['طوّرت بعض الإرشادات الحديثة هذا الإطار إلى TIMERS، بإضافة الإصلاح والتجديد (Repair/Regeneration)، والعوامل الاجتماعية والمتعلقة بالمريض (Social factors)، مثل القدرة على الالتزام بالخطة والدعم الأسري.'],
      },
      {
        id: 'next', h: 'ماذا يعني ذلك عمليًا؟',
        list: {
          items: [
            'تغيير الضماد وحده نادرًا ما يحل المشكلة إذا بقي السبب قائمًا.',
            'التقييم الشامل يشمل الجرح والمريض معًا، وأحيانًا يحتاج إلى أكثر من تخصص.',
            'قياس الجرح بانتظام يوضح ما إذا كانت الخطة تعمل أم تحتاج إلى تعديل.',
          ],
        },
        after: ['إذا مضت أسابيع دون تحسن، اقرأ: <a href="/ar/articles/when-to-see-a-wound-care-specialist/">متى تحتاج إلى أخصائي عناية بالجروح؟</a>'],
      },
    ],
  },
  en: {
    title: 'Why Does a Chronic Wound Fail to Heal? Causes and TIME',
    description: 'Why chronic wounds stall: poor blood supply, infection and biofilm, pressure, diabetes and nutrition, and how specialists assess wounds with the TIME framework.',
    h1: 'Why does a chronic wound fail to heal?',
    card: 'Why does a chronic wound fail to heal?',
    lead: 'When a wound stays open for weeks, the key question is not “which dressing is best?” but “what is stopping it from healing?”. Finding the cause is the first step in any plan that works.',
    sections: [
      {
        id: 'stuck', h: 'A wound “stuck” in inflammation',
        body: [
          'In a normal wound, inflammation is short and prepares the way for new tissue. In a chronic wound, inflammation persists: substances build up that break down new tissue before it matures, and the wound stays in a vicious circle.',
          'Breaking that circle means treating the underlying cause as well as caring for the wound itself.',
        ],
      },
      {
        id: 'body', h: 'Causes related to the person’s health',
        list: {
          items: [
            '<strong>Poor blood supply:</strong> without enough blood, oxygen and nutrients don’t reach the wound.',
            '<strong>Diabetes:</strong> high blood glucose weakens immunity and the cells responsible for healing.',
            '<strong>Ongoing pressure:</strong> as with pressure injuries and the sole of the diabetic foot.',
            '<strong>Long-standing leg swelling:</strong> as in venous disease.',
            '<strong>Poor nutrition, with too little protein or fluid.</strong>',
            '<strong>Smoking</strong>, which reduces oxygen delivery to tissues.',
            '<strong>Some medicines</strong>, such as corticosteroids and some cancer and immune-suppressing treatments.',
          ],
        },
      },
      {
        id: 'wound', h: 'Causes in the wound itself',
        list: {
          items: [
            '<strong>Dead tissue</strong> in the wound bed blocks new tissue growth and feeds bacteria.',
            '<strong>Infection or biofilm:</strong> a protected layer of bacteria stuck to the wound surface, which may not show obvious signs of infection.',
            '<strong>Unbalanced moisture:</strong> a wound that is too dry slows cell movement, while heavy exudate damages the surrounding skin.',
            '<strong>Wound edges</strong> that are hardened or rolled inwards stop new skin from advancing.',
            '<strong>Repeated injury</strong> to the wound, from friction or removing dressings the wrong way.',
          ],
        },
      },
      {
        id: 'time', h: 'How specialists assess a wound: the TIME framework',
        body: ['Wound specialists use a structured framework so nothing is missed:'],
        table: {
          caption: 'The TIME framework for wound bed preparation',
          head: ['Element', 'The question the specialist asks'],
          rows: [
            ['T — Tissue', 'Is there dead or sloughy tissue that needs removing?'],
            ['I — Infection / inflammation', 'Are there signs of infection or biofilm that need treating?'],
            ['M — Moisture', 'Is the wound too dry or too wet, and is the surrounding skin healthy?'],
            ['E — Edge', 'Are the edges advancing, or stalled or rolled?'],
          ],
        },
        after: ['Recent guidance extends this to TIMERS, adding Repair/Regeneration and Social and patient-related factors, such as being able to follow the plan and family support.'],
      },
      {
        id: 'next', h: 'What this means in practice',
        list: {
          items: [
            'Changing the dressing alone rarely solves the problem if the cause remains.',
            'A full assessment looks at the wound and the person together, and sometimes needs more than one specialty.',
            'Measuring the wound regularly shows whether the plan is working or needs to change.',
          ],
        },
        after: ['If weeks have passed without improvement, read <a href="/en/articles/when-to-see-a-wound-care-specialist/">When should you see a wound-care specialist?</a>'],
      },
    ],
  },
};
export default a;
