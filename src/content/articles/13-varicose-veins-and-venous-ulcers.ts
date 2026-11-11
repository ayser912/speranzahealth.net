import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (varicose veins of the legs). */
const a: Article = {
  slug: 'varicose-veins-and-venous-ulcers',
  order: 13,
  topic: 'chronic',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.esvsVenous, R.niceVaricose, R.partschCompression],
  related: ['chronic', 'dressings'],
  relatedArticles: ['venous-vs-arterial-leg-ulcers', 'tissue-perfusion-and-wound-healing'],
  ar: {
    title: 'دوالي الساقين: الأسباب والمراحل وعلاقتها بالقرح الوريدية',
    description: 'ما هي دوالي الساقين، وكيف تتطور من أوردة ظاهرة إلى تورم وتغير لون الجلد ثم قرحة وريدية، وطرق العلاج والوقاية، ومتى يجب مراجعة الطبيب.',
    h1: 'دوالي الساقين وعلاقتها بالقرح الوريدية',
    card: 'دوالي الساقين والقرح الوريدية',
    lead: 'الدوالي ليست مشكلة شكلية فقط. عند بعض الناس يتطور ضعف الأوردة مع السنوات إلى تورم وتغيرات في الجلد، وقد ينتهي بقرحة وريدية مزمنة في أسفل الساق.',
    sections: [
      {
        id: 'what', h: 'ما هي الدوالي؟',
        body: [
          'في الأوردة صمامات صغيرة تمنع رجوع الدم إلى الأسفل. عندما تضعف هذه الصمامات، يتجمع الدم في أوردة الساق فتتسع وتلتوي وتظهر تحت الجلد، وهذه هي الدوالي.',
          'يرتفع الضغط داخل الأوردة (ارتفاع الضغط الوريدي)، ومع الوقت يتأثر الجلد والأنسجة في أسفل الساق.',
        ],
      },
      {
        id: 'risk', h: 'من الأكثر عرضة؟',
        list: {
          items: [
            'وجود تاريخ عائلي للدوالي.',
            'الحمل المتكرر.',
            'الوقوف أو الجلوس لفترات طويلة بحكم العمل.',
            'زيادة الوزن وقلة الحركة.',
            'التقدم في العمر.',
            'جلطة سابقة في أوردة الساق العميقة (DVT).',
          ],
        },
      },
      {
        id: 'stages', h: 'كيف تتطور الحالة؟',
        table: {
          caption: 'مراحل مبسّطة لمرض الأوردة المزمن (مستوحاة من تصنيف CEAP المستخدم دوليًا)',
          head: ['المرحلة', 'ما الذي يظهر'],
          rows: [
            ['أوردة شعرية', 'شعيرات دموية حمراء أو زرقاء رفيعة'],
            ['دوالي', 'أوردة متسعة ملتوية بارزة، مع ثقل أو ألم في الساق آخر النهار'],
            ['تورم', 'تورم حول الكاحل يزداد مساءً ويخف بعد الراحة'],
            ['تغيرات الجلد', 'تصبّغ بني، وأكزيما وحكة، وتصلّب الجلد في أسفل الساق'],
            ['قرحة ملتئمة', 'ندبة قرحة سابقة، مع خطر عودتها'],
            ['قرحة نشطة', 'جرح مفتوح غالبًا فوق الكاحل من الجهة الداخلية، بإفرازات متوسطة إلى غزيرة'],
          ],
        },
      },
      {
        id: 'treatment', h: 'طرق العلاج',
        list: {
          items: [
            '<strong>الضغط العلاجي:</strong> جوارب أو أربطة ضاغطة تساعد الأوردة على إرجاع الدم، وهي أساس علاج القرحة الوريدية، لكن بعد التأكد من سلامة الشرايين. <a href="/ar/advanced-wound-dressings/#compression">أنواع الضمادات الضاغطة</a>.',
            '<strong>علاج الأوردة نفسها:</strong> يقرره جرّاح الأوعية الدموية بعد فحص الدوبلر، مثل الكيّ الحراري للوريد من الداخل (بالليزر أو الترددات الحرارية)، أو الحقن بالمادة المصلّبة، أو الجراحة. علاج الوريد المصاب قد يقلل خطر عودة القرحة.',
            '<strong>نمط الحياة:</strong> المشي المنتظم، ورفع الساقين عند الراحة، وتمارين عضلة الساق، وإنقاص الوزن، وتجنب الوقوف الطويل دون حركة.',
            '<strong>العناية بالجلد:</strong> ترطيب يومي لمنع الجفاف والتشقق، وعلاج الأكزيما الوريدية حسب وصف الطبيب.',
          ],
        },
      },
      {
        id: 'warn', h: 'متى تراجع الطبيب بسرعة؟', warn: true,
        list: {
          items: [
            'تورم مفاجئ في ساق واحدة مع ألم أو احمرار أو سخونة: قد يكون جلطة في الوريد العميق وتحتاج إلى تقييم عاجل.',
            'ضيق نفس مفاجئ أو ألم في الصدر: توجّه إلى الطوارئ فورًا.',
            'نزيف من دالية: ارفع الساق واضغط مباشرة على مكان النزيف واطلب المساعدة الطبية.',
            'جرح جديد في أسفل الساق لا يتحسن خلال أسبوعين.',
          ],
        },
      },
      {
        id: 'myths', h: 'معلومات شائعة غير صحيحة',
        list: {
          items: [
            '«الدوالي مشكلة تجميلية فقط»: قد تتطور إلى تغيرات جلدية وقرح، خصوصًا مع التورم المستمر.',
            '«أي رباط ضاغط مناسب»: الضغط غير المناسب أو المطبق على شرايين ضعيفة قد يسبب أذى. يُختار نوعه ودرجته بعد التقييم.',
            '«القرحة الوريدية تحتاج إلى مضاد حيوي دائمًا»: المضاد الحيوي يُعطى عند وجود عدوى فقط، والأساس هو الضغط العلاجي والعناية بالجرح.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Varicose Veins: Causes, Stages and Link to Venous Ulcers',
    description: 'What varicose veins are, how they progress from visible veins to swelling, skin changes and venous leg ulcers, treatment and prevention, and when to see a doctor.',
    h1: 'Varicose veins and venous leg ulcers',
    card: 'Varicose veins and venous ulcers',
    lead: 'Varicose veins are not only a cosmetic problem. In some people, weak veins lead over the years to swelling and skin changes, and can end in a chronic venous ulcer of the lower leg.',
    sections: [
      {
        id: 'what', h: 'What are varicose veins?',
        body: [
          'Veins have small valves that stop blood flowing backwards. When these valves weaken, blood pools in the leg veins, which widen, twist and bulge under the skin: these are varicose veins.',
          'Pressure inside the veins rises (venous hypertension), and over time the skin and tissues of the lower leg are affected.',
        ],
      },
      {
        id: 'risk', h: 'Who is most at risk?',
        list: {
          items: [
            'A family history of varicose veins.',
            'Repeated pregnancies.',
            'Long periods of standing or sitting at work.',
            'Excess weight and inactivity.',
            'Older age.',
            'A previous deep vein thrombosis (DVT) in the leg.',
          ],
        },
      },
      {
        id: 'stages', h: 'How does the condition progress?',
        table: {
          caption: 'Simplified stages of chronic venous disease (based on the international CEAP classification)',
          head: ['Stage', 'What you see'],
          rows: [
            ['Thread veins', 'Fine red or blue thread-like veins'],
            ['Varicose veins', 'Widened, twisted, bulging veins, with heaviness or aching at the end of the day'],
            ['Swelling', 'Ankle swelling that is worse in the evening and better after rest'],
            ['Skin changes', 'Brown staining, eczema and itching, and hardened skin on the lower leg'],
            ['Healed ulcer', 'The scar of a previous ulcer, with a risk of it returning'],
            ['Active ulcer', 'An open wound, often above the inner ankle, with moderate to heavy exudate'],
          ],
        },
      },
      {
        id: 'treatment', h: 'Treatment options',
        list: {
          items: [
            '<strong>Compression therapy:</strong> stockings or bandages that help the veins return blood. This is the foundation of venous ulcer treatment, once the arteries are confirmed healthy. <a href="/en/advanced-wound-dressings/#compression">Types of compression bandage</a>.',
            '<strong>Treating the veins themselves:</strong> decided by a vascular surgeon after a duplex scan, such as endovenous thermal ablation (laser or radiofrequency), foam sclerotherapy or surgery. Treating the faulty vein can lower the risk of the ulcer coming back.',
            '<strong>Lifestyle:</strong> regular walking, raising the legs when resting, calf exercises, weight loss, and avoiding long periods of standing still.',
            '<strong>Skin care:</strong> daily moisturising to prevent dryness and cracking, and treatment of venous eczema as prescribed.',
          ],
        },
      },
      {
        id: 'warn', h: 'When to see a doctor quickly', warn: true,
        list: {
          items: [
            'Sudden swelling of one leg with pain, redness or warmth: this may be a deep vein thrombosis and needs urgent assessment.',
            'Sudden breathlessness or chest pain: go to the emergency department immediately.',
            'Bleeding from a varicose vein: raise the leg, press firmly on the bleeding point and get medical help.',
            'A new wound on the lower leg that has not improved within two weeks.',
          ],
        },
      },
      {
        id: 'myths', h: 'Common misconceptions',
        list: {
          items: [
            '“Varicose veins are only cosmetic”: they can progress to skin changes and ulcers, especially with ongoing swelling.',
            '“Any compression bandage will do”: the wrong compression, or compression on poor arteries, can cause harm. The type and strength are chosen after assessment.',
            '“A venous ulcer always needs antibiotics”: antibiotics are given only for infection; the foundation is compression and wound care.',
          ],
        },
      },
    ],
  },
};
export default a;
