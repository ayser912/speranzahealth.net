import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (blood perfusion and wounds). */
const a: Article = {
  slug: 'tissue-perfusion-and-wound-healing',
  order: 12,
  topic: 'chronic',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.gornikPad, R.iwgdfPad, R.clti, R.timers],
  related: ['chronic', 'diabeticFoot'],
  relatedArticles: ['venous-vs-arterial-leg-ulcers', 'varicose-veins-and-venous-ulcers', 'kidney-disease-and-wound-healing'],
  ar: {
    title: 'التروية الدموية والجروح: لماذا لا يلتئم الجرح بلا دم كافٍ؟',
    description: 'ما هي التروية الدموية، وكيف يؤثر ضعف الشرايين على التئام الجروح، وما الفحوصات التي تقيس وصول الدم إلى الساق والقدم، ومتى تكون المراجعة عاجلة.',
    h1: 'التروية الدموية والتئام الجروح',
    card: 'التروية الدموية والجروح',
    lead: 'كل جرح يحتاج إلى دم يحمل الأكسجين والغذاء وخلايا المناعة حتى يلتئم. عندما تضعف التروية الدموية، قد لا تكفي أفضل الضمادات، لأن السبب الحقيقي لم يُعالج بعد.',
    sections: [
      {
        id: 'what', h: 'ما هي التروية الدموية؟',
        body: [
          'التروية الدموية (Perfusion) هي وصول الدم الغني بالأكسجين عبر الشرايين إلى الأنسجة. في الجرح، يحمل الدم الأكسجين اللازم لبناء نسيج جديد، والبروتين والفيتامينات، وخلايا المناعة التي تحارب البكتيريا، والمضادات الحيوية عند الحاجة إليها.',
          'لذلك يُعد تقييم التروية من أول خطوات تقييم أي جرح مزمن في الساق أو القدم، خصوصًا لدى مرضى السكري والمدخنين وكبار السن ومرضى الكلى.',
        ],
      },
      {
        id: 'causes', h: 'ما الذي يضعف التروية؟',
        list: {
          items: [
            '<strong>مرض الشرايين الطرفية (PAD):</strong> تضيّق أو انسداد في شرايين الساقين بسبب تصلب الشرايين، وهو السبب الأهم.',
            '<strong>عوامل الخطر:</strong> التدخين، والسكري، وارتفاع ضغط الدم والكوليسترول، وأمراض الكلى المزمنة، والتقدم في العمر.',
            '<strong>الضغط الخارجي:</strong> الضغط المستمر على الجلد (قرح الضغط) أو رباط ضيق يمنع وصول الدم إلى المنطقة.',
            '<strong>التورم الشديد</strong> الذي يضغط على الأوعية الصغيرة.',
            '<strong>الجفاف وانخفاض ضغط الدم</strong> وفقر الدم الشديد، التي تقلل ما يصل من أكسجين إلى الأنسجة.',
          ],
        },
      },
      {
        id: 'signs', h: 'علامات ضعف التروية في الساق والقدم',
        list: {
          items: [
            'ألم في عضلة الساق عند المشي يزول بالراحة (العرج المتقطع).',
            'ألم في القدم أثناء الراحة، خصوصًا ليلًا، يخف عند إنزال القدم من السرير.',
            'قدم باردة أو شاحبة، أو تحمرّ عند إنزالها.',
            'جلد لامع رقيق، وتساقط شعر الساق، وأظافر سميكة.',
            'نبض ضعيف أو غير محسوس في القدم.',
            'جرح شاحب القاع، قليل الإفرازات، لا يتقدم رغم العناية.',
          ],
        },
      },
      {
        id: 'tests', h: 'كيف تُقاس التروية؟',
        table: {
          caption: 'فحوصات شائعة لتقييم التروية (يختار الفريق المعالج ما يناسب كل حالة)',
          head: ['الفحص', 'ماذا يقيس', 'ملاحظة'],
          rows: [
            ['فحص النبض', 'وجود النبض في شرايين القدم', 'بداية التقييم، لكنه لا يكفي وحده'],
            ['مؤشر ضغط الكاحل إلى العضد (ABPI)', 'نسبة ضغط الدم في الكاحل إلى ضغطه في الذراع', 'الطبيعي تقريبًا 0.9–1.3. أقل من 0.9 يشير إلى مرض الشرايين، وأكثر من 1.3 قد يعني تصلبًا في جدار الشريان يجعل القراءة غير موثوقة (شائع في السكري والكلى)'],
            ['ضغط إصبع القدم ومؤشره (TBI)', 'ضغط الدم في إصبع القدم', 'مفيد عندما يكون ABPI غير موثوق. ضغط إصبع أقل من 30 ملم زئبق يرتبط بضعف فرص الالتئام'],
            ['قياس الأكسجين عبر الجلد (TcPO2)', 'كمية الأكسجين التي تصل إلى الجلد حول الجرح', 'أقل من 30 ملم زئبق يشير إلى نقص تروية مهم'],
            ['الدوبلر الملوّن (Duplex)', 'شكل الشرايين وسرعة الدم فيها', 'يحدد مكان التضيق وشدته'],
            ['تصوير الشرايين (CTA أو MRA أو القسطرة)', 'خريطة دقيقة للشرايين', 'عادة قبل التخطيط لتوسيع الشريان أو جراحة المجازة'],
          ],
        },
        after: ['قد تختلف القيم الحدية قليلًا بين الإرشادات والمختبرات، ويفسّرها الطبيب المختص ضمن الصورة الكاملة.'],
      },
      {
        id: 'urgent', h: 'متى تكون المراجعة عاجلة؟', warn: true,
        list: {
          items: [
            'قدم باردة شاحبة مع ألم مفاجئ وشديد أو تنميل أو ضعف في الحركة: قد يكون انسدادًا حادًا يحتاج إلى طوارئ فورًا.',
            'أصابع يتحول لونها إلى الأزرق أو الأسود.',
            'ألم في القدم أثناء الراحة يمنع النوم.',
            'جرح في قدم ضعيفة التروية مع علامات عدوى.',
          ],
        },
      },
      {
        id: 'care', h: 'ماذا يعني هذا للعلاج؟',
        list: {
          items: [
            'التروية الضعيفة تُعالج أولًا: يقيّم جرّاح الأوعية الدموية إمكانية توسيع الشريان بالقسطرة أو إجراء مجازة جراحية.',
            'لا يُستخدم الرباط الضاغط قبل التأكد من سلامة الشرايين.',
            'لا تُزال القشرة السوداء الجافة في قدم ضعيفة التروية قبل تقييم الدورة الدموية.',
            'الإقلاع عن التدخين، وضبط السكر والضغط والكوليسترول، والمشي المنظم بإشراف طبي، كلها جزء من العلاج.',
          ],
        },
        after: ['اقرأ أيضًا: <a href="/ar/articles/venous-vs-arterial-leg-ulcers/">الفرق بين القرحة الوريدية والشريانية</a>.'],
      },
    ],
  },
  en: {
    title: 'Blood Perfusion and Wound Healing: Why Blood Supply Matters',
    description: 'What tissue perfusion is, how poor arterial supply stops wounds healing, which tests measure blood flow to the leg and foot, and when review is urgent.',
    h1: 'Blood perfusion and wound healing',
    card: 'Blood perfusion and wounds',
    lead: 'Every wound needs blood carrying oxygen, nutrients and immune cells in order to heal. When perfusion is poor, even the best dressing may not be enough, because the real cause has not been treated.',
    sections: [
      {
        id: 'what', h: 'What is perfusion?',
        body: [
          'Perfusion is the delivery of oxygen-rich blood through the arteries to the tissues. In a wound, blood carries the oxygen needed to build new tissue, protein and vitamins, immune cells that fight bacteria, and antibiotics when they are needed.',
          'That is why checking perfusion is one of the first steps in assessing any chronic leg or foot wound, especially in people with diabetes, smokers, older adults and people with kidney disease.',
        ],
      },
      {
        id: 'causes', h: 'What reduces perfusion?',
        list: {
          items: [
            '<strong>Peripheral artery disease (PAD):</strong> narrowed or blocked leg arteries from atherosclerosis, the most important cause.',
            '<strong>Risk factors:</strong> smoking, diabetes, high blood pressure and cholesterol, chronic kidney disease and older age.',
            '<strong>External pressure:</strong> constant pressure on the skin (pressure injuries) or a tight bandage that stops blood reaching the area.',
            '<strong>Severe swelling</strong> that compresses small vessels.',
            '<strong>Dehydration, low blood pressure</strong> and severe anaemia, which reduce the oxygen delivered to tissues.',
          ],
        },
      },
      {
        id: 'signs', h: 'Signs of poor perfusion in the leg and foot',
        list: {
          items: [
            'Calf pain on walking that settles with rest (intermittent claudication).',
            'Foot pain at rest, especially at night, eased by hanging the foot out of bed.',
            'A cold or pale foot, or one that turns red when lowered.',
            'Shiny thin skin, loss of leg hair and thickened nails.',
            'Weak or absent foot pulses.',
            'A wound with a pale base and little exudate that does not progress despite good care.',
          ],
        },
      },
      {
        id: 'tests', h: 'How is perfusion measured?',
        table: {
          caption: 'Common tests of perfusion (the treating team chooses what suits each case)',
          head: ['Test', 'What it measures', 'Notes'],
          rows: [
            ['Pulse check', 'Whether the foot pulses can be felt', 'A starting point, but not enough on its own'],
            ['Ankle-brachial pressure index (ABPI)', 'Ankle blood pressure divided by arm blood pressure', 'Normal is roughly 0.9–1.3. Below 0.9 suggests artery disease; above 1.3 may mean stiff arteries that make the reading unreliable (common in diabetes and kidney disease)'],
            ['Toe pressure and toe-brachial index (TBI)', 'Blood pressure in the toe', 'Useful when ABPI is unreliable. A toe pressure below 30 mmHg is linked with a poor chance of healing'],
            ['Transcutaneous oxygen (TcPO2)', 'Oxygen reaching the skin around the wound', 'Below 30 mmHg suggests significant ischaemia'],
            ['Duplex ultrasound', 'The shape of the arteries and blood flow speed', 'Locates narrowing and its severity'],
            ['Angiography (CTA, MRA or catheter)', 'A detailed map of the arteries', 'Usually before planning angioplasty or bypass surgery'],
          ],
        },
        after: ['Cut-off values differ slightly between guidelines and laboratories, and the specialist interprets them within the whole picture.'],
      },
      {
        id: 'urgent', h: 'When is review urgent?', warn: true,
        list: {
          items: [
            'A cold, pale foot with sudden severe pain, numbness or weakness: this may be an acute blockage and needs emergency care immediately.',
            'Toes turning blue or black.',
            'Foot pain at rest that stops you sleeping.',
            'A wound on a poorly perfused foot with signs of infection.',
          ],
        },
      },
      {
        id: 'care', h: 'What this means for treatment',
        list: {
          items: [
            'Poor perfusion is treated first: a vascular surgeon assesses whether the artery can be opened by angioplasty or bypassed surgically.',
            'Compression is never applied before the arteries are confirmed healthy.',
            'Dry black eschar on a poorly perfused foot is not removed before the circulation has been assessed.',
            'Stopping smoking, controlling glucose, blood pressure and cholesterol, and supervised walking are all part of treatment.',
          ],
        },
        after: ['Read also: <a href="/en/articles/venous-vs-arterial-leg-ulcers/">Venous vs arterial leg ulcers</a>.'],
      },
    ],
  },
};
export default a;
