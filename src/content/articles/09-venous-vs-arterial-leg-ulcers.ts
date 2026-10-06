import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'venous-vs-arterial-leg-ulcers',
  order: 9,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.esvsVenous, R.clti, R.timers],
  related: ['chronic', 'diabeticFoot'],
  relatedArticles: ['why-chronic-wounds-fail-to-heal', 'when-to-see-a-wound-care-specialist', 'choosing-wound-dressings'],
  ar: {
    title: 'الفرق بين القرحة الوريدية والقرحة الشريانية في الساق',
    description: 'مقارنة واضحة بين قرح الساق الوريدية والشريانية: المكان والشكل والألم والجلد المحيط، ولماذا يجب تقييم الدورة الدموية قبل استخدام الضغط (الرباط الضاغط).',
    h1: 'القرحة الوريدية والقرحة الشريانية في الساق: ما الفرق؟',
    card: 'القرحة الوريدية مقابل الشريانية',
    lead: 'قرح الساق ليست نوعًا واحدًا. القرحة الوريدية والقرحة الشريانية تختلفان في السبب والعلاج، وبعض العلاجات المفيدة لإحداهما قد تكون خطيرة على الأخرى. لذلك يبدأ العلاج الصحيح بتحديد النوع.',
    sections: [
      {
        id: 'causes', h: 'ما السبب في كل نوع؟',
        body: [
          '<strong>القرحة الوريدية</strong> تنتج عن ضعف رجوع الدم من الساقين إلى القلب، فيتجمع الدم ويرتفع الضغط في الأوردة، ويتأثر الجلد مع الوقت. هي النوع الأكثر شيوعًا من قرح الساق.',
          '<strong>القرحة الشريانية</strong> تنتج عن ضيق أو انسداد في الشرايين يقلل وصول الدم الغني بالأكسجين إلى الساق والقدم.',
          'قد يجتمع السببان لدى المريض نفسه، وتُسمى عندها قرحة مختلطة.',
        ],
      },
      {
        id: 'compare', h: 'مقارنة سريعة',
        table: {
          caption: 'فروق عامة بين القرحة الوريدية والشريانية (قد تختلف من مريض لآخر)',
          head: ['الصفة', 'القرحة الوريدية', 'القرحة الشريانية'],
          rows: [
            ['المكان المعتاد', 'أسفل الساق فوق الكاحل، غالبًا من الجهة الداخلية', 'أصابع القدم، والقدم، والكعب، وفوق البروزات العظمية'],
            ['الشكل', 'سطحية غالبًا بحواف غير منتظمة', 'محددة الحواف وقد تبدو «مثقوبة» وعميقة، بقاع شاحب'],
            ['الإفرازات', 'متوسطة إلى غزيرة غالبًا', 'قليلة غالبًا'],
            ['الجلد المحيط', 'تورم، وتصبّغ بني، وأكزيما، وتصلب في الجلد', 'جلد لامع رقيق قليل الشعر، وقدم باردة ونبض ضعيف'],
            ['الألم', 'ثقل أو ألم يتحسن عادة برفع الساق', 'قد يكون شديدًا، ويزداد برفع الساق أو في الليل ويخف بإنزالها'],
            ['مبدأ العلاج', 'الضغط العلاجي بعد التأكد من سلامة الشرايين، ورفع الساق، والحركة', 'تحسين التروية الدموية عبر جرّاح الأوعية الدموية'],
          ],
        },
      },
      {
        id: 'compression', h: 'لماذا يجب تقييم الشرايين قبل الرباط الضاغط؟', warn: true,
        body: [
          'الضغط العلاجي (الرباط أو الجوارب الضاغطة) أساس علاج القرحة الوريدية، لكنه قد يقلل التروية أكثر لدى من لديهم ضعف في الشرايين، وقد يسبب ضررًا خطيرًا.',
          'لذلك تتطلب الإرشادات تقييم الدورة الدموية قبل البدء بالضغط، مثل فحص النبض وقياس مؤشر ضغط الكاحل إلى العضد (ABPI) أو فحوصات أخرى يحددها الفريق. لا تستخدم رباطًا ضاغطًا قبل هذا التقييم.',
        ],
      },
      {
        id: 'urgent', h: 'علامات تستدعي مراجعة عاجلة', warn: true,
        list: {
          items: [
            'قدم باردة وشاحبة أو متغيرة اللون.',
            'ألم في القدم أثناء الراحة، خصوصًا في الليل.',
            'أصابع يتحول لونها إلى الأسود.',
            'علامات عدوى منتشرة حول القرحة.',
          ],
        },
      },
      {
        id: 'care', h: 'كيف تبدأ العناية الصحيحة؟',
        list: {
          ordered: true,
          items: [
            'تقييم شامل للقرحة والمريض، بما في ذلك الدورة الدموية.',
            'تحديد نوع القرحة والإحالة إلى جرّاح الأوعية الدموية عند الحاجة.',
            'خطة عناية بالجرح مع معالجة السبب: الضغط العلاجي للقرحة الوريدية بعد التأكد من سلامة الشرايين، أو تحسين التروية للقرحة الشريانية.',
            'متابعة منتظمة وقياس التقدم.',
          ],
        },
        after: ['اقرأ أيضًا: <a href="/ar/chronic-wound-care-jordan/">العناية بالجروح المزمنة</a>.'],
      },
    ],
  },
  en: {
    title: 'Venous vs Arterial Leg Ulcers: What Is the Difference?',
    description: 'A clear comparison of venous and arterial leg ulcers: location, appearance, pain and surrounding skin, and why circulation must be checked before compression therapy.',
    h1: 'Venous and arterial leg ulcers: what is the difference?',
    card: 'Venous vs arterial leg ulcers',
    lead: 'Leg ulcers are not all the same. Venous and arterial ulcers have different causes and treatments, and a treatment that helps one can be dangerous for the other. Correct treatment starts with identifying the type.',
    sections: [
      {
        id: 'causes', h: 'What causes each type?',
        body: [
          '<strong>Venous ulcers</strong> are caused by poor return of blood from the legs to the heart. Blood pools, pressure in the veins rises, and the skin is affected over time. They are the most common type of leg ulcer.',
          '<strong>Arterial ulcers</strong> are caused by narrowed or blocked arteries that reduce the supply of oxygen-rich blood to the leg and foot.',
          'Both causes can occur in the same person; this is called a mixed ulcer.',
        ],
      },
      {
        id: 'compare', h: 'A quick comparison',
        table: {
          caption: 'General differences between venous and arterial ulcers (individual patients vary)',
          head: ['Feature', 'Venous ulcer', 'Arterial ulcer'],
          rows: [
            ['Usual location', 'Lower leg above the ankle, often on the inner side', 'Toes, foot, heel and over bony points'],
            ['Appearance', 'Often shallow with irregular edges', 'Well-defined, can look “punched out” and deep, with a pale base'],
            ['Exudate', 'Often moderate to heavy', 'Usually low'],
            ['Surrounding skin', 'Swelling, brown staining, eczema and hardened skin', 'Shiny, thin, hairless skin; cool foot with weak pulses'],
            ['Pain', 'Aching or heaviness, usually better with the leg raised', 'Can be severe; worse with the leg raised or at night, eased by hanging the leg down'],
            ['Treatment principle', 'Compression therapy once the arteries are confirmed healthy, leg elevation and activity', 'Restoring blood supply through a vascular surgeon'],
          ],
        },
      },
      {
        id: 'compression', h: 'Why the arteries must be checked before compression', warn: true,
        body: [
          'Compression (bandages or stockings) is the foundation of venous ulcer treatment, but in people with poor arterial supply it can reduce blood flow further and cause serious harm.',
          'This is why guidelines require a circulation assessment before compression starts, such as checking pulses and measuring the ankle-brachial pressure index (ABPI), or other tests the team chooses. Never apply compression before this assessment.',
        ],
      },
      {
        id: 'urgent', h: 'Signs that need urgent review', warn: true,
        list: {
          items: [
            'A cold, pale or discoloured foot.',
            'Foot pain at rest, especially at night.',
            'Toes turning black.',
            'Signs of spreading infection around the ulcer.',
          ],
        },
      },
      {
        id: 'care', h: 'How correct care begins',
        list: {
          ordered: true,
          items: [
            'A full assessment of the ulcer and the person, including circulation.',
            'Identifying the ulcer type, with referral to a vascular surgeon when needed.',
            'A wound-care plan that also treats the cause: compression for venous ulcers once the arteries are confirmed healthy, or improving blood supply for arterial ulcers.',
            'Regular follow-up and measurement of progress.',
          ],
        },
        after: ['Read also: <a href="/en/chronic-wound-care-jordan/">Chronic wound care</a>.'],
      },
    ],
  },
};
export default a;
