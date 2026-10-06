import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'what-is-npwt-vac-therapy',
  order: 5,
  topic: 'npwt',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.ewmaNpwt, R.iwii],
  related: ['npwt', 'surgical', 'education'],
  relatedArticles: ['wound-care-after-surgery', 'wound-infection-warning-signs', 'choosing-wound-dressings'],
  ar: {
    title: 'ما هو جهاز الفاك VAC؟ وماذا تتوقع أثناء العلاج بالضغط السلبي',
    description: 'شرح مبسّط للعلاج بالضغط السلبي NPWT (جهاز الفاك VAC): كيف يبدو، وكيف يكون الشعور به، والحياة اليومية معه، والإنذارات، ومتى تتواصل مع الفريق المعالج فورًا.',
    h1: 'ما هو جهاز الفاك (VAC)؟ وماذا تتوقع أثناء العلاج بالضغط السلبي',
    card: 'ماذا تتوقع أثناء العلاج بالضغط السلبي (VAC)؟',
    lead: 'إذا قرر الفريق المعالج استخدام العلاج بالضغط السلبي لجرحك أو لجرح أحد أفراد أسرتك، فهذا المقال يشرح ما يمكن توقعه في الحياة اليومية، وكيف تتعامل مع الجهاز بأمان.',
    sections: [
      {
        id: 'looks', h: 'كيف يبدو العلاج؟',
        body: [
          'يوضع في الجرح إسفنج أو شاش خاص، ثم يُغطّى بغشاء لاصق شفاف يغلقه بإحكام. يخرج من الضماد أنبوب يتصل بجهاز صغير يُحمل في حقيبة أو يوضع بجانب السرير، وفيه عبوة لتجميع الإفرازات.',
          'عند تشغيل الجهاز ينكمش الإسفنج ويصبح متماسكًا، وهذا دليل على أن الضماد مُحكم.',
        ],
      },
      {
        id: 'feel', h: 'كيف يكون الشعور به؟',
        list: {
          items: [
            'يشعر كثير من المرضى بإحساس سحب أو شد خفيف عند بدء التشغيل، ويخف عادة خلال وقت قصير.',
            'قد يكون تغيير الضماد مزعجًا أو مؤلمًا لبعض المرضى. أخبر الفريق مسبقًا ليناقش معك خيارات تخفيف الألم.',
            'الجهاز يصدر صوتًا خفيفًا أحيانًا، وهذا طبيعي.',
          ],
        },
      },
      {
        id: 'daily', h: 'الحياة اليومية مع الجهاز',
        list: {
          items: [
            'احمل الجهاز في حقيبته وتجنّب سحب الأنبوب أو ثنيه أو الجلوس عليه.',
            'عند النوم، ضع الجهاز في مكان آمن بحيث لا يُشد الأنبوب عند الحركة.',
            'لا تغمر الجهاز في الماء. اسأل الفريق عن طريقة الاستحمام الآمنة في حالتك.',
            'اشحن البطارية بانتظام وفق تعليمات الجهاز.',
            'لا تفصل الجهاز ولا تطفئه دون تعليمات، ولا تحاول تغيير الضماد بنفسك.',
          ],
        },
      },
      {
        id: 'alarms', h: 'الإنذارات وما تعنيه',
        table: {
          caption: 'إنذارات شائعة',
          head: ['الإنذار', 'ما الذي تفعله'],
          rows: [
            ['تسرّب هواء', 'تفقّد الضماد بحثًا عن حواف مرتفعة أو مكان غير محكم، واضغط بلطف على الغشاء. إذا استمر الإنذار تواصل مع الفريق.'],
            ['امتلاء العبوة', 'تواصل مع الفريق لتغيير العبوة حسب التعليمات.'],
            ['انسداد الأنبوب', 'تأكد أن الأنبوب غير مثني أو مضغوط وأن المشابك مفتوحة. إذا استمر الإنذار تواصل مع الفريق.'],
            ['انخفاض البطارية', 'صِل الجهاز بالشاحن.'],
          ],
        },
        after: ['اتبع تعليمات الفريق حول المدة التي يمكن أن يبقى فيها الجهاز متوقفًا. في كثير من البروتوكولات يُطلب التواصل مع الفريق إذا توقف العلاج لفترة طويلة، لأن الضماد قد يحتاج إلى تغيير.'],
      },
      {
        id: 'urgent', h: 'متى تتواصل فورًا؟', warn: true,
        list: {
          items: [
            'ظهور دم أحمر فاتح في الأنبوب أو العبوة، أو امتلاء العبوة بالدم بسرعة: أطفئ الجهاز إذا طُلب منك ذلك في تعليماتك، واطلب المساعدة الطارئة فورًا.',
            'حرارة أو قشعريرة أو احمرار وتورم حول الضماد.',
            'رائحة كريهة جديدة أو تغيّر واضح في لون الإفرازات.',
            'ألم شديد مفاجئ.',
          ],
        },
      },
      {
        id: 'questions', h: 'أسئلة تطرحها على الفريق المعالج',
        list: {
          items: [
            'ما الهدف من العلاج في حالتي، وكم يُتوقع أن يستمر؟',
            'من يغيّر الضماد، وكل كم يوم؟',
            'ما المدة المسموح بها لإيقاف الجهاز؟',
            'بمن أتصل عند الإنذارات، وخارج أوقات الدوام؟',
            'كيف أستحم بأمان؟',
          ],
        },
        after: ['للتعرف على العلاج بشكل أوسع: <a href="/ar/negative-pressure-wound-therapy/">العلاج بالضغط السلبي للجروح NPWT</a>.'],
      },
    ],
  },
  en: {
    title: 'What Is VAC Therapy? What to Expect During NPWT',
    description: 'A plain-language guide to NPWT (“VAC” therapy): how it looks and feels, daily life with the device, alarms, and when to contact the care team at once.',
    h1: 'What is VAC therapy? What to expect during negative pressure wound therapy',
    card: 'What to expect during NPWT / VAC therapy',
    lead: 'If the treating team has decided to use negative pressure wound therapy for your wound, or for a family member’s, this article explains what to expect in daily life and how to handle the device safely.',
    sections: [
      {
        id: 'looks', h: 'What does the therapy look like?',
        body: [
          'A special foam or gauze is placed in the wound and covered with a transparent adhesive film that seals it. A tube runs from the dressing to a small device carried in a bag or placed by the bed, with a canister that collects fluid.',
          'When the device is switched on, the foam shrinks and firms up, which shows the dressing is sealed.',
        ],
      },
      {
        id: 'feel', h: 'How does it feel?',
        list: {
          items: [
            'Many patients feel a gentle pulling or tightening when it starts, which usually eases soon.',
            'Dressing changes can be uncomfortable or painful for some patients. Tell the team in advance so they can discuss pain relief with you.',
            'The device sometimes makes a quiet noise. This is normal.',
          ],
        },
      },
      {
        id: 'daily', h: 'Daily life with the device',
        list: {
          items: [
            'Carry the device in its bag and avoid pulling, kinking or sitting on the tubing.',
            'At night, place the device somewhere safe so the tubing isn’t pulled when you move.',
            'Never put the device in water. Ask the team how to wash safely in your situation.',
            'Charge the battery regularly as the device instructions describe.',
            'Don’t disconnect or switch off the device without instructions, and don’t try to change the dressing yourself.',
          ],
        },
      },
      {
        id: 'alarms', h: 'Alarms and what they mean',
        table: {
          caption: 'Common alarms',
          head: ['Alarm', 'What to do'],
          rows: [
            ['Air leak', 'Check the dressing for lifted edges or a gap, and press gently on the film. If the alarm continues, contact the team.'],
            ['Canister full', 'Contact the team to change the canister as instructed.'],
            ['Blockage', 'Make sure the tubing is not kinked or squashed and that the clamps are open. If the alarm continues, contact the team.'],
            ['Low battery', 'Plug the device into its charger.'],
          ],
        },
        after: ['Follow your team’s instructions on how long the device may be switched off. Many protocols ask you to contact the team if therapy has stopped for a long time, because the dressing may need changing.'],
      },
      {
        id: 'urgent', h: 'When to get help immediately', warn: true,
        list: {
          items: [
            'Bright red blood in the tubing or canister, or the canister filling quickly with blood: switch the device off if your instructions say so, and get emergency help immediately.',
            'Fever, chills, or redness and swelling around the dressing.',
            'A new bad smell or a clear change in the colour of the fluid.',
            'Sudden severe pain.',
          ],
        },
      },
      {
        id: 'questions', h: 'Questions to ask your care team',
        list: {
          items: [
            'What is the goal of this therapy for me, and how long is it expected to last?',
            'Who changes the dressing, and how often?',
            'How long can the device be off?',
            'Who do I call about alarms, including out of hours?',
            'How can I wash safely?',
          ],
        },
        after: ['For a wider overview, see <a href="/en/negative-pressure-wound-therapy/">Negative pressure wound therapy (NPWT)</a>.'],
      },
    ],
  },
};
export default a;
