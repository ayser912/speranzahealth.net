import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (the correct way to measure wound size, and why it matters). */
const a: Article = {
  slug: 'how-to-measure-a-wound',
  order: 22,
  topic: 'articles',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.langemoMeasure, R.sheehanArea, R.timers],
  related: ['chronic', 'pressure', 'diabeticFoot'],
  relatedArticles: ['when-to-see-a-wound-care-specialist', 'lab-tests-and-imaging-for-wounds'],
  ar: {
    title: 'الطريقة الصحيحة لقياس حجم الجرح ولماذا هو مهم',
    description: 'كيف يُقاس طول الجرح وعرضه وعمقه والأنفاق تحت الحواف بطريقة ثابتة، وكيف تُحسب نسبة التحسن، ولماذا يساعد القياس المنتظم على معرفة ما إذا كانت الخطة تعمل.',
    h1: 'الطريقة الصحيحة لقياس حجم الجرح وأهميته',
    card: 'كيف يُقاس حجم الجرح',
    lead: 'العين وحدها لا تكفي لمعرفة ما إذا كان الجرح يتحسن. القياس المنتظم بالطريقة نفسها في كل مرة يحوّل الانطباع إلى رقم، ويكشف مبكرًا الجرح الذي يحتاج إلى تغيير الخطة.',
    sections: [
      {
        id: 'why', h: 'لماذا نقيس الجرح؟',
        list: {
          items: [
            'لمعرفة ما إذا كانت خطة العلاج تعمل أو تحتاج إلى تعديل.',
            'لأن نسبة صغر المساحة خلال الأسابيع الأولى مؤشر على فرص الالتئام: في دراسة على قرح القدم السكري، كان انخفاض المساحة بنحو 50% خلال 4 أسابيع مرتبطًا بفرصة أكبر للالتئام خلال 12 أسبوعًا.',
            'للتواصل الواضح بين أفراد الفريق والمراكز المختلفة.',
            'للتوثيق الطبي والقانوني.',
            'لاختيار حجم الضماد المناسب.',
          ],
        },
      },
      {
        id: 'how', h: 'خطوات القياس',
        list: {
          ordered: true,
          items: [
            'نظّف الجرح أولًا بالمحلول الذي يحدده الفريق، وأزل الإفرازات، لكن لا تقس بعد الإنضار مباشرة دون توثيق ذلك.',
            'ضع المريض في <strong>الوضعية نفسها</strong> في كل مرة، لأن تغيّر الوضعية يغيّر شكل الجرح.',
            '<strong>الطول:</strong> أطول مسافة في الجرح باتجاه الرأس إلى القدمين (كأن الجسم ساعة: من 12 إلى 6).',
            '<strong>العرض:</strong> أطول مسافة عمودية على الطول (من 3 إلى 9).',
            '<strong>العمق:</strong> أدخل عود قطن معقمًا بلطف إلى أعمق نقطة، وضع إصبعك عند مستوى الجلد، ثم قِس المسافة على المسطرة.',
            '<strong>الأنفاق وتجويف الحواف:</strong> افحص تحت الحواف بعود معقم، وسجّل الاتجاه بنظام الساعة والعمق، مثلًا: «تجويف 2 سم عند الساعة 3».',
            'قِس بالسنتيمتر، واستخدم مسطرة ورقية نظيفة تُستعمل مرة واحدة.',
            'سجّل التاريخ ونوع الأنسجة والإفرازات والرائحة والجلد المحيط مع الأرقام.',
          ],
        },
      },
      {
        id: 'area', h: 'حساب المساحة ونسبة التحسن',
        body: [
          '<strong>المساحة التقريبية</strong> = الطول × العرض (سم²). هذه الطريقة بسيطة لكنها تبالغ في تقدير المساحة الحقيقية، خصوصًا في الجروح غير المنتظمة. والمهم أن تُستخدم الطريقة نفسها دائمًا.',
          '<strong>نسبة التحسن</strong> = (المساحة الأولى − المساحة الحالية) ÷ المساحة الأولى × 100.',
          'مثال: جرح مساحته 4 × 3 = 12 سم²، وأصبح بعد أربعة أسابيع 3 × 2 = 6 سم². نسبة التحسن = (12 − 6) ÷ 12 × 100 = 50%.',
        ],
      },
      {
        id: 'tools', h: 'طرق أخرى للقياس',
        list: {
          items: [
            '<strong>تتبّع حدود الجرح</strong> على غشاء شفاف معقم ثم حساب المساحة بالمربعات.',
            '<strong>التصوير الرقمي</strong> مع مسطرة بجانب الجرح، من المسافة والزاوية والإضاءة نفسها في كل مرة، وبموافقة المريض.',
            '<strong>تطبيقات وأجهزة القياس الرقمية</strong> التي تحسب المساحة والعمق من الصورة، وهي أدق في الجروح غير المنتظمة.',
          ],
        },
      },
      {
        id: 'mistakes', h: 'أخطاء شائعة في القياس',
        list: {
          items: [
            'تغيير الطريقة أو الشخص أو الوضعية بين القياسات دون توثيق.',
            'القياس من فوق الجلد المحمر أو المتشبع بالرطوبة بدل حدود الجرح المفتوح.',
            'نسيان قياس العمق والأنفاق، فيبدو الجرح أصغر مما هو.',
            'عدم القياس بانتظام: يُنصح عادة بالقياس أسبوعيًا أو كل أسبوعين، وعند أي تغيّر واضح.',
          ],
        },
      },
      {
        id: 'warn', h: 'متى يدل القياس على مشكلة؟', warn: true,
        list: {
          items: [
            'زيادة حجم الجرح أو عمقه.',
            'ظهور نفق أو تجويف جديد.',
            'عدم انخفاض المساحة بشكل واضح بعد 2–4 أسابيع من العلاج الصحيح، وهذا يستدعي إعادة تقييم الخطة والسبب.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'How to Measure a Wound Correctly, and Why It Matters',
    description: 'How to measure wound length, width, depth and undermining consistently, how to calculate percentage improvement, and why regular measurement shows whether the plan works.',
    h1: 'How to measure a wound correctly, and why it matters',
    card: 'How to measure a wound',
    lead: 'The eye alone cannot tell whether a wound is improving. Measuring regularly in the same way every time turns an impression into a number, and shows early when the plan needs to change.',
    sections: [
      {
        id: 'why', h: 'Why measure a wound?',
        list: {
          items: [
            'To know whether the treatment plan is working or needs adjusting.',
            'Because the reduction in area over the first weeks predicts healing: in a study of diabetic foot ulcers, an area reduction of about 50% over 4 weeks was linked with a much better chance of healing within 12 weeks.',
            'For clear communication between team members and different centres.',
            'For medical and legal documentation.',
            'To choose the right dressing size.',
          ],
        },
      },
      {
        id: 'how', h: 'Steps of measurement',
        list: {
          ordered: true,
          items: [
            'Clean the wound first with the solution the team uses and remove exudate; if measuring straight after debridement, record that.',
            'Place the patient in <strong>the same position</strong> every time, because position changes the wound’s shape.',
            '<strong>Length:</strong> the longest distance head-to-toe (think of a clock on the body: 12 to 6).',
            '<strong>Width:</strong> the longest distance at right angles to the length (3 to 9).',
            '<strong>Depth:</strong> gently insert a sterile cotton-tipped applicator to the deepest point, mark skin level with your finger, then measure against the ruler.',
            '<strong>Tunnelling and undermining:</strong> probe under the edges with a sterile applicator and record the direction by the clock and the depth, for example “2 cm undermining at 3 o’clock”.',
            'Measure in centimetres, using a clean single-use paper ruler.',
            'Record the date, tissue type, exudate, odour and surrounding skin with the numbers.',
          ],
        },
      },
      {
        id: 'area', h: 'Calculating area and improvement',
        body: [
          '<strong>Approximate area</strong> = length × width (cm²). This method is simple but overestimates the true area, especially in irregular wounds. What matters is always using the same method.',
          '<strong>Percentage improvement</strong> = (first area − current area) ÷ first area × 100.',
          'Example: a wound of 4 × 3 = 12 cm² becomes 3 × 2 = 6 cm² after four weeks. Improvement = (12 − 6) ÷ 12 × 100 = 50%.',
        ],
      },
      {
        id: 'tools', h: 'Other ways to measure',
        list: {
          items: [
            '<strong>Tracing the wound edge</strong> on a sterile transparent film and counting the squares.',
            '<strong>Digital photography</strong> with a ruler beside the wound, from the same distance, angle and lighting each time, with the patient’s consent.',
            '<strong>Digital measurement apps and devices</strong> that calculate area and depth from an image, more accurate for irregular wounds.',
          ],
        },
      },
      {
        id: 'mistakes', h: 'Common measuring mistakes',
        list: {
          items: [
            'Changing the method, the person or the position between measurements without recording it.',
            'Measuring red or waterlogged skin instead of the edge of the open wound.',
            'Forgetting depth and tunnelling, so the wound looks smaller than it is.',
            'Not measuring regularly: usually weekly or every two weeks, and whenever there is a clear change.',
          ],
        },
      },
      {
        id: 'warn', h: 'When measurement points to a problem', warn: true,
        list: {
          items: [
            'The wound gets larger or deeper.',
            'A new tunnel or undermining appears.',
            'The area has not clearly reduced after 2–4 weeks of correct treatment: the plan and the cause need reassessing.',
          ],
        },
      },
    ],
  },
};
export default a;
