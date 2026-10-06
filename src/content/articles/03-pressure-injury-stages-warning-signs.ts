import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'pressure-injury-stages-warning-signs',
  order: 3,
  topic: 'pressure',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.npiapStaging, R.piGuideline, R.iwii],
  related: ['pressure', 'chronic'],
  relatedArticles: ['home-wound-care-mistakes', 'wound-infection-warning-signs', 'when-to-see-a-wound-care-specialist'],
  ar: {
    title: 'مراحل قرح الضغط (قرح الفراش) وعلامات الخطر | أيسر شواقفه',
    description: 'كيف تتعرف على مراحل قرحة الضغط من الاحمرار إلى القرح العميقة، وكيف تفحص الجلد يوميًا، ومتى تصبح القرحة حالة تستدعي مراجعة عاجلة.',
    h1: 'مراحل قرح الضغط وعلامات الخطر',
    card: 'مراحل قرح الضغط وعلامات الخطر',
    lead: 'اكتشاف قرحة الضغط في مرحلتها الأولى قد يمنع تحولها إلى جرح عميق يحتاج إلى أشهر من العلاج. هذا المقال يساعد الأسرة ومقدمي الرعاية على فهم المراحل وما يجب فعله عند كل منها.',
    sections: [
      {
        id: 'check', h: 'كيف تفحص الجلد يوميًا؟',
        list: {
          items: [
            'افحص المناطق المعرّضة للضغط مرة يوميًا على الأقل: أسفل الظهر، والكعبين، والوركين، والكتفين، ومؤخرة الرأس.',
            'عند وجود احمرار، اضغط عليه بلطف بإصبعك ثم ارفعه: إذا لم يتحول لونه إلى الأفتح ثم يعود، فقد تكون هذه بداية قرحة ضغط.',
            'في البشرة الداكنة قد لا يظهر الاحمرار بوضوح؛ لاحظ اختلاف الحرارة أو القوام (تصلب أو ليونة) أو تغيّر اللون مقارنة بالجلد المجاور.',
            'افحص الجلد تحت الأجهزة الطبية وحولها، مثل أنابيب الأكسجين والجبائر والقساطر.',
            'اسأل المريض عن أي ألم أو حرقة في هذه المناطق إن كان قادرًا على التعبير.',
          ],
        },
      },
      {
        id: 'stages', h: 'المراحل بالتفصيل',
        subs: [
          { h: 'المرحلة الأولى: احمرار لا يزول', body: ['الجلد سليم لكنه محمرّ ولا يبهت عند الضغط. هذه إشارة إنذار مبكرة: أبعد الضغط عن المنطقة فورًا وأبلغ الفريق الصحي. لا تدلك المنطقة.'] },
          { h: 'المرحلة الثانية: فقدان سطحي للجلد', body: ['جرح سطحي وردي أو فقاعة مفتوحة أو مغلقة. يحتاج إلى تقييم واختيار ضماد مناسب، مع الاستمرار في إزالة الضغط.'] },
          { h: 'المرحلة الثالثة: فقدان كامل لسماكة الجلد', body: ['جرح أعمق تظهر فيه طبقة الدهون، وقد توجد أنسجة ميتة صفراء. يحتاج إلى عناية متخصصة ومتابعة منتظمة.'] },
          { h: 'المرحلة الرابعة: فقدان الجلد والأنسجة العميقة', body: ['تظهر العضلات أو الأوتار أو العظم. خطر العدوى العميقة مرتفع، ويحتاج إلى تقييم طبي وجراحي.'] },
          { h: 'غير قابلة للتصنيف', body: ['قاع الجرح مغطى بنسيج ميت أو قشرة سوداء لا تسمح بمعرفة العمق. لا تحاول إزالة القشرة بنفسك؛ القرار للفريق المعالج، خصوصًا في الكعب.'] },
          { h: 'إصابة الأنسجة العميقة', body: ['منطقة بلون أحمر داكن أو بنفسجي أو بني، أو فقاعة دموية، قد تكون مؤلمة أو مختلفة الحرارة. قد تتطور بسرعة إلى جرح عميق حتى مع العناية الجيدة، لذلك تحتاج إلى متابعة دقيقة.'] },
        ],
      },
      {
        id: 'red-flags', h: 'علامات الخطر', warn: true,
        body: ['تواصل مع الطبيب في اليوم نفسه أو توجّه إلى الطوارئ عند:'],
        list: {
          items: [
            'تحول الاحمرار إلى جرح مفتوح أو اتساع القرحة بسرعة.',
            'ظهور نسيج أسود أو رائحة كريهة أو صديد.',
            'احمرار أو سخونة تمتد حول القرحة.',
            'حرارة أو قشعريرة أو تشوّش أو نعاس غير معتاد لدى المريض.',
          ],
        },
      },
      {
        id: 'act', h: 'ماذا تفعل الآن؟',
        list: {
          ordered: true,
          items: [
            'أبعد الضغط عن المنطقة المصابة وغيّر وضعية المريض.',
            'أبلغ الطبيب أو الفريق الصحي المسؤول.',
            'لا تضع كريمات أو خلطات منزلية على القرحة.',
            'راجع خطة الوقاية: المرتبة، وجدول تغيير الوضعية، والتغذية، والعناية بالجلد.',
          ],
        },
        after: ['للمزيد عن الوقاية والعناية: <a href="/ar/pressure-injury-care/">قرح الضغط: الوقاية والعناية</a>.'],
      },
    ],
  },
  en: {
    title: 'Pressure Injury (Bedsore) Stages and Warning Signs',
    description: 'How to recognise each pressure injury stage, from redness to deep wounds, how to check the skin every day, and when a pressure injury needs urgent review.',
    h1: 'Pressure injury stages and warning signs',
    card: 'Pressure injury stages and warning signs',
    lead: 'Spotting a pressure injury at its first stage can stop it becoming a deep wound that takes months to treat. This article helps families and caregivers understand the stages and what to do at each one.',
    sections: [
      {
        id: 'check', h: 'How to check the skin every day',
        list: {
          items: [
            'Check pressure areas at least once a day: lower back, heels, hips, shoulders and the back of the head.',
            'If you see redness, press it gently with a finger and lift. If it doesn’t go paler and then return, it may be the start of a pressure injury.',
            'On darker skin, redness may be hard to see. Look for differences in warmth, texture (firm or boggy) or colour compared with nearby skin.',
            'Check the skin under and around medical devices, such as oxygen tubing, splints and catheters.',
            'Ask the person about pain or burning in these areas, if they can tell you.',
          ],
        },
      },
      {
        id: 'stages', h: 'The stages in detail',
        subs: [
          { h: 'Stage 1: redness that does not fade', body: ['The skin is intact but red, and does not fade when pressed. This is an early warning: take pressure off the area immediately and tell the care team. Don’t massage it.'] },
          { h: 'Stage 2: shallow skin loss', body: ['A shallow pink wound, or an open or intact blister. It needs assessment and a suitable dressing, while pressure relief continues.'] },
          { h: 'Stage 3: full-thickness skin loss', body: ['A deeper wound with fat visible, sometimes with yellow dead tissue. It needs specialist care and regular follow-up.'] },
          { h: 'Stage 4: skin and deep tissue loss', body: ['Muscle, tendon or bone is visible. The risk of deep infection is high, and medical and surgical assessment is needed.'] },
          { h: 'Unstageable', body: ['The wound bed is covered by dead tissue or black eschar, so its depth cannot be seen. Don’t try to remove the eschar yourself; the decision belongs to the treating team, especially on the heel.'] },
          { h: 'Deep tissue injury', body: ['An area of dark red, purple or maroon skin, or a blood blister, that may be painful or a different temperature. It can turn into a deep wound quickly even with good care, so it needs close monitoring.'] },
        ],
      },
      {
        id: 'red-flags', h: 'Warning signs', warn: true,
        body: ['Contact the doctor the same day, or go to the emergency department, if:'],
        list: {
          items: [
            'Redness becomes an open wound, or the wound grows quickly.',
            'Black tissue, a bad smell or pus appears.',
            'Redness or warmth spreads around the wound.',
            'The person has fever, chills, confusion or unusual drowsiness.',
          ],
        },
      },
      {
        id: 'act', h: 'What to do now',
        list: {
          ordered: true,
          items: [
            'Take pressure off the affected area and reposition the person.',
            'Tell the doctor or the responsible care team.',
            'Don’t put creams or home remedies on the wound.',
            'Review the prevention plan: mattress, repositioning schedule, nutrition and skin care.',
          ],
        },
        after: ['For more on prevention and care, see <a href="/en/pressure-injury-care/">Pressure injuries: prevention and care</a>.'],
      },
    ],
  },
};
export default a;
