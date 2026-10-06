import type { ClinicalPageData } from '../../lib/content-types';
import { R } from '../refs';

const page: ClinicalPageData = {
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.niceSsi, R.whoSsi, R.iwii, R.ewmaNpwt],
  related: ['chronic', 'npwt', 'diabeticFoot', 'credentials'],
  ar: {
    title: 'العناية بالجروح الجراحية وجرح العملية الذي لا يلتئم | الأردن',
    description: 'كيف يلتئم جرح العملية، وما علامات التهاب الجرح أو انفتاحه، ومتى تتواصل مع الجرّاح؟ دليل تثقيفي حول العناية بالجروح الجراحية.',
    h1: 'العناية بالجروح الجراحية',
    lead: 'يلتئم معظم جروح العمليات دون مشاكل خلال أسابيع قليلة. لكن بعضها يتأخر بسبب العدوى أو انفتاح الجرح أو عوامل صحية لدى المريض. هذه الصفحة تشرح ما هو طبيعي، وما يحتاج إلى مراجعة.',
    card: 'الجروح الجراحية',
    sections: [
      {
        id: 'normal', h: 'كيف يلتئم جرح العملية عادة؟',
        body: [
          'في الأيام الأولى بعد العملية يكون من الطبيعي وجود احمرار خفيف وتورم بسيط وألم يتحسن تدريجيًا، مع إفرازات قليلة صافية أو وردية.',
          'يُغلق معظم جروح العمليات بالغرز أو الدبابيس أو اللاصق الجراحي، ويُغطّى بضماد يحدد الجرّاح مدة بقائه وموعد أول تغيير له.',
        ],
      },
      {
        id: 'problems', h: 'لماذا يتأخر التئام الجرح الجراحي؟',
        list: {
          items: [
            '<strong>عدوى الجرح</strong> (عدوى موضع العملية).',
            '<strong>انفتاح الجرح</strong> كليًا أو جزئيًا بعد إغلاقه.',
            '<strong>تجمع سوائل أو دم</strong> تحت الجرح.',
            'عوامل لدى المريض مثل السكري غير المنضبط، والسمنة، والتدخين، وسوء التغذية، وبعض الأدوية المثبطة للمناعة.',
          ],
        },
      },
      {
        id: 'red-flags', h: 'متى تتواصل مع الجرّاح أو تتوجه إلى الطوارئ؟', warn: true,
        list: {
          intro: 'تواصل مع فريق الجراحة في اليوم نفسه عند:',
          items: [
            'احمرار أو سخونة أو تورم يزداد حول الجرح بدل أن يتحسن.',
            'ألم يزداد بعد أن كان يتحسن.',
            'صديد أو إفرازات عكرة أو ذات رائحة كريهة.',
            'حرارة أو قشعريرة.',
            'انفتاح جزء من الجرح أو بروز الغرز.',
          ],
        },
        after: ['<strong>توجّه فورًا إلى الطوارئ</strong> إذا انفتح الجرح وظهر ما تحته، أو كان هناك نزيف لا يتوقف، أو ضيق تنفس أو تشوّش.'],
      },
      {
        id: 'home', h: 'العناية بجرح العملية في المنزل',
        list: {
          items: [
            'اتّبع تعليمات الجرّاح المكتوبة حول الضماد والاستحمام وموعد إزالة الغرز.',
            'اغسل يديك قبل لمس الجرح أو الضماد وبعده.',
            'لا تضع كريمات أو مراهم أو خلطات منزلية على الجرح ما لم يصفها الفريق المعالج.',
            'تجنّب حمل الأوزان الثقيلة أو الحركات التي تشد الجرح خلال الفترة التي يحددها الجرّاح.',
            'التغذية الجيدة وضبط سكر الدم والتوقف عن التدخين تساعد على الالتئام.',
            'راقب الجرح يوميًا ودوّن أي تغيّر.',
          ],
        },
        after: ['للتفاصيل العملية يومًا بيوم اقرأ: <a href="/ar/articles/wound-care-after-surgery/">العناية بالجرح بعد العملية</a>.'],
      },
      {
        id: 'complex', h: 'الجروح الجراحية المعقدة',
        body: [
          'عندما ينفتح جرح العملية أو يتأخر التئامه، قد يحتاج إلى خطة عناية متقدمة يقررها الجرّاح، مثل التنظيف الجراحي، أو ضمادات متخصصة، أو <a href="/ar/negative-pressure-wound-therapy/">العلاج بالضغط السلبي</a>.',
          'يقدّم الممرض المتخصص في الجروح التقييم والعناية بالجرح والمتابعة والتثقيف، بالتنسيق المستمر مع الجرّاح.',
        ],
      },
    ],
  },
  en: {
    title: 'Surgical Wound Care and Non-Healing Surgical Wounds | Jordan',
    description: 'How surgical wounds heal, the signs of infection or a wound opening, and when to contact your surgeon. An educational guide to surgical wound care.',
    h1: 'Surgical wound care',
    lead: 'Most surgical wounds heal without problems within a few weeks. Some are delayed by infection, the wound opening, or the patient’s health. This page explains what is normal and what needs review.',
    card: 'Surgical wounds',
    sections: [
      {
        id: 'normal', h: 'How does a surgical wound usually heal?',
        body: [
          'In the first days after surgery it is normal to have mild redness, slight swelling and pain that gradually improves, with a small amount of clear or pinkish fluid.',
          'Most surgical wounds are closed with stitches, staples or skin glue and covered with a dressing. The surgeon decides how long it stays on and when it is first changed.',
        ],
      },
      {
        id: 'problems', h: 'Why do some surgical wounds heal slowly?',
        list: {
          items: [
            '<strong>Infection</strong> (surgical site infection).',
            '<strong>Wound dehiscence</strong>: the wound opening partly or fully after closure.',
            '<strong>A collection of fluid or blood</strong> under the wound.',
            'Patient factors such as poorly controlled diabetes, obesity, smoking, poor nutrition and some immune-suppressing medicines.',
          ],
        },
      },
      {
        id: 'red-flags', h: 'When to contact the surgeon or go to the emergency department', warn: true,
        list: {
          intro: 'Contact the surgical team the same day if you notice:',
          items: [
            'Redness, warmth or swelling around the wound that is increasing instead of settling.',
            'Pain that gets worse after it had been improving.',
            'Pus, or cloudy or bad-smelling fluid.',
            'Fever or chills.',
            'Part of the wound opening, or stitches pulling through.',
          ],
        },
        after: ['<strong>Go to the emergency department immediately</strong> if the wound opens and you can see what is underneath, if bleeding does not stop, or if there is shortness of breath or confusion.'],
      },
      {
        id: 'home', h: 'Caring for a surgical wound at home',
        list: {
          items: [
            'Follow the surgeon’s written instructions on the dressing, showering and when stitches come out.',
            'Wash your hands before and after touching the wound or dressing.',
            'Don’t put creams, ointments or home remedies on the wound unless your care team prescribed them.',
            'Avoid heavy lifting or movements that strain the wound for as long as your surgeon advises.',
            'Good nutrition, blood glucose control and stopping smoking all support healing.',
            'Look at the wound daily and note any change.',
          ],
        },
        after: ['For practical day-by-day advice, read <a href="/en/articles/wound-care-after-surgery/">Wound care after surgery</a>.'],
      },
      {
        id: 'complex', h: 'Complex surgical wounds',
        body: [
          'When a surgical wound opens or is slow to heal, it may need an advanced care plan decided by the surgeon, such as surgical cleaning, specialist dressings or <a href="/en/negative-pressure-wound-therapy/">negative pressure wound therapy</a>.',
          'The specialist wound nurse provides assessment, wound care, follow-up and education, in close coordination with the surgeon.',
        ],
      },
    ],
  },
};
export default page;
