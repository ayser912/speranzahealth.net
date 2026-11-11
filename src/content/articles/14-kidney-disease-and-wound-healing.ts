import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (kidney disease, perfusion, chronic wounds and infection). */
const a: Article = {
  slug: 'kidney-disease-and-wound-healing',
  order: 14,
  topic: 'chronic',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.kdigoCkd, R.marozKidney, R.iwgdfPad, R.iwii],
  related: ['chronic', 'diabeticFoot'],
  relatedArticles: ['tissue-perfusion-and-wound-healing', 'lab-tests-and-imaging-for-wounds', 'nutrition-and-vitamins-for-wound-healing'],
  ar: {
    title: 'أمراض الكلى والجروح المزمنة: التروية والالتئام والالتهابات',
    description: 'كيف يؤثر مرض الكلى المزمن وغسيل الكلى على التروية الدموية والتئام الجروح وخطر العدوى، وما الذي يحتاجه مريض الكلى للعناية بجرحه بأمان.',
    h1: 'أمراض الكلى وعلاقتها بالتروية الدموية والجروح المزمنة',
    card: 'أمراض الكلى والجروح',
    lead: 'مريض الكلى المزمن أكثر عرضة لبطء التئام الجروح وللعدوى ولمرض الشرايين الطرفية. فهم هذه العلاقة يساعد الفريق والأسرة على اكتشاف المشكلة مبكرًا ومعالجة أسبابها.',
    sections: [
      {
        id: 'what', h: 'ما هو مرض الكلى المزمن؟',
        body: [
          'مرض الكلى المزمن (CKD) هو ضعف في وظيفة الكلى أو تلف فيها يستمر أكثر من ثلاثة أشهر. يُقاس غالبًا بمعدل الترشيح الكبيبي المقدّر (eGFR): أقل من 60 مل/دقيقة/1.73م² لثلاثة أشهر أو أكثر يُعد مرضًا مزمنًا، وأقل من 15 يعني فشلًا كلويًا قد يحتاج إلى غسيل أو زراعة.',
          'أكثر أسبابه شيوعًا السكري وارتفاع ضغط الدم، وهما أيضًا من أهم أسباب الجروح المزمنة في القدم والساق.',
        ],
      },
      {
        id: 'how', h: 'كيف يؤثر على الجروح؟',
        subs: [
          { h: 'ضعف التروية الدموية', body: ['مرض الشرايين الطرفية أكثر شيوعًا لدى مرضى الكلى، وتترسب الأملاح (الكالسيوم) في جدران الشرايين فتصبح متصلبة. لذلك قد يكون مؤشر ABPI مرتفعًا بشكل مضلل، ويُفضَّل قياس ضغط إصبع القدم أو فحوصات أخرى يختارها الفريق.'] },
          { h: 'بطء الالتئام', body: ['تراكم السموم (اليوريا)، وفقر الدم، ونقص البروتين، واضطراب الأملاح، كلها تبطئ بناء النسيج الجديد.'] },
          { h: 'ضعف المناعة وخطر العدوى', body: ['تضعف المناعة مع الفشل الكلوي، وقد تكون علامات العدوى أقل وضوحًا، فتُكتشف متأخرة.'] },
          { h: 'التورم والسوائل', body: ['احتباس السوائل يسبب تورم الساقين، وهذا يضغط على الأوعية الصغيرة ويزيد الإفرازات ويضعف الجلد.'] },
          { h: 'الكالسيفيلاكسيس', body: ['حالة نادرة لكنها خطيرة لدى مرضى الغسيل، تسببها ترسبات كالسيوم في الأوعية الصغيرة للجلد، وتظهر كبقع مؤلمة جدًا بنفسجية أو سوداء تتحول إلى جروح. تحتاج إلى تقييم متخصص عاجل.'] },
        ],
      },
      {
        id: 'care', h: 'نقاط مهمة في العناية بجرح مريض الكلى',
        list: {
          items: [
            'تقييم التروية الدموية قبل أي رباط ضاغط أو إزالة نسيج ميت.',
            'مراجعة جرعات الأدوية والمضادات الحيوية مع الطبيب، لأن كثيرًا منها يحتاج إلى تعديل حسب وظيفة الكلى.',
            'التغذية بإشراف أخصائي تغذية علاجية: مريض الغسيل يحتاج عادة إلى بروتين كافٍ، مع ضبط البوتاسيوم والفوسفور والسوائل حسب حالته. لا تبدأ مكملات دون استشارة.',
            'متابعة فقر الدم وضبط السكر وضغط الدم.',
            'حماية الكعبين والقدمين من الضغط، خصوصًا أثناء جلسات الغسيل الطويلة.',
            'التنسيق بين أخصائي الكلى وأخصائي الجروح وجرّاح الأوعية الدموية.',
          ],
        },
      },
      {
        id: 'labs', h: 'فحوصات يتابعها الفريق',
        list: {
          items: [
            'الكرياتينين ومعدل الترشيح eGFR.',
            'الهيموغلوبين (فقر الدم).',
            'الألبومين والحالة الغذائية.',
            'البوتاسيوم والكالسيوم والفوسفور.',
            'السكر التراكمي HbA1c لدى مريض السكري.',
          ],
        },
        after: ['تفاصيل القيم الطبيعية في: <a href="/ar/articles/lab-tests-and-imaging-for-wounds/">الفحوصات المخبرية والأشعة للجروح المزمنة</a>.'],
      },
      {
        id: 'urgent', h: 'متى تكون المراجعة عاجلة؟', warn: true,
        list: {
          items: [
            'حرارة أو قشعريرة لدى مريض الغسيل، خصوصًا مع جرح أو مكان وصلة الغسيل.',
            'بقع جلدية مؤلمة جدًا بنفسجية أو سوداء.',
            'قدم باردة شاحبة أو أصابع يتغير لونها.',
            'احمرار أو تورم أو إفرازات عند وصلة الغسيل (الفستولا أو القسطرة).',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Kidney Disease and Chronic Wounds: Perfusion, Healing, Infection',
    description: 'How chronic kidney disease and dialysis affect blood supply, wound healing and infection risk, and what people with kidney disease need for safe wound care.',
    h1: 'Kidney disease, perfusion and chronic wounds',
    card: 'Kidney disease and wounds',
    lead: 'People with chronic kidney disease are more prone to slow wound healing, infection and peripheral artery disease. Understanding the link helps the team and family spot problems early and treat their causes.',
    sections: [
      {
        id: 'what', h: 'What is chronic kidney disease?',
        body: [
          'Chronic kidney disease (CKD) is reduced kidney function or kidney damage lasting more than three months. It is usually measured with the estimated glomerular filtration rate (eGFR): below 60 mL/min/1.73 m² for three months or more is chronic disease, and below 15 means kidney failure that may need dialysis or a transplant.',
          'Its most common causes are diabetes and high blood pressure, which are also among the main causes of chronic foot and leg wounds.',
        ],
      },
      {
        id: 'how', h: 'How does it affect wounds?',
        subs: [
          { h: 'Poor perfusion', body: ['Peripheral artery disease is more common in kidney disease, and calcium builds up in artery walls, making them stiff. ABPI can therefore be misleadingly high, and toe pressures or other tests chosen by the team are preferred.'] },
          { h: 'Slow healing', body: ['Build-up of waste products (urea), anaemia, low protein and disturbed salts all slow the building of new tissue.'] },
          { h: 'Weaker immunity and infection risk', body: ['Immunity weakens with kidney failure, and signs of infection can be less obvious, so it may be found late.'] },
          { h: 'Swelling and fluid', body: ['Fluid retention causes leg swelling, which compresses small vessels, increases exudate and weakens the skin.'] },
          { h: 'Calciphylaxis', body: ['A rare but serious condition in people on dialysis, caused by calcium deposits in the small vessels of the skin. It appears as very painful purple or black patches that turn into wounds, and needs urgent specialist assessment.'] },
        ],
      },
      {
        id: 'care', h: 'Key points in wound care for people with kidney disease',
        list: {
          items: [
            'Assess perfusion before any compression or removal of dead tissue.',
            'Review medicine and antibiotic doses with the doctor, since many need adjusting for kidney function.',
            'Nutrition supervised by a clinical dietitian: people on dialysis usually need enough protein, with potassium, phosphate and fluids controlled for their situation. Don’t start supplements without advice.',
            'Monitor anaemia and control glucose and blood pressure.',
            'Protect the heels and feet from pressure, especially during long dialysis sessions.',
            'Coordinate between the nephrologist, the wound specialist and the vascular surgeon.',
          ],
        },
      },
      {
        id: 'labs', h: 'Tests the team follows',
        list: {
          items: [
            'Creatinine and eGFR.',
            'Haemoglobin (anaemia).',
            'Albumin and nutritional status.',
            'Potassium, calcium and phosphate.',
            'HbA1c in people with diabetes.',
          ],
        },
        after: ['Normal ranges are in: <a href="/en/articles/lab-tests-and-imaging-for-wounds/">Laboratory tests and imaging for chronic wounds</a>.'],
      },
      {
        id: 'urgent', h: 'When is review urgent?', warn: true,
        list: {
          items: [
            'Fever or shivering in someone on dialysis, especially with a wound or at the dialysis access site.',
            'Very painful purple or black skin patches.',
            'A cold, pale foot or toes changing colour.',
            'Redness, swelling or discharge at the dialysis access (fistula or catheter).',
          ],
        },
      },
    ],
  },
};
export default a;
