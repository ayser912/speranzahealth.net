import type { ClinicalPageData } from '../../lib/content-types';
import { R } from '../refs';

const page: ClinicalPageData = {
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.ewmaNpwt, R.timers, R.iwii, R.niceSsi],
  related: ['chronic', 'surgical', 'diabeticFoot', 'pressure', 'education'],
  ar: {
    title: 'العلاج بالضغط السلبي للجروح NPWT وجهاز VAC في الأردن',
    description: 'ما هو العلاج بالضغط السلبي للجروح (NPWT / VAC)، وكيف يعمل، ولأي الجروح قد يُستخدم، وما الذي تتطلبه متابعته بأمان؟ دليل تثقيفي من أخصائي جروح معتمد CWS®.',
    h1: 'العلاج بالضغط السلبي للجروح (NPWT / VAC)',
    lead: 'العلاج بالضغط السلبي تقنية تستخدم ضمادًا محكم الإغلاق متصلًا بجهاز شفط لطيف ومتواصل. قد يساعد في العناية ببعض الجروح المعقدة، لكنه يحتاج إلى اختيار مناسب للحالة ومتابعة دقيقة.',
    card: 'العلاج بالضغط السلبي NPWT',
    sections: [
      {
        id: 'what', h: 'ما هو العلاج بالضغط السلبي؟',
        body: [
          'يُعرف أيضًا باسم VAC أو «جهاز الفاك»، وهو اسم شاع من إحدى العلامات التجارية. الاسم العلمي هو Negative Pressure Wound Therapy أو NPWT.',
          'يتكوّن النظام من حشوة (إسفنج أو شاش) توضع في الجرح، وغشاء لاصق شفاف يغلقه، وأنبوب يصل إلى جهاز صغير يولّد ضغطًا أقل من الضغط الجوي، مع عبوة لتجميع الإفرازات.',
        ],
      },
      {
        id: 'how', h: 'كيف يساعد في العناية بالجرح؟',
        list: {
          items: [
            'يسحب الإفرازات الزائدة من الجرح بشكل مستمر.',
            'يساعد على تقريب حواف الجرح.',
            'يحافظ على بيئة رطبة ومغلقة حول الجرح.',
            'قد يساعد على تكوّن نسيج حبيبي صحي في قاع الجرح.',
            'قد يقلل عدد مرات تغيير الضماد مقارنة ببعض الضمادات التقليدية.',
          ],
        },
        after: ['يحدد الفريق المعالج مستوى الضغط ونوع الحشوة ومدة العلاج حسب الجرح وحالة المريض.'],
      },
      {
        id: 'uses', h: 'متى قد يُستخدم؟',
        body: ['قد يقرر الفريق المعالج استخدام NPWT في حالات مثل:'],
        list: {
          items: [
            'الجروح الجراحية المعقدة أو التي انفتحت بعد العملية.',
            'بعض جروح القدم السكري بعد تنظيفها جراحيًا.',
            'بعض قرح الضغط العميقة.',
            'تثبيت الطعوم الجلدية.',
            'بعض الجروح الرضّية الكبيرة.',
          ],
        },
        after: ['هناك أيضًا أنظمة صغيرة تُستخدم فوق جروح العمليات المغلقة لدى بعض المرضى المعرّضين لمضاعفات، بقرار من الجرّاح.'],
      },
      {
        id: 'not-suitable', h: 'متى لا يكون مناسبًا؟', warn: true,
        body: ['لا يُستخدم العلاج بالضغط السلبي، أو يُستخدم بحذر شديد وتحت إشراف طبي مباشر، في حالات منها:'],
        list: {
          items: [
            'وجود أوعية دموية أو أعضاء أو أعصاب مكشوفة في الجرح.',
            'التهاب العظم غير المعالَج.',
            'وجود ورم خبيث في الجرح.',
            'وجود نسيج ميت أو قشرة سوداء لم تُزل.',
            'الناسور غير المشخَّص.',
            'خطر النزيف المرتفع، مثل المرضى الذين يتناولون مميعات الدم أو لديهم مشاكل في التخثر.',
          ],
        },
        after: ['قرار البدء بالعلاج وإيقافه يعود للطبيب والفريق المعالج بعد تقييم كامل.'],
      },
      {
        id: 'follow-up', h: 'ماذا تتطلب المتابعة؟',
        list: {
          items: [
            'تغيير الضماد بانتظام على يد شخص مدرّب، وغالبًا كل يومين إلى ثلاثة أيام حسب خطة الفريق.',
            'مراقبة الإنذارات: تسرّب الهواء، وامتلاء العبوة، وانسداد الأنبوب، وانخفاض البطارية.',
            'عدم إطفاء الجهاز لفترة طويلة. اتبع تعليمات الفريق حول المدة المسموح بها، وتواصل معه إذا توقف العلاج.',
            'مراقبة لون الإفرازات وكميتها، وعلامات العدوى، والألم.',
            'توثيق قياسات الجرح لمعرفة ما إذا كان العلاج يحقق تقدمًا.',
          ],
        },
        after: [
          '<strong>تواصل فورًا مع الفريق المعالج أو توجّه إلى الطوارئ</strong> عند ظهور دم أحمر فاتح في الأنبوب أو العبوة، أو امتلاء العبوة بالدم بسرعة.',
          'لمعرفة ما يمكن توقعه يوميًا أثناء استخدام الجهاز اقرأ: <a href="/ar/articles/what-is-npwt-vac-therapy/">ماذا تتوقع أثناء العلاج بالضغط السلبي؟</a>',
        ],
      },
      {
        id: 'nurse-role', h: 'دور الممرض المتخصص',
        body: ['يتطلب NPWT مهارة في تطبيق الضماد وإحكام إغلاقه وحماية الجلد المحيط ومتابعة الإنذارات. يقدّم أيسر تدريبًا عمليًا للكوادر التمريضية على أساسيات هذا العلاج وتطبيقه الآمن، ضمن خطط الفرق المعالجة.'],
        after: ['<a href="/ar/wound-care-education/">التعليم والتدريب في العناية بالجروح</a>'],
      },
    ],
  },
  en: {
    title: 'Negative Pressure Wound Therapy (NPWT) and VAC in Jordan',
    description: 'What negative pressure wound therapy (NPWT / VAC) is, how it works, which wounds it may suit, and what safe follow-up requires. From a Certified Wound Specialist.',
    h1: 'Negative pressure wound therapy (NPWT / VAC)',
    lead: 'Negative pressure wound therapy uses a sealed dressing connected to a device that applies gentle, continuous suction. It can help with some complex wounds, but it needs careful patient selection and close follow-up.',
    card: 'Negative pressure wound therapy',
    sections: [
      {
        id: 'what', h: 'What is negative pressure wound therapy?',
        body: [
          'It is often called “VAC therapy”, a name that comes from one brand. The clinical term is negative pressure wound therapy, or NPWT.',
          'The system has a filler (foam or gauze) placed in the wound, a transparent adhesive film that seals it, and tubing connected to a small pump that creates pressure below atmospheric pressure, with a canister that collects fluid.',
        ],
      },
      {
        id: 'how', h: 'How does it help?',
        list: {
          items: [
            'It continuously removes excess fluid from the wound.',
            'It helps draw the wound edges together.',
            'It keeps the wound in a closed, moist environment.',
            'It may support the growth of healthy granulation tissue in the wound bed.',
            'It may mean fewer dressing changes than some conventional dressings.',
          ],
        },
        after: ['The treating team sets the pressure level, the type of filler and the length of treatment for each wound and patient.'],
      },
      {
        id: 'uses', h: 'When may it be used?',
        body: ['The treating team may decide to use NPWT for wounds such as:'],
        list: {
          items: [
            'Complex surgical wounds, or wounds that have opened after surgery.',
            'Some diabetic foot wounds after surgical debridement.',
            'Some deep pressure injuries.',
            'Securing skin grafts.',
            'Some large traumatic wounds.',
          ],
        },
        after: ['Smaller systems also exist for use over closed surgical incisions in some patients at higher risk of complications, at the surgeon’s discretion.'],
      },
      {
        id: 'not-suitable', h: 'When is it not suitable?', warn: true,
        body: ['NPWT is not used, or is used only with great caution under direct medical supervision, in situations including:'],
        list: {
          items: [
            'Exposed blood vessels, organs or nerves in the wound.',
            'Untreated bone infection (osteomyelitis).',
            'Cancer in the wound.',
            'Dead tissue or black eschar that has not been removed.',
            'An unexplored fistula.',
            'A high risk of bleeding, for example in patients on blood thinners or with clotting problems.',
          ],
        },
        after: ['The decision to start or stop treatment rests with the physician and the treating team after a full assessment.'],
      },
      {
        id: 'follow-up', h: 'What does follow-up involve?',
        list: {
          items: [
            'Regular dressing changes by a trained person, often every two to three days depending on the team’s plan.',
            'Responding to alarms: air leaks, a full canister, a blocked tube or a low battery.',
            'Not leaving the device switched off for long. Follow your team’s instructions on how long is allowed, and contact them if therapy stops.',
            'Watching the colour and amount of fluid, signs of infection and pain.',
            'Recording wound measurements to see whether treatment is making progress.',
          ],
        },
        after: [
          '<strong>Contact the treating team immediately or go to the emergency department</strong> if you see bright red blood in the tubing or canister, or the canister fills quickly with blood.',
          'For what to expect day to day while using the device, read <a href="/en/articles/what-is-npwt-vac-therapy/">What to expect during NPWT / VAC therapy</a>.',
        ],
      },
      {
        id: 'nurse-role', h: 'The specialist nurse’s role',
        body: ['NPWT requires skill in applying and sealing the dressing, protecting the surrounding skin and managing alarms. Aissar offers hands-on training for nursing teams in the fundamentals and safe application of this therapy, within the treating teams’ plans.'],
        after: ['<a href="/en/wound-care-education/">Wound-care education and training</a>'],
      },
    ],
  },
};
export default page;
