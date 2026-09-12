import { pair } from "./site";
export const plans = [
  {
    id: "operations",
    title: pair("التشغيل", "Operations"),
    monthly: 1290,
    annual: 12900,
    description: pair(
      "لتنظيم التشغيل اليومي داخل فرع واحد.",
      "For organising day-to-day operations at a single branch.",
    ),
    features: [
      pair("فرع واحد · حتى 600 عربية*", "One branch · up to 600 vehicles*"),
      pair("الحجوزات والـWalk-ins", "Bookings and walk-ins"),
      pair("الجدول وحالة العربيات", "Schedule and vehicle status"),
      pair("الخدمات والباقات", "Services and packages"),
      pair("الموظفين والصلاحيات", "Employees and permissions"),
      pair("متابعة الفريق والتشغيل", "Team and operations tracking"),
      pair(
        "أدوات الإدارة اليومية الأساسية",
        "Essential day-to-day management tools",
      ),
    ],
  },
  {
    id: "growth",
    title: pair("النمو", "Growth"),
    monthly: 1990,
    annual: 19900,
    description: pair(
      "لتطوير تجربة العميل وزيادة رجوعه.",
      "For developing the customer experience and repeat-visit relationship.",
    ),
    features: [
      pair("كل مميزات باقة التشغيل", "Everything in Operations"),
      pair("تجربة حجز أفضل للعميل", "An improved customer booking experience"),
      pair("تاريخ العملاء والعربيات", "Customer and vehicle history"),
      pair("العروض والخصومات", "Offers and discounts"),
      pair("الولاء والمكافآت", "Loyalty and rewards"),
      pair("متابعة رجوع العملاء", "Tools to track returning customers"),
      pair(
        "أدوات لبناء علاقة أطول مع العميل",
        "Tools supporting longer customer relationships",
      ),
    ],
  },
  {
    id: "expansion",
    title: pair("التوسع", "Expansion"),
    monthly: null,
    annual: null,
    description: pair(
      "لأصحاب الفروع والتشغيل الأكبر.",
      "For multi-branch and larger operations.",
    ),
    features: [
      pair("إدارة عدة فروع", "Multi-branch management"),
      pair("رؤية مركزية للتشغيل", "A central view of operations"),
      pair("صلاحيات حسب الفرع والدور", "Branch- and role-based permissions"),
      pair("مقارنة ومتابعة الفروع", "Branch comparison and monitoring"),
      pair(
        "إعداد يناسب هيكل الإدارة",
        "Setup that fits the management structure",
      ),
      pair("تجهيز وتطبيق موجه", "Guided implementation"),
    ],
  },
];
export const formFields = [
  {
    name: "name",
    label: pair("الاسم", "Name"),
    type: "text",
    auto: "name",
    required: true,
  },
  {
    name: "phone",
    label: pair("رقم الموبايل أو WhatsApp", "Mobile or WhatsApp number"),
    type: "tel",
    auto: "tel",
    required: true,
  },
  {
    name: "business",
    label: pair("اسم المغسلة", "Car-wash name"),
    type: "text",
    auto: "organization",
    required: true,
  },
  {
    name: "area",
    label: pair("المحافظة أو المنطقة", "Governorate or area"),
    type: "text",
    auto: "address-level1",
    required: true,
  },
  {
    name: "branches",
    label: pair("عدد الفروع", "Number of branches"),
    type: "number",
    auto: "off",
    required: true,
  },
  {
    name: "cars",
    label: pair("متوسط العربيات في اليوم", "Average vehicles per day"),
    type: "number",
    auto: "off",
    required: true,
  },
  {
    name: "role",
    label: pair("دورك في المغسلة", "Your role at the car wash"),
    type: "text",
    auto: "organization-title",
    required: true,
  },
  {
    name: "current",
    label: pair(
      "بتدير التشغيل حاليًا بإيه؟",
      "How do you manage operations today?",
    ),
    type: "text",
    auto: "off",
    required: true,
  },
  {
    name: "time",
    label: pair("أنسب وقت للتواصل", "Preferred contact time"),
    type: "text",
    auto: "off",
    required: true,
  },
];
export const problems = [
  pair("متابعة الفروع", "Branch oversight"),
  pair("الحجوزات وتنظيم المواعيد", "Bookings and scheduling"),
  pair("معرفة حالة العربيات", "Vehicle status"),
  pair("قفلة اليوم وفروق التسجيل", "Daily closing and recording discrepancies"),
  pair("متابعة الفريق والصلاحيات", "Team and permissions"),
  pair("المخزون", "Inventory"),
  pair("رجوع العملاء والولاء", "Returning customers and loyalty"),
  pair("مشكلة تانية", "Something else"),
];

