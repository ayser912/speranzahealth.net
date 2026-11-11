import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (urinary incontinence and the skin, especially in bedridden patients). */
const a: Article = {
  slug: 'incontinence-associated-dermatitis',
  order: 21,
  topic: 'pressure',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.beeckmanIad, R.piGuideline, R.npiapStaging],
  related: ['pressure', 'chronic'],
  relatedArticles: ['home-wound-care-mistakes', 'nutrition-and-vitamins-for-wound-healing', 'colostomy-types-and-peristomal-skin'],
  ar: {
    title: 'سلس البول وتأثيره على الجلد لدى المرضى طريحي الفراش',
    description: 'التهاب الجلد المرتبط بسلس البول والبراز: لماذا يحدث لدى المرضى طريحي الفراش، والفرق بينه وبين قرحة الضغط، وخطوات الوقاية والعناية اليومية بالجلد.',
    h1: 'سلس البول وتأثيره على الجلد، خصوصًا لدى المرضى طريحي الفراش',
    card: 'سلس البول وتأثيره على الجلد',
    lead: 'تعرض الجلد المستمر للبول أو البراز يضعفه ويلهبه ويجعله أكثر عرضة لقرح الضغط والعدوى. الخبر الجيد أن معظم هذه المشكلات يمكن الوقاية منها بروتين يومي بسيط.',
    sections: [
      {
        id: 'what', h: 'ما هو التهاب الجلد المرتبط بالسلس؟',
        body: [
          'التهاب الجلد المرتبط بالسلس (IAD) هو تهيج والتهاب في الجلد يحدث عندما يبقى الجلد على تماس مع البول أو البراز. يظهر في منطقة الأرداف والعجان وبين الفخذين وأسفل البطن، وأحيانًا أعلى الفخذين.',
          'البول يرطّب الجلد بإفراط ويغير حموضته، والبراز (خصوصًا السائل) يحتوي على إنزيمات تهاجم الجلد. ومع الاحتكاك بالفراش والحفاضات يصبح الجلد هشًا وسهل التقرح.',
        ],
      },
      {
        id: 'risk', h: 'لماذا المرضى طريحو الفراش أكثر عرضة؟',
        list: {
          items: [
            'البقاء في وضعية واحدة لفترات طويلة على حفاضة أو فراش رطب.',
            'صعوبة التبليغ عن الحاجة إلى التغيير، كما في الخرف أو ضعف الوعي.',
            'الإسهال، خصوصًا مع المضادات الحيوية أو التغذية بالأنبوب.',
            'سوء التغذية وقلة السوائل، ورقة الجلد مع التقدم في العمر.',
            'وجود قرحة ضغط أو خطر لها في المنطقة نفسها.',
          ],
        },
      },
      {
        id: 'signs', h: 'كيف يبدو؟',
        list: {
          items: [
            'احمرار منتشر غير محدد الحواف في مناطق تماس البول أو البراز.',
            'حرقة أو حكة أو ألم عند التنظيف.',
            'لمعان الجلد أو انتفاخه بسبب الرطوبة، وقد يتقشر أو يظهر فيه نز.',
            'في الحالات المتقدمة: تآكل سطحي في الجلد، وقد تظهر عدوى فطرية كبقع حمراء صغيرة حول المنطقة الملتهبة.',
          ],
        },
      },
      {
        id: 'vs', h: 'ما الفرق بينه وبين قرحة الضغط؟',
        table: {
          caption: 'فروق عامة تساعد على التمييز (قد يجتمعان لدى المريض نفسه)',
          head: ['الصفة', 'التهاب الجلد بسبب السلس', 'قرحة الضغط'],
          rows: [
            ['السبب', 'الرطوبة والمواد المهيجة في البول والبراز', 'الضغط أو الضغط مع الاحتكاك فوق عظم بارز'],
            ['المكان', 'مناطق التماس، وثنيات الجلد، وبين الأرداف', 'فوق العظام البارزة: العجز والكعبين والوركين'],
            ['الحواف', 'منتشرة وغير محددة', 'محددة غالبًا'],
            ['العمق', 'سطحي في الغالب', 'قد يكون عميقًا ويصل إلى العضلة أو العظم'],
            ['النسيج الميت', 'لا يوجد عادة', 'قد يوجد'],
          ],
        },
      },
      {
        id: 'care', h: 'الوقاية والعناية اليومية: نظّف، احمِ، استعِد',
        list: {
          ordered: true,
          items: [
            '<strong>نظّف بلطف بعد كل مرة:</strong> بمنظف خاص للجلد ذي حموضة قريبة من حموضة الجلد أو مناديل مخصصة لسلس البول، بدل الماء والصابون العادي، ودون فرك.',
            '<strong>جفّف بالتربيت</strong> لا بالفرك، خصوصًا داخل الثنيات.',
            '<strong>احمِ الجلد بطبقة عازلة:</strong> كريم أو مرهم أو بخاخ يشكّل حاجزًا (مثل منتجات الزنك أو الديميثيكون أو الأغشية الواقية من دون كحول)، بطبقة رقيقة.',
            '<strong>اختر منتجات امتصاص مناسبة</strong> تسحب الرطوبة بعيدًا عن الجلد، وغيّرها فور اتساخها، ولا تضع طبقات كثيرة تحت المريض.',
            '<strong>عالج السبب:</strong> مراجعة الطبيب لأسباب السلس أو الإسهال، وجدول مساعدة على التبول، والقسطرة الخارجية أو غيرها عند الحاجة وبقرار طبي.',
            '<strong>غيّر وضعية المريض بانتظام</strong> واستخدم أسطحًا لتوزيع الضغط، لأن الجلد الملتهب أكثر عرضة لقرح الضغط.',
            '<strong>التغذية والسوائل</strong> الكافية لدعم الجلد.',
          ],
        },
      },
      {
        id: 'avoid', h: 'ما يجب تجنبه',
        list: {
          items: [
            'الصابون القلوي والفرك المتكرر.',
            'البودرة على الجلد الملتهب، لأنها تتكتل مع الرطوبة.',
            'الكريمات المعطرة أو الخلطات المنزلية.',
            'ترك الحفاضة المبللة لفترات طويلة.',
          ],
        },
      },
      {
        id: 'urgent', h: 'متى تراجع الطبيب أو الفريق الصحي؟', warn: true,
        list: {
          items: [
            'جلد متآكل أو نازف أو مؤلم جدًا.',
            'بقع حمراء صغيرة حول المنطقة مع حكة (قد تكون عدوى فطرية تحتاج إلى علاج).',
            'جرح عميق أو لون داكن فوق عظم العجز أو الكعبين.',
            'حرارة أو إسهال مستمر أو علامات جفاف.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Incontinence and the Skin in Bedridden Patients',
    description: 'Incontinence-associated dermatitis: why it develops in bedridden patients, how it differs from a pressure injury, and the steps of prevention and daily skin care.',
    h1: 'Urinary incontinence and the skin, especially in bedridden patients',
    card: 'Incontinence and the skin',
    lead: 'Constant exposure of the skin to urine or stool weakens and inflames it and makes pressure injuries and infection more likely. The good news is that most of these problems can be prevented with a simple daily routine.',
    sections: [
      {
        id: 'what', h: 'What is incontinence-associated dermatitis?',
        body: [
          'Incontinence-associated dermatitis (IAD) is irritation and inflammation of the skin caused by contact with urine or stool. It appears on the buttocks, perineum, between the thighs and on the lower abdomen, and sometimes the upper thighs.',
          'Urine over-hydrates the skin and changes its acidity, and stool (especially liquid stool) contains enzymes that attack the skin. With friction from bedding and pads, the skin becomes fragile and breaks down easily.',
        ],
      },
      {
        id: 'risk', h: 'Why are bedridden patients more at risk?',
        list: {
          items: [
            'Staying in one position for long periods on a wet pad or bed.',
            'Difficulty asking to be changed, as in dementia or reduced consciousness.',
            'Diarrhoea, especially with antibiotics or tube feeding.',
            'Malnutrition, low fluid intake and thin skin with ageing.',
            'An existing pressure injury, or risk of one, in the same area.',
          ],
        },
      },
      {
        id: 'signs', h: 'What does it look like?',
        list: {
          items: [
            'Diffuse redness without clear edges where urine or stool touch the skin.',
            'Burning, itching or pain when cleaned.',
            'Shiny or swollen skin from moisture, which may peel or weep.',
            'In advanced cases: superficial skin loss, and sometimes a fungal infection with small red spots around the inflamed area.',
          ],
        },
      },
      {
        id: 'vs', h: 'How does it differ from a pressure injury?',
        table: {
          caption: 'General differences that help tell them apart (both can occur together)',
          head: ['Feature', 'Incontinence-associated dermatitis', 'Pressure injury'],
          rows: [
            ['Cause', 'Moisture and irritants in urine and stool', 'Pressure, or pressure with shear, over a bony point'],
            ['Location', 'Contact areas, skin folds and between the buttocks', 'Over bony points: sacrum, heels and hips'],
            ['Edges', 'Diffuse and poorly defined', 'Usually well defined'],
            ['Depth', 'Usually superficial', 'Can be deep, reaching muscle or bone'],
            ['Dead tissue', 'Usually none', 'May be present'],
          ],
        },
      },
      {
        id: 'care', h: 'Prevention and daily care: cleanse, protect, restore',
        list: {
          ordered: true,
          items: [
            '<strong>Cleanse gently after each episode:</strong> with a pH-balanced skin cleanser or incontinence wipes rather than ordinary soap and water, without rubbing.',
            '<strong>Pat dry</strong>, don’t rub, especially inside skin folds.',
            '<strong>Protect the skin with a barrier:</strong> a cream, ointment or spray that forms a barrier (such as zinc, dimethicone or alcohol-free barrier films), applied thinly.',
            '<strong>Choose suitable absorbent products</strong> that wick moisture away from the skin, change them as soon as they are soiled, and avoid layering pads under the patient.',
            '<strong>Treat the cause:</strong> a medical review of the cause of incontinence or diarrhoea, a toileting schedule, and external catheters or other devices when the doctor decides.',
            '<strong>Reposition regularly</strong> and use pressure-redistributing surfaces, because inflamed skin is more prone to pressure injuries.',
            '<strong>Adequate nutrition and fluids</strong> to support the skin.',
          ],
        },
      },
      {
        id: 'avoid', h: 'What to avoid',
        list: {
          items: [
            'Alkaline soap and repeated scrubbing.',
            'Powder on inflamed skin, which clumps with moisture.',
            'Perfumed creams or home mixtures.',
            'Leaving a wet pad in place for long periods.',
          ],
        },
      },
      {
        id: 'urgent', h: 'When to contact the doctor or care team', warn: true,
        list: {
          items: [
            'Broken, bleeding or very painful skin.',
            'Small red spots around the area with itching (possibly a fungal infection needing treatment).',
            'A deep wound or dark discoloration over the sacrum or heels.',
            'Fever, ongoing diarrhoea or signs of dehydration.',
          ],
        },
      },
    ],
  },
};
export default a;
