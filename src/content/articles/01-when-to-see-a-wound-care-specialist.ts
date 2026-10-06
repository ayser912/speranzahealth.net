import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'when-to-see-a-wound-care-specialist',
  order: 1,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.timers, R.frykberg, R.iwgdf, R.piGuideline],
  related: ['chronic', 'contact'],
  relatedArticles: ['wound-infection-warning-signs', 'home-wound-care-mistakes', 'venous-vs-arterial-leg-ulcers'],
  ar: {
    title: 'متى تحتاج إلى أخصائي جروح، وكيف تستعد للتقييم؟',
    description: 'علامات تدل على أن الجرح يحتاج إلى تقييم متخصص، ومتى تتوجه إلى الطوارئ، وما الذي تحضره معك للتقييم وما الذي يحدث خلاله.',
    h1: 'متى تحتاج إلى أخصائي جروح، وكيف تستعد للتقييم؟',
    card: 'متى تحتاج إلى أخصائي جروح؟',
    lead: 'معظم الجروح البسيطة تلتئم بعناية منزلية عادية، لكن بعضها يحتاج إلى تقييم متخصص مبكر. هذا الدليل يساعدك على معرفة متى تطلب التقييم، وكيف تستعد له لتستفيد منه من الزيارة الأولى.',
    sections: [
      {
        id: 'signs', h: 'علامات تدل على أن الجرح يحتاج إلى تقييم متخصص',
        list: {
          items: [
            'لم يظهر تحسن واضح بعد نحو أربعة أسابيع من العناية المناسبة.',
            'الجرح يتسع أو يزداد عمقًا بدل أن يصغر.',
            'أي جرح في قدم مريض السكري.',
            'قرحة ضغط لدى مريض طريح الفراش، خصوصًا إذا تجاوزت الاحمرار السطحي.',
            'إفرازات كثيرة تبلل الضماد بسرعة أو تؤذي الجلد حول الجرح.',
            'تكرر التهاب الجرح أو عودته في المكان نفسه بعد التئامه.',
            'جرح جراحي انفتح أو تأخر التئامه بعد العملية.',
          ],
        },
      },
      {
        id: 'urgent', h: 'متى لا تنتظر موعدًا؟', warn: true,
        body: ['بعض الحالات تحتاج إلى الطبيب أو الطوارئ أولًا:'],
        list: {
          items: [
            'احمرار أو تورم ينتشر بسرعة حول الجرح.',
            'حرارة أو قشعريرة أو تشوّش أو هبوط عام.',
            'أصابع قدم يتحول لونها إلى الأزرق أو الأسود، أو قدم باردة وشاحبة.',
            'نزيف لا يتوقف.',
          ],
        },
      },
      {
        id: 'team', h: 'من يشارك في العناية بالجرح؟',
        body: [
          'الجروح المعقدة تحتاج عادة إلى فريق متعدد التخصصات: جراحة العظام، وجراحة الأوعية الدموية، والجراحة العامة، والجراحة التجميلية، وطب القدم، والأمراض المعدية، والتغذية العلاجية، وغيرهم حسب الحالة.',
          'أخصائي الجروح من الكادر التمريضي يقيّم الجرح، ويضع خطة العناية بالضمادات وتخفيف الضغط والتثقيف، ويتابع التقدم، وينسّق مع الطبيب والفريق. التشخيص ووصف الأدوية والقرارات الجراحية تبقى من مسؤولية الطبيب.',
        ],
      },
      {
        id: 'prepare', h: 'كيف تستعد للتقييم؟',
        list: {
          intro: 'أحضر معك:',
          items: [
            'قائمة بجميع الأدوية الحالية، بما فيها مميعات الدم والكورتيزون والمكملات.',
            'التقارير الطبية المتعلقة بالجرح أو بالأمراض المزمنة، ونتائج التحاليل الحديثة مثل السكر التراكمي لمرضى السكري.',
            'أسماء الضمادات والكريمات التي استُخدمت سابقًا ومدة استخدامها.',
            'ملاحظات عن تطور الجرح: متى بدأ، وكيف تغيّر، وما الذي ساعد أو لم يساعد.',
          ],
        },
        after: ['ارتدِ ملابس فضفاضة تسمح بالوصول إلى الجرح، واصطحب أحد أفراد الأسرة إذا كان سيساعد في العناية بالجرح.'],
      },
      {
        id: 'during', h: 'ماذا يحدث خلال التقييم؟',
        list: {
          items: [
            'مراجعة التاريخ الصحي والأدوية.',
            'فحص الجرح وقياسه، ووصف الأنسجة والإفرازات والحواف والجلد المحيط.',
            'فحص أولي للدورة الدموية والإحساس، خصوصًا في جروح الساق والقدم.',
            'تقييم الألم والتغذية والحركة والضغط.',
            'الاتفاق على خطة عناية واضحة، والتنسيق مع الطبيب والتخصصات الأخرى عند الحاجة.',
          ],
        },
        after: ['اسأل: ما السبب المحتمل لتأخر الالتئام؟ كل كم يتغير الضماد ومن يغيّره؟ ما العلامات التي تستدعي التواصل فورًا؟ ومتى موعد إعادة التقييم؟'],
      },
      {
        id: 'privacy', h: 'الصور والخصوصية',
        body: ['قد تساعد صور الجرح المؤرخة على متابعة التقدم، لكن شاركها فقط عبر طريقة آمنة يتفق عليها الفريق المعالج. لا تُستخدم صور المرضى في أي محتوى إلا بموافقة خطية واضحة وبعد إخفاء ما يدل على الهوية.'],
      },
    ],
  },
  en: {
    title: 'When to See a Wound-Care Specialist, and How to Prepare',
    description: 'Signs a wound needs specialist assessment, when to go to the emergency department, what to bring to the assessment and what happens during it.',
    h1: 'When to see a wound-care specialist, and how to prepare',
    card: 'When to see a wound-care specialist',
    lead: 'Most minor wounds heal with ordinary care at home, but some need an early specialist assessment. This guide helps you know when to ask for one, and how to prepare so the first visit counts.',
    sections: [
      {
        id: 'signs', h: 'Signs a wound needs specialist assessment',
        list: {
          items: [
            'No clear improvement after about four weeks of appropriate care.',
            'The wound is getting larger or deeper instead of smaller.',
            'Any wound on the foot of a person with diabetes.',
            'A pressure injury in a bed-bound person, especially beyond surface redness.',
            'Heavy fluid that soaks the dressing quickly or damages the skin around the wound.',
            'Repeated infections, or a wound that keeps coming back in the same place.',
            'A surgical wound that has opened or is slow to heal.',
          ],
        },
      },
      {
        id: 'urgent', h: 'When not to wait for an appointment', warn: true,
        body: ['Some situations need a doctor or the emergency department first:'],
        list: {
          items: [
            'Redness or swelling spreading quickly around the wound.',
            'Fever, chills, confusion or collapse.',
            'Toes turning blue or black, or a cold, pale foot.',
            'Bleeding that will not stop.',
          ],
        },
      },
      {
        id: 'team', h: 'Who is involved in wound care?',
        body: [
          'Complex wounds usually need a multidisciplinary team: orthopaedic, vascular, general and plastic surgery, podiatry, infectious diseases, clinical nutrition and others as the case requires.',
          'The nursing wound specialist assesses the wound, plans care with dressings, pressure relief and education, tracks progress and coordinates with the doctor and the team. Diagnosis, prescribing and surgical decisions remain the physician’s responsibility.',
        ],
      },
      {
        id: 'prepare', h: 'How to prepare for the assessment',
        list: {
          intro: 'Bring:',
          items: [
            'A list of all current medicines, including blood thinners, corticosteroids and supplements.',
            'Medical reports related to the wound or long-term conditions, and recent tests such as HbA1c for people with diabetes.',
            'The names of dressings and creams used before, and for how long.',
            'Notes on how the wound has developed: when it started, how it changed, and what helped or didn’t.',
          ],
        },
        after: ['Wear loose clothing that gives easy access to the wound, and bring a family member if they will help with care.'],
      },
      {
        id: 'during', h: 'What happens during the assessment',
        list: {
          items: [
            'A review of your health history and medicines.',
            'Examining and measuring the wound, and describing the tissue, exudate, edges and surrounding skin.',
            'An initial check of circulation and sensation, especially for leg and foot wounds.',
            'Assessing pain, nutrition, mobility and pressure.',
            'Agreeing a clear care plan, coordinated with the doctor and other specialties when needed.',
          ],
        },
        after: ['Ask: what is the likely reason for slow healing? How often is the dressing changed, and by whom? Which signs mean I should get in touch straight away? When is the next review?'],
      },
      {
        id: 'privacy', h: 'Photos and privacy',
        body: ['Dated photos can help track progress, but share them only through a secure method agreed with the care team. Patient photos are never used in any content without clear written consent and removal of anything that could identify the patient.'],
      },
    ],
  },
};
export default a;
