import type { ClinicalPageData } from '../../lib/content-types';
import { R } from '../refs';

const page: ClinicalPageData = {
  published: '2026-10-06',
  reviewed: '2026-10-06',
  illustration: 'foot',
  refs: [R.iwgdf, R.iwgdfSite, R.iwii, R.clti],
  related: ['chronic', 'surgical', 'npwt'],
  ar: {
    title: 'العناية بجروح القدم السكري في الأردن | أيسر شواقفه CWS®',
    description: 'لماذا يحتاج جرح القدم لدى مريض السكري إلى اهتمام سريع؟ علامات الخطر، والوقاية اليومية، ودور الفريق متعدد التخصصات في العناية بجروح القدم السكري.',
    h1: 'جروح القدم السكري: الوقاية والعناية',
    lead: 'جرح صغير في قدم مريض السكري قد يتطور بسرعة إذا لم يُكتشف ويُعالج مبكرًا. هذه الصفحة تشرح لماذا يحدث ذلك، وما علامات الخطر، وكيف تحمي قدميك يوميًا.',
    card: 'القدم السكري',
    sections: [
      {
        id: 'why', h: 'لماذا تُعد جروح القدم السكري خطيرة؟',
        body: ['يرتبط خطر جروح القدم لدى مرضى السكري بعدة عوامل قد تجتمع معًا:'],
        list: {
          items: [
            '<strong>ضعف الإحساس</strong> (اعتلال الأعصاب): قد لا يشعر المريض بحصاة في الحذاء أو بحرق أو جرح.',
            '<strong>ضعف الدورة الدموية</strong> في الساقين والقدمين، مما يبطئ الالتئام.',
            '<strong>تغيّر شكل القدم</strong> ونقاط الضغط، مما يسبب تشققات أو مسامير لحمية تتحول إلى قرح.',
            '<strong>ضعف مقاومة العدوى</strong> مع ارتفاع سكر الدم.',
          ],
        },
        after: ['لهذا توصي الإرشادات الدولية بأن يُقيَّم أي جرح في قدم مريض السكري بسرعة، وألا يُترك للعلاج المنزلي وحده.'],
      },
      {
        id: 'red-flags', h: 'علامات تستدعي مراجعة طبية عاجلة', warn: true,
        body: ['توجّه إلى الطبيب في اليوم نفسه أو إلى الطوارئ إذا ظهر لدى مريض السكري:'],
        list: {
          items: [
            'أي جرح أو قرحة جديدة في القدم، حتى لو بدت صغيرة أو غير مؤلمة.',
            'احمرار أو سخونة أو تورم في القدم، خصوصًا إذا كان ينتشر.',
            'صديد أو رائحة كريهة من الجرح.',
            'تغيّر لون أصابع القدم إلى الأزرق أو الأسود، أو برودة القدم وشحوبها.',
            'حرارة أو قشعريرة أو ارتفاع غير معتاد في سكر الدم مع جرح في القدم.',
          ],
        },
      },
      {
        id: 'daily', h: 'الوقاية اليومية: عادات تحمي القدم',
        list: {
          items: [
            'افحص قدميك يوميًا، بما في ذلك بين الأصابع وباطن القدم، واستخدم مرآة أو اطلب المساعدة.',
            'لا تمشِ حافيًا، لا داخل المنزل ولا خارجه.',
            'ارتدِ حذاءً مريحًا ومناسبًا للمقاس، وافحص داخله قبل لبسه.',
            'اغسل قدميك وجففهما جيدًا خصوصًا بين الأصابع، واستخدم مرطبًا للجلد الجاف دون وضعه بين الأصابع.',
            'لا تقص المسامير اللحمية أو الجلد السميك بنفسك، ولا تستخدم لاصقات إزالة المسامير.',
            'قص الأظافر بشكل مستقيم، واطلب المساعدة إن كان النظر أو الحركة ضعيفًا.',
            'تجنّب تدفئة القدمين بالماء الساخن أو المدفأة مباشرة لأن الحروق قد لا تُحَس.',
            'حافظ على ضبط سكر الدم، وراجع طبيبك لفحص القدم بانتظام.',
          ],
        },
      },
      {
        id: 'care', h: 'كيف يُعتنى بجرح القدم السكري؟',
        body: ['العناية بجرح القدم السكري عمل فريق. تشمل عادة:'],
        list: {
          items: [
            '<strong>تخفيف الضغط</strong> عن الجرح (offloading) بأحذية أو جبائر خاصة يحددها الفريق المعالج، وهو من أهم عوامل الالتئام.',
            '<strong>تقييم الدورة الدموية</strong> والإحالة إلى جرّاح الأوعية الدموية عند الحاجة.',
            '<strong>علاج العدوى</strong> بقرار من الطبيب، وقد تحتاج بعض الحالات إلى دخول المستشفى.',
            '<strong>إزالة الأنسجة الميتة</strong> والجلد السميك حول الجرح على يد مختص مدرّب.',
            '<strong>اختيار الضمادات</strong> حسب حالة الجرح، مع متابعة منتظمة وقياس التقدم.',
            '<strong>ضبط سكر الدم</strong> بالتنسيق مع الطبيب المعالج.',
          ],
        },
        after: ['يشارك الممرض المتخصص في التقييم والعناية بالجرح وتثقيف المريض، ضمن خطة الطبيب والفريق متعدد التخصصات.'],
      },
      {
        id: 'after-healing', h: 'بعد التئام الجرح',
        body: ['خطر عودة القرحة مرتفع بعد الالتئام. لذلك يستمر فحص القدم اليومي، والحذاء المناسب، والمتابعة الدورية مع الفريق الصحي حتى بعد شفاء الجرح.'],
      },
      {
        id: 'mistakes', h: 'أخطاء شائعة يجب تجنبها',
        list: {
          items: [
            '<strong>انتظار الجرح ليلتئم وحده</strong>، لأن ضعف الإحساس قد يجعله غير مؤلم ويبدو بسيطًا.',
            '<strong>المشي على الجرح</strong> وعدم الالتزام بطريقة تخفيف الضغط التي يحددها الفريق.',
            '<strong>الخلطات المنزلية</strong> مثل البن ومعجون الأسنان والأعشاب والكريمات غير الموصوفة.',
            '<strong>نقع القدم</strong> لفترات طويلة أو في ماء ساخن.',
            '<strong>قص المسامير اللحمية أو الجلد السميك</strong> بالشفرات أو استخدام لاصقات إزالة المسامير.',
            '<strong>إهمال ضبط سكر الدم</strong> والتوقف عن المتابعة بعد الالتئام.',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Diabetic Foot Wound Care in Jordan | Aissar Shawaqfeh, CWS®',
    description: 'Why a foot wound in a person with diabetes needs prompt attention: the warning signs, daily foot protection and the role of a multidisciplinary team.',
    h1: 'Diabetic foot wounds: prevention and care',
    lead: 'A small wound on the foot of a person with diabetes can deteriorate quickly if it is not found and treated early. This page explains why, the warning signs to act on, and how to protect your feet every day.',
    card: 'Diabetic foot',
    sections: [
      {
        id: 'why', h: 'Why are diabetic foot wounds serious?',
        body: ['The risk comes from several factors that often occur together:'],
        list: {
          items: [
            '<strong>Reduced sensation</strong> (neuropathy): a stone in the shoe, a burn or a cut may not be felt.',
            '<strong>Reduced blood supply</strong> to the legs and feet, which slows healing.',
            '<strong>Changes in foot shape</strong> and pressure points, leading to cracks or calluses that can become ulcers.',
            '<strong>Lower resistance to infection</strong> when blood glucose is high.',
          ],
        },
        after: ['This is why international guidelines recommend that any wound on the foot of a person with diabetes is assessed promptly and not left to home treatment alone.'],
      },
      {
        id: 'red-flags', h: 'Warning signs that need urgent medical review', warn: true,
        body: ['See a doctor the same day, or go to the emergency department, if a person with diabetes has:'],
        list: {
          items: [
            'Any new wound or ulcer on the foot, even if it looks small or is painless.',
            'Redness, warmth or swelling in the foot, especially if it is spreading.',
            'Pus or a bad smell from a wound.',
            'Toes turning blue or black, or a foot that is cold and pale.',
            'Fever, chills, or unusually high blood glucose together with a foot wound.',
          ],
        },
      },
      {
        id: 'daily', h: 'Everyday habits that protect the feet',
        list: {
          items: [
            'Check your feet every day, including between the toes and the soles. Use a mirror or ask for help.',
            'Never walk barefoot, indoors or outdoors.',
            'Wear comfortable, well-fitting shoes, and check inside them before putting them on.',
            'Wash and dry your feet well, especially between the toes. Moisturise dry skin, but not between the toes.',
            'Don’t cut corns or hard skin yourself, and don’t use corn plasters.',
            'Cut toenails straight across, and ask for help if your eyesight or mobility is limited.',
            'Don’t warm your feet with hot water or directly at a heater, because burns may not be felt.',
            'Keep blood glucose well controlled and have your feet checked regularly.',
          ],
        },
      },
      {
        id: 'care', h: 'How is a diabetic foot wound cared for?',
        body: ['Caring for a diabetic foot wound is a team effort. It usually includes:'],
        list: {
          items: [
            '<strong>Offloading</strong> pressure from the wound with special footwear or devices chosen by the treating team, which is one of the most important factors in healing.',
            '<strong>Assessing blood supply</strong>, with referral to a vascular surgeon when needed.',
            '<strong>Treating infection</strong>, as decided by the doctor. Some cases need hospital admission.',
            '<strong>Removing dead tissue</strong> and callus around the wound, done by a trained professional.',
            '<strong>Choosing dressings</strong> to suit the wound, with regular follow-up and measurement of progress.',
            '<strong>Blood glucose control</strong>, coordinated with the treating doctor.',
          ],
        },
        after: ['The specialist nurse contributes assessment, wound care and patient education within the plan set by the physician and the multidisciplinary team.'],
      },
      {
        id: 'after-healing', h: 'After the wound heals',
        body: ['The risk of an ulcer coming back is high after healing. Daily foot checks, suitable footwear and regular follow-up with the care team continue even after the wound has closed.'],
      },
      {
        id: 'mistakes', h: 'Common mistakes to avoid',
        list: {
          items: [
            '<strong>Waiting for the wound to heal on its own</strong>, because reduced sensation can make it painless and seem minor.',
            '<strong>Walking on the wound</strong> and not following the offloading plan set by the team.',
            '<strong>Home remedies</strong> such as coffee, toothpaste, herbs or unprescribed creams.',
            '<strong>Soaking the foot</strong> for long periods or in hot water.',
            '<strong>Cutting corns or hard skin</strong> with blades, or using corn plasters.',
            '<strong>Neglecting blood glucose control</strong>, or stopping follow-up after healing.',
          ],
        },
      },
    ],
  },
};
export default page;
