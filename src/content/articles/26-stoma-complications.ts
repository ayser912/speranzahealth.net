import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (colostomy: articles). */
const a: Article = {
  slug: 'stoma-complications',
  order: 26,
  topic: 'surgical',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.stomaComplications, R.ehsParastomal, R.salvadalenaStoma, R.ascrsOstomy],
  related: ['surgical'],
  relatedArticles: ['colostomy-types-and-peristomal-skin', 'how-to-change-a-colostomy-bag', 'living-with-a-colostomy'],
  ar: {
    title: 'مضاعفات الفتحة الجانبية (الكولوستومي): الأنواع والعلامات',
    description: 'أهم مضاعفات الفتحة الجانبية: نقص التروية، والانفصال عن الجلد، والانسحاب، والتدلّي، والتضيّق، والفتق حول الفتحة، والجفاف، وعلامات كل منها ومتى تكون طارئة.',
    h1: 'مضاعفات الفتحة الجانبية: الأنواع والعلامات ومتى تكون طارئة',
    card: 'مضاعفات الفتحة الجانبية',
    lead: 'معظم الفتحات تعمل دون مشكلات كبيرة، لكن معرفة المضاعفات وعلاماتها المبكرة تساعد على التدخل في الوقت الصحيح، وبعضها يحتاج إلى مراجعة عاجلة.',
    sections: [
      {
        id: 'early', h: 'مضاعفات مبكرة (في الأسابيع الأولى)',
        table: {
          caption: 'مضاعفات قد تظهر بعد العملية بفترة قصيرة',
          head: ['المضاعفة', 'العلامات', 'ملاحظات'],
          rows: [
            ['نقص التروية أو موت نسيج الفتحة (Necrosis)', 'لون داكن أو بنفسجي أو أسود بدل الوردي', 'طارئة: تواصل مع الجرّاح فورًا'],
            ['الانفصال عن الجلد (Mucocutaneous separation)', 'فجوة أو جرح بين حافة الفتحة والجلد', 'يُعالج كجرح بحشو مناسب تحت اللوح، بإشراف المختص'],
            ['الانسحاب (Retraction)', 'الفتحة تصبح مستوية مع الجلد أو تحته', 'تسرب متكرر، وقد يلزم لوح محدّب'],
            ['النزيف', 'دم من حافة الفتحة أو داخلها', 'النقطة البسيطة عند التنظيف شائعة، والمستمر يحتاج إلى طبيب'],
            ['الإخراج الغزير (خصوصًا الإليوستومي)', 'إخراج مائي كثير، وعطش، ودوخة، وقلة بول', 'خطر الجفاف واضطراب الأملاح'],
          ],
        },
      },
      {
        id: 'late', h: 'مضاعفات متأخرة',
        table: {
          caption: 'مضاعفات قد تظهر بعد أشهر أو سنوات',
          head: ['المضاعفة', 'العلامات', 'ملاحظات'],
          rows: [
            ['الفتق حول الفتحة (Parastomal hernia)', 'انتفاخ حول الفتحة يزداد عند الوقوف أو السعال', 'من أكثر المضاعفات شيوعًا. حزام داعم، وقد يلزم إصلاح جراحي'],
            ['التدلّي (Prolapse)', 'الفتحة تطول وتبرز أكثر من المعتاد', 'يحتاج إلى كيس أكبر وتقييم، وطارئ إذا تغير لونه أو آلم'],
            ['التضيّق (Stenosis)', 'الفتحة تضيق، وإخراج رفيع أو صعب', 'قد يحتاج إلى توسيع أو جراحة'],
            ['مشكلات الجلد حول الفتحة', 'احمرار، وتقرّح، وحكة', 'غالبًا بسبب التسرب. انظر <a href="/ar/articles/colostomy-types-and-peristomal-skin/">جروح الجلد حول الفتحة</a>'],
            ['الانسداد', 'توقف الإخراج والغازات، وألم وانتفاخ وقيء', 'طارئ'],
          ],
        },
      },
      {
        id: 'risk', h: 'ما الذي يزيد خطر المضاعفات؟',
        list: {
          items: [
            'زيادة الوزن والسمنة.',
            'التدخين والسكري وسوء التغذية.',
            'الجراحة الطارئة دون تحديد مسبق لمكان الفتحة.',
            'رفع الأوزان الثقيلة مبكرًا والسعال المزمن (للفتق).',
            'العلاج بالكورتيزون أو العلاج الإشعاعي.',
          ],
        },
      },
      {
        id: 'prevent', h: 'الوقاية',
        list: {
          items: [
            'تحديد مكان الفتحة قبل العملية مع ممرض أو أخصائي الفتحات كلما أمكن.',
            'المحافظة على وزن صحي، والإقلاع عن التدخين، وضبط السكر.',
            'تجنب رفع الأوزان الثقيلة في الأشهر الأولى، واستخدام حزام داعم عند التوصية.',
            'إعادة قياس الفتحة دوريًا، واستخدام اللوح والمستلزمات المناسبة لمنع التسرب.',
            'المتابعة المنتظمة مع الفريق الصحي.',
          ],
        },
      },
      {
        id: 'urgent', h: 'متى تتوجه إلى الطوارئ؟', warn: true,
        list: {
          items: [
            'الفتحة أصبحت داكنة أو سوداء.',
            'توقف الإخراج والغازات مع ألم شديد أو انتفاخ أو قيء.',
            'فتق أو تدلّي أصبح صلبًا أو مؤلمًا أو تغير لونه ولا يعود.',
            'نزيف غزير من الفتحة.',
            'إخراج مائي غزير مع دوخة أو تشوش أو قلة بول شديدة.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Stoma (Colostomy) Complications: Types and Warning Signs',
    description: 'The main stoma complications: ischaemia, mucocutaneous separation, retraction, prolapse, stenosis, parastomal hernia and dehydration, their signs and when they are an emergency.',
    h1: 'Stoma complications: types, signs and when they are an emergency',
    card: 'Stoma complications',
    lead: 'Most stomas work without major problems, but knowing the complications and their early signs helps people act at the right time, and some need urgent review.',
    sections: [
      {
        id: 'early', h: 'Early complications (first weeks)',
        table: {
          caption: 'Complications that can appear soon after surgery',
          head: ['Complication', 'Signs', 'Notes'],
          rows: [
            ['Ischaemia or necrosis of the stoma', 'Dark, purple or black instead of pink', 'Urgent: contact the surgeon immediately'],
            ['Mucocutaneous separation', 'A gap or wound between the stoma edge and the skin', 'Treated as a wound with suitable filling under the wafer, under specialist care'],
            ['Retraction', 'The stoma sits level with or below the skin', 'Repeated leaks; a convex wafer may be needed'],
            ['Bleeding', 'Blood from the stoma edge or inside', 'A small spot when cleaning is common; continuous bleeding needs a doctor'],
            ['High output (especially ileostomy)', 'Large watery output, thirst, dizziness, little urine', 'Risk of dehydration and salt imbalance'],
          ],
        },
      },
      {
        id: 'late', h: 'Late complications',
        table: {
          caption: 'Complications that can appear months or years later',
          head: ['Complication', 'Signs', 'Notes'],
          rows: [
            ['Parastomal hernia', 'A bulge around the stoma, bigger when standing or coughing', 'Among the most common. Support garment; surgical repair may be needed'],
            ['Prolapse', 'The stoma becomes longer and protrudes more than usual', 'Needs a larger bag and assessment; urgent if it changes colour or hurts'],
            ['Stenosis', 'The stoma narrows; thin or difficult output', 'May need dilatation or surgery'],
            ['Peristomal skin problems', 'Redness, soreness and itching', 'Usually from leaks. See <a href="/en/articles/colostomy-types-and-peristomal-skin/">peristomal skin wounds</a>'],
            ['Obstruction', 'No stool or gas, with pain, bloating and vomiting', 'An emergency'],
          ],
        },
      },
      {
        id: 'risk', h: 'What raises the risk of complications?',
        list: {
          items: [
            'Excess weight and obesity.',
            'Smoking, diabetes and malnutrition.',
            'Emergency surgery without the stoma site being marked in advance.',
            'Early heavy lifting and chronic cough (for hernia).',
            'Steroid treatment or radiotherapy.',
          ],
        },
      },
      {
        id: 'prevent', h: 'Prevention',
        list: {
          items: [
            'Marking the stoma site before surgery with a stoma nurse or specialist whenever possible.',
            'Keeping a healthy weight, stopping smoking and controlling glucose.',
            'Avoiding heavy lifting in the first months and wearing a support garment when advised.',
            'Re-measuring the stoma regularly and using a suitable wafer and accessories to prevent leaks.',
            'Regular follow-up with the healthcare team.',
          ],
        },
      },
      {
        id: 'urgent', h: 'When to go to the emergency department', warn: true,
        list: {
          items: [
            'The stoma has turned dark or black.',
            'No stool or gas with severe pain, bloating or vomiting.',
            'A hernia or prolapse that has become hard, painful or discoloured and will not go back.',
            'Heavy bleeding from the stoma.',
            'Heavy watery output with dizziness, confusion or very little urine.',
          ],
        },
      },
    ],
  },
};
export default a;
