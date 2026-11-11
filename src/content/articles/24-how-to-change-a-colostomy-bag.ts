import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (colostomy: articles). */
const a: Article = {
  slug: 'how-to-change-a-colostomy-bag',
  order: 24,
  topic: 'surgical',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.wocnOstomy, R.ascrsOstomy, R.salvadalenaStoma],
  related: ['surgical', 'dressings'],
  relatedArticles: ['colostomy-types-and-peristomal-skin', 'living-with-a-colostomy', 'stoma-complications'],
  ar: {
    title: 'كيف تغيّر كيس الكولوستومي خطوة بخطوة وتختار النوع المناسب',
    description: 'خطوات تغيير كيس الكولوستومي بأمان، وكيف تقيس الفتحة وتقص اللوح، ومتى تغيّر الكيس، وكيف تختار بين القطعة الواحدة والقطعتين والكيس المغلق والقابل للتفريغ.',
    h1: 'كيف تغيّر كيس الكولوستومي خطوة بخطوة',
    card: 'تغيير كيس الكولوستومي خطوة بخطوة',
    lead: 'تغيير الكيس بالطريقة الصحيحة يمنع التسرب ويحمي الجلد حول الفتحة. مع التدريب يصبح روتينًا يوميًا بسيطًا يستغرق دقائق.',
    sections: [
      {
        id: 'prepare', h: 'جهّز المستلزمات قبل البدء',
        list: {
          items: [
            'كيس أو لوح جديد بالمقاس الصحيح، ومقص منحني إذا كان اللوح يُقص.',
            'ماء دافئ ومناديل ناعمة أو شاش جاف (دون صابون معطر أو مناديل فيها كحول).',
            'مسطرة قياس الفتحة، وكيس للتخلص من القديم.',
            'المستلزمات المساعدة التي وصفها المختص: مزيل لاصق، أو غشاء واقٍ، أو معجون، أو حلقة.',
            'مرآة إذا كان يصعب رؤية الفتحة.',
          ],
        },
      },
      {
        id: 'steps', h: 'خطوات التغيير',
        list: {
          ordered: true,
          items: [
            'اغسل يديك، واختر وقتًا يكون فيه الإخراج قليلًا، مثل الصباح قبل الأكل.',
            'أفرغ الكيس إذا كان قابلًا للتفريغ.',
            'انزع اللوح ببطء من الأعلى إلى الأسفل، مع الضغط على الجلد بيدك الأخرى، واستخدم مزيل اللاصق عند الحاجة.',
            'نظّف الفتحة والجلد حولها بالماء الدافئ بحركات لطيفة. نزول نقطة دم بسيطة من الفتحة عند المسح أمر شائع.',
            'جفّف الجلد جيدًا بالتربيت، لأن اللاصق لا يثبت على جلد رطب.',
            'افحص الفتحة (لونها وحجمها) والجلد حولها (احمرار أو تقرّح).',
            'قِس الفتحة بالمسطرة، وقص فتحة اللوح أكبر منها بنحو 2–3 ملم فقط.',
            'ضع المعجون أو الحلقة إن كانت موصوفة، ثم ألصق اللوح من الأسفل إلى الأعلى بحيث تتوسطه الفتحة.',
            'اضغط بيدك على اللوح لدقيقة، فالدفء يساعد اللاصق على الثبات.',
            'أغلق الكيس أو ركّبه على اللوح (في نظام القطعتين) وتأكد من ثباته، ثم اغسل يديك.',
          ],
        },
      },
      {
        id: 'when', h: 'متى يُغيَّر الكيس؟',
        table: {
          caption: 'مواعيد تقريبية (يحدد المختص ما يناسب كل حالة)',
          head: ['النوع', 'التفريغ', 'الاستبدال'],
          rows: [
            ['كيس مغلق (قطعة واحدة)', 'لا يُفرَّغ', 'عند امتلائه إلى الثلث أو النصف، مرة إلى ثلاث مرات يوميًا عادة'],
            ['كيس قابل للتفريغ', 'عند امتلائه إلى الثلث أو النصف', 'كل يوم إلى ثلاثة أيام'],
            ['لوح نظام القطعتين', '—', 'كل ثلاثة إلى خمسة أيام عادة، أو فورًا عند التسرب'],
          ],
        },
        after: ['<strong>لا تنتظر:</strong> أي تسرب أو حكة أو حرقة تحت اللوح تعني تغييره فورًا، لأن الإفرازات تحت اللاصق تجرح الجلد بسرعة.'],
      },
      {
        id: 'choose', h: 'كيف تختار النوع المناسب؟',
        list: {
          items: [
            '<strong>حسب قوام الإخراج:</strong> المتماسك (كولوستومي سينية أو نازلة) يناسبه الكيس المغلق، واللين أو السائل يناسبه الكيس القابل للتفريغ.',
            '<strong>حسب الجلد:</strong> الجلد الحساس يستفيد غالبًا من نظام القطعتين لأن اللوح لا يُنزع في كل مرة.',
            '<strong>حسب شكل البطن والفتحة:</strong> الفتحة المستوية أو الثنيات حولها قد تحتاج إلى لوح محدّب أو حلقات، بتوصية المختص.',
            '<strong>حسب القدرة:</strong> ضعف النظر أو حركة اليدين قد يجعل الألواح الجاهزة القص أو القابلة للتشكيل أسهل.',
          ],
        },
        after: ['شاهد الأنواع مع رسوم توضيحية في: <a href="/ar/advanced-wound-dressings/#colostomy">أنواع أكياس ومستلزمات الكولوستومي</a>.'],
      },
      {
        id: 'mistakes', h: 'أخطاء شائعة',
        list: {
          items: [
            'قص فتحة اللوح أكبر من اللازم، فيتعرض الجلد للإفرازات.',
            'عدم إعادة قياس الفتحة في الأسابيع الأولى بعد العملية، مع أن حجمها يصغر.',
            'وضع كريمات دهنية أو بودرة كثيرة تحت اللاصق.',
            'ترك الكيس يمتلئ كثيرًا فيثقل ويشد اللاصق.',
            'تجاهل التسرب «البسيط» حتى يتقرح الجلد.',
          ],
        },
      },
      {
        id: 'urgent', h: 'متى تتواصل مع المختص أو الطبيب؟', warn: true,
        list: {
          items: [
            'تغيّر لون الفتحة إلى الداكن أو الأسود.',
            'جلد متقرح أو نازف أو مؤلم حول الفتحة.',
            'تسرب متكرر رغم التغيير الصحيح.',
            'توقف الإخراج مع ألم أو انتفاخ أو قيء.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'How to Change a Colostomy Bag, Step by Step',
    description: 'How to change a colostomy bag safely, measure the stoma and cut the wafer, when to change it, and how to choose between one-piece, two-piece, closed and drainable bags.',
    h1: 'How to change a colostomy bag, step by step',
    card: 'Changing a colostomy bag',
    lead: 'Changing the bag correctly prevents leaks and protects the skin around the stoma. With practice it becomes a simple daily routine of a few minutes.',
    sections: [
      {
        id: 'prepare', h: 'Prepare your supplies first',
        list: {
          items: [
            'A new bag or wafer in the right size, and curved scissors if the wafer is cut to fit.',
            'Warm water and soft wipes or dry gauze (no perfumed soap or alcohol wipes).',
            'A stoma measuring guide, and a bag to dispose of the old appliance.',
            'Any accessories the specialist prescribed: adhesive remover, barrier film, paste or a ring.',
            'A mirror if the stoma is hard to see.',
          ],
        },
      },
      {
        id: 'steps', h: 'Steps',
        list: {
          ordered: true,
          items: [
            'Wash your hands and choose a time when output is low, such as the morning before eating.',
            'Empty the bag if it is drainable.',
            'Peel the wafer off slowly from top to bottom while supporting the skin with your other hand; use adhesive remover if needed.',
            'Clean the stoma and surrounding skin gently with warm water. A small spot of blood from the stoma when wiping is common.',
            'Pat the skin completely dry, because adhesive will not stick to damp skin.',
            'Check the stoma (colour and size) and the skin around it (redness or soreness).',
            'Measure the stoma and cut the wafer opening only about 2–3 mm larger.',
            'Apply any prescribed paste or ring, then place the wafer from the bottom upwards with the stoma in the centre.',
            'Hold your hand over the wafer for a minute; warmth helps the adhesive seal.',
            'Close the bag, or attach it to the wafer (two-piece), check it is secure, then wash your hands.',
          ],
        },
      },
      {
        id: 'when', h: 'When should the bag be changed?',
        table: {
          caption: 'Approximate timings (the specialist advises what suits each person)',
          head: ['Type', 'Emptying', 'Replacing'],
          rows: [
            ['Closed bag (one-piece)', 'Not emptied', 'When a third to half full, usually one to three times a day'],
            ['Drainable bag', 'When a third to half full', 'Every one to three days'],
            ['Two-piece wafer', '—', 'Usually every three to five days, or at once if it leaks'],
          ],
        },
        after: ['<strong>Don’t wait:</strong> any leak, itching or burning under the wafer means changing it at once, because output under the adhesive damages the skin quickly.'],
      },
      {
        id: 'choose', h: 'How to choose the right type',
        list: {
          items: [
            '<strong>By output:</strong> formed output (sigmoid or descending colostomy) suits a closed bag; soft or liquid output suits a drainable bag.',
            '<strong>By skin:</strong> sensitive skin often does better with a two-piece system, since the wafer is not removed every time.',
            '<strong>By abdomen and stoma shape:</strong> a flush stoma or creases around it may need a convex wafer or rings, as the specialist advises.',
            '<strong>By ability:</strong> poor eyesight or hand dexterity may make pre-cut or mouldable wafers easier.',
          ],
        },
        after: ['See the types with illustrations in: <a href="/en/advanced-wound-dressings/#colostomy">Colostomy appliances and accessories</a>.'],
      },
      {
        id: 'mistakes', h: 'Common mistakes',
        list: {
          items: [
            'Cutting the wafer opening too large, leaving skin exposed to output.',
            'Not re-measuring in the first weeks after surgery, even though the stoma shrinks.',
            'Using greasy creams or a lot of powder under the adhesive.',
            'Letting the bag get too full, so it pulls on the adhesive.',
            'Ignoring a “small” leak until the skin breaks down.',
          ],
        },
      },
      {
        id: 'urgent', h: 'When to contact the specialist or doctor', warn: true,
        list: {
          items: [
            'The stoma turns dark or black.',
            'Sore, bleeding or painful skin around the stoma.',
            'Repeated leaks despite correct changes.',
            'No output with pain, bloating or vomiting.',
          ],
        },
      },
    ],
  },
};
export default a;
