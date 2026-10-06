import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'diabetic-foot-wound-care-mistakes',
  order: 4,
  topic: 'diabeticFoot',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.iwgdf, R.iwgdfSite, R.iwii],
  related: ['diabeticFoot', 'chronic'],
  relatedArticles: ['wound-infection-warning-signs', 'when-to-see-a-wound-care-specialist', 'home-wound-care-mistakes'],
  ar: {
    title: 'العناية بجرح القدم السكري: أخطاء شائعة يجب تجنبها | أيسر شواقفه',
    description: 'أخطاء شائعة تؤخر التئام جرح القدم السكري أو تزيد خطر البتر، مثل انتظار الجرح ليلتئم وحده، والمشي عليه، والخلطات المنزلية، ونقع القدم.',
    h1: 'جرح القدم السكري: أخطاء شائعة يجب تجنبها',
    card: 'أخطاء شائعة في العناية بجرح القدم السكري',
    lead: 'كثير من مضاعفات القدم السكري تبدأ بجرح صغير وقرار يبدو بسيطًا. معرفة الأخطاء الشائعة تساعد المريض والأسرة على التصرف الصحيح مبكرًا.',
    sections: [
      {
        id: 'mistakes', h: 'أخطاء شائعة',
        subs: [
          { h: '1. انتظار الجرح ليلتئم وحده', body: ['ضعف الإحساس قد يجعل الجرح غير مؤلم، فيبدو بسيطًا. أي جرح في قدم مريض السكري يحتاج إلى تقييم خلال أيام قليلة، وأحيانًا في اليوم نفسه.'] },
          { h: '2. المشي على الجرح', body: ['الضغط المتكرر على الجرح من أهم أسباب عدم التئامه. يحدد الفريق المعالج طريقة تخفيف الضغط المناسبة، مثل حذاء أو جبيرة خاصة، والالتزام بها جزء أساسي من العلاج.'] },
          { h: '3. الخلطات المنزلية والوصفات الشعبية', body: ['وضع البن أو معجون الأسنان أو الأعشاب أو الكريمات غير الموصوفة قد يسبب تهيجًا أو عدوى، ويخفي علامات مهمة عن الفريق المعالج.'] },
          { h: '4. نقع القدم في الماء', body: ['النقع الطويل يليّن الجلد حول الجرح ويضعفه، وقد يزيد خطر العدوى. والماء الساخن قد يسبب حروقًا لا تُحَس.'] },
          { h: '5. قص المسامير اللحمية أو الجلد السميك بنفسك', body: ['استخدام الشفرات أو لاصقات إزالة المسامير قد يسبب جرحًا جديدًا. إزالة الجلد السميك عمل يقوم به مختص مدرّب.'] },
          { h: '6. الحذاء غير المناسب', body: ['الحذاء الضيق أو المرتفع أو ذو الخياطات الداخلية الخشنة يسبب نقاط ضغط. افحص داخل الحذاء قبل لبسه في كل مرة.'] },
          { h: '7. إهمال ضبط سكر الدم', body: ['ارتفاع السكر يبطئ الالتئام ويضعف مقاومة العدوى. التنسيق مع الطبيب لضبط السكر جزء من علاج الجرح.'] },
          { h: '8. التوقف عن المتابعة بعد الالتئام', body: ['خطر عودة القرحة مرتفع. فحص القدم اليومي والحذاء المناسب والمتابعة الدورية تستمر بعد الشفاء.'] },
        ],
      },
      {
        id: 'red-flags', h: 'علامات تستدعي التوجه إلى الطبيب فورًا', warn: true,
        list: {
          items: [
            'احمرار أو سخونة أو تورم ينتشر في القدم.',
            'صديد أو رائحة كريهة.',
            'تغيّر لون الأصابع إلى الأزرق أو الأسود، أو برودة القدم.',
            'حرارة أو ارتفاع غير معتاد في السكر مع وجود جرح.',
          ],
        },
      },
      {
        id: 'do', h: 'ما الذي يجب فعله بدلًا من ذلك؟',
        list: {
          items: [
            'افحص قدميك يوميًا، وتواصل مع الطبيب عند ظهور أي جرح جديد.',
            'غطِّ الجرح بضماد نظيف وجاف إلى أن يتم تقييمه، وخفف المشي عليه.',
            'اتّبع خطة العلاج وتخفيف الضغط التي يحددها الفريق المعالج.',
            'احتفظ بقائمة أدويتك وقراءات السكر لتعرضها في المتابعة.',
          ],
        },
        after: ['للمزيد: <a href="/ar/diabetic-foot-wounds/">جروح القدم السكري: الوقاية والعناية</a>.'],
      },
    ],
  },
  en: {
    title: 'Diabetic Foot Wound Care: Common Mistakes to Avoid',
    description: 'Common mistakes that delay diabetic foot wound healing or raise the risk of amputation, such as waiting for it to heal, walking on it, home remedies and soaking the foot.',
    h1: 'Diabetic foot wounds: common mistakes to avoid',
    card: 'Common mistakes in diabetic foot wound care',
    lead: 'Many diabetic foot complications start with a small wound and a decision that seemed harmless. Knowing the common mistakes helps patients and families act correctly, early.',
    sections: [
      {
        id: 'mistakes', h: 'Common mistakes',
        subs: [
          { h: '1. Waiting for the wound to heal on its own', body: ['Reduced sensation can make a wound painless, so it seems minor. Any wound on the foot of a person with diabetes needs assessment within a few days, sometimes the same day.'] },
          { h: '2. Walking on the wound', body: ['Repeated pressure is one of the main reasons a foot wound does not heal. The treating team chooses the right offloading, such as a special shoe or cast, and sticking to it is a core part of treatment.'] },
          { h: '3. Home remedies and traditional mixtures', body: ['Putting coffee, toothpaste, herbs or unprescribed creams on the wound can cause irritation or infection, and hides important signs from the care team.'] },
          { h: '4. Soaking the foot', body: ['Long soaks soften and weaken the skin around the wound and may raise the risk of infection. Hot water can cause burns that are not felt.'] },
          { h: '5. Cutting corns or hard skin yourself', body: ['Blades or corn plasters can create a new wound. Removing thick skin is a job for a trained professional.'] },
          { h: '6. Unsuitable shoes', body: ['Tight or high shoes, or shoes with rough inner seams, create pressure points. Check inside your shoes every time before putting them on.'] },
          { h: '7. Neglecting blood glucose control', body: ['High blood glucose slows healing and weakens resistance to infection. Working with your doctor on glucose control is part of treating the wound.'] },
          { h: '8. Stopping follow-up after healing', body: ['The risk of the ulcer coming back is high. Daily foot checks, suitable footwear and regular follow-up continue after healing.'] },
        ],
      },
      {
        id: 'red-flags', h: 'Signs to see a doctor immediately', warn: true,
        list: {
          items: [
            'Redness, warmth or swelling spreading across the foot.',
            'Pus or a bad smell.',
            'Toes turning blue or black, or a cold foot.',
            'Fever, or unusually high blood glucose, together with a wound.',
          ],
        },
      },
      {
        id: 'do', h: 'What to do instead',
        list: {
          items: [
            'Check your feet daily, and contact your doctor about any new wound.',
            'Cover the wound with a clean, dry dressing until it is assessed, and walk on it as little as possible.',
            'Follow the treatment and offloading plan set by the treating team.',
            'Keep a list of your medicines and glucose readings to show at follow-up.',
          ],
        },
        after: ['Read more: <a href="/en/diabetic-foot-wounds/">Diabetic foot wounds: prevention and care</a>.'],
      },
    ],
  },
};
export default a;
