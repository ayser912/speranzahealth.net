/**
 * COURSE STORE DATA — every course of the (hidden) course store lives in this one file (Aissar, item 11,
 * 23 Nov 2026). Edit a line to change a title, duration, price, format or venue; add a line to add a course.
 * The store is hidden until launch.courses is set to true in src/config/launch.ts.
 *
 *   mode      'online' (أونلاين) · 'onsite' (وجاهي) · 'hybrid' (مدمج)
 *   duration  as it should be shown, e.g. { ar: '6 ساعات', en: '6 hours' }
 *   price     in the shop currency (src/content/shop.ts)
 *   seats     places left (null = not shown; 0 = fully booked, cannot be booked)
 *   start     date of the next run (YYYY-MM-DD) or null = "to be announced"
 *   venue     where an on-site course takes place, or null = "announced on registration"
 *
 * ⚠ EXAMPLE DATA: durations, prices, seats and dates below are placeholders. Replace them with the real
 * course list, then set `exampleData` to false.
 */
type T = { ar: string; en: string };
export const exampleData = true;

export type Mode = 'online' | 'onsite' | 'hybrid';
export const modes: Record<Mode, T> = {
  online: { ar: 'أونلاين', en: 'Online' },
  onsite: { ar: 'وجاهي', en: 'In person' },
  hybrid: { ar: 'مدمج (أونلاين ووجاهي)', en: 'Blended (online and in person)' },
};

export interface Course {
  id: string;
  title: T;
  desc: T;
  audience: T;
  duration: T;
  price: number;
  mode: Mode;
  venue: T | null;
  start: string | null;
  seats: number | null;
  language: T;
}

const pros = { ar: 'الأطباء والممرضون والصيادلة وأخصائيو العلاج الطبيعي', en: 'Physicians, nurses, pharmacists and physiotherapists' };
const arabic = { ar: 'العربية', en: 'Arabic' };

export const courses: Course[] = [
  { id: 'abwm-prep', title: { ar: 'التحضير لامتحان البورد الأمريكي للجروح (CWS®)', en: 'ABWM exam preparation (CWS®)' }, desc: { ar: 'مراجعة منظّمة لموضوعات الامتحان، وأسئلة تدريبية مع شرح الإجابات، وإرشاد في خطوات التقديم.', en: 'A structured review of the exam topics, practice questions with explained answers, and guidance on applying.' }, audience: { ar: 'الكوادر الصحية التي تنطبق عليها شروط ABWM', en: 'Healthcare professionals who meet the ABWM requirements' }, duration: { ar: '8 أسابيع (16 ساعة)', en: '8 weeks (16 hours)' }, price: 250, mode: 'online', venue: null, start: null, seats: 20, language: { ar: 'العربية والإنجليزية', en: 'Arabic and English' } },
  { id: 'assessment', title: { ar: 'تقييم الجروح وتوثيقها', en: 'Wound assessment and documentation' }, desc: { ar: 'القياس، ووصف الأنسجة والإفرازات والحواف، وإطار TIME، والتوثيق الذي يُظهر التقدم.', en: 'Measurement, describing tissue, exudate and edges, the TIME framework, and documentation that shows progress.' }, audience: pros, duration: { ar: '6 ساعات', en: '6 hours' }, price: 60, mode: 'online', venue: null, start: null, seats: null, language: arabic },
  { id: 'dressings-ws', title: { ar: 'ورشة اختيار الضمادات الحديثة', en: 'Advanced dressings workshop' }, desc: { ar: 'تطبيق عملي على اختيار الضماد حسب نوع الأنسجة وكمية الإفرازات، مع نماذج فعلية.', en: 'Hands-on dressing selection by tissue type and exudate, with real products.' }, audience: pros, duration: { ar: 'يوم واحد (7 ساعات)', en: 'One day (7 hours)' }, price: 90, mode: 'onsite', venue: null, start: null, seats: 15, language: arabic },
  { id: 'npwt', title: { ar: 'العلاج بالضغط السلبي NPWT: تطبيق عملي', en: 'Negative pressure wound therapy: hands-on' }, desc: { ar: 'دواعي الاستعمال وموانعه، وتطبيق الضماد وإحكام الإغلاق، والتعامل مع الإنذارات.', en: 'Indications and contraindications, applying and sealing the dressing, and managing alarms.' }, audience: pros, duration: { ar: '5 ساعات', en: '5 hours' }, price: 80, mode: 'onsite', venue: null, start: null, seats: 12, language: arabic },
  { id: 'dfu', title: { ar: 'القدم السكري: الفحص والوقاية وتخفيف الضغط', en: 'Diabetic foot: examination, prevention and offloading' }, desc: { ar: 'فحص القدم، وتصنيف القرح، وتخفيف الضغط، ومتى تكون الإحالة عاجلة.', en: 'Foot examination, ulcer classification, offloading and when referral is urgent.' }, audience: pros, duration: { ar: '4 ساعات', en: '4 hours' }, price: 45, mode: 'online', venue: null, start: null, seats: null, language: arabic },
  { id: 'compression', title: { ar: 'القرح الوريدية والضغط العلاجي وقياس ABPI', en: 'Venous ulcers, compression therapy and ABPI' }, desc: { ar: 'قياس مؤشر الكاحل والعضد عمليًا، واختيار الرباط والجوارب الضاغطة بأمان.', en: 'Measuring the ankle–brachial index in practice, and choosing compression safely.' }, audience: pros, duration: { ar: '6 ساعات', en: '6 hours' }, price: 85, mode: 'hybrid', venue: null, start: null, seats: 0, language: arabic },
  { id: 'pressure', title: { ar: 'قرح الضغط: الوقاية والتصنيف', en: 'Pressure injuries: prevention and staging' }, desc: { ar: 'تقييم الخطر، وتغيير الوضعية، وأسطح توزيع الضغط، والتصنيف الصحيح.', en: 'Risk assessment, repositioning, support surfaces and accurate staging.' }, audience: pros, duration: { ar: '3 ساعات', en: '3 hours' }, price: 35, mode: 'online', venue: null, start: null, seats: null, language: arabic },
];
