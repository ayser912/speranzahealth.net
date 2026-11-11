import type { Article } from '../../lib/content-types';
import { R } from '../refs';

/** Added 11 Nov 2026 at Aissar's request (diabetes: types, treatment, myths and chronic wounds). */
const a: Article = {
  slug: 'diabetes-types-treatment-and-myths',
  order: 17,
  topic: 'diabeticFoot',
  published: '2026-11-11',
  reviewed: '2026-11-11',
  refs: [R.adaClassification, R.adaGlycemic, R.adaPharma, R.whoDiabetes, R.iwgdf],
  related: ['diabeticFoot', 'chronic'],
  relatedArticles: ['tissue-perfusion-and-wound-healing', 'nutrition-and-vitamins-for-wound-healing', 'lab-tests-and-imaging-for-wounds'],
  ar: {
    title: 'مرض السكري: أنواعه وعلاجه ومعلومات خاطئة وعلاقته بالجروح',
    description: 'أنواع مرض السكري، وطرق تشخيصه وعلاجه، وتصحيح معلومات خاطئة منتشرة، ولماذا يتأخر التئام الجروح لدى مريض السكري وكيف تقلل الخطر.',
    h1: 'مرض السكري: الأنواع والعلاج والمعلومات الخاطئة، وعلاقته بالجروح المزمنة',
    card: 'مرض السكري وعلاقته بالجروح',
    lead: 'السكري من أكثر الأمراض المزمنة انتشارًا في العالم، ومن أهم أسباب الجروح المزمنة وبتر الأطراف. فهم المرض وضبطه جيدًا هو خط الدفاع الأول عن القدمين والجلد.',
    sections: [
      {
        id: 'types', h: 'أنواع مرض السكري',
        table: {
          caption: 'الأنواع الرئيسية (حسب تصنيف الجمعية الأمريكية للسكري ADA)',
          head: ['النوع', 'السبب', 'ملاحظات'],
          rows: [
            ['النوع الأول', 'تدمير مناعي لخلايا البنكرياس التي تفرز الإنسولين', 'يظهر غالبًا في الطفولة أو الشباب ويمكن أن يظهر في أي عمر، ويحتاج المريض إلى الإنسولين دائمًا'],
            ['النوع الثاني', 'مقاومة الجسم للإنسولين مع نقص تدريجي في إفرازه', 'الأكثر شيوعًا، ويرتبط بالوراثة وزيادة الوزن وقلة الحركة'],
            ['سكري الحمل', 'ارتفاع السكر يُكتشف لأول مرة أثناء الحمل', 'يزيد خطر الإصابة بالنوع الثاني لاحقًا للأم'],
            ['أنواع أخرى', 'مثل أمراض البنكرياس، وبعض الأدوية كالكورتيزون، وأسباب وراثية', 'يحددها الطبيب بالفحوصات'],
          ],
        },
        after: ['<strong>مرحلة ما قبل السكري:</strong> ارتفاع في السكر لم يصل إلى حد التشخيص، وتغيير نمط الحياة فيها قد يؤخر ظهور المرض أو يمنعه.'],
      },
      {
        id: 'diagnosis', h: 'كيف يُشخَّص؟',
        table: {
          caption: 'معايير التشخيص لدى البالغين (تُؤكَّد عادة بفحص ثانٍ)',
          head: ['الفحص', 'طبيعي', 'ما قبل السكري', 'سكري'],
          rows: [
            ['السكر الصائم', 'أقل من 100 ملغ/دل (5.6 ملمول/ل)', '100–125 ملغ/دل', '126 ملغ/دل (7.0 ملمول/ل) أو أكثر'],
            ['السكر التراكمي HbA1c', 'أقل من 5.7%', '5.7–6.4%', '6.5% أو أكثر'],
            ['فحص تحمل الغلوكوز (بعد ساعتين)', 'أقل من 140 ملغ/دل', '140–199 ملغ/دل', '200 ملغ/دل (11.1 ملمول/ل) أو أكثر'],
          ],
        },
      },
      {
        id: 'treatment', h: 'طرق العلاج',
        list: {
          items: [
            '<strong>نمط الحياة:</strong> غذاء متوازن، ونشاط بدني منتظم، وإنقاص الوزن عند الحاجة، والإقلاع عن التدخين. وهو أساس العلاج في كل الأنواع.',
            '<strong>أدوية فموية وحقن غير الإنسولين:</strong> مثل الميتفورمين، ومثبطات SGLT2، وناهضات مستقبلات GLP-1، وغيرها. يختار الطبيب ما يناسب كل مريض حسب حالة القلب والكلى والوزن.',
            '<strong>الإنسولين:</strong> ضروري في النوع الأول، ويُستخدم في النوع الثاني عند الحاجة.',
            '<strong>المتابعة:</strong> قياس السكر، والسكر التراكمي كل 3–6 أشهر، وفحص العينين والكلى والقدمين سنويًا على الأقل.',
          ],
        },
        after: ['هدف السكر التراكمي لكثير من البالغين أقل من 7%، لكن الطبيب قد يحدد هدفًا مختلفًا حسب العمر والحالة الصحية وخطر هبوط السكر.'],
      },
      {
        id: 'wounds', h: 'لماذا يؤثر السكري على الجروح؟',
        list: {
          items: [
            '<strong>اعتلال الأعصاب:</strong> فقدان الإحساس في القدمين، فلا يشعر المريض بالجرح أو الحذاء الضيق أو الحرق.',
            '<strong>ضعف التروية:</strong> مرض الشرايين الطرفية أكثر شيوعًا ويصيب شرايين أصغر.',
            '<strong>ضعف المناعة:</strong> ارتفاع السكر يضعف عمل خلايا المناعة ويزيد خطر العدوى.',
            '<strong>بطء الالتئام:</strong> السكر المرتفع يؤثر على بناء الكولاجين والأوعية الجديدة.',
            '<strong>تشوهات القدم وجفاف الجلد وتشققه</strong> التي تزيد مناطق الضغط والجروح.',
          ],
        },
        after: ['اقرأ الدليل الكامل: <a href="/ar/diabetic-foot-wounds/">العناية بجروح القدم السكري</a>.'],
      },
      {
        id: 'myths', h: 'معلومات خاطئة وتصحيحها',
        subs: [
          { h: '«الإنسولين يسبب العمى أو البتر»', body: ['غير صحيح. السكر المرتفع غير المضبوط هو ما يضر العينين والأعصاب والشرايين. الإنسولين علاج يحمي من هذه المضاعفات عندما يحتاجه المريض.'] },
          { h: '«سكري النوع الثاني خفيف ولا يحتاج إلى اهتمام»', body: ['كل أنواع السكري قد تسبب مضاعفات خطيرة إذا لم تُضبط. النوع الثاني من أهم أسباب جروح القدم والبتر وأمراض الكلى.'] },
          { h: '«مريض السكري يجب أن يمتنع عن كل النشويات والفواكه»', body: ['المطلوب هو التوازن والكمية المناسبة، لا المنع الكامل. أخصائي التغذية يساعد على بناء خطة مناسبة.'] },
          { h: '«إذا شعرت بأنني بخير فالسكر مضبوط»', body: ['ارتفاع السكر قد لا يسبب أعراضًا لفترة طويلة. القياس المنتظم والسكر التراكمي هما ما يحدد الضبط.'] },
          { h: '«الأعشاب أو القرفة تغني عن الدواء»', body: ['لا يوجد دليل على أن أي عشبة تغني عن العلاج الموصوف، وبعضها قد يتداخل مع الأدوية. لا توقف دواءك دون استشارة الطبيب.'] },
          { h: '«جرح القدم البسيط ينتظر حتى يلتئم وحده»', body: ['أي جرح أو تغير في لون قدم مريض السكري يحتاج إلى تقييم مبكر، لأن التأخير قد يسمح للعدوى بالانتشار بسرعة.'] },
        ],
      },
      {
        id: 'urgent', h: 'متى تكون المراجعة عاجلة؟', warn: true,
        list: {
          items: [
            'جرح في القدم مع احمرار يتسع أو تورم أو صديد أو رائحة.',
            'تغير لون الأصابع إلى الأزرق أو الأسود.',
            'سكر مرتفع جدًا مع عطش شديد وتعب أو قيء أو تشوش.',
            'هبوط سكر متكرر أو شديد.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Diabetes: Types, Treatment, Myths and the Link to Wounds',
    description: 'The types of diabetes, how it is diagnosed and treated, common myths corrected, and why wounds heal slowly in people with diabetes and how to lower the risk.',
    h1: 'Diabetes: types, treatment, myths and chronic wounds',
    card: 'Diabetes and wounds',
    lead: 'Diabetes is one of the most common chronic diseases worldwide and a leading cause of chronic wounds and amputation. Understanding it and keeping it well controlled is the first line of defence for the feet and skin.',
    sections: [
      {
        id: 'types', h: 'Types of diabetes',
        table: {
          caption: 'The main types (based on the American Diabetes Association classification)',
          head: ['Type', 'Cause', 'Notes'],
          rows: [
            ['Type 1', 'Immune destruction of the insulin-producing cells of the pancreas', 'Often starts in childhood or young adulthood but can appear at any age; insulin is always needed'],
            ['Type 2', 'Insulin resistance with a gradual fall in insulin production', 'The most common type; linked to genetics, excess weight and inactivity'],
            ['Gestational diabetes', 'High glucose first found during pregnancy', 'Raises the mother’s later risk of type 2 diabetes'],
            ['Other types', 'Such as pancreatic disease, some medicines like steroids, and genetic causes', 'Identified by the doctor through tests'],
          ],
        },
        after: ['<strong>Prediabetes:</strong> raised glucose that has not reached the diagnostic level. Lifestyle change at this stage can delay or prevent diabetes.'],
      },
      {
        id: 'diagnosis', h: 'How is it diagnosed?',
        table: {
          caption: 'Diagnostic criteria in adults (usually confirmed with a second test)',
          head: ['Test', 'Normal', 'Prediabetes', 'Diabetes'],
          rows: [
            ['Fasting glucose', 'Below 100 mg/dL (5.6 mmol/L)', '100–125 mg/dL', '126 mg/dL (7.0 mmol/L) or higher'],
            ['HbA1c', 'Below 5.7%', '5.7–6.4%', '6.5% or higher'],
            ['Glucose tolerance test (2 hours)', 'Below 140 mg/dL', '140–199 mg/dL', '200 mg/dL (11.1 mmol/L) or higher'],
          ],
        },
      },
      {
        id: 'treatment', h: 'Treatment',
        list: {
          items: [
            '<strong>Lifestyle:</strong> balanced eating, regular physical activity, weight loss when needed and stopping smoking. This is the foundation for every type.',
            '<strong>Tablets and non-insulin injections:</strong> such as metformin, SGLT2 inhibitors and GLP-1 receptor agonists. The doctor chooses based on heart and kidney health and weight.',
            '<strong>Insulin:</strong> essential in type 1 and used in type 2 when needed.',
            '<strong>Follow-up:</strong> glucose monitoring, HbA1c every 3–6 months, and eye, kidney and foot checks at least yearly.',
          ],
        },
        after: ['For many adults the HbA1c target is below 7%, but the doctor may set a different target based on age, health and the risk of low blood glucose.'],
      },
      {
        id: 'wounds', h: 'Why does diabetes affect wounds?',
        list: {
          items: [
            '<strong>Neuropathy:</strong> loss of feeling in the feet, so a wound, a tight shoe or a burn goes unnoticed.',
            '<strong>Poor perfusion:</strong> peripheral artery disease is more common and affects smaller arteries.',
            '<strong>Weaker immunity:</strong> high glucose impairs immune cells and raises infection risk.',
            '<strong>Slow healing:</strong> high glucose affects collagen and new blood vessel formation.',
            '<strong>Foot deformity, and dry, cracked skin</strong>, which add pressure points and wounds.',
          ],
        },
        after: ['Read the full guide: <a href="/en/diabetic-foot-wounds/">Diabetic foot wound care</a>.'],
      },
      {
        id: 'myths', h: 'Myths and the facts',
        subs: [
          { h: '“Insulin causes blindness or amputation”', body: ['Not true. Uncontrolled high glucose is what damages the eyes, nerves and arteries. Insulin is a treatment that protects against these complications when it is needed.'] },
          { h: '“Type 2 diabetes is mild and needs little attention”', body: ['Every type of diabetes can cause serious complications if not controlled. Type 2 is a leading cause of foot wounds, amputation and kidney disease.'] },
          { h: '“People with diabetes must avoid all carbohydrates and fruit”', body: ['What matters is balance and the right amounts, not a total ban. A dietitian can help build a suitable plan.'] },
          { h: '“If I feel fine, my glucose is controlled”', body: ['High glucose can cause no symptoms for a long time. Regular testing and HbA1c show whether it is controlled.'] },
          { h: '“Herbs or cinnamon can replace medicine”', body: ['There is no evidence that any herb replaces prescribed treatment, and some interact with medicines. Never stop your medicine without your doctor’s advice.'] },
          { h: '“A small foot wound can wait to heal on its own”', body: ['Any wound or colour change on the foot of a person with diabetes needs early assessment, because delay can let infection spread quickly.'] },
        ],
      },
      {
        id: 'urgent', h: 'When is review urgent?', warn: true,
        list: {
          items: [
            'A foot wound with spreading redness, swelling, pus or odour.',
            'Toes turning blue or black.',
            'Very high glucose with severe thirst and tiredness, vomiting or confusion.',
            'Repeated or severe low blood glucose.',
          ],
        },
      },
    ],
  },
};
export default a;
