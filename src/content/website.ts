import { pair, cta, type Locale } from "./site";

export const websitePages = [
  { id: "home", slug: "", label: pair("الرئيسية", "Home") },
  { id: "platform", slug: "platform", label: pair("المنصة", "The platform") },
  { id: "film", slug: "film", label: pair("ليه سباركل؟", "Why Sparkle?") },
  { id: "subscription", slug: "subscription", label: pair("الأسعار", "Pricing") },
  { id: "faq", slug: "faq", label: pair("الأسئلة الشائعة", "FAQs") },
  { id: "contact", slug: "contact", label: cta },
] as const;
export type WebsitePage = (typeof websitePages)[number]["id"];
export function pageUrl(page: WebsitePage, locale: Locale) {
  const slug = websitePages.find(item => item.id === page)!.slug;
  return `${locale === "en" ? "/en" : ""}${slug ? `/${slug}` : locale === "en" ? "" : "/"}`;
}

// Product reference: 2026-10-22 source pack, main 07718566.

export const platformAreas = [
  {
    id: "operations", title: pair("الحجز والتشغيل", "Bookings & operations"),
    question: pair("كل عربية ليها مكان في الصورة.", "Every vehicle has a place in the picture."),
    body: pair("الحجوزات والـWalk-in والجدول وحالة العربيات وتوزيع المهام، في رحلة متصلة من الوصول للتسليم.", "Bookings, walk-ins, schedules, vehicle status and task assignments connect the journey from arrival to handover."),
    items: [pair("حجوزات وجدول وطاقة استيعابية", "Bookings, schedules and capacity"), pair("حالة العربية ولوحة متابعة التشغيل", "Vehicle status and the operations board"), pair("خدمات وباقات وعروض أسعار", "Services, packages and service agreements")],
    image: "bookings", tag: "01 / OPERATIONS",
  },
  {
    id: "workforce", title: pair("الفريق والـWorkforce", "Team & workforce"),
    question: pair("كل شخص عارف دوره.", "A clear role for every person."),
    body: pair("اربط الشغل بالناس اللي بتنفّذه: صلاحيات وفروع وشيفتات وحضور ورواتب وعمولات.", "Connect the work to the people doing it, with permissions, branch assignments, shifts, attendance, payroll and commissions."),
    items: [pair("حسابات وصلاحيات حسب الدور", "Accounts and role-based permissions"), pair("حضور وشيفتات وتوزيع شغل", "Attendance, shifts and assignments"), pair("رواتب وعمولات ومستحقات", "Payroll, commissions and staff payments")],
    image: "team", tag: "02 / WORKFORCE",
  },
  {
    id: "finance", title: pair("المالية والمخزون", "Finance & inventory"),
    question: pair("الأرقام مرتبطة بالشغل.", "Numbers connected to the work."),
    body: pair("راجع الإيرادات والمصروفات والتحصيل وحركة المخزون والتقارير، مع سياق العملية والفرع المسؤول.", "Review revenue, expenses, collections, inventory movements and reports in the context of the operation and branch behind them."),
    items: [pair("إيرادات ومصروفات وتحصيل", "Revenue, expenses and collections"), pair("مخزون واستهلاك ومنتجات", "Inventory, consumption and products"), pair("تقارير ومتابعة الفروع", "Reporting and branch oversight")],
    image: "finance", tag: "03 / FINANCE",
  },
  {
    id: "growth", title: pair("العملاء والحملات والنمو", "Customers, campaigns & growth"),
    question: pair("العلاقة تكمل بعد الزيارة.", "Keep the relationship going."),
    body: pair("تجربة حجز باسم مغسلتك، وملف للعميل وعربياته، مع العروض والحملات والعضويات والولاء والمتجر ومحادثات واتساب.", "A branded booking experience, customer and vehicle history, offers, campaigns, memberships, loyalty, a store and WhatsApp conversations."),
    items: [pair("حجز العميل وتاريخ زياراته", "Customer booking and visit history"), pair("عروض وحملات وولاء ومكافآت", "Offers, campaigns, loyalty and rewards"), pair("عضويات العملاء ومتجر المنتجات", "Customer memberships and product store")],
    image: "loyalty", tag: "04 / GROWTH",
  },
] as const;

// User-supplied, unchanged Arabic and English light desktop captures from 31 October 2026.
export const platformScreenshots = {
  operations: { ar: { src: "/product/2026-10-31/bookings.png", width: 1279, height: 601 }, en: { src: "/product/2026-10-31/en/bookings.png", width: 1279, height: 603 }, title: pair("الحجوزات ومتابعة الزيارات", "Bookings and visit management"), alt: pair("شاشة الحجوزات بالعربية تعرض بطاقات الزيارات والخدمات وحالة الدفع وإدارة الزيارة", "English bookings screen showing visit cards, services, payment status and visit management") },
  workforce: { ar: { src: "/product/2026-10-31/workforce.png", width: 1279, height: 604 }, en: { src: "/product/2026-10-31/en/workforce.png", width: 1279, height: 601 }, title: pair("فريق العمل والورديات", "Team and shifts"), alt: pair("شاشة إدارة فريق العمل بالعربية تعرض الورديات والحضور والرواتب والعمولات", "English workforce screen showing shifts, attendance, payroll and commissions") },
  finance: { ar: { src: "/product/2026-10-31/finance.png", width: 1279, height: 604 }, en: { src: "/product/2026-10-31/en/finance.png", width: 1276, height: 603 }, title: pair("المالية وحركة الإيرادات والمصروفات", "Finance, income and expenses"), alt: pair("شاشة المالية بالعربية تعرض الدخل والمصروفات والمستحقات وآخر الحركات", "English finance screen showing income, expenses, amounts due and recent transactions") },
  growth: { ar: { src: "/product/2026-10-31/customers.png", width: 1279, height: 601 }, en: { src: "/product/2026-10-31/en/customers.png", width: 1279, height: 604 }, title: pair("ملف العميل وتاريخ زياراته", "Customer profile and visit history"), alt: pair("ملف العميل بالعربية يعرض الحجوزات والزيارات والإنفاق والنقاط والخدمات المفضلة", "English customer profile showing bookings, visits, spending, points and favourite services") },
  whatsapp: { ar: { src: "/product/2026-10-31/whatsapp.png", width: 1279, height: 603 }, en: { src: "/product/2026-10-31/en/whatsapp.png", width: 1279, height: 604 }, title: pair("محادثات واتساب داخل المنصة", "WhatsApp conversations inside the platform"), alt: pair("صندوق واتساب بالعربية يعرض قائمة العملاء ومعاينة آخر رسالة والمحادثة ومربع الرد داخل المنصة", "English WhatsApp inbox showing contacts, latest-message previews, the conversation and reply composer inside the platform") },
} as const;

// Inbox behavior verified against the current source and the owner's description.
// Wider automatic sending is not implied by the presence of its settings UI.
const whatsappArea = {
  id: "whatsapp", title: pair("واتساب", "WhatsApp"),
  question: pair("واتساب مغسلتك، في نفس المنصة.", "Your WhatsApp. In the same workspace."),
  body: pair("رسائل العملاء على رقم مغسلتك المرتبط تظهر داخل المنصة. تابع المحادثة ورد من نفس مكان إدارة شغلك.", "Customer messages to your connected business number appear inside the platform. Follow conversations and reply from the same place you run your operation."),
  items: [
    pair("رسائل العملاء وردود الفريق في صندوق واحد", "Customer messages and team replies in one inbox"),
    pair("معاينة آخر رسالة وتوقيتها", "Latest-message previews and timestamps"),
    pair("يتطلب ربط رقم المغسلة وتفعيل الخدمة أولًا", "Business-number connection and service activation required"),
  ],
  tag: "05 / WHATSAPP",
} as const;

// Every Platform section uses the same renderer and layout, including WhatsApp.
export const platformSections = [...platformAreas, whatsappArea] as const;
export const websiteTitles = {
  home: pair("تشغيل مغسلتك وفريقك ونموك، في منصة واحدة", "Your car wash. Your team. Your growth. One platform."),
  platform: pair("منصة تربط كل أجزاء شغلك", "One platform for a connected operation"),
  film: pair("ليه سباركل؟", "Why Sparkle?"),
  subscription: pair("الأسعار", "Pricing"),
  faq: pair("اسأل براحتك. الإجابة هنا.", "Good questions. Clear answers."),
  contact: cta,
};
export const filmChapters = [
  { seconds: 0, time: "00:00", title: pair("يوم في المغسلة", "A day at the car wash") },
  { seconds: 140, time: "02:20", title: pair("الحجز والتشغيل", "Bookings and operations") },
  { seconds: 220, time: "03:40", title: pair("العملاء وفرص النمو", "Customers and growth") },
  { seconds: 400, time: "06:40", title: pair("المتابعة والأرقام", "Oversight and numbers") },
  { seconds: 500, time: "08:20", title: pair("تجربة العميل", "The customer experience") },
];
