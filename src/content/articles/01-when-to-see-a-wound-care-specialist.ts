import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'when-to-see-a-wound-care-specialist',
  order: 1,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.timers, R.frykberg, R.iwgdf, R.piGuideline],
  related: ['chronic', 'credentials', 'contact'],
  relatedArticles: ['why-chronic-wounds-fail-to-heal', 'preparing-for-wound-care-assessment', 'wound-infection-warning-signs'],
  ar: {
    title: 'متى تحتاج إلى أخصائي عناية بالجروح؟ | أيسر شواقفه CWS®',
    description: 'علامات تدل على أن الجرح يحتاج إلى تقييم متخصص: تأخر الالتئام، وجروح القدم السكري، وقرح الضغط، وتكرار العدوى. وما الفرق بين دور الطبيب وأخصائي الجروح.',
    h1: 'متى تحتاج إلى أخصائي عناية بالجروح؟',
    card: 'متى تحتاج إلى أخصائي عناية بالجروح؟',
    lead: 'معظم الجروح البسيطة تلتئم بعناية منزلية عادية. لكن بعض الجروح تحتاج إلى تقييم متخصص مبكر، لأن التأخر قد يعني أسابيع أو أشهرًا إضافية من المعاناة أو مضاعفات يمكن تجنبها.',
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
            'تكرر التهاب الجرح أو الحاجة المتكررة للمضادات الحيوية.',
            'جرح يعود في المكان نفسه بعد التئامه.',
            'جرح جراحي انفتح أو تأخر التئامه بعد العملية.',
          ],
        },
      },
      {
        id: 'urgent', h: 'متى لا تنتظر موعدًا؟', warn: true,
        body: ['بعض الحالات تحتاج إلى الطبيب أو الطوارئ أولًا، قبل أي تقييم تمريضي:'],
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
        id: 'roles', h: 'ما الفرق بين دور الطبيب وأخصائي الجروح؟',
        body: [
          'الطبيب هو المسؤول عن التشخيص، ووصف الأدوية مثل المضادات الحيوية، وطلب الفحوصات، والتدخلات الجراحية.',
          'أخصائي العناية بالجروح من الكادر التمريضي يقدّم تقييمًا تمريضيًا مفصلًا للجرح، ويضع خطة عناية بالضمادات وتخفيف الضغط والتثقيف، ويتابع التقدم بالقياس والتوثيق، وينسّق مع الطبيب عند ظهور أي تغيّر.',
          'أفضل النتائج تأتي عادة من عمل الفريق معًا، وليس من طرف واحد.',
        ],
      },
      {
        id: 'how', h: 'كيف تصل إلى تقييم متخصص؟',
        list: {
          items: [
            'اسأل طبيبك المعالج عن خدمة عناية بالجروح أو أخصائي جروح معتمد.',
            'جهّز المعلومات المهمة قبل الموعد: الأدوية، والتقارير، ومدة الجرح، والعلاجات السابقة.',
            'تحقق من مؤهلات من يقدّم العناية، مثل الترخيص المهني والاعتمادات المتخصصة.',
          ],
        },
        after: [
          'اقرأ: <a href="/ar/articles/preparing-for-wound-care-assessment/">كيف تستعد لتقييم الجرح؟</a>',
          'اعتماد CWS® يمنحه American Board of Wound Management للممارسين المرخصين ذوي الخبرة المثبتة في العناية بالجروح بعد اجتياز اختبار. <a href="/ar/credentials/">اطّلع على مؤهلات أيسر شواقفه وطرق التحقق</a>.',
        ],
      },
    ],
  },
  en: {
    title: 'When Should You See a Wound-Care Specialist? | Aissar Shawaqfeh',
    description: 'Signs a wound needs specialist assessment, such as slow healing, diabetic foot wounds and repeated infection, and how the doctor’s and specialist’s roles differ.',
    h1: 'When should you see a wound-care specialist?',
    card: 'When should you see a wound-care specialist?',
    lead: 'Most minor wounds heal with ordinary care at home. Some wounds, however, need an early specialist assessment, because delay can mean weeks or months of extra suffering, or complications that could have been avoided.',
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
            'Repeated wound infections or repeated courses of antibiotics.',
            'A wound that keeps coming back in the same place after healing.',
            'A surgical wound that has opened or is slow to heal.',
          ],
        },
      },
      {
        id: 'urgent', h: 'When not to wait for an appointment', warn: true,
        body: ['Some situations need a doctor or the emergency department first, before any nursing assessment:'],
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
        id: 'roles', h: 'How does the doctor’s role differ from the wound specialist’s?',
        body: [
          'The physician is responsible for diagnosis, prescribing medicines such as antibiotics, ordering tests and surgical procedures.',
          'A nursing wound-care specialist provides a detailed nursing assessment of the wound, plans care with dressings, pressure relief and education, tracks progress through measurement and documentation, and coordinates with the doctor whenever something changes.',
          'The best results usually come from the team working together, not from one person alone.',
        ],
      },
      {
        id: 'how', h: 'How to get a specialist assessment',
        list: {
          items: [
            'Ask your treating doctor about a wound-care service or a certified wound specialist.',
            'Gather the key information before the appointment: medicines, reports, how long the wound has been present and previous treatments.',
            'Check the qualifications of whoever provides care, such as professional licensing and specialist certification.',
          ],
        },
        after: [
          'Read <a href="/en/articles/preparing-for-wound-care-assessment/">How to prepare for a wound-care assessment</a>.',
          'The CWS® credential is awarded by the American Board of Wound Management to licensed clinicians with documented wound-care experience who pass an exam. <a href="/en/credentials/">See Aissar Shawaqfeh’s credentials and how to verify them</a>.',
        ],
      },
    ],
  },
};
export default a;
