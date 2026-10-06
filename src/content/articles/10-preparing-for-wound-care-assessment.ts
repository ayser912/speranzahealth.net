import type { Article } from '../../lib/content-types';
import { R } from '../refs';

const a: Article = {
  slug: 'preparing-for-wound-care-assessment',
  order: 10,
  topic: 'chronic',
  published: '2026-10-06',
  reviewed: '2026-10-06',
  refs: [R.timers, R.frykberg, R.jnc],
  related: ['chronic', 'credentials', 'contact'],
  relatedArticles: ['when-to-see-a-wound-care-specialist', 'why-chronic-wounds-fail-to-heal', 'home-wound-care-mistakes'],
  ar: {
    title: 'كيف تستعد لتقييم الجرح؟ قائمة عملية | أيسر شواقفه CWS®',
    description: 'ما الذي تجهزه قبل تقييم الجرح: الأدوية، والتقارير، والتحاليل، وتاريخ الجرح، والأسئلة المهمة، وما الذي يحدث خلال التقييم وكيف تُحفظ خصوصيتك.',
    h1: 'كيف تستعد لتقييم الجرح؟',
    card: 'كيف تستعد لتقييم الجرح؟',
    lead: 'التقييم الجيد يعتمد على معلومات دقيقة. التحضير المسبق يوفر الوقت، ويساعد الفريق الصحي على فهم الجرح وأسبابه ووضع خطة مناسبة من الزيارة الأولى.',
    sections: [
      {
        id: 'bring', h: 'ما الذي تحضره معك؟',
        list: {
          items: [
            'قائمة بجميع الأدوية الحالية وجرعاتها، بما فيها مميعات الدم والكورتيزون والمكملات.',
            'التقارير الطبية المتعلقة بالجرح أو بالأمراض المزمنة، مثل تقارير العمليات أو صور الأشعة.',
            'نتائج التحاليل الحديثة إن وجدت، مثل سكر الدم التراكمي لمرضى السكري.',
            'أسماء الضمادات والكريمات التي استُخدمت سابقًا، ومدة استخدام كل منها.',
            'ملاحظات عن تطور الجرح: متى بدأ، وكيف تغيّر، وما الذي ساعد أو لم يساعد.',
          ],
        },
      },
      {
        id: 'questions', h: 'أسئلة قد تُطرح عليك',
        list: {
          items: [
            'متى وكيف بدأ الجرح؟',
            'هل يزداد الألم في وقت معين، مثل الليل أو عند رفع الساق؟',
            'هل لديك سكري أو أمراض قلب أو شرايين أو أوردة؟',
            'هل تدخن؟ وكيف هي شهيتك ووزنك مؤخرًا؟',
            'من يساعدك في العناية بالجرح في المنزل؟',
          ],
        },
      },
      {
        id: 'your-questions', h: 'أسئلة تطرحها أنت',
        list: {
          items: [
            'ما السبب المحتمل لتأخر التئام الجرح؟',
            'ما خطة العناية، ومن المسؤول عن كل جزء منها؟',
            'كل كم يتغير الضماد، ومن يغيّره؟',
            'ما العلامات التي تستدعي التواصل فورًا؟',
            'متى موعد إعادة التقييم، وكيف سنعرف أن الخطة تعمل؟',
          ],
        },
      },
      {
        id: 'during', h: 'ماذا يحدث خلال التقييم؟',
        list: {
          items: [
            'مراجعة التاريخ الصحي والأدوية.',
            'فحص الجرح وقياسه، ووصف الأنسجة والإفرازات والحواف والجلد المحيط.',
            'فحص أولي للدورة الدموية والإحساس، خصوصًا في جروح الساق والقدم.',
            'تقييم الألم والتغذية والحركة والضغط.',
            'الاتفاق على خطة عناية واضحة، والتنسيق مع الطبيب المعالج عند الحاجة.',
          ],
        },
      },
      {
        id: 'practical', h: 'نصائح عملية',
        list: {
          items: [
            'ارتدِ ملابس فضفاضة تسمح بالوصول إلى مكان الجرح بسهولة.',
            'اصطحب أحد أفراد الأسرة إذا كان سيساعد في العناية بالجرح.',
            'إذا كان تغيير الضماد مؤلمًا، اسأل طبيبك مسبقًا عن تسكين الألم المناسب.',
          ],
        },
      },
      {
        id: 'privacy', h: 'الصور والخصوصية',
        body: [
          'قد تساعد صور الجرح المؤرخة على متابعة التقدم، لكن شاركها فقط عبر طريقة آمنة يتفق عليها الفريق المعالج، ولا ترسلها عبر نماذج المواقع أو الرسائل العامة.',
          'لا تُستخدم صور المرضى في أي محتوى تعليمي إلا بموافقة خطية واضحة وبعد إخفاء ما يدل على هوية المريض.',
        ],
      },
    ],
  },
  en: {
    title: 'How to Prepare for a Wound-Care Assessment: A Checklist',
    description: 'What to bring to a wound assessment, the questions to ask, what happens during the visit, and how your photos and privacy are protected.',
    h1: 'How to prepare for a wound-care assessment',
    card: 'How to prepare for a wound-care assessment',
    lead: 'A good assessment depends on accurate information. Preparing in advance saves time and helps the care team understand the wound and its causes, and plan the right care from the first visit.',
    sections: [
      {
        id: 'bring', h: 'What to bring',
        list: {
          items: [
            'A list of all current medicines and doses, including blood thinners, corticosteroids and supplements.',
            'Medical reports related to the wound or to long-term conditions, such as operation notes or imaging reports.',
            'Recent test results if you have them, such as HbA1c for people with diabetes.',
            'The names of dressings and creams used before, and how long each was used.',
            'Notes on how the wound has developed: when it started, how it changed, and what helped or didn’t.',
          ],
        },
      },
      {
        id: 'questions', h: 'Questions you may be asked',
        list: {
          items: [
            'When and how did the wound start?',
            'Is the pain worse at certain times, such as at night or when the leg is raised?',
            'Do you have diabetes, or heart, artery or vein disease?',
            'Do you smoke? How have your appetite and weight been lately?',
            'Who helps you look after the wound at home?',
          ],
        },
      },
      {
        id: 'your-questions', h: 'Questions to ask',
        list: {
          items: [
            'What is the likely reason the wound isn’t healing?',
            'What is the care plan, and who is responsible for each part?',
            'How often is the dressing changed, and by whom?',
            'Which signs mean I should get in touch straight away?',
            'When is the next review, and how will we know the plan is working?',
          ],
        },
      },
      {
        id: 'during', h: 'What happens during the assessment',
        list: {
          items: [
            'A review of your health history and medicines.',
            'Examining and measuring the wound, and describing the tissue, exudate, edges and surrounding skin.',
            'An initial check of circulation and sensation, especially for leg and foot wounds.',
            'Assessing pain, nutrition, mobility and pressure.',
            'Agreeing a clear care plan, coordinated with your treating doctor when needed.',
          ],
        },
      },
      {
        id: 'practical', h: 'Practical tips',
        list: {
          items: [
            'Wear loose clothing that gives easy access to the wound.',
            'Bring a family member if they will help with wound care.',
            'If dressing changes are painful, ask your doctor in advance about suitable pain relief.',
          ],
        },
      },
      {
        id: 'privacy', h: 'Photos and privacy',
        body: [
          'Dated photos of the wound can help track progress, but share them only through a secure method agreed with the care team, never through website forms or general messaging.',
          'Patient photos are never used in educational content without clear written consent and removal of anything that could identify the patient.',
        ],
      },
    ],
  },
};
export default a;
