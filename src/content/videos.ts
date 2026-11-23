/**
 * VIDEOS — single source for every video shown on the site (moved here from config/site.ts on 23 Nov 2026).
 *
 * - `patientTopics` are the cards on the "Videos" page (فيديوهات تثقيفية, main menu).
 * - `proTopics` are the cards on the "Videos for professionals" page.
 * - `videos` lists each video once, with the topic card it belongs to. Newest first.
 *
 * To add an Instagram reel: copy its code from the link (instagram.com/reel/<CODE>/) into a new entry,
 * pick a topic id below, and write the title in both languages. Topics without videos show "coming soon".
 * Never include patient footage without documented written consent.
 *
 * The titles of the first 16 reels were taken from their cover text on 23 Nov 2026 (the reels have no
 * captions); Aissar may want to adjust them.
 */
import type { PageKey } from '../lib/routes';

type T = { ar: string; en: string };
export type TopicIcon = 'foot' | 'bed' | 'leg' | 'skin' | 'bandage' | 'clock' | 'team' | 'shield' | 'scalpel' | 'stoma' | 'food' | 'ruler' | 'layers' | 'pump' | 'chat';

export interface VideoTopic {
  id: string;
  icon: TopicIcon;
  title: T;
  desc: T;
  /** Related guide: a page key or an article slug. */
  related?: { page?: PageKey; article?: string };
}

export interface SiteVideo {
  /** Instagram reel code (instagram.com/reel/<code>/) or YouTube id */
  code: string;
  platform: 'instagram' | 'youtube';
  audience: 'patients' | 'professionals';
  topic: string;
  title: T;
  /** publication date (YYYY-MM-DD), if known */
  date?: string;
}

export const patientTopics: VideoTopic[] = [
  { id: 'diabetic-foot', icon: 'foot', title: { ar: 'القدم السكري', en: 'The diabetic foot' }, desc: { ar: 'فحص القدم اليومي، والأحذية، والحرارة والبرد، ولماذا لا يُستهان بالجرح الصغير.', en: 'Daily foot checks, footwear, heat and cold, and why a small wound matters.' }, related: { page: 'diabeticFoot' } },
  { id: 'pressure', icon: 'bed', title: { ar: 'قرح الضغط والحركة', en: 'Pressure injuries and movement' }, desc: { ar: 'الجلوس والاستلقاء الطويل، وتغيير الوضعية، وحماية كبار السن.', en: 'Long sitting and lying, repositioning, and protecting older adults.' }, related: { page: 'pressure' } },
  { id: 'circulation', icon: 'leg', title: { ar: 'الدورة الدموية والتورّم والجوارب الضاغطة', en: 'Circulation, swelling and compression' }, desc: { ar: 'التروية، وثقل الساقين، والوذمة اللمفية، والفرق بين الجوارب الضاغطة والعادية.', en: 'Blood flow, heavy legs, lymphoedema, and compression stockings versus ordinary socks.' }, related: { article: 'tissue-perfusion-and-wound-healing' } },
  { id: 'skin', icon: 'skin', title: { ar: 'العناية بالجلد', en: 'Skin care' }, desc: { ar: 'الجلد الجاف والقاسي، ومن هم الأكثر عرضة لأذى الجلد.', en: 'Dry and hard skin, and who is most at risk of skin damage.' }, related: { article: 'incontinence-associated-dermatitis' } },
  { id: 'first-aid', icon: 'bandage', title: { ar: 'الجروح البسيطة والأخطاء الشائعة في البيت', en: 'Minor wounds and common mistakes at home' }, desc: { ar: 'ماذا تفعل مع الخدش والجرح الصغير، وما الذي يجب تجنّبه.', en: 'What to do with a scratch or small wound, and what to avoid.' }, related: { article: 'home-wound-care-mistakes' } },
  { id: 'when-to-seek', icon: 'clock', title: { ar: 'متى تراجع المختص؟', en: 'When to see a specialist' }, desc: { ar: 'دور أخصائي الجروح، ولماذا لا يحسن الانتظار.', en: 'What a wound specialist does, and why waiting does not help.' }, related: { article: 'when-to-see-a-wound-care-specialist' } },
  { id: 'speranza', icon: 'team', title: { ar: 'سبيرانزا والرعاية عن بعد', en: 'Speranza and remote care' }, desc: { ar: 'الفريق متعدد التخصصات حول المريض، والاستشارة عن بعد.', en: 'The multidisciplinary team around the patient, and remote consultation.' }, related: { page: 'contact' } },
  { id: 'infection', icon: 'shield', title: { ar: 'التهاب الجروح', en: 'Wound infection' }, desc: { ar: 'العلامات التي تستدعي مراجعة الفريق المعالج.', en: 'The signs that mean you should contact your care team.' }, related: { article: 'wound-infection-warning-signs' } },
  { id: 'surgical', icon: 'scalpel', title: { ar: 'الجروح الجراحية والضغط السلبي', en: 'Surgical wounds and NPWT' }, desc: { ar: 'العناية بالجرح بعد العملية، وجهاز الضغط السلبي في البيت.', en: 'Caring for a wound after surgery, and a negative pressure device at home.' }, related: { page: 'surgical' } },
  { id: 'colostomy', icon: 'stoma', title: { ar: 'الكولوستومي', en: 'Living with a colostomy' }, desc: { ar: 'تغيير الكيس، والعناية بالجلد حول الفتحة، والحياة اليومية.', en: 'Changing the bag, skin care around the stoma, and daily life.' }, related: { article: 'living-with-a-colostomy' } },
  { id: 'nutrition', icon: 'food', title: { ar: 'التغذية والالتئام', en: 'Nutrition and healing' }, desc: { ar: 'البروتين والسوائل والفيتامينات التي يحتاجها الجرح.', en: 'The protein, fluids and vitamins a healing wound needs.' }, related: { article: 'nutrition-and-vitamins-for-wound-healing' } },
];

export const proTopics: VideoTopic[] = [
  { id: 'pro-assessment', icon: 'ruler', title: { ar: 'تقييم الجروح وتوثيقها', en: 'Wound assessment and documentation' }, desc: { ar: 'القياس، ووصف الأنسجة والإفرازات والحواف، والتوثيق الذي يُظهر التقدم.', en: 'Measurement, describing tissue, exudate and edges, and documentation that shows progress.' }, related: { article: 'how-to-measure-a-wound' } },
  { id: 'pro-time', icon: 'layers', title: { ar: 'تحضير قاع الجرح وإطار TIME', en: 'Wound bed preparation and TIME' }, desc: { ar: 'الأنسجة الميتة، والعدوى، والرطوبة، والحواف بطريقة منظّمة.', en: 'Dead tissue, infection, moisture and the wound edge, step by step.' }, related: { page: 'chronic' } },
  { id: 'pro-dressings', icon: 'bandage', title: { ar: 'اختيار الضمادات الحديثة', en: 'Choosing advanced dressings' }, desc: { ar: 'مطابقة الضماد لنوع الأنسجة وكمية الإفرازات والجلد المحيط.', en: 'Matching the dressing to tissue, exudate and surrounding skin.' }, related: { page: 'dressings' } },
  { id: 'pro-pressure', icon: 'bed', title: { ar: 'قرح الضغط: الوقاية والتصنيف', en: 'Pressure injuries: prevention and staging' }, desc: { ar: 'تقييم الخطر، وتغيير الوضعية، وأسطح توزيع الضغط، والتصنيف الصحيح.', en: 'Risk assessment, repositioning, support surfaces and accurate staging.' }, related: { page: 'pressure' } },
  { id: 'pro-dfu', icon: 'foot', title: { ar: 'القدم السكري وتخفيف الضغط', en: 'Diabetic foot and offloading' }, desc: { ar: 'فحص القدم، وتصنيف القرح، وتخفيف الضغط، ومتى تكون الإحالة عاجلة.', en: 'Foot examination, ulcer classification, offloading and urgent referral.' }, related: { page: 'diabeticFoot' } },
  { id: 'pro-npwt', icon: 'pump', title: { ar: 'العلاج بالضغط السلبي NPWT', en: 'Negative pressure wound therapy' }, desc: { ar: 'دواعي الاستعمال وموانعه، والتطبيق وإحكام الإغلاق، والتعامل مع الإنذارات.', en: 'Indications, contraindications, application, sealing and alarms.' }, related: { page: 'npwt' } },
  { id: 'pro-infection', icon: 'shield', title: { ar: 'عدوى الجروح والأغشية الحيوية', en: 'Wound infection and biofilm' }, desc: { ar: 'العلامات الموضعية والعامة، وأخذ العينات، ومتى يُبلَّغ الطبيب.', en: 'Local and systemic signs, sampling, and when to inform the physician.' }, related: { article: 'inflammation-and-infection-in-chronic-wounds' } },
  { id: 'pro-compression', icon: 'leg', title: { ar: 'القرح الوريدية والضغط العلاجي وABPI', en: 'Venous ulcers, compression and ABPI' }, desc: { ar: 'قياس مؤشر الكاحل والعضد، وأنواع الرباط والجوارب الضاغطة، ومتى تكون خطرة.', en: 'Measuring the ankle–brachial index, compression systems, and when they are unsafe.' }, related: { article: 'venous-vs-arterial-leg-ulcers' } },
  { id: 'pro-labs', icon: 'food', title: { ar: 'التغذية والفحوصات المخبرية', en: 'Nutrition and laboratory tests' }, desc: { ar: 'قراءة الفحوصات والصور المرتبطة بالجروح، ودور التغذية في الالتئام.', en: 'Reading wound-related tests and imaging, and the role of nutrition.' }, related: { article: 'lab-tests-and-imaging-for-wounds' } },
  { id: 'pro-ostomy', icon: 'stoma', title: { ar: 'العناية بالفُغرة (الستوما)', en: 'Stoma care' }, desc: { ar: 'اختيار الأدوات، والعناية بالجلد حول الفتحة، والمضاعفات الشائعة.', en: 'Choosing appliances, peristomal skin care and common complications.' }, related: { article: 'stoma-complications' } },
  { id: 'pro-education', icon: 'chat', title: { ar: 'تثقيف المرضى والأسر', en: 'Educating patients and families' }, desc: { ar: 'شرح خطة العناية المنزلية بوضوح وأمان.', en: 'Explaining a home-care plan clearly and safely.' }, related: { page: 'education' } },
];

export const videos: SiteVideo[] = [
  { code: 'DgE4oPaRszE', platform: 'instagram', audience: 'patients', topic: 'speranza', date: '2026-11-22', title: { ar: 'رعايتك عن بعد… والحل الآن بسيط', en: 'Care from a distance, made simple' } },
  { code: 'DffIqemxOvC', platform: 'instagram', audience: 'patients', topic: 'circulation', date: '2026-11-08', title: { ar: 'الثقل إله سبب: الوذمة اللمفية', en: 'Heavy legs have a cause: lymphoedema' } },
  { code: 'DfVDzSsx7MC', platform: 'instagram', audience: 'patients', topic: 'skin', date: '2026-11-04', title: { ar: 'إيدك يابسة وجلدك قاسي؟ جلدك بيحكي', en: 'Dry hands and hard skin? Your skin is telling you something' } },
  { code: 'DfUI3KpxpZw', platform: 'instagram', audience: 'patients', topic: 'speranza', date: '2026-11-04', title: { ar: 'فريق متعدد التخصصات… والمريض في النص', en: 'A multidisciplinary team, with the patient at the centre' } },
  { code: 'DfRw-A-xU97', platform: 'instagram', audience: 'patients', topic: 'when-to-seek', date: '2026-11-03', title: { ar: 'أخصائي الجروح', en: 'The wound specialist' } },
  { code: 'DfQRv7Px4HF', platform: 'instagram', audience: 'patients', topic: 'first-aid', date: '2026-11-02', title: { ar: 'خدشة صغيرة… و«لا تعمل فيه إشي»', en: 'A small scratch… and “just leave it alone”' } },
  { code: 'DfMbLKRxPY5', platform: 'instagram', audience: 'patients', topic: 'circulation', date: '2026-11-01', title: { ar: 'تروية أقوى: إيصال الغذاء إلى الأنسجة', en: 'Better perfusion: getting nutrients to the tissues' } },
  { code: 'De_jRauRl42', platform: 'instagram', audience: 'patients', topic: 'circulation', date: '2026-10-27', title: { ar: 'جوارب عادية؟ الفرق بين الجوارب الضاغطة والعادية', en: 'Ordinary socks? Compression stockings versus regular socks' } },
  { code: 'Dev48zJxCp4', platform: 'instagram', audience: 'patients', topic: 'pressure', date: '2026-10-21', title: { ar: 'الحركة عند كبار السن', en: 'Movement for older adults' } },
  { code: 'DetI7tptQfS', platform: 'instagram', audience: 'patients', topic: 'skin', date: '2026-10-19', title: { ar: 'الأكثر عرضة: كبار السن ومن يغيّر ضماده كثيرًا', en: 'Most at risk: older adults and frequent dressing changes' } },
  { code: 'DeoKffERa1z', platform: 'instagram', audience: 'patients', topic: 'pressure', date: '2026-10-18', title: { ar: 'المشكلة في الوقت: الجلوس الطويل', en: 'The problem is time: sitting for too long' } },
  { code: 'Del2nsGR5i4', platform: 'instagram', audience: 'patients', topic: 'diabetic-foot', date: '2026-10-17', title: { ar: 'مجرد حذاء جديد… وجرح بسيط؟', en: 'Just new shoes… and a small rub?' } },
  { code: 'DejNUFCxk3-', platform: 'instagram', audience: 'patients', topic: 'diabetic-foot', title: { ar: 'جرح صغير قد يصبح جرحًا أكبر', en: 'A small wound can become a bigger one' } },
  { code: 'DeeijMyR_Lj', platform: 'instagram', audience: 'patients', topic: 'diabetic-foot', title: { ar: 'الرابط العجيب: البرد والجرح', en: 'The surprising link between cold and wounds' } },
  { code: 'DecAVFRNMrg', platform: 'instagram', audience: 'patients', topic: 'diabetic-foot', title: { ar: 'افحص قدمك كل يوم', en: 'Check your feet every day' } },
  { code: 'DeYthW6Rdrz', platform: 'instagram', audience: 'patients', topic: 'when-to-seek', title: { ar: 'لا تنتظر: استشر مبكرًا', en: 'Don’t wait: get advice early' } },
];

export const videoUrl = (v: SiteVideo) =>
  v.platform === 'instagram' ? `https://www.instagram.com/reel/${v.code}/` : `https://www.youtube.com/watch?v=${v.code}`;
export const embedUrl = (v: SiteVideo) =>
  v.platform === 'instagram' ? `https://www.instagram.com/reel/${v.code}/embed/` : `https://www.youtube-nocookie.com/embed/${v.code}?autoplay=1&rel=0`;
