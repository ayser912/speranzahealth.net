import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (accident wounds, bone infection and orthopaedic surgery). */
const a: Article = {
  slug: 'traumatic-wounds-and-bone-infection',
  order: 18,
  topic: 'surgical',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.fri, R.lewOsteomyelitis, R.iwii, R.ewmaNpwt],
  related: ['surgical', 'npwt'],
  relatedArticles: ['inflammation-and-infection-in-chronic-wounds', 'plastic-surgery-for-chronic-wounds', 'lab-tests-and-imaging-for-wounds'],
  ar: {
    title: 'جروح الحوادث والتهاب العظم: العلاج وعلاقتها بجراحة العظام',
    description: 'كيف تُعالج جروح الحوادث والكسور المفتوحة، ولماذا قد تصاب العظام بالالتهاب بعد الحادث أو جراحة العظام، وعلامات التهاب العظم، ودور الفريق متعدد التخصصات.',
    h1: 'علاج جروح الحوادث وعلاقتها بالتهاب العظم وجراحة العظام',
    card: 'جروح الحوادث والتهاب العظم',
    lead: 'جروح الحوادث غالبًا ملوثة، وقد تصاحبها كسور أو أنسجة متضررة. العناية الصحيحة من الساعات الأولى تقلل خطر العدوى، وأخطرها التهاب العظم الذي قد يحتاج إلى علاج طويل.',
    sections: [
      {
        id: 'types', h: 'أنواع جروح الحوادث',
        list: {
          items: [
            '<strong>السحجات (الخدوش):</strong> فقدان الطبقة السطحية من الجلد، وقد يدخل فيها تراب أو حصى.',
            '<strong>الجروح القطعية والتمزقات:</strong> بأدوات حادة أو بسبب الاصطدام.',
            '<strong>جروح السحق والانسلاخ:</strong> تضرر واسع في الجلد والأنسجة تحته، وقد يموت جزء منها بعد أيام.',
            '<strong>الكسور المفتوحة:</strong> كسر يتصل بجرح في الجلد، فيتعرض العظم للتلوث. تُصنَّف حسب حجم الجرح وتضرر الأنسجة (مثل تصنيف Gustilo-Anderson).',
            '<strong>الحروق المصاحبة للحادث.</strong>',
          ],
        },
      },
      {
        id: 'first', h: 'الإسعاف الأولي والعلاج المبكر',
        list: {
          ordered: true,
          items: [
            'إيقاف النزيف بالضغط المباشر، وطلب الإسعاف عند النزيف الشديد أو الكسور أو الجروح العميقة.',
            'غسل الجرح البسيط بماء نظيف جارٍ أو محلول ملحي، دون مساحيق أو خلطات.',
            'في المستشفى: تنظيف جراحي وإزالة الأجسام الغريبة والأنسجة الميتة (الإنضار)، ومضاد حيوي مبكر للكسور المفتوحة حسب البروتوكول.',
            'التطعيم ضد الكزاز (التيتانوس) حسب السجل التطعيمي للمريض.',
            'تثبيت الكسر (خارجيًا أو داخليًا)، وتغطية الجرح بضماد مناسب أو بالعلاج بالضغط السلبي عند الحاجة، ثم إغلاقه أو تغطيته بالترميم.',
          ],
        },
      },
      {
        id: 'bone', h: 'ما هو التهاب العظم؟',
        body: [
          'التهاب العظم والنقي (Osteomyelitis) عدوى تصيب العظم. بعد الحوادث وجراحات العظام قد تصل البكتيريا إلى العظم عبر الجرح المفتوح أو أثناء العملية، أو تلتصق بالشرائح والمسامير وتكوّن غشاءً حيويًا (Biofilm) يصعب على المضادات الحيوية الوصول إليه. يُسمى عندها «عدوى مرتبطة بالكسر» (Fracture-related infection).',
          'وقد يحدث التهاب العظم أيضًا تحت جرح مزمن عميق، مثل قرحة القدم السكري أو قرحة الضغط فوق العظم.',
        ],
      },
      {
        id: 'signs', h: 'علامات تشير إلى التهاب العظم', warn: true,
        list: {
          items: [
            'ناسور: فتحة صغيرة في الجلد تخرج منها إفرازات وتتصل بالعظم أو بالشرائح والمسامير.',
            'ظهور العظم أو المعدن في قاع الجرح.',
            'جرح فوق كسر أو عملية لا يلتئم، أو يعود للفتح بعد التئامه.',
            'ألم يزداد، واحمرار وتورم وسخونة في مكان الكسر أو العملية.',
            'حرارة أو صديد أو إفرازات مستمرة.',
            'عدم التحام الكسر في الوقت المتوقع.',
          ],
        },
      },
      {
        id: 'diagnosis', h: 'كيف يُشخَّص؟',
        list: {
          items: [
            'الفحص السريري، وفحص وصول المسبار المعقم إلى العظم في الجروح العميقة.',
            'فحوصات الدم: كريات الدم البيضاء وCRP وسرعة الترسيب ESR.',
            'الأشعة السينية، ثم الرنين المغناطيسي أو التصوير المقطعي أو المسح النووي حسب الحاجة.',
            'العينة النسيجية من العظم أثناء العملية، وهي الأدق لتحديد الجرثومة واختيار المضاد الحيوي.',
          ],
        },
      },
      {
        id: 'treatment', h: 'العلاج ودور الفريق',
        list: {
          items: [
            '<strong>جرّاح العظام:</strong> تنظيف جراحي وإزالة العظم الميت، وقد يلزم إزالة أو تبديل الشرائح والمسامير وتثبيت الكسر من جديد.',
            '<strong>أخصائي الأمراض المعدية:</strong> مضاد حيوي موجّه حسب المزرعة، غالبًا لعدة أسابيع.',
            '<strong>جرّاح التجميل والترميم:</strong> تغطية العظم والمعدن بأنسجة سليمة عند الحاجة (شرائح عضلية أو جلدية).',
            '<strong>أخصائي الجروح:</strong> العناية بالجرح والعلاج بالضغط السلبي بين المراحل، وتثقيف المريض والأسرة.',
            '<strong>أخصائي التغذية والعلاج الطبيعي:</strong> لدعم الالتئام واستعادة الحركة.',
          ],
        },
        after: ['الإقلاع عن التدخين وضبط السكر يحسّنان فرص التئام العظم والجرح بشكل واضح.'],
      },
    ],
  },
  en: {
    title: 'Trauma Wounds and Bone Infection: Care and Orthopaedic Surgery',
    description: 'How accident wounds and open fractures are treated, why bone can become infected after trauma or orthopaedic surgery, and the signs of osteomyelitis.',
    h1: 'Accident wounds, bone infection and orthopaedic surgery',
    card: 'Trauma wounds and bone infection',
    lead: 'Accident wounds are usually contaminated and may come with fractures or damaged tissue. Correct care from the first hours lowers the risk of infection, the most serious being bone infection, which can need long treatment.',
    sections: [
      {
        id: 'types', h: 'Types of trauma wound',
        list: {
          items: [
            '<strong>Abrasions (grazes):</strong> loss of the surface layer of skin, often with dirt or gravel in it.',
            '<strong>Cuts and lacerations:</strong> from sharp objects or impact.',
            '<strong>Crush and degloving injuries:</strong> widespread damage to the skin and tissue beneath, part of which may die over the following days.',
            '<strong>Open fractures:</strong> a broken bone connected to a skin wound, so the bone is exposed to contamination. Graded by wound size and tissue damage (for example the Gustilo–Anderson classification).',
            '<strong>Burns</strong> from the accident.',
          ],
        },
      },
      {
        id: 'first', h: 'First aid and early treatment',
        list: {
          ordered: true,
          items: [
            'Stop bleeding with direct pressure, and call an ambulance for heavy bleeding, fractures or deep wounds.',
            'Wash a minor wound with clean running water or saline, with no powders or home mixtures.',
            'In hospital: surgical cleaning, removal of foreign material and dead tissue (debridement), and early antibiotics for open fractures according to protocol.',
            'Tetanus vaccination according to the patient’s immunisation history.',
            'Stabilising the fracture (externally or internally), covering the wound with a suitable dressing or negative pressure therapy when needed, then closing it or covering it by reconstruction.',
          ],
        },
      },
      {
        id: 'bone', h: 'What is bone infection?',
        body: [
          'Osteomyelitis is infection of bone. After trauma and orthopaedic surgery, bacteria can reach the bone through an open wound or during the operation, or attach to plates and screws and form a biofilm that antibiotics struggle to reach. This is called a fracture-related infection.',
          'Osteomyelitis can also develop under a deep chronic wound, such as a diabetic foot ulcer or a pressure injury over bone.',
        ],
      },
      {
        id: 'signs', h: 'Signs that suggest bone infection', warn: true,
        list: {
          items: [
            'A sinus: a small opening in the skin draining fluid and connected to bone or to plates and screws.',
            'Bone or metal visible in the wound.',
            'A wound over a fracture or operation that will not heal, or reopens after healing.',
            'Increasing pain, redness, swelling and warmth at the fracture or operation site.',
            'Fever, pus or persistent discharge.',
            'A fracture that does not unite in the expected time.',
          ],
        },
      },
      {
        id: 'diagnosis', h: 'How is it diagnosed?',
        list: {
          items: [
            'Clinical examination, and checking whether a sterile probe reaches bone in deep wounds.',
            'Blood tests: white cell count, CRP and ESR.',
            'X-ray, then MRI, CT or a nuclear scan as needed.',
            'Bone tissue samples taken during surgery, the most accurate way to identify the organism and choose the antibiotic.',
          ],
        },
      },
      {
        id: 'treatment', h: 'Treatment and the team’s roles',
        list: {
          items: [
            '<strong>Orthopaedic surgeon:</strong> surgical cleaning and removal of dead bone; plates and screws may need removing or exchanging and the fracture re-stabilising.',
            '<strong>Infectious diseases specialist:</strong> culture-guided antibiotics, often for several weeks.',
            '<strong>Plastic and reconstructive surgeon:</strong> covering bone and metal with healthy tissue when needed (muscle or skin flaps).',
            '<strong>Wound specialist:</strong> wound care and negative pressure therapy between stages, and patient and family education.',
            '<strong>Dietitian and physiotherapist:</strong> to support healing and restore movement.',
          ],
        },
        after: ['Stopping smoking and controlling blood glucose clearly improve the chances of bone and wound healing.'],
      },
    ],
  },
};
export default a;
