import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'wound-infection-warning-signs',
  order: 6,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.iwii, R.niceSsi, R.iwgdf],
  related: ['chronic', 'surgical', 'diabeticFoot'],
  relatedArticles: ['home-wound-care-mistakes', 'choosing-wound-dressings', 'venous-vs-arterial-leg-ulcers'],
  ar: {
    title: 'علامات التهاب الجرح التي لا ينبغي تجاهلها | أيسر شواقفه CWS®',
    description: 'كيف تميّز بين التئام الجرح الطبيعي وعدوى الجرح؟ العلامات الموضعية، وعلامات انتشار العدوى في الجسم التي تستدعي الطوارئ، وما الذي لا يجب فعله.',
    h1: 'علامات التهاب الجرح التي لا ينبغي تجاهلها',
    card: 'علامات التهاب الجرح',
    lead: 'كل جرح يحتوي على بعض البكتيريا، وهذا لا يعني دائمًا وجود عدوى. لكن عندما تتغلب البكتيريا على دفاعات الجسم يبدأ الالتهاب، والتعرف عليه مبكرًا يمنع مضاعفات خطيرة.',
    sections: [
      {
        id: 'normal', h: 'ما هو الطبيعي في الجرح الذي يلتئم؟',
        body: ['في الأيام الأولى يكون من الطبيعي وجود احمرار خفيف حول الحواف، وتورم بسيط، وألم يتحسن تدريجيًا، وإفرازات قليلة صافية أو وردية. المهم هو الاتجاه: الجرح الذي يلتئم يتحسن يومًا بعد يوم.'],
      },
      {
        id: 'local', h: 'علامات العدوى الموضعية',
        list: {
          items: [
            'ألم يزداد بدل أن يخف.',
            'احمرار يمتد حول الجرح أو سخونة واضحة.',
            'تورم جديد أو متزايد.',
            'صديد أو إفرازات عكرة أو ملونة، أو زيادة في كميتها.',
            'رائحة كريهة جديدة.',
            'تأخر الالتئام أو انفتاح الجرح أو اتساعه.',
            'نسيج هش ينزف بسهولة في قاع الجرح.',
          ],
        },
        after: ['في الجروح المزمنة قد تكون العلامات خفية: أحيانًا يكون التأخر في الالتئام أو زيادة الألم هما العلامة الوحيدة.'],
      },
      {
        id: 'spreading', h: 'علامات انتشار العدوى: توجّه إلى الطوارئ', warn: true,
        list: {
          items: [
            'حرارة مرتفعة أو قشعريرة.',
            'تسارع ضربات القلب أو التنفس.',
            'تشوّش أو نعاس غير معتاد، خصوصًا لدى كبار السن.',
            'احمرار يمتد بسرعة أو خطوط حمراء تتجه من الجرح نحو أعلى الطرف.',
            'تحوّل لون الجلد إلى الداكن أو ظهور فقاعات حول الجرح مع ألم شديد.',
          ],
        },
        after: ['هذه العلامات قد تعني أن العدوى تنتشر في الجسم، وتحتاج إلى تقييم طبي عاجل.'],
      },
      {
        id: 'special', h: 'من يحتاج إلى حذر أكبر؟',
        body: ['لدى مرضى السكري، وكبار السن، ومن يتناولون أدوية تضعف المناعة، قد تكون علامات العدوى أقل وضوحًا. أي تغيّر في الجرح لدى هؤلاء يستحق التواصل مع الطبيب مبكرًا.'],
      },
      {
        id: 'dont', h: 'ما الذي لا يجب فعله؟',
        list: {
          items: [
            'لا تبدأ مضادًا حيويًا متبقيًا في المنزل أو موصوفًا لشخص آخر.',
            'لا تضع مطهرات قوية أو خلطات منزلية على الجرح دون توصية الفريق المعالج.',
            'لا تنتظر عدة أيام «لترى ما سيحدث» إذا كانت العلامات تزداد.',
          ],
        },
      },
      {
        id: 'team', h: 'ماذا قد يفعل الفريق المعالج؟',
        body: ['يقيّم الطبيب شدة العدوى ويقرر الحاجة إلى مضاد حيوي أو فحوصات أو مسحة من الجرح. قد يعدّل أخصائي الجروح خطة العناية الموضعية، مثل تنظيف الجرح واستخدام ضمادات مضادة للميكروبات لفترة محددة، بالتنسيق مع الطبيب.'],
        after: ['اقرأ أيضًا: <a href="/ar/chronic-wound-care-jordan/">العناية بالجروح المزمنة</a>.'],
      },
    ],
  },
  en: {
    title: 'Wound Infection Warning Signs You Should Not Ignore',
    description: 'How to tell normal healing from wound infection: the local signs, the signs of spreading infection that need the emergency department, and what not to do.',
    h1: 'Wound infection warning signs you should not ignore',
    card: 'Wound infection warning signs',
    lead: 'Every wound contains some bacteria, and that doesn’t always mean infection. When bacteria overcome the body’s defences, infection begins, and recognising it early prevents serious complications.',
    sections: [
      {
        id: 'normal', h: 'What is normal in a healing wound?',
        body: ['In the first days it is normal to have mild redness at the edges, slight swelling, pain that gradually improves, and a small amount of clear or pinkish fluid. What matters is the direction: a healing wound gets better day by day.'],
      },
      {
        id: 'local', h: 'Signs of local infection',
        list: {
          items: [
            'Pain that is increasing instead of easing.',
            'Redness spreading around the wound, or obvious warmth.',
            'New or increasing swelling.',
            'Pus, or cloudy or coloured fluid, or more fluid than before.',
            'A new bad smell.',
            'Delayed healing, or the wound opening or getting larger.',
            'Fragile tissue in the wound bed that bleeds easily.',
          ],
        },
        after: ['In chronic wounds the signs can be subtle: sometimes slower healing or more pain are the only clues.'],
      },
      {
        id: 'spreading', h: 'Signs of spreading infection: go to the emergency department', warn: true,
        list: {
          items: [
            'High temperature or chills.',
            'A fast heartbeat or fast breathing.',
            'Confusion or unusual drowsiness, especially in older people.',
            'Redness spreading quickly, or red streaks running from the wound up the limb.',
            'Skin turning dark, or blisters around the wound with severe pain.',
          ],
        },
        after: ['These signs may mean the infection is spreading through the body, and urgent medical assessment is needed.'],
      },
      {
        id: 'special', h: 'Who needs extra caution?',
        body: ['In people with diabetes, older adults and anyone taking medicines that weaken immunity, the signs of infection can be less obvious. Any change in their wound is worth raising with the doctor early.'],
      },
      {
        id: 'dont', h: 'What not to do',
        list: {
          items: [
            'Don’t start leftover antibiotics, or antibiotics prescribed for someone else.',
            'Don’t put strong antiseptics or home remedies on the wound unless the care team recommends them.',
            'Don’t wait several days “to see what happens” if the signs are getting worse.',
          ],
        },
      },
      {
        id: 'team', h: 'What might the care team do?',
        body: ['The doctor assesses how severe the infection is and decides whether antibiotics, tests or a wound swab are needed. The wound specialist may adjust local care, such as cleansing the wound and using antimicrobial dressings for a set period, in coordination with the doctor.'],
        after: ['Read also: <a href="/en/chronic-wound-care-jordan/">Chronic wound care</a>.'],
      },
    ],
  },
};
export default a;
