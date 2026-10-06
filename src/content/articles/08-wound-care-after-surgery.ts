import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'wound-care-after-surgery',
  order: 8,
  topic: 'surgical',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.niceSsi, R.whoSsi, R.iwii],
  related: ['surgical', 'npwt'],
  relatedArticles: ['wound-infection-warning-signs', 'what-is-npwt-vac-therapy', 'home-wound-care-mistakes'],
  ar: {
    title: 'العناية بالجرح بعد العملية: دليل عملي للمنزل | أيسر شواقفه',
    description: 'كيف تعتني بجرح العملية في المنزل: الضماد، والاستحمام، والغرز، والنشاط، والتغذية، والعلامات التي تستدعي التواصل مع الجرّاح.',
    h1: 'العناية بالجرح بعد العملية: دليل عملي للمنزل',
    card: 'العناية بالجرح بعد العملية',
    lead: 'الأيام والأسابيع الأولى بعد العملية مهمة لالتئام الجرح. هذا الدليل يجمع الإرشادات العامة الأكثر فائدة، مع التأكيد أن تعليمات الجرّاح المكتوبة لحالتك تأتي أولًا.',
    sections: [
      {
        id: 'first-days', h: 'الأيام الأولى',
        list: {
          items: [
            'اترك الضماد الأول كما هو حتى الموعد الذي يحدده الفريق الجراحي، إلا إذا تبلل بالكامل أو انفصل.',
            'اغسل يديك جيدًا قبل لمس الجرح أو الضماد وبعده.',
            'خذ مسكنات الألم كما وُصفت لك، فالسيطرة على الألم تساعد على الحركة والتنفس الجيد.',
            'ابدأ بالحركة الخفيفة حسب تعليمات الفريق، لأنها تقلل خطر الجلطات وتدعم التعافي.',
          ],
        },
      },
      {
        id: 'shower', h: 'الاستحمام والضماد',
        list: {
          items: [
            'يسمح كثير من الجرّاحين بالاستحمام بعد نحو يومين من العملية، لكن اتبع ما أخبرك به جرّاحك.',
            'تجنّب الاستحمام في حوض أو السباحة حتى يلتئم الجرح ويسمح الجرّاح بذلك.',
            'جفف الجرح بالتربيت بمنشفة نظيفة دون فرك.',
            'إذا طُلب منك تغيير الضماد، استخدم ضمادًا معقمًا ولا تلمس الجهة التي تلامس الجرح.',
          ],
        },
      },
      {
        id: 'stitches', h: 'الغرز والدبابيس',
        body: ['يختلف موعد إزالة الغرز أو الدبابيس حسب نوع العملية ومكان الجرح، وغالبًا يكون خلال أسبوع إلى أسبوعين. بعض الغرز تذوب وحدها. لا تقص الغرز أو تنزعها بنفسك.'],
      },
      {
        id: 'support', h: 'ما الذي يساعد الجرح على الالتئام؟',
        list: {
          items: [
            'غذاء متوازن غني بالبروتين، وشرب كمية كافية من السوائل ما لم يُطلب منك غير ذلك.',
            'ضبط سكر الدم لدى مرضى السكري.',
            'التوقف عن التدخين.',
            'تجنّب حمل الأوزان الثقيلة والحركات التي تشد الجرح خلال الفترة التي يحددها الجرّاح.',
            'دعم جرح البطن بوسادة عند السعال أو العطس.',
          ],
        },
      },
      {
        id: 'avoid', h: 'ما الذي يجب تجنبه؟',
        list: {
          items: [
            'وضع كريمات أو مراهم أو زيوت أو خلطات منزلية على الجرح ما لم يصفها الفريق المعالج.',
            'حك الجرح أو نزع القشور.',
            'تعريض الجرح لأشعة الشمس المباشرة في الأشهر الأولى بعد التئامه، لأن ذلك قد يؤثر على شكل الندبة.',
          ],
        },
      },
      {
        id: 'red-flags', h: 'متى تتواصل مع الجرّاح؟', warn: true,
        list: {
          items: [
            'احمرار أو سخونة أو تورم يزداد بعد الأيام الأولى.',
            'صديد أو إفرازات عكرة أو ذات رائحة كريهة.',
            'حرارة أو قشعريرة.',
            'ألم يزداد بعد أن كان يتحسن.',
            'انفتاح جزء من الجرح.',
          ],
        },
        after: ['<strong>اتجه إلى الطوارئ فورًا</strong> عند انفتاح الجرح بشكل واسع، أو نزيف لا يتوقف، أو ضيق تنفس أو ألم في الصدر أو تورم وألم مفاجئ في الساق.'],
      },
    ],
  },
  en: {
    title: 'Wound Care After Surgery: A Practical Guide for Home',
    description: 'How to care for a surgical wound at home: the dressing, showering, stitches, activity and nutrition, plus the signs that mean you should contact your surgeon.',
    h1: 'Wound care after surgery: a practical guide for home',
    card: 'Wound care after surgery',
    lead: 'The first days and weeks after surgery matter for how the wound heals. This guide brings together the most useful general advice. Your surgeon’s written instructions for your own case always come first.',
    sections: [
      {
        id: 'first-days', h: 'The first days',
        list: {
          items: [
            'Leave the first dressing in place until the time your surgical team gives, unless it becomes soaked or comes off.',
            'Wash your hands well before and after touching the wound or dressing.',
            'Take pain relief as prescribed. Good pain control helps you move and breathe well.',
            'Start gentle movement as your team advises; it lowers the risk of blood clots and supports recovery.',
          ],
        },
      },
      {
        id: 'shower', h: 'Showering and the dressing',
        list: {
          items: [
            'Many surgeons allow showering about two days after surgery, but follow what your surgeon told you.',
            'Avoid baths and swimming until the wound has healed and your surgeon agrees.',
            'Pat the wound dry with a clean towel; don’t rub.',
            'If you have been asked to change the dressing, use a sterile dressing and don’t touch the side that goes on the wound.',
          ],
        },
      },
      {
        id: 'stitches', h: 'Stitches and staples',
        body: ['When stitches or staples come out depends on the operation and where the wound is, often within one to two weeks. Some stitches dissolve on their own. Don’t cut or pull out stitches yourself.'],
      },
      {
        id: 'support', h: 'What helps the wound heal?',
        list: {
          items: [
            'A balanced diet with enough protein, and enough fluids unless you have been told otherwise.',
            'Good blood glucose control for people with diabetes.',
            'Stopping smoking.',
            'Avoiding heavy lifting and movements that strain the wound for as long as your surgeon advises.',
            'Supporting an abdominal wound with a pillow when you cough or sneeze.',
          ],
        },
      },
      {
        id: 'avoid', h: 'What to avoid',
        list: {
          items: [
            'Creams, ointments, oils or home remedies on the wound unless your care team prescribed them.',
            'Scratching the wound or picking scabs.',
            'Direct sun on the healed wound in the first months, which can affect how the scar looks.',
          ],
        },
      },
      {
        id: 'red-flags', h: 'When to contact your surgeon', warn: true,
        list: {
          items: [
            'Redness, warmth or swelling that increases after the first few days.',
            'Pus, or cloudy or bad-smelling fluid.',
            'Fever or chills.',
            'Pain that gets worse after it had been improving.',
            'Part of the wound opening.',
          ],
        },
        after: ['<strong>Go to the emergency department immediately</strong> if the wound opens widely, bleeding does not stop, or you have shortness of breath, chest pain, or sudden swelling and pain in a leg.'],
      },
    ],
  },
};
export default a;
