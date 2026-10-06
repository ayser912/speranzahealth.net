import type { ClinicalPageData } from '../../lib/content-types';
import { R } from '../refs';

const page: ClinicalPageData = {
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.piGuideline, R.npiapStaging, R.iwii, R.timers],
  related: ['chronic', 'diabeticFoot', 'npwt', 'credentials'],
  ar: {
    title: 'علاج قرح الضغط (قرح الفراش) والوقاية منها في الأردن',
    description: 'ما هي قرح الضغط (قرح الفراش)، ومن الأكثر عرضة لها، وكيف نقي منها ونعتني بها في المنزل والمستشفى؟ دليل تثقيفي من أخصائي جروح معتمد CWS®.',
    h1: 'قرح الضغط (قرح الفراش): الوقاية والعناية',
    lead: 'قرحة الضغط إصابة في الجلد أو الأنسجة تحته تنتج عن ضغط مستمر أو احتكاك، وغالبًا فوق بروز عظمي. كثير منها يمكن الوقاية منه، والتعامل المبكر معها يصنع فرقًا كبيرًا في سرعة الالتئام ومنع المضاعفات.',
    card: 'قرح الضغط',
    sections: [
      {
        id: 'what', h: 'ما هي قرحة الضغط؟',
        body: [
          'تحدث قرحة الضغط عندما يبقى جزء من الجسم تحت ضغط لفترة طويلة، فيقل وصول الدم إلى الجلد والأنسجة تحته وتتضرر. يزيد الاحتكاك وانزلاق الجسم على السرير من الضرر.',
          'تُعرف أيضًا باسم «قرح الفراش» أو «تقرحات السرير»، ويستخدم المختصون اليوم مصطلح «إصابة الضغط» لأنها قد تبدأ قبل أن يظهر جرح مفتوح.',
        ],
        list: {
          intro: 'أكثر المواضع شيوعًا:',
          items: ['أسفل الظهر وعظمة العجز', 'الكعبان', 'الوركان', 'مؤخرة الرأس والكتفان والمرفقان', 'أماكن الأجهزة الطبية مثل أنابيب الأكسجين والجبائر والقساطر'],
        },
      },
      {
        id: 'risk', h: 'من الأكثر عرضة لقرح الضغط؟',
        list: {
          items: [
            'المرضى طريحو الفراش أو مستخدمو الكراسي المتحركة لفترات طويلة.',
            'كبار السن، خصوصًا مع ضعف الحركة أو رقة الجلد.',
            'من فقدوا الإحساس في جزء من الجسم، كما بعد الجلطات الدماغية أو إصابات الحبل الشوكي.',
            'من يعانون سلس البول أو البراز، لأن الرطوبة تُضعف الجلد.',
            'سوء التغذية أو قلة شرب السوائل أو فقدان الوزن الشديد.',
            'مرضى العناية الحثيثة ومن يستخدمون أجهزة طبية ملاصقة للجلد.',
            'من أصيبوا بقرحة ضغط سابقًا.',
          ],
        },
      },
      {
        id: 'stages', h: 'مراحل قرحة الضغط باختصار',
        body: ['تُصنَّف قرح الضغط حسب عمق الضرر الظاهر. التصنيف يساعد الفريق الصحي على اختيار العناية المناسبة، ولا يعني أن القرحة تمر بالمراحل بالترتيب نفسه عند الالتئام.'],
        table: {
          caption: 'تصنيف قرح الضغط (NPIAP)',
          head: ['المرحلة', 'ما الذي يظهر'],
          rows: [
            ['المرحلة الأولى', 'احمرار في جلد سليم لا يزول عند الضغط عليه بالإصبع، وقد يكون أصعب ملاحظة في البشرة الداكنة.'],
            ['المرحلة الثانية', 'فقدان سطحي للجلد يظهر كجرح سطحي وردي أو فقاعة مفتوحة أو مغلقة.'],
            ['المرحلة الثالثة', 'فقدان كامل لسماكة الجلد مع ظهور الدهون تحت الجلد، دون ظهور عظم أو وتر.'],
            ['المرحلة الرابعة', 'فقدان كامل للجلد والأنسجة مع ظهور العضلات أو الأوتار أو العظم.'],
            ['غير قابلة للتصنيف', 'قاع الجرح مغطى بنسيج ميت أصفر أو قشرة سوداء تمنع رؤية العمق.'],
            ['إصابة الأنسجة العميقة', 'لون أحمر داكن أو بنفسجي أو بني لا يزول، أو فقاعة دموية، تدل على ضرر تحت الجلد.'],
          ],
        },
        after: ['للتفاصيل وعلامات الخطر في كل مرحلة اقرأ: <a href="/ar/articles/pressure-injury-stages-warning-signs/">مراحل قرح الضغط وعلامات الخطر</a>.'],
      },
      {
        id: 'prevention', h: 'كيف نقي من قرح الضغط؟',
        body: ['الوقاية أسهل بكثير من العلاج. تعتمد على خطة يضعها الفريق الصحي حسب حالة المريض، وتشمل عادة:'],
        list: {
          items: [
            '<strong>تغيير الوضعية بانتظام</strong> وفق جدول يناسب حالة المريض، مع تجنب الاستلقاء على منطقة محمرّة.',
            '<strong>سطح مناسب لتوزيع الضغط</strong>، مثل مرتبة أو وسادة جلوس مخصصة، حسب توصية الفريق الصحي.',
            '<strong>رفع الكعبين</strong> عن السرير بوضع وسادة تحت الساقين بحيث لا يلامس الكعب الفراش.',
            '<strong>العناية بالجلد</strong>: إبقاؤه نظيفًا وجافًا، واستخدام منظف لطيف ومنتجات حماية عند وجود سلس.',
            '<strong>تجنب فرك أو تدليك</strong> المناطق المحمرّة فوق البروزات العظمية.',
            '<strong>رفع المريض لا جرّه</strong> عند تحريكه في السرير، باستخدام ملاءة أو مساعدة شخص آخر.',
            '<strong>التغذية والسوائل</strong> الكافية، ومراجعة الطبيب أو أخصائي التغذية عند فقدان الوزن.',
            '<strong>فحص الجلد يوميًا</strong>، بما في ذلك المناطق تحت الأجهزة الطبية.',
          ],
        },
      },
      {
        id: 'care', h: 'العناية بقرحة الضغط الموجودة',
        list: {
          items: [
            'تقييم شامل للقرحة وتصنيفها وقياسها وتوثيقها بانتظام.',
            'إزالة الضغط عن المنطقة المصابة تمامًا قدر الإمكان.',
            'تنظيف القرحة واختيار ضماد يناسب نوع الأنسجة وكمية الإفرازات.',
            'إزالة الأنسجة الميتة عند الحاجة، ويتم ذلك فقط على يد مختص مدرّب.',
            'متابعة علامات العدوى وتقييم الألم والتغذية.',
            'إشراك الطبيب أو الجرّاح في القرح العميقة (المرحلة الثالثة والرابعة) أو غير القابلة للتصنيف.',
          ],
        },
        after: ['قد يُستخدم <a href="/ar/negative-pressure-wound-therapy/">العلاج بالضغط السلبي</a> في بعض القرح العميقة بقرار من الفريق المعالج.'],
      },
      {
        id: 'red-flags', h: 'متى تحتاج القرحة إلى مراجعة عاجلة؟', warn: true,
        body: ['تواصل مع الطبيب المعالج في اليوم نفسه، أو توجّه إلى الطوارئ، عند ملاحظة:'],
        list: {
          items: [
            'اتساع القرحة بسرعة أو ظهور نسيج أسود.',
            'رائحة كريهة أو صديد أو زيادة واضحة في الإفرازات.',
            'احمرار أو سخونة أو تورم يمتد حول القرحة.',
            'حرارة أو قشعريرة أو تشوّش أو تراجع عام في حالة المريض.',
            'ظهور عظم أو وتر في قاع القرحة.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Pressure Injury (Bedsore) Care and Prevention in Jordan',
    description: 'What pressure injuries (bedsores) are, who is most at risk, and how they are prevented and cared for at home and in hospital. A guide from a Certified Wound Specialist.',
    h1: 'Pressure injuries (bedsores): prevention and care',
    lead: 'A pressure injury is damage to the skin or the tissue beneath it caused by sustained pressure or friction, usually over a bony area. Many can be prevented, and early action makes a real difference to healing and to avoiding complications.',
    card: 'Pressure injuries',
    sections: [
      {
        id: 'what', h: 'What is a pressure injury?',
        body: [
          'A pressure injury develops when part of the body stays under pressure for too long, reducing blood flow to the skin and deeper tissue until it is damaged. Sliding down the bed and friction make the damage worse.',
          'They are also called bedsores or pressure ulcers. Clinicians now use the term “pressure injury” because damage can start before an open wound appears.',
        ],
        list: {
          intro: 'The most common sites are:',
          items: ['The lower back and sacrum', 'The heels', 'The hips', 'The back of the head, shoulders and elbows', 'Skin under medical devices such as oxygen tubing, splints and catheters'],
        },
      },
      {
        id: 'risk', h: 'Who is most at risk?',
        list: {
          items: [
            'People who are bed-bound or use a wheelchair for long periods.',
            'Older adults, especially with limited mobility or fragile skin.',
            'People with reduced sensation, for example after a stroke or spinal cord injury.',
            'People with urinary or faecal incontinence, because moisture weakens the skin.',
            'Poor nutrition, low fluid intake or significant weight loss.',
            'Patients in intensive care and anyone with a medical device pressing on the skin.',
            'Anyone who has had a pressure injury before.',
          ],
        },
      },
      {
        id: 'stages', h: 'Pressure injury stages at a glance',
        body: ['Pressure injuries are classified by the depth of visible damage. The stage helps the care team choose the right care. It does not mean an injury “heals backwards” through the stages.'],
        table: {
          caption: 'Pressure injury staging (NPIAP)',
          head: ['Stage', 'What you see'],
          rows: [
            ['Stage 1', 'Redness on intact skin that does not fade when pressed with a finger. It can be harder to see on darker skin.'],
            ['Stage 2', 'Shallow loss of skin: a pink, shallow wound or an intact or open blister.'],
            ['Stage 3', 'Full-thickness skin loss with fat visible, but no bone or tendon.'],
            ['Stage 4', 'Full-thickness skin and tissue loss with muscle, tendon or bone visible.'],
            ['Unstageable', 'The wound bed is covered by yellow slough or black eschar, hiding its depth.'],
            ['Deep tissue injury', 'Persistent dark red, purple or maroon discolouration, or a blood blister, signalling damage under the skin.'],
          ],
        },
        after: ['For more detail and the warning signs at each stage, read <a href="/en/articles/pressure-injury-stages-warning-signs/">Pressure injury stages and warning signs</a>.'],
      },
      {
        id: 'prevention', h: 'How are pressure injuries prevented?',
        body: ['Prevention is far easier than treatment. It follows a plan set by the care team for the individual patient, and usually includes:'],
        list: {
          items: [
            '<strong>Regular repositioning</strong> on a schedule suited to the patient, avoiding lying on any reddened area.',
            '<strong>A pressure-redistributing surface</strong>, such as a suitable mattress or seat cushion, as recommended by the care team.',
            '<strong>Floating the heels</strong> by placing a pillow under the calves so the heels do not touch the bed.',
            '<strong>Skin care</strong>: keeping skin clean and dry, using a gentle cleanser and barrier products when there is incontinence.',
            '<strong>No rubbing or massaging</strong> reddened skin over bony areas.',
            '<strong>Lifting, not dragging</strong>, when moving someone in bed, using a sheet or a second helper.',
            '<strong>Enough nutrition and fluids</strong>, with a doctor or dietitian review if weight is falling.',
            '<strong>Checking the skin every day</strong>, including under medical devices.',
          ],
        },
      },
      {
        id: 'care', h: 'Caring for an existing pressure injury',
        list: {
          items: [
            'A full assessment: staging, measuring and regular documentation.',
            'Taking pressure completely off the affected area wherever possible.',
            'Cleaning the wound and choosing a dressing that suits the tissue type and the amount of exudate.',
            'Removing dead tissue when needed, done only by a trained professional.',
            'Monitoring for infection and assessing pain and nutrition.',
            'Involving the physician or surgeon for deep (Stage 3 and 4) or unstageable injuries.',
          ],
        },
        after: ['<a href="/en/negative-pressure-wound-therapy/">Negative pressure wound therapy</a> may be used for some deep pressure injuries, if the treating team decides it is appropriate.'],
      },
      {
        id: 'red-flags', h: 'When does a pressure injury need urgent review?', warn: true,
        body: ['Contact the treating doctor the same day, or go to the emergency department, if you notice:'],
        list: {
          items: [
            'The wound getting bigger quickly, or black tissue appearing.',
            'A bad smell, pus, or a clear increase in fluid from the wound.',
            'Redness, warmth or swelling spreading around the wound.',
            'Fever, chills, confusion or a general decline in the person’s condition.',
            'Bone or tendon visible in the wound.',
          ],
        },
      },
    ],
  },
};
export default page;
