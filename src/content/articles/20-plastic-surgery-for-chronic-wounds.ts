import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (plastic and reconstructive surgery for chronic wounds, and the right timing). */
const a: Article = {
  slug: 'plastic-surgery-for-chronic-wounds',
  order: 20,
  topic: 'chronic',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.janisLadder, R.piGuideline, R.ewmaNpwt, R.timers],
  related: ['chronic', 'pressure', 'npwt'],
  relatedArticles: ['traumatic-wounds-and-bone-infection', 'nutrition-and-vitamins-for-wound-healing', 'tissue-perfusion-and-wound-healing'],
  ar: {
    title: 'الجراحة التجميلية والترميمية للجروح المزمنة وأنسب وقت لها',
    description: 'متى يحتاج الجرح المزمن إلى جراحة تجميلية وترميمية، وما خيارات الترميم من الإغلاق المباشر إلى الطعوم الجلدية والشرائح، وما الشروط التي تجعل التوقيت مناسبًا.',
    h1: 'الجراحة التجميلية والترميمية للجروح المزمنة: الخيارات والتوقيت',
    card: 'الجراحة الترميمية للجروح المزمنة',
    lead: 'بعض الجروح الكبيرة أو العميقة تلتئم ببطء شديد أو لا تلتئم وحدها. الجراحة الترميمية قد تختصر أشهرًا من العلاج، لكن نجاحها يعتمد على اختيار الوقت الصحيح وتحضير الجرح والمريض جيدًا.',
    sections: [
      {
        id: 'when', h: 'متى يُفكَّر في الترميم الجراحي؟',
        list: {
          items: [
            'جرح كبير أو عميق يكشف عظمًا أو وترًا أو مفصلًا أو شرائح معدنية.',
            'قرحة ضغط من المرحلة الثالثة أو الرابعة لا تتقدم رغم العناية الصحيحة.',
            'جروح الحوادث والحروق الواسعة.',
            'جرح جراحي مفتوح كبير بعد عملية أو بعد إزالة عدوى.',
            'جرح مزمن تحسّن قاعه وأصبح جاهزًا، لكن حجمه يجعل الالتئام الطبيعي طويلًا جدًا.',
          ],
        },
      },
      {
        id: 'ladder', h: 'خيارات الترميم: من الأبسط إلى الأعقد',
        table: {
          caption: 'سلّم الترميم (يختار الجرّاح الخيار الأنسب حسب الجرح والمريض، لا الأبسط بالضرورة)',
          head: ['الخيار', 'ما هو', 'يناسب عادة'],
          rows: [
            ['الالتئام الثانوي', 'ترك الجرح يلتئم من القاع بالضمادات المناسبة', 'الجروح الصغيرة أو السطحية'],
            ['الإغلاق المباشر', 'خياطة حواف الجرح معًا', 'الجروح التي يمكن تقريب حوافها دون شد'],
            ['العلاج بالضغط السلبي', 'جهاز يحضّر القاع ويقلل حجم الجرح قبل الترميم أو يثبّت الطعم بعده', 'جسر قبل الإغلاق أو الطعم'],
            ['الطعم الجلدي', 'نقل طبقة رقيقة من الجلد من مكان آخر من جسم المريض', 'جرح بقاع حبيبي صحي وتروية جيدة'],
            ['بدائل الجلد والأدمة', 'منتجات حيوية أو صناعية تبني طبقة تحت الطعم', 'بعض الجروح المعقدة، بقرار الجرّاح'],
            ['الشرائح الموضعية', 'تحريك نسيج سليم مع أوعيته الدموية من منطقة مجاورة', 'تغطية العظم أو الأوتار، وقرح الضغط العميقة'],
            ['الشرائح الحرة (الجراحة المجهرية)', 'نقل نسيج مع أوعيته ووصلها بأوعية جديدة تحت المجهر', 'الجروح الكبيرة التي لا تكفيها الخيارات الموضعية'],
          ],
        },
      },
      {
        id: 'timing', h: 'ما هو أنسب وقت للجراحة؟',
        body: ['ينجح الترميم أكثر عندما تتحقق الشروط التالية، ولذلك قد يؤجله الجرّاح حتى تكتمل:'],
        list: {
          items: [
            '<strong>قاع جرح نظيف:</strong> نسيج حبيبي أحمر صحي، دون نسيج ميت أو عدوى نشطة. وإن وُجد التهاب في العظم يُعالج أولًا.',
            '<strong>تروية دموية كافية:</strong> تقييم الشرايين ومعالجتها قبل الترميم، خصوصًا في الساق والقدم.',
            '<strong>إزالة سبب الجرح:</strong> مثل خطة واضحة لتخفيف الضغط بعد ترميم قرحة الضغط، وضبط التورم في القرح الوريدية.',
            '<strong>حالة صحية مستقرة:</strong> ضبط السكر، وتصحيح فقر الدم وسوء التغذية، والإقلاع عن التدخين قبل العملية بأسابيع.',
            '<strong>قدرة المريض على الالتزام بالخطة بعد العملية:</strong> مثل الراحة ووضعيات معينة لأسابيع.',
          ],
        },
        after: ['التأخير الطويل دون سبب قد يزيد خطر العدوى وفقدان الحركة وتكلفة العلاج، والتسرّع قبل تحضير الجرح قد يؤدي إلى فشل الطعم أو الشريحة. لذلك يُقرَّر التوقيت بالتنسيق بين أخصائي الجروح والجرّاح.'],
      },
      {
        id: 'after', h: 'ما بعد العملية',
        list: {
          items: [
            'حماية الطعم أو الشريحة من الضغط والاحتكاك والحركة خلال الفترة التي يحددها الجرّاح.',
            'العناية بمكان أخذ الطعم (المنطقة المانحة)، فهو جرح سطحي يحتاج إلى ضماد مناسب.',
            'متابعة لون الشريحة وحرارتها في الأيام الأولى، والإبلاغ فورًا عن أي تغيّر إلى الشاحب أو الداكن.',
            'التغذية الجيدة والعلاج الطبيعي التدريجي.',
            'العناية بالندبة بعد الالتئام، والوقاية من عودة الجرح.',
          ],
        },
      },
      {
        id: 'warn', h: 'علامات تستدعي التواصل مع الجرّاح فورًا', warn: true,
        list: {
          items: [
            'تغير لون الشريحة إلى الأزرق أو الأسود أو الشاحب جدًا.',
            'نزيف أو تورم متزايد تحت الطعم أو الشريحة.',
            'حرارة أو صديد أو رائحة كريهة.',
            'انفتاح الجرح بعد الخياطة.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Plastic and Reconstructive Surgery for Chronic Wounds: Timing',
    description: 'When a chronic wound needs plastic and reconstructive surgery, the options from direct closure to skin grafts and flaps, and the conditions that make the timing right.',
    h1: 'Plastic and reconstructive surgery for chronic wounds: options and timing',
    card: 'Reconstructive surgery for chronic wounds',
    lead: 'Some large or deep wounds heal very slowly or not at all on their own. Reconstructive surgery can save months of treatment, but success depends on choosing the right time and preparing the wound and the patient well.',
    sections: [
      {
        id: 'when', h: 'When is surgical reconstruction considered?',
        list: {
          items: [
            'A large or deep wound exposing bone, tendon, joint or metal plates.',
            'A stage 3 or 4 pressure injury that does not progress despite correct care.',
            'Extensive trauma wounds and burns.',
            'A large open surgical wound after an operation or after infection has been cleared.',
            'A chronic wound whose bed has improved and is ready, but whose size would make natural healing very long.',
          ],
        },
      },
      {
        id: 'ladder', h: 'Reconstruction options: from simplest to most complex',
        table: {
          caption: 'The reconstructive ladder (the surgeon chooses the most suitable option for the wound and the patient, not necessarily the simplest)',
          head: ['Option', 'What it is', 'Usually suits'],
          rows: [
            ['Healing by secondary intention', 'Letting the wound heal from the base with suitable dressings', 'Small or superficial wounds'],
            ['Direct closure', 'Stitching the wound edges together', 'Wounds whose edges can be brought together without tension'],
            ['Negative pressure wound therapy', 'A device that prepares the bed and shrinks the wound before reconstruction, or secures a graft afterwards', 'A bridge to closure or grafting'],
            ['Skin graft', 'Moving a thin layer of skin from elsewhere on the patient’s body', 'A wound with a healthy granulating bed and good perfusion'],
            ['Skin and dermal substitutes', 'Biological or synthetic products that build a layer beneath a graft', 'Some complex wounds, as the surgeon decides'],
            ['Local flaps', 'Moving healthy tissue with its own blood supply from a neighbouring area', 'Covering bone or tendon, and deep pressure injuries'],
            ['Free flaps (microsurgery)', 'Transferring tissue with its vessels and joining them to new vessels under a microscope', 'Large wounds that local options cannot cover'],
          ],
        },
      },
      {
        id: 'timing', h: 'When is the right time for surgery?',
        body: ['Reconstruction succeeds more often when the following conditions are met, so the surgeon may wait until they are:'],
        list: {
          items: [
            '<strong>A clean wound bed:</strong> healthy red granulation tissue, without dead tissue or active infection. Bone infection is treated first.',
            '<strong>Adequate perfusion:</strong> the arteries are assessed and treated before reconstruction, especially in the leg and foot.',
            '<strong>The cause has been removed:</strong> for example a clear pressure-relief plan after pressure-injury reconstruction, and swelling controlled in venous ulcers.',
            '<strong>Stable health:</strong> controlled glucose, corrected anaemia and malnutrition, and stopping smoking weeks before surgery.',
            '<strong>The patient can follow the post-operative plan:</strong> such as rest and specific positions for several weeks.',
          ],
        },
        after: ['Long delays without reason can raise the risk of infection, loss of mobility and cost, while rushing before the wound is prepared can lead to graft or flap failure. Timing is therefore decided jointly by the wound specialist and the surgeon.'],
      },
      {
        id: 'after', h: 'After surgery',
        list: {
          items: [
            'Protecting the graft or flap from pressure, friction and movement for the period the surgeon sets.',
            'Caring for the donor site, a superficial wound that needs a suitable dressing.',
            'Watching the flap’s colour and warmth in the first days, and reporting any pale or dark change immediately.',
            'Good nutrition and gradual physiotherapy.',
            'Scar care after healing, and preventing the wound from returning.',
          ],
        },
      },
      {
        id: 'warn', h: 'Signs to contact the surgeon immediately', warn: true,
        list: {
          items: [
            'The flap turns blue, black or very pale.',
            'Bleeding or increasing swelling under the graft or flap.',
            'Fever, pus or a bad smell.',
            'The wound opening up after stitching.',
          ],
        },
      },
    ],
  },
};
export default a;
