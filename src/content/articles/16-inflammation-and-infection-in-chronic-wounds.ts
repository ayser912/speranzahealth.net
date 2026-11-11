import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (systemic and local inflammation/infection and chronic wounds). */
const a: Article = {
  slug: 'inflammation-and-infection-in-chronic-wounds',
  order: 16,
  topic: 'articles',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.iwii, R.emingRepair, R.sepsis3, R.iwgdfInfection],
  related: ['chronic', 'diabeticFoot'],
  relatedArticles: ['wound-infection-warning-signs', 'lab-tests-and-imaging-for-wounds', 'traumatic-wounds-and-bone-infection'],
  ar: {
    title: 'الالتهابات الموضعية والجهازية وعلاقتها بالجروح المزمنة',
    description: 'الفرق بين الالتهاب الطبيعي في الجرح والعدوى الموضعية والعدوى المنتشرة والتسمم الدموي، ولماذا يبقى الجرح المزمن عالقًا في مرحلة الالتهاب، ومتى تكون الحالة طارئة.',
    h1: 'الالتهابات الموضعية والجهازية والجروح المزمنة',
    card: 'الالتهابات الموضعية والجهازية',
    lead: 'كلمة «التهاب» تُستخدم لأشياء مختلفة: رد فعل طبيعي يبدأ به الالتئام، أو عدوى بكتيرية في الجرح، أو عدوى منتشرة في الجسم كله. التمييز بينها يحدد العلاج ومدى الاستعجال.',
    sections: [
      {
        id: 'normal', h: 'الالتهاب الطبيعي: أول مراحل الالتئام',
        body: [
          'يمر كل جرح بمراحل: إيقاف النزيف، ثم الالتهاب، ثم بناء النسيج، ثم إعادة التشكيل. في مرحلة الالتهاب تصل خلايا المناعة لتنظيف الجرح، فيظهر احمرار خفيف وتورم ودفء حول الحواف لأيام قليلة، وهذا طبيعي.',
          'في الجرح المزمن قد يبقى الجرح «عالقًا» في مرحلة الالتهاب: إنزيمات مرتفعة تهدم النسيج الجديد، وبكتيريا متكاثرة أو غشاء حيوي (Biofilm)، وأسباب مستمرة مثل الضغط أو ضعف التروية أو ارتفاع السكر.',
        ],
      },
      {
        id: 'local', h: 'العدوى الموضعية (في الجرح نفسه)',
        list: {
          intro: 'تكون البكتيريا قد تجاوزت قدرة الجسم على السيطرة عليها في الجرح. من علاماتها:',
          items: [
            'زيادة الألم أو ألم جديد.',
            'احمرار وتورم وسخونة تمتد حول الجرح.',
            'زيادة الإفرازات أو تحولها إلى صديد، أو رائحة كريهة جديدة.',
            'نسيج هش ينزف بسهولة، أو توقف الجرح عن التحسن.',
            'تفتح أجزاء من الجرح أو ظهور جيوب جديدة.',
          ],
        },
        after: ['في الجروح المزمنة قد تكون العلامات خفيفة، فقد يكون توقف التقدم أو زيادة الألم هو العلامة الوحيدة.'],
      },
      {
        id: 'spreading', h: 'العدوى المنتشرة والعميقة',
        body: [
          'عندما تمتد العدوى إلى الجلد والأنسجة المحيطة (التهاب النسيج الخلوي)، أو إلى العمق: الأوتار والعضلات (التهاب اللفافة) أو العظم (التهاب العظم والنقي). وتشمل علاماتها احمرارًا يتسع، أو تورمًا شديدًا، أو فرقعة تحت الجلد، أو جرحًا يصل فيه المسبار إلى العظم.',
        ],
      },
      {
        id: 'systemic', h: 'الالتهاب الجهازي والتسمم الدموي (الإنتان)', warn: true,
        body: [
          'الإنتان (Sepsis) استجابة خطيرة من الجسم كله للعدوى تؤثر على عمل الأعضاء، وهو حالة طارئة تهدد الحياة.',
        ],
        list: {
          intro: 'توجّه إلى الطوارئ فورًا عند وجود جرح مع أي مما يلي:',
          items: [
            'حرارة مرتفعة أو قشعريرة، أو حرارة منخفضة على غير العادة.',
            'تسارع التنفس أو ضيق النفس.',
            'تسارع ضربات القلب أو انخفاض ضغط الدم أو دوخة.',
            'تشوش أو نعاس غير معتاد.',
            'قلة البول بشكل واضح.',
            'ارتفاع السكر بشكل غير معتاد لدى مريض السكري.',
          ],
        },
      },
      {
        id: 'compare', h: 'مقارنة سريعة',
        table: {
          caption: 'فروق عامة (الحكم النهائي للطبيب بعد الفحص)',
          head: ['الحالة', 'المكان', 'العلامات المعتادة', 'العلاج عادة'],
          rows: [
            ['التهاب طبيعي', 'حواف الجرح', 'احمرار خفيف ودفء لأيام قليلة ثم يخف', 'عناية روتينية بالجرح'],
            ['عدوى موضعية', 'الجرح وما حوله مباشرة', 'ألم وإفرازات ورائحة وتوقف التحسن', 'تنظيف الجرح وإزالة النسيج الميت، ومطهرات أو ضمادات مضادة للميكروبات، ومضاد حيوي حسب تقييم الطبيب'],
            ['عدوى منتشرة أو عميقة', 'الجلد المحيط أو الأنسجة العميقة أو العظم', 'احمرار يتسع، وتورم، وقد يصل إلى العظم', 'مضاد حيوي يصفه الطبيب، وقد يلزم تدخل جراحي'],
            ['إنتان', 'الجسم كله', 'حرارة، وتسارع النبض والتنفس، وتشوش، وهبوط الضغط', 'طوارئ ومستشفى فورًا'],
          ],
        },
      },
      {
        id: 'labs', h: 'دور الفحوصات',
        body: [
          'تساعد فحوصات مثل عدد كريات الدم البيضاء، وبروتين CRP، وسرعة الترسيب ESR، والبروكالسيتونين في تقدير شدة الالتهاب ومتابعة الاستجابة للعلاج، لكنها لا تكفي وحدها للتشخيص. وتُؤخذ المزرعة من الجرح بعد تنظيفه وبطريقة صحيحة عند وجود علامات عدوى، لا بشكل روتيني.',
          'تفاصيل القيم الطبيعية في: <a href="/ar/articles/lab-tests-and-imaging-for-wounds/">الفحوصات المخبرية والأشعة للجروح المزمنة</a>.',
        ],
      },
    ],
  },
  en: {
    title: 'Local and Systemic Inflammation and Chronic Wounds',
    description: 'Normal wound inflammation versus local infection, spreading infection and sepsis, why chronic wounds stay stuck in the inflammatory phase, and when it is an emergency.',
    h1: 'Local and systemic inflammation in chronic wounds',
    card: 'Local and systemic inflammation',
    lead: 'The word “inflammation” is used for different things: the normal reaction that starts healing, a bacterial infection in the wound, or an infection spreading through the whole body. Telling them apart decides the treatment and how urgent it is.',
    sections: [
      {
        id: 'normal', h: 'Normal inflammation: the first stage of healing',
        body: [
          'Every wound passes through stages: stopping bleeding, inflammation, building new tissue and remodelling. In the inflammatory phase immune cells arrive to clean the wound, causing mild redness, swelling and warmth around the edges for a few days. This is normal.',
          'A chronic wound can get “stuck” in the inflammatory phase: high enzyme levels break down new tissue, bacteria multiply or form a biofilm, and ongoing causes such as pressure, poor perfusion or high glucose persist.',
        ],
      },
      {
        id: 'local', h: 'Local infection (in the wound itself)',
        list: {
          intro: 'Bacteria have overwhelmed the body’s control in the wound. Signs include:',
          items: [
            'More pain, or new pain.',
            'Redness, swelling and warmth spreading around the wound.',
            'More exudate, pus, or a new bad smell.',
            'Fragile tissue that bleeds easily, or a wound that stops improving.',
            'Parts of the wound opening up, or new pockets appearing.',
          ],
        },
        after: ['In chronic wounds the signs can be subtle: a stalled wound or more pain may be the only clue.'],
      },
      {
        id: 'spreading', h: 'Spreading and deep infection',
        body: [
          'Infection can spread into the surrounding skin and tissue (cellulitis), or deeper into tendons and muscle (fasciitis) or bone (osteomyelitis). Signs include spreading redness, marked swelling, crackling under the skin, or a wound where a probe reaches bone.',
        ],
      },
      {
        id: 'systemic', h: 'Systemic inflammation and sepsis', warn: true,
        body: [
          'Sepsis is a dangerous whole-body response to infection that affects how the organs work. It is a life-threatening emergency.',
        ],
        list: {
          intro: 'Go to the emergency department immediately if there is a wound and any of the following:',
          items: [
            'High fever or shivering, or an unusually low temperature.',
            'Fast breathing or breathlessness.',
            'A fast heart rate, low blood pressure or dizziness.',
            'Confusion or unusual drowsiness.',
            'Passing much less urine.',
            'Unusually high blood glucose in someone with diabetes.',
          ],
        },
      },
      {
        id: 'compare', h: 'A quick comparison',
        table: {
          caption: 'General differences (the doctor decides after examination)',
          head: ['Condition', 'Where', 'Usual signs', 'Usual treatment'],
          rows: [
            ['Normal inflammation', 'Wound edges', 'Mild redness and warmth for a few days, then settling', 'Routine wound care'],
            ['Local infection', 'The wound and the area right around it', 'Pain, exudate, odour and stalled healing', 'Wound cleansing and removal of dead tissue, antiseptics or antimicrobial dressings, and antibiotics if the doctor decides'],
            ['Spreading or deep infection', 'Surrounding skin, deep tissue or bone', 'Spreading redness and swelling; may reach bone', 'Antibiotics prescribed by the doctor; surgery may be needed'],
            ['Sepsis', 'The whole body', 'Fever, fast pulse and breathing, confusion, low blood pressure', 'Emergency hospital care immediately'],
          ],
        },
      },
      {
        id: 'labs', h: 'The role of tests',
        body: [
          'Tests such as the white cell count, C-reactive protein (CRP), the erythrocyte sedimentation rate (ESR) and procalcitonin help estimate how severe inflammation is and follow the response to treatment, but none of them is enough on its own. A wound culture is taken after cleansing and with the correct technique when there are signs of infection, not routinely.',
          'Normal ranges are in: <a href="/en/articles/lab-tests-and-imaging-for-wounds/">Laboratory tests and imaging for chronic wounds</a>.',
        ],
      },
    ],
  },
};
export default a;
