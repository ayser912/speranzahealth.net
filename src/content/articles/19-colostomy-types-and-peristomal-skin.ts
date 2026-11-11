import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (colostomy: types, wounds that can occur around it and prevention). */
const a: Article = {
  slug: 'colostomy-types-and-peristomal-skin',
  order: 19,
  topic: 'surgical',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.ascrsOstomy, R.salvadalenaStoma, R.iwii],
  related: ['surgical', 'pressure'],
  relatedArticles: ['how-to-change-a-colostomy-bag', 'living-with-a-colostomy', 'stoma-complications'],
  ar: {
    title: 'الفتحة الجانبية (الكولوستومي): أنواعها وجروح الجلد والوقاية',
    description: 'ما هي الفتحة الجانبية (الكولوستومي) وأنواعها حسب المكان والشكل والمدة، والجروح ومشكلات الجلد التي قد تحدث حولها، وطرق الوقاية والعناية اليومية.',
    h1: 'الفتحة الجانبية (الكولوستومي): الأنواع والجروح المحتملة والوقاية',
    card: 'الفتحة الجانبية (الكولوستومي)',
    lead: 'الفتحة الجانبية تنقذ حياة كثير من المرضى، لكن الجلد حولها يتعرض باستمرار للإفرازات والكيس اللاصق. معرفة نوع الفتحة والعناية الصحيحة بها تمنع معظم مشكلات الجلد.',
    sections: [
      {
        id: 'what', h: 'ما هي الفتحة الجانبية؟',
        body: [
          'الفتحة الجانبية (Stoma) فتحة يصنعها الجرّاح في جدار البطن لإخراج الفضلات إلى كيس خارجي. إذا كانت من القولون (الأمعاء الغليظة) تُسمى كولوستومي (Colostomy)، وإذا كانت من الأمعاء الدقيقة تُسمى إليوستومي (Ileostomy)، وإذا كانت لتصريف البول تُسمى يوروستومي (Urostomy).',
          'الفتحة الطبيعية لونها وردي أو أحمر رطب، ولا تؤلم عند لمسها لأنها لا تحتوي على أعصاب إحساس.',
        ],
      },
      {
        id: 'types', h: 'أنواع الكولوستومي',
        subs: [
          {
            h: 'حسب مكانها في القولون',
            list: [
              '<strong>الصاعد (Ascending):</strong> في الجهة اليمنى من البطن، والإخراج سائل إلى شبه سائل.',
              '<strong>المستعرض (Transverse):</strong> في أعلى البطن، والإخراج شبه سائل إلى طري.',
              '<strong>النازل (Descending):</strong> في الجهة اليسرى، والإخراج أكثر تماسكًا.',
              '<strong>السيني (Sigmoid):</strong> في أسفل يسار البطن، وهو الأكثر شيوعًا، والإخراج متماسك يشبه الطبيعي.',
            ],
          },
          {
            h: 'حسب طريقة إنشائها',
            list: [
              '<strong>الطرفية (End colostomy):</strong> يُخرج طرف واحد من القولون إلى الجلد، وقد يُغلق الجزء المتبقي أو يُزال.',
              '<strong>العروية (Loop colostomy):</strong> تُخرج عروة من القولون ويُفتح جزء منها، فيظهر فتحتان متجاورتان. تكون غالبًا مؤقتة لحماية جزء من الأمعاء أثناء التئامه.',
              '<strong>مزدوجة الفوهة (Double-barrel):</strong> طرفان منفصلان من القولون يخرجان على الجلد، أحدهما للفضلات والآخر لإفرازات مخاطية.',
            ],
          },
          {
            h: 'حسب مدتها',
            list: [
              '<strong>مؤقتة:</strong> تُغلق بعملية لاحقة بعد التئام الأمعاء أو انتهاء العلاج.',
              '<strong>دائمة:</strong> عندما يُزال الجزء الأخير من الأمعاء أو لا يمكن إعادة وصله.',
            ],
          },
        ],
      },
      {
        id: 'problems', h: 'الجروح ومشكلات الجلد التي قد تحدث حول الفتحة',
        table: {
          caption: 'مشكلات شائعة حول الفتحة (يقيّمها ممرض أو أخصائي الفتحات والجروح)',
          head: ['المشكلة', 'كيف تبدو', 'السبب الشائع'],
          rows: [
            ['التهاب الجلد من التسرب', 'احمرار وحرقة وتقشر، وقد يصل إلى جرح مفتوح', 'تسرب الإفرازات تحت اللاصق بسبب فتحة الكيس الكبيرة أو ثنيات الجلد'],
            ['أذى الجلد الميكانيكي', 'تقشر أو تمزق سطحي', 'نزع اللاصق بقوة أو تغييره بكثرة'],
            ['التحسس', 'احمرار وحكة بشكل اللاصق تمامًا', 'حساسية من مادة اللاصق أو منتج معيّن'],
            ['العدوى الفطرية', 'احمرار مع بقع صغيرة حوله وحكة', 'الرطوبة والتعرق تحت اللاصق'],
            ['التهاب بصيلات الشعر', 'حبوب صغيرة حول جذور الشعر', 'نزع الشعر بقوة مع اللاصق أو حلاقة خاطئة'],
            ['جروح الضغط', 'جرح تحت أداة أو حزام', 'حزام أو قطعة مقعرة تضغط على الجلد'],
            ['انفصال الفتحة عن الجلد (Mucocutaneous separation)', 'فجوة أو جرح بين حافة الفتحة والجلد', 'ضعف الالتئام بعد العملية، خاصة مع السكري أو سوء التغذية'],
            ['التقرح حول الفتحة (Pyoderma gangrenosum)', 'قرح مؤلمة جدًا بحواف بنفسجية', 'حالة مناعية مرتبطة أحيانًا بأمراض الأمعاء الالتهابية، وتحتاج إلى طبيب'],
          ],
        },
        after: ['من مضاعفات الفتحة نفسها أيضًا: الفتق حول الفتحة، وتدلّي الفتحة (Prolapse)، وانسحابها إلى الداخل، وتضيّقها، وتغيّر لونها إلى الداكن.'],
      },
      {
        id: 'prevention', h: 'الوقاية والعناية اليومية',
        list: {
          items: [
            'قص فتحة اللاصق بحيث تكون أكبر من الفتحة بنحو 2–3 ملم فقط، وإعادة القياس دوريًا لأن حجم الفتحة يصغر في الأسابيع الأولى بعد العملية.',
            'تنظيف الجلد بالماء الدافئ وتجفيفه جيدًا قبل وضع اللاصق، دون صابون معطّر أو كريمات دهنية تحت اللاصق.',
            'إفراغ الكيس عندما يمتلئ إلى الثلث أو النصف، لتجنب ثقله وتسربه.',
            'نزع اللاصق ببطء مع دعم الجلد، ويمكن استخدام مزيل لاصق طبي.',
            'استخدام معاجين أو حلقات أو ألواح مسطحة لتعبئة الثنيات وتسوية الجلد حول الفتحة عند الحاجة، بتوجيه المختص.',
            'مراقبة لون الفتحة والجلد عند كل تغيير.',
            'المحافظة على وزن مستقر، وتجنب رفع الأوزان الثقيلة في الأشهر الأولى، واستخدام حزام داعم عند التوصية به للوقاية من الفتق.',
            'زيارة ممرض أو أخصائي الفتحات قبل العملية لتحديد أفضل مكان للفتحة، وبعدها للتدريب والمتابعة.',
          ],
        },
      },
      {
        id: 'urgent', h: 'متى تراجع الطبيب بسرعة؟', warn: true,
        list: {
          items: [
            'تغيّر لون الفتحة إلى الأرجواني الداكن أو الأسود.',
            'توقف الإخراج مع ألم أو انتفاخ في البطن أو قيء.',
            'نزيف مستمر من الفتحة أو دم داخل الكيس.',
            'إسهال مائي غزير مع علامات جفاف (خصوصًا مع الإليوستومي).',
            'تدلّي الفتحة بشكل مفاجئ أو انسحابها إلى الداخل.',
            'جرح أو تقرح مؤلم حول الفتحة لا يتحسن.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Colostomy: Types, Peristomal Skin Wounds and Prevention',
    description: 'What a colostomy is, its types by location, construction and duration, the wounds and skin problems that can develop around a stoma, and how to prevent them.',
    h1: 'Colostomy: types, possible wounds and prevention',
    card: 'Colostomy and stoma skin care',
    lead: 'A stoma saves many lives, but the skin around it is constantly exposed to output and adhesive. Knowing the type of stoma and caring for it correctly prevents most skin problems.',
    sections: [
      {
        id: 'what', h: 'What is a stoma?',
        body: [
          'A stoma is an opening the surgeon makes in the abdominal wall so that waste drains into an external bag. If it is made from the colon (large bowel) it is a colostomy; from the small bowel, an ileostomy; and for urine, a urostomy.',
          'A healthy stoma is pink or red and moist, and does not hurt when touched because it has no sensory nerves.',
        ],
      },
      {
        id: 'types', h: 'Types of colostomy',
        subs: [
          {
            h: 'By location in the colon',
            list: [
              '<strong>Ascending:</strong> on the right side of the abdomen; output is liquid to semi-liquid.',
              '<strong>Transverse:</strong> in the upper abdomen; output is semi-liquid to soft.',
              '<strong>Descending:</strong> on the left side; output is more formed.',
              '<strong>Sigmoid:</strong> in the lower left abdomen, the most common; output is formed, close to normal.',
            ],
          },
          {
            h: 'By how it is made',
            list: [
              '<strong>End colostomy:</strong> one end of the colon is brought to the skin; the remaining part may be closed off or removed.',
              '<strong>Loop colostomy:</strong> a loop of colon is brought out and partly opened, giving two openings side by side. Usually temporary, to protect a section of bowel while it heals.',
              '<strong>Double-barrel:</strong> two separate ends of colon open on the skin, one for waste and one for mucus.',
            ],
          },
          {
            h: 'By duration',
            list: [
              '<strong>Temporary:</strong> closed in a later operation once the bowel has healed or treatment is over.',
              '<strong>Permanent:</strong> when the last part of the bowel is removed or cannot be reconnected.',
            ],
          },
        ],
      },
      {
        id: 'problems', h: 'Wounds and skin problems around a stoma',
        table: {
          caption: 'Common peristomal problems (assessed by a stoma or wound specialist)',
          head: ['Problem', 'What it looks like', 'Common cause'],
          rows: [
            ['Leakage dermatitis', 'Redness, burning and peeling, which can become an open wound', 'Output leaking under the adhesive because the opening is too large or the skin is creased'],
            ['Mechanical skin damage', 'Peeling or superficial tears', 'Pulling the adhesive off roughly or changing it too often'],
            ['Allergy', 'Redness and itching in the exact shape of the adhesive', 'Sensitivity to the adhesive or a particular product'],
            ['Fungal infection', 'Redness with small spots around it, and itching', 'Moisture and sweating under the adhesive'],
            ['Folliculitis', 'Small spots around hair roots', 'Hair pulled out with the adhesive, or incorrect shaving'],
            ['Pressure wounds', 'A wound under a device or belt', 'A belt or convex wafer pressing on the skin'],
            ['Mucocutaneous separation', 'A gap or wound between the stoma edge and the skin', 'Poor healing after surgery, especially with diabetes or malnutrition'],
            ['Peristomal pyoderma gangrenosum', 'Very painful ulcers with purple edges', 'An immune condition sometimes linked with inflammatory bowel disease; needs a doctor'],
          ],
        },
        after: ['Complications of the stoma itself include parastomal hernia, prolapse, retraction, narrowing and a darkening colour.'],
      },
      {
        id: 'prevention', h: 'Prevention and daily care',
        list: {
          items: [
            'Cut the wafer opening only about 2–3 mm larger than the stoma, and re-measure regularly, because the stoma shrinks in the first weeks after surgery.',
            'Clean the skin with warm water and dry it well before applying the wafer, with no perfumed soap or greasy creams under the adhesive.',
            'Empty the bag when it is a third to half full, to avoid weight and leaks.',
            'Remove the adhesive slowly while supporting the skin; a medical adhesive remover can help.',
            'Use pastes, rings or flat seals to fill creases and level the skin around the stoma when needed, as advised by the specialist.',
            'Check the colour of the stoma and skin at every change.',
            'Keep a stable weight, avoid heavy lifting in the first months, and wear a support belt when recommended to help prevent hernia.',
            'See a stoma nurse or specialist before surgery to mark the best site, and afterwards for training and follow-up.',
          ],
        },
      },
      {
        id: 'urgent', h: 'When to see a doctor quickly', warn: true,
        list: {
          items: [
            'The stoma turns dark purple or black.',
            'No output, with abdominal pain, bloating or vomiting.',
            'Continuous bleeding from the stoma or blood in the bag.',
            'Large volumes of watery output with signs of dehydration (especially with an ileostomy).',
            'Sudden prolapse or retraction of the stoma.',
            'A painful wound or ulcer around the stoma that does not improve.',
          ],
        },
      },
    ],
  },
};
export default a;
