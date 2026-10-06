import type { ClinicalPageData } from '../../lib/content-types';
import { R } from '../refs';

const page: ClinicalPageData = {
  published: '2026-10-05',
  reviewed: '2026-10-06',
  refs: [R.frykberg, R.schultz, R.timers, R.iwii, R.piGuideline, R.iwgdfSite, R.jnc],
  related: ['pressure', 'diabeticFoot', 'surgical', 'npwt', 'credentials'],
  ar: {
    title: 'العناية بالجروح المزمنة في الأردن | أيسر شواقفه CWS®',
    description: 'متى يُعد الجرح مزمنًا، ولماذا يتأخر التئامه، وما علامات الخطر التي تستدعي مراجعة طبية عاجلة؟ دليل تثقيفي من أخصائي جروح معتمد CWS® في الأردن.',
    h1: 'العناية بالجروح المزمنة في الأردن',
    lead: 'الجرح المزمن هو جرح لا يتقدم في مراحل الالتئام الطبيعية بالشكل والوقت المتوقعين. هذه الصفحة تشرح أسباب ذلك، وعلامات الخطر، وما يتضمنه التقييم التمريضي المتخصص، وكيف تدعم الأسرة العناية في المنزل.',
    card: 'الجروح المزمنة',
    sections: [
      {
        id: 'what', h: 'متى يُعد الجرح مزمنًا؟',
        body: [
          'تلتئم معظم الجروح عبر مراحل متتابعة: إيقاف النزيف، ثم الالتهاب، ثم تكوّن نسيج جديد، ثم إعادة التشكّل. يُوصف الجرح بأنه مزمن أو «صعب الالتئام» عندما يتوقف عند إحدى هذه المراحل، وغالبًا في مرحلة الالتهاب.',
          'لا يوجد حد زمني واحد متفق عليه، لكن كثيرًا من الممارسين يعيدون تقييم الجرح بشكل شامل إذا لم يظهر تحسن واضح بعد نحو أربعة أسابيع من العناية المناسبة.',
        ],
        list: {
          intro: 'من أكثر الجروح المزمنة شيوعًا:',
          items: [
            '<a href="/ar/pressure-injury-care/">قرح الضغط (قرح الفراش)</a>',
            '<a href="/ar/diabetic-foot-wounds/">جروح القدم لدى مرضى السكري</a>',
            'القرح الوريدية في الساق',
            'القرح الشريانية الناتجة عن ضعف التروية',
            '<a href="/ar/surgical-wound-care/">الجروح الجراحية التي تتأخر في الالتئام</a>',
          ],
        },
      },
      {
        id: 'why', h: 'لماذا يتأخر التئام الجرح؟',
        body: ['نادرًا ما يكون السبب واحدًا. عادة تجتمع عوامل في الجرح نفسه وعوامل في صحة المريض العامة، ولهذا لا يكفي تغيير نوع الضماد وحده.'],
        list: {
          intro: 'من العوامل الشائعة:',
          items: [
            'ضعف وصول الدم إلى المنطقة بسبب أمراض الشرايين.',
            'ارتفاع سكر الدم غير المنضبط لدى مرضى السكري.',
            'استمرار الضغط أو الاحتكاك على مكان الجرح.',
            'العدوى أو تكوّن طبقة بكتيرية تُعرف بالـ biofilm على سطح الجرح.',
            'وجود أنسجة ميتة أو متليفة في قاع الجرح.',
            'رطوبة غير متوازنة: جفاف زائد أو إفرازات كثيرة تؤذي الجلد المحيط.',
            'سوء التغذية أو قلة السوائل، والتدخين، وبعض الأدوية مثل الكورتيزون.',
            'التورم المزمن في الساقين.',
          ],
        },
        after: [
          'يستخدم المختصون إطارًا منظّمًا يُعرف بـ TIME لتقييم قاع الجرح: الأنسجة (Tissue)، والعدوى أو الالتهاب (Infection/Inflammation)، والرطوبة (Moisture)، وحواف الجرح (Edge).',
          'للتفاصيل اقرأ: <a href="/ar/articles/why-chronic-wounds-fail-to-heal/">لماذا لا يلتئم الجرح المزمن؟</a>',
        ],
      },
      {
        id: 'red-flags', h: 'علامات تستدعي مراجعة طبية عاجلة', warn: true,
        body: ['توجّه إلى الطبيب المعالج في اليوم نفسه، أو إلى أقرب قسم طوارئ، إذا لاحظت أيًا مما يلي:'],
        list: {
          items: [
            'احمرار أو سخونة أو تورم ينتشر حول الجرح.',
            'ألم يزداد بشكل واضح أو مفاجئ.',
            'صديد أو رائحة كريهة جديدة، أو زيادة مفاجئة في الإفرازات.',
            'حرارة أو قشعريرة أو شعور عام بالإعياء أو تشوّش.',
            'تحوّل لون الجلد أو الأنسجة إلى الأسود أو الرمادي.',
            'أي جرح جديد في القدم لدى مريض سكري، حتى لو بدا صغيرًا.',
          ],
        },
        after: ['اقرأ أيضًا: <a href="/ar/articles/wound-infection-warning-signs/">علامات التهاب الجرح التي لا ينبغي تجاهلها</a>.'],
      },
      {
        id: 'assessment', h: 'ماذا يشمل التقييم التمريضي المتخصص؟',
        body: ['التقييم الشامل هو الأساس قبل اختيار أي ضماد أو علاج. يشمل عادة:'],
        list: {
          items: [
            'التاريخ الصحي: الأمراض المزمنة، والأدوية، ومدة الجرح، والعلاجات السابقة.',
            'قياس الجرح وتوثيقه بانتظام لمتابعة التقدم.',
            'وصف نوع الأنسجة، وكمية الإفرازات ونوعها، وحالة الحواف والجلد المحيط.',
            'تقييم الألم وعلامات العدوى.',
            'فحص أولي للدورة الدموية، والإحالة لتقييم وعائي عند الحاجة.',
            'تقييم الضغط والحركة والتغذية والعوامل التي تعيق الالتئام.',
            'وضع خطة عناية واضحة بالتنسيق مع الطبيب المعالج، وتثقيف المريض والأسرة.',
          ],
        },
        after: [
          'التشخيص الطبي، ووصف المضادات الحيوية أو الأدوية، والتدخلات الجراحية، تبقى من مسؤولية الطبيب. دور الممرض المتخصص أن يقدّم تقييمًا تمريضيًا دقيقًا ويطبّق خطة العناية ويتابعها.',
          'لمعرفة كيف تستعد لهذا التقييم اقرأ: <a href="/ar/articles/preparing-for-wound-care-assessment/">كيف تستعد لتقييم الجرح؟</a>',
        ],
      },
      {
        id: 'home', h: 'كيف تدعم الأسرة العناية في المنزل؟',
        list: {
          items: [
            'اتّبع خطة العناية المكتوبة من الفريق المعالج، ولا تغيّر نوع الضماد أو عدد مرات تغييره دون استشارة.',
            'اغسل يديك جيدًا قبل لمس الجرح أو الضماد وبعده.',
            'لا تضع على الجرح خلطات منزلية أو أعشابًا أو كريمات غير موصوفة.',
            'غيّر وضعية المريض قليل الحركة بانتظام وفق ما يوصي به الفريق المعالج، لتخفيف الضغط عن الجلد.',
            'اهتم بالتغذية الجيدة والسوائل، وبضبط سكر الدم لدى مرضى السكري.',
            'دوّن أي تغيّر في الجرح أو الألم أو الحرارة، وأخبر الفريق المعالج به.',
          ],
        },
        after: ['اقرأ أيضًا: <a href="/ar/articles/home-wound-care-mistakes/">أخطاء شائعة في العناية المنزلية بالجروح</a>.'],
      },
    ],
  },
  en: {
    title: 'Chronic Wound Care in Jordan | Aissar Shawaqfeh, CWS®',
    description: 'When is a wound chronic, why does healing stall, and which warning signs need urgent review? A guide from a Certified Wound Specialist in Jordan.',
    h1: 'Chronic wound care in Jordan',
    lead: 'A chronic wound is one that does not move through the normal stages of healing in the expected way or time. This page explains why that happens, the warning signs to act on, what a specialist nursing assessment covers, and how families can support care at home.',
    card: 'Chronic wounds',
    sections: [
      {
        id: 'what', h: 'When is a wound considered chronic?',
        body: [
          'Most wounds heal through overlapping stages: stopping the bleeding, inflammation, new tissue formation and remodelling. A wound is described as chronic, or “hard-to-heal”, when it stalls in one of these stages, most often inflammation.',
          'There is no single agreed time limit, but many clinicians re-assess a wound thoroughly if it has not clearly improved after about four weeks of appropriate care.',
        ],
        list: {
          intro: 'Common types of chronic wound include:',
          items: [
            '<a href="/en/pressure-injury-care/">Pressure injuries (bedsores)</a>',
            '<a href="/en/diabetic-foot-wounds/">Foot wounds in people with diabetes</a>',
            'Venous leg ulcers',
            'Arterial ulcers caused by poor blood supply',
            '<a href="/en/surgical-wound-care/">Surgical wounds that are slow to heal</a>',
          ],
        },
      },
      {
        id: 'why', h: 'Why do some wounds fail to heal?',
        body: ['There is rarely a single cause. Factors in the wound itself usually combine with factors in the person’s general health, which is why changing the dressing alone is often not enough.'],
        list: {
          intro: 'Common factors include:',
          items: [
            'Reduced blood supply to the area because of arterial disease.',
            'Poorly controlled blood glucose in people with diabetes.',
            'Ongoing pressure or friction on the wound.',
            'Infection, or a bacterial layer on the wound surface known as biofilm.',
            'Dead or sloughy tissue in the wound bed.',
            'Unbalanced moisture: a wound that is too dry, or heavy exudate that damages the surrounding skin.',
            'Poor nutrition or low fluid intake, smoking, and some medicines such as corticosteroids.',
            'Long-standing swelling in the legs.',
          ],
        },
        after: [
          'Specialists often use a structured framework called TIME to assess the wound bed: Tissue, Infection or inflammation, Moisture balance and the wound Edge.',
          'For more detail, read <a href="/en/articles/why-chronic-wounds-fail-to-heal/">Why does a chronic wound fail to heal?</a>',
        ],
      },
      {
        id: 'red-flags', h: 'Warning signs that need urgent medical review', warn: true,
        body: ['Contact the treating doctor the same day, or go to the nearest emergency department, if you notice any of the following:'],
        list: {
          items: [
            'Redness, warmth or swelling spreading around the wound.',
            'Pain that is clearly increasing or comes on suddenly.',
            'New pus or a bad smell, or a sudden increase in fluid from the wound.',
            'Fever, chills, feeling generally unwell or confused.',
            'Skin or tissue turning black or grey.',
            'Any new foot wound in a person with diabetes, even if it looks small.',
          ],
        },
        after: ['Read also: <a href="/en/articles/wound-infection-warning-signs/">Wound infection warning signs you should not ignore</a>.'],
      },
      {
        id: 'assessment', h: 'What does a specialist nursing assessment include?',
        body: ['A thorough assessment comes before choosing any dressing or treatment. It usually includes:'],
        list: {
          items: [
            'Health history: long-term conditions, medicines, how long the wound has been present and previous treatments.',
            'Measuring and documenting the wound regularly to track progress.',
            'Describing the tissue type, the amount and type of exudate, and the condition of the edges and surrounding skin.',
            'Assessing pain and signs of infection.',
            'An initial circulation check, with referral for vascular assessment when needed.',
            'Reviewing pressure, mobility, nutrition and other factors that delay healing.',
            'A clear care plan agreed with the treating physician, and education for the patient and family.',
          ],
        },
        after: [
          'Medical diagnosis, prescribing antibiotics or other medicines, and surgical procedures remain the physician’s responsibility. The specialist nurse’s role is to provide an accurate nursing assessment and to carry out and follow up the care plan.',
          'To get ready for an assessment, read <a href="/en/articles/preparing-for-wound-care-assessment/">How to prepare for a wound-care assessment</a>.',
        ],
      },
      {
        id: 'home', h: 'How families can support care at home',
        list: {
          items: [
            'Follow the written care plan from the treating team, and don’t change the dressing type or how often it is changed without advice.',
            'Wash your hands well before and after touching the wound or dressing.',
            'Don’t put home remedies, herbs or unprescribed creams on the wound.',
            'Help a person with limited mobility change position regularly, as advised by the care team, to relieve pressure on the skin.',
            'Support good nutrition and fluids, and blood glucose control for people with diabetes.',
            'Write down any change in the wound, pain or temperature, and tell the care team.',
          ],
        },
        after: ['Read also: <a href="/en/articles/home-wound-care-mistakes/">Common mistakes in home wound care</a>.'],
      },
    ],
  },
};
export default page;
