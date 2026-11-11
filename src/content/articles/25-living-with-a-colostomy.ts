import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (colostomy: articles). */
const a: Article = {
  slug: 'living-with-a-colostomy',
  order: 25,
  topic: 'surgical',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.wocnOstomy, R.ascrsOstomy, R.ehsParastomal],
  related: ['surgical'],
  relatedArticles: ['how-to-change-a-colostomy-bag', 'colostomy-types-and-peristomal-skin', 'stoma-complications'],
  ar: {
    title: 'الحياة اليومية مع الكولوستومي: الأكل والنشاط والسفر',
    description: 'نصائح عملية للحياة مع الكولوستومي: الأكل والسوائل، والغازات والرائحة، والاستحمام واللباس، والرياضة والعمل والسفر، والصلاة، والدعم النفسي، ومتى تراجع الطبيب.',
    h1: 'الحياة اليومية مع الكولوستومي',
    card: 'الحياة اليومية مع الكولوستومي',
    lead: 'يستطيع معظم الناس مع الكولوستومي العودة إلى العمل والرياضة والسفر وحياتهم الاجتماعية بعد فترة التعافي. المعرفة العملية تجعل الانتقال أسهل وأكثر ثقة.',
    sections: [
      {
        id: 'food', h: 'الأكل والسوائل',
        list: {
          items: [
            'في الأسابيع الأولى بعد العملية: وجبات صغيرة متكررة، وإدخال الأطعمة الجديدة واحدًا تلو الآخر لملاحظة أثرها.',
            'امضغ الطعام جيدًا، خصوصًا الأطعمة الليفية مثل الذرة والمكسرات وقشور الفواكه، لتجنب انسداد الفتحة.',
            'اشرب سوائل كافية يوميًا ما لم يحدد الطبيب غير ذلك، والإمساك يُعالج بالسوائل والألياف المناسبة والحركة.',
            'أطعمة قد تزيد الغازات: البقوليات، والملفوف والقرنبيط، والبصل، والمشروبات الغازية، والأكل بسرعة.',
            'أطعمة قد تزيد الرائحة: البيض، والسمك، والثوم، وبعض البهارات. وقد يخففها اللبن الزبادي.',
            'لا توجد «حمية كولوستومي» واحدة للجميع، والهدف عودة تدريجية إلى أكل متوازن. مريض السكري أو الكلى يحتاج إلى خطة مع أخصائي التغذية.',
          ],
        },
      },
      {
        id: 'odour', h: 'الغازات والرائحة',
        list: {
          items: [
            'الأكياس الحديثة فيها فلاتر فحم تمنع الرائحة، والرائحة غالبًا تعني تسربًا أو فلترًا مبللًا.',
            'أفرغ الكيس أو غيّره في وقته، وتأكد من إحكام الإغلاق.',
            'يمكن استخدام قطرات أو مزيلات رائحة مخصصة للأكياس بتوصية المختص.',
          ],
        },
      },
      {
        id: 'daily', h: 'الاستحمام واللباس والنوم',
        list: {
          items: [
            'يمكنك الاستحمام بالكيس أو من دونه، فالماء لا يدخل إلى الفتحة.',
            'لا تحتاج غالبًا إلى ملابس خاصة. الملابس الداخلية العالية أو أحزمة الدعم تساعد على الثقة.',
            'تجنب الأحزمة الضيقة فوق الفتحة مباشرة.',
            'أفرغ الكيس قبل النوم، وقد يساعد كيس ليلي أكبر لمن إخراجه غزير.',
          ],
        },
      },
      {
        id: 'activity', h: 'الرياضة والعمل والسفر',
        list: {
          items: [
            'المشي من أول أيام التعافي، ثم عودة تدريجية إلى النشاط حسب توجيه الجرّاح.',
            'تجنب رفع الأوزان الثقيلة في الأشهر الأولى، وتمارين عضلات البطن الموجهة قد تساعد على الوقاية من الفتق بإشراف مختص.',
            'السباحة ممكنة بعد التئام الجروح، مع كيس صغير وملابس سباحة مناسبة.',
            'في السفر: احمل ضعف المستلزمات التي تحتاجها في حقيبة اليد، مع ألواح مقصوصة مسبقًا (لأن المقص قد يُمنع في الطائرة)، وورقة من الطبيب تشرح حالتك.',
          ],
        },
      },
      {
        id: 'faith', h: 'الطهارة والصلاة',
        body: [
          'كثير من المرضى يسألون عن الوضوء والصلاة مع الكيس. يمكن تفريغ الكيس أو تغييره قبل الوضوء لتقليل الحرج، ولأحكام الطهارة مع الحالات الدائمة تفاصيل يُرجع فيها إلى أهل العلم الموثوقين.',
        ],
      },
      {
        id: 'mind', h: 'الدعم النفسي والعلاقات',
        body: [
          'من الطبيعي أن يشعر المريض بالقلق أو الحزن أو الخجل في البداية. الحديث مع ممرض أو أخصائي الفتحات، ومجموعات الدعم، والأسرة، يساعد كثيرًا. لا تتردد في طلب دعم نفسي متخصص إذا استمر الضيق.',
          'العلاقة الزوجية ممكنة بعد التعافي. تفريغ الكيس قبلها واستخدام كيس صغير أو غطاء للفتحة قد يزيد الراحة، ويمكن مناقشة أي صعوبات مع الطبيب.',
        ],
      },
      {
        id: 'urgent', h: 'متى تراجع الطبيب بسرعة؟', warn: true,
        list: {
          items: [
            'توقف الإخراج والغازات أكثر من يوم مع ألم أو انتفاخ أو قيء.',
            'إسهال غزير مع عطش ودوخة وقلة بول (علامات جفاف).',
            'تغير لون الفتحة إلى الداكن، أو نزيف مستمر منها.',
            'انتفاخ حول الفتحة يزداد أو يصبح مؤلمًا.',
          ],
        },
        after: ['اقرأ أيضًا: <a href="/ar/articles/stoma-complications/">مضاعفات الفتحة الجانبية</a>.'],
      },
    ],
  },
  en: {
    title: 'Living With a Colostomy: Food, Activity and Travel',
    description: 'Practical advice for life with a colostomy: food and fluids, gas and odour, bathing and clothing, exercise, work and travel, prayer, emotional support and when to see a doctor.',
    h1: 'Daily life with a colostomy',
    card: 'Daily life with a colostomy',
    lead: 'Most people with a colostomy return to work, exercise, travel and social life after recovery. Practical knowledge makes the change easier and builds confidence.',
    sections: [
      {
        id: 'food', h: 'Food and fluids',
        list: {
          items: [
            'In the first weeks after surgery: small, frequent meals, and new foods introduced one at a time to see their effect.',
            'Chew well, especially fibrous foods such as sweetcorn, nuts and fruit skins, to avoid blocking the stoma.',
            'Drink enough fluids every day unless the doctor advises otherwise; constipation is managed with fluids, suitable fibre and activity.',
            'Foods that may increase gas: legumes, cabbage and cauliflower, onions, fizzy drinks, and eating quickly.',
            'Foods that may increase odour: eggs, fish, garlic and some spices. Yoghurt may help reduce it.',
            'There is no single “colostomy diet”; the aim is a gradual return to balanced eating. People with diabetes or kidney disease need a plan with a dietitian.',
          ],
        },
      },
      {
        id: 'odour', h: 'Gas and odour',
        list: {
          items: [
            'Modern bags have charcoal filters that block odour; a smell usually means a leak or a wet filter.',
            'Empty or change the bag on time and check the seal.',
            'Bag deodorant drops or sprays can be used if the specialist recommends them.',
          ],
        },
      },
      {
        id: 'daily', h: 'Bathing, clothing and sleep',
        list: {
          items: [
            'You can shower with or without the bag; water does not enter the stoma.',
            'Special clothes are rarely needed. High-waisted underwear or support garments can add confidence.',
            'Avoid tight belts directly over the stoma.',
            'Empty the bag before bed; a larger night bag can help people with high output.',
          ],
        },
      },
      {
        id: 'activity', h: 'Exercise, work and travel',
        list: {
          items: [
            'Walking from the first days of recovery, then a gradual return to activity as the surgeon advises.',
            'Avoid heavy lifting in the first months; guided core exercises may help prevent hernia, under specialist supervision.',
            'Swimming is possible once wounds have healed, with a small bag and suitable swimwear.',
            'When travelling: carry twice the supplies you need in hand luggage, with pre-cut wafers (scissors may not be allowed on planes), and a doctor’s letter explaining your condition.',
          ],
        },
      },
      {
        id: 'faith', h: 'Ablution and prayer',
        body: [
          'Many patients ask about ablution and prayer with a bag. Emptying or changing the bag before ablution can reduce worry, and for the religious rulings on permanent conditions, consult trusted religious scholars.',
        ],
      },
      {
        id: 'mind', h: 'Emotional support and relationships',
        body: [
          'Feeling anxious, sad or embarrassed at first is normal. Talking with a stoma nurse or specialist, support groups and family helps a great deal. Don’t hesitate to seek professional psychological support if distress continues.',
          'Intimacy is possible after recovery. Emptying the bag beforehand and using a small bag or stoma cap may add comfort, and any difficulties can be discussed with the doctor.',
        ],
      },
      {
        id: 'urgent', h: 'When to see a doctor quickly', warn: true,
        list: {
          items: [
            'No stool or gas for more than a day with pain, bloating or vomiting.',
            'Heavy diarrhoea with thirst, dizziness and little urine (signs of dehydration).',
            'The stoma turns dark, or bleeds continuously.',
            'A bulge around the stoma that grows or becomes painful.',
          ],
        },
        after: ['Read also: <a href="/en/articles/stoma-complications/">Stoma complications</a>.'],
      },
    ],
  },
};
export default a;
