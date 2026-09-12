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


// Add-on prices and scope supplied by the project owner on 12 September 2026.
export const addons = [
  {
    id: "capacity", price: 1000,
    title: pair("وحدة تشغيل إضافية", "Additional operating capacity"),
    billing: pair("/ شهر", "/ month"),
    lead: pair("كبر شغلك من غير ما تغيّر نظامك.", "Grow your business. Keep the system you know."),
    description: pair("ضيف فرع جديد أو حتى 600 عربية إضافية شهريًا وخلي كل تشغيلك متجمع ومتابَع من نفس المكان.", "Add a new branch or up to 600 additional vehicles per month, and manage your entire operation in one place."),
    note: pair("مناسبة لو مغسلتك بتكبر أو حجم التشغيل زاد عن باقتك الحالية.", "For growing car washes and operations that have outgrown their current plan."),
  },
  {
    id: "setup", price: 1990,
    title: pair("التجهيز الكامل للسيستم", "Complete system setup"),
    billing: pair("مرة واحدة", "one-time payment"),
    lead: pair("سيب التجهيز علينا وابدأ على طول.", "Leave the setup to us. Get straight to work."),
    description: pair("فريق Sparkle Auto يدخل بيانات مغسلتك ويجهز إعدادات السيستم على طريقة شغلك، بدل ما تضيع وقتك في الإعداد من الصفر.", "Our team enters your car wash data and configures Sparkle Auto around your workflow, saving you the work of setting everything up from scratch."),
    note: pair("أنت تركز في شغلك… وإحنا نسلّمك السيستم جاهز للاستخدام.", "Focus on your business. We’ll hand over a system ready to use."),
  },
  {
    id: "migration", price: 3990,
    title: pair("نقل البيانات الاحترافي", "Professional data migration"),
    billing: pair("حسب حجم وتعقيد البيانات", "based on data volume and complexity"),
    lead: pair("بياناتك كتير ومعقدة؟ مش لازم تبدأ من الصفر.", "Complex records? You don’t have to start over."),
    description: pair("عندك بيانات عملاء أو خدمات أو تشغيل قديمة؟ نتولى نقل وترتيب وتجهيز بياناتك الحالية داخل Sparkle Auto بأمان وتنظيم، حسب حجم وتعقيد البيانات.", "Bring your existing customer, service and operational records with you. We securely transfer, organise and prepare your data in Sparkle Auto, with the scope tailored to its volume and complexity."),
    note: pair("احتفظ بتاريخ شغلك وانتقل للنظام الجديد بأقل مجهود ممكن.", "Keep your business history and make the transition with less effort."),
  },
];
