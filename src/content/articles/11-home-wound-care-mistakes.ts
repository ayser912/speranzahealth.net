import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'home-wound-care-mistakes',
  order: 11,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.iwii, R.timers, R.exudate, R.piGuideline],
  related: ['chronic', 'pressure', 'surgical'],
  relatedArticles: ['choosing-wound-dressings', 'wound-infection-warning-signs', 'diabetic-foot-wound-care-mistakes'],
  ar: {
    title: 'أخطاء شائعة في العناية المنزلية بالجروح | أيسر شواقفه CWS®',
    description: 'أخطاء منتشرة تؤخر التئام الجروح في المنزل: ترك الجرح «يتنفس»، والمطهرات القوية، والخلطات الشعبية، وتغيير الضماد بكثرة، وإهمال الضغط والتغذية.',
    h1: 'أخطاء شائعة في العناية المنزلية بالجروح',
    card: 'أخطاء شائعة في العناية المنزلية بالجروح',
    lead: 'الأسرة شريك أساسي في العناية بالجرح، لكن بعض العادات المنتشرة تؤخر الالتئام دون قصد. هذه أكثر الأخطاء التي نراها، وما الذي يُنصح به بدلًا منها.',
    sections: [
      {
        id: 'mistakes', h: 'الأخطاء الأكثر شيوعًا',
        subs: [
          { h: 'ترك الجرح مكشوفًا «ليتنفس»', body: ['الاعتقاد بأن الجرح يحتاج إلى الهواء ليجف منتشر، لكن معظم الجروح تلتئم أفضل في بيئة رطبة متوازنة تحت ضماد مناسب. الجفاف الزائد يبطئ حركة الخلايا ويكوّن قشرة تعيق الالتئام.'] },
          { h: 'استخدام المطهرات القوية بشكل روتيني', body: ['الكحول وماء الأكسجين وبعض المطهرات القوية قد تضر الأنسجة الجديدة إذا استُخدمت على جرح يلتئم. التنظيف الروتيني يكون عادة بمحلول يحدده الفريق المعالج.'] },
          { h: 'الخلطات الشعبية', body: ['البن، ومعجون الأسنان، والأعشاب، والزيوت، والكريمات غير الموصوفة قد تسبب تهيجًا أو عدوى، وتصعّب على الفريق تقييم الجرح.'] },
          { h: 'تغيير الضماد بكثرة أو تركه طويلًا', body: ['فتح الجرح كثيرًا يبرّده ويعرّضه للتلوث، وتركه أطول من اللازم قد يسبب تسرب الإفرازات وتهيّج الجلد. اتّبع الجدول الذي يحدده الفريق المعالج.'] },
          { h: 'استخدام القطن مباشرة على الجرح', body: ['ألياف القطن قد تلتصق بالجرح وتبقى فيه. استخدم الضمادات أو الشاش المعقم المخصص.'] },
          { h: 'إزالة اللاصق بقوة عن جلد هش', body: ['الجلد الرقيق لدى كبار السن قد يتمزق بسهولة. أزل اللاصق ببطء وباتجاه الجلد، واسأل عن منتجات مناسبة للجلد الهش.'] },
          { h: 'إهمال الضغط والتغذية', body: ['الضماد وحده لا يكفي إذا استمر الضغط على الجرح أو كانت التغذية والسوائل غير كافية، خصوصًا لدى المرضى طريحي الفراش.'] },
          { h: 'التوقف عند تحسن الجرح', body: ['إيقاف الخطة مبكرًا عندما يبدو الجرح أفضل قد يؤدي إلى عودته. استمر حتى يؤكد الفريق المعالج أنه التأم.'] },
        ],
      },
      {
        id: 'do', h: 'عادات جيدة للعناية المنزلية',
        list: {
          items: [
            'اغسل يديك قبل لمس الجرح وبعده.',
            'اتّبع خطة مكتوبة ومحددة من الفريق المعالج.',
            'جهّز مكانًا نظيفًا ومستلزمات كافية قبل تغيير الضماد.',
            'دوّن ملاحظاتك عن الجرح والألم والحرارة في كل تغيير.',
            'تواصل مع الفريق عند أي تغيّر، ولا تنتظر الموعد التالي إذا ظهرت علامات خطر.',
          ],
        },
      },
      {
        id: 'red-flags', h: 'متى تتوقف عن العناية المنزلية وتطلب المساعدة؟', warn: true,
        list: {
          items: [
            'احمرار أو تورم أو سخونة تنتشر حول الجرح.',
            'صديد أو رائحة كريهة جديدة.',
            'حرارة أو قشعريرة أو تشوّش.',
            'اتساع الجرح أو ظهور نسيج أسود.',
          ],
        },
        after: ['اقرأ: <a href="/ar/articles/wound-infection-warning-signs/">علامات التهاب الجرح التي لا ينبغي تجاهلها</a>.'],
      },
    ],
  },
  en: {
    title: 'Common Mistakes in Home Wound Care | Aissar Shawaqfeh, CWS®',
    description: 'Habits that slow healing at home: letting a wound “breathe”, strong antiseptics, traditional remedies, frequent dressing changes and neglecting pressure relief.',
    h1: 'Common mistakes in home wound care',
    card: 'Common mistakes in home wound care',
    lead: 'Families are key partners in wound care, but some common habits slow healing without anyone meaning them to. These are the mistakes seen most often, and what is recommended instead.',
    sections: [
      {
        id: 'mistakes', h: 'The most common mistakes',
        subs: [
          { h: 'Leaving the wound uncovered to “breathe”', body: ['Many people believe a wound needs air to dry out, but most wounds heal better in balanced moisture under a suitable dressing. Too much drying slows cell movement and forms a crust that gets in the way of healing.'] },
          { h: 'Using strong antiseptics routinely', body: ['Alcohol, hydrogen peroxide and some strong antiseptics can damage new tissue when used on a healing wound. Routine cleansing is usually with a solution the care team specifies.'] },
          { h: 'Traditional remedies', body: ['Coffee, toothpaste, herbs, oils and unprescribed creams can cause irritation or infection, and make it harder for the team to assess the wound.'] },
          { h: 'Changing the dressing too often, or leaving it too long', body: ['Opening the wound often cools it and exposes it to contamination; leaving it too long can cause leaks and skin irritation. Follow the schedule the care team sets.'] },
          { h: 'Putting cotton wool directly on the wound', body: ['Cotton fibres can stick to the wound and stay in it. Use proper dressings or sterile gauze.'] },
          { h: 'Pulling tape off fragile skin', body: ['Older people’s thin skin tears easily. Remove tape slowly, low and close to the skin, and ask about products suited to fragile skin.'] },
          { h: 'Neglecting pressure and nutrition', body: ['A dressing alone is not enough if pressure on the wound continues or nutrition and fluids are inadequate, especially for bed-bound patients.'] },
          { h: 'Stopping when the wound looks better', body: ['Stopping the plan early because the wound seems better can lead to it coming back. Continue until the care team confirms it has healed.'] },
        ],
      },
      {
        id: 'do', h: 'Good habits for home care',
        list: {
          items: [
            'Wash your hands before and after touching the wound.',
            'Follow a clear, written plan from the treating team.',
            'Prepare a clean space and enough supplies before changing the dressing.',
            'Note the wound, pain and temperature at every change.',
            'Contact the team about any change, and don’t wait for the next appointment if warning signs appear.',
          ],
        },
      },
      {
        id: 'red-flags', h: 'When to stop home care and get help', warn: true,
        list: {
          items: [
            'Redness, swelling or warmth spreading around the wound.',
            'Pus or a new bad smell.',
            'Fever, chills or confusion.',
            'The wound getting bigger, or black tissue appearing.',
          ],
        },
        after: ['Read <a href="/en/articles/wound-infection-warning-signs/">Wound infection warning signs you should not ignore</a>.'],
      },
    ],
  },
};
export default a;
