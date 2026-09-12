export type Locale = "ar" | "en";
export type Pair = { ar: string; en: string };
export const pair = (ar: string, en: string): Pair => ({ ar, en });
export const pick = (value: Pair, locale: Locale) => value[locale];
export const sourceStatus = "source_draft" as const;
export const hero = {
  eyebrow: pair(
    "نظام إدارة متكامل لمغاسل السيارات",
    "An integrated management system for car washes",
  ),
  title: pair(
    "مش لازم تفضل في المغسلة عشان تكون مسيطر عليها.",
    "You don’t have to stay at the car wash to stay in control.",
  ),
  first: pair("مش لازم تفضل", "You don’t have to"),
  mid: pair("في المغسلة", "stay at the car wash"),
  last: pair("عشان تكون", "to stay"),
  accent: pair("مسيطر عليها.", "in control."),
  body: pair(
    "Sparkle Auto بيجمع تشغيل مغسلتك في مكان واحد: الحجوزات، حالة كل عربية، الفريق، المخزون، الإيرادات، والعملاء.",
    "Sparkle Auto brings your operation into one place: bookings, vehicle status, your team, inventory, revenue and customers.",
  ),
  more: pair(
    "بدل ما تفضل تتصل وتسأل وتجمع تقارير… افتح واعرف إيه اللي بيحصل في مغسلتك، حتى لو إنت بعيد عنها.",
    "Instead of calling around and piecing reports together, see what is happening at your car wash—even when you are away.",
  ),
  reassurance: pair(
    "مراجعة قصيرة نفهم فيها طريقة شغلك، ونقولك بصراحة هل Sparkle Auto مناسب لمغسلتك ولا لأ.",
    "A short review to understand how you work and tell you honestly whether Sparkle Auto fits your car wash.",
  ),
};
export const cta = pair("احجز مراجعة تشغيل", "Book an Operations Review");
export const nav = [
  { id: "system", label: pair("السيستم", "The System") },
  { id: "strategies", label: pair("طريقة الشغل", "How It Works") },
  { id: "setup", label: pair("التجهيز", "Setup") },
  { id: "pricing", label: pair("الأسعار", "Pricing") },
  { id: "faq", label: pair("الأسئلة الشائعة", "FAQs") },
];
export const painQuestions = [
  pair("العربية دي خلصت ولا لسه؟", "Is this car finished yet?"),
  pair("مين حجز الساعة أربعة؟", "Who booked for four o’clock?"),
  pair("الحساب النهارده كام؟", "What’s today’s total?"),
  pair("العامل حضر ولا لأ؟", "Did the team member turn up?"),
  pair("الشامبو خلص إمتى؟", "When did we run out of shampoo?"),
  pair("الفرع التاني الدنيا فيه ماشية إزاي؟", "How is the other branch doing?"),
];
export const audience = [
  pair(
    "عندك فرع شغال وزحمة التشغيل بدأت تبقى صعبة في المتابعة.",
    "You have an operating branch and busy periods are becoming difficult to oversee.",
  ),
  pair(
    "عندك فرعين أو أكتر وكل فرع بيبعتلك تقرير بطريقة مختلفة.",
    "You have two or more branches, each reporting in a different way.",
  ),
  pair(
    "الحجوزات عندك موزعة بين المكالمات وWhatsApp والدفتر.",
    "Bookings are spread across calls, WhatsApp and a notebook.",
  ),
  pair(
    "محتاج تعرف حالة كل عربية ومين المسؤول عنها.",
    "You need to know each vehicle’s status and who is responsible for it.",
  ),
  pair(
    "عايز تربط الإيراد بالخدمة والعربية والفرع.",
    "You want to connect revenue to the service, vehicle and branch.",
  ),
  pair(
    "بتكتشف نقص المخزون وقت الزحمة.",
    "You discover inventory shortages during the rush.",
  ),
  pair(
    "عايز فريقك يشتغل بطريقة واضحة حتى لو إنت مش موجود.",
    "You want your team to follow a clear process when you are not there.",
  ),
  pair(
    "عايز تعرف العميل زارك إمتى، عمل إيه، وهل رجع تاني ولا لأ.",
    "You need to understand when a customer visited, what they used and whether they returned.",
  ),
  pair(
    "ناوي تكبر وعايز التشغيل يبقى قابل للتكرار.",
    "You plan to grow and want an operation you can repeat.",
  ),
];
export type Chapter = {
  id: string;
  title: Pair;
  body: Pair;
  proof: Pair;
  screen: string;
};
export const strategies: Chapter[] = [
  {
    id: "strategy-journey",
    title: pair(
      "كل عربية يكون ليها مسار واضح",
      "Give every vehicle a clear journey",
    ),
    body: pair(
      "من الحجز أو الـWalk-in، لحد دخول العربية، إسنادها للعامل، تنفيذ الخدمة، المراجعة، الدفع والتسليم. لما كل مرحلة تبقى واضحة، الأسئلة بتقل والتأخير بيبان بدري.",
      "From a booking or walk-in through arrival, assignment, service, review, payment and handover. When every stage is clear, there are fewer questions and delays become visible earlier.",
    ),
    proof: pair(
      "كل عربية ليها حالة حالية، خدمة، مسؤول وسجل واضح للحركة.",
      "Each vehicle has a current status, service, responsible person and a clear activity history.",
    ),
    screen: "screen-car-status",
  },
  {
    id: "strategy-money",
    title: pair(
      "كل رقم يكون معروف جاي منين",
      "Know where every number comes from",
    ),
    body: pair(
      "الزحمة مش معناها تلقائيًا إن الحساب مظبوط. المهم إن كل خدمة اتعملت تتسجل، وكل خصم أو مصروف أو طريقة دفع تكون واضحة.",
      "A busy car wash does not automatically mean the accounts are right. Every delivered service needs to be recorded, along with each discount, expense and payment method.",
    ),
    proof: pair(
      "الإيراد بيتربط بالعربية والخدمة والفرع، وتقدر تقارن بين المتوقع والفعلي وتراجع قفلة اليوم.",
      "Revenue connects to the vehicle, service and branch, so you can compare expected and recorded amounts and review the daily close.",
    ),
    screen: "screen-finance",
  },
  {
    id: "strategy-roles",
    title: pair("كل شخص يكون عارف دوره", "Make every role clear"),
    body: pair(
      "صاحب المغسلة محتاج الصورة الكاملة، مدير الفرع محتاج تشغيل اليوم، الكاشير محتاج الحساب، والعامل محتاج يعرف مهمته.",
      "The owner needs the full picture, the branch manager needs today’s operation, the cashier needs payment information and the worker needs their assigned task.",
    ),
    proof: pair(
      "كل مستخدم ليه دور وصلاحيات مناسبة، مع متابعة الحضور والشيفتات والمسؤوليات.",
      "Each user has an appropriate role and permissions, with visibility into attendance, shifts and responsibilities.",
    ),
    screen: "screen-team",
  },
  {
    id: "strategy-retention",
    title: pair(
      "العلاقة ما تخلصش بعد الغسلة",
      "Keep the relationship going after the wash",
    ),
    body: pair(
      "العميل اللي خرج من المغسلة مش المفروض يختفي لحد ما يفتكرك بالصدفة. كل زيارة بتساعدك تفهم العميل وعربيته والخدمات اللي استخدمها.",
      "A customer should not disappear until they happen to remember you. Every visit helps you understand the customer, their vehicle and the services they use.",
    ),
    proof: pair(
      "تاريخ العميل، عربياته، زياراته، محفظته، عروضه ونظام الولاء موجودين في ملف واحد.",
      "Customer history, vehicles, visits, wallet, offers and loyalty information live in one record.",
    ),
    screen: "screen-loyalty",
  },
  {
    id: "strategy-branches",
    title: pair(
      "الفرع الجديد يكرر النظام، مش الفوضى",
      "Repeat the system—not the confusion",
    ),
    body: pair(
      "التوسع الحقيقي مش إنك تفتح عنوان جديد وتضاعف المكالمات والتقارير. التوسع إنك تطبق نفس الخدمات والصلاحيات وطريقة القفلة وتجربة العميل في كل فرع.",
      "Expansion is not just another address and twice as many calls. It means a consistent approach to services, permissions, daily closing and customer experience across branches.",
    ),
    proof: pair(
      "تقدر تتابع الفروع من مكان واحد، مع فصل البيانات والصلاحيات والتقارير حسب كل فرع.",
      "Follow branches from one place, with branch-specific data, permissions and reporting.",
    ),
    screen: "screen-overview",
  },
];
export const screens = [
  {
    id: "screen-overview",
    title: pair("الصورة الكاملة", "Overview"),
    question: pair(
      "إيه اللي بيحصل في المغسلة دلوقتي؟",
      "What is happening at the car wash right now?",
    ),
    body: pair(
      "شوف صورة سريعة عن التشغيل، الحجوزات، العربيات، الإيرادات والتنبيهات المهمة بدل ما تجمع الصورة من كذا شخص.",
      "Get a quick view of operations, bookings, vehicles, revenue and important alerts instead of collecting the picture from several people.",
    ),
  },
  {
    id: "screen-bookings",
    title: pair("الحجوزات والجدول", "Bookings & schedule"),
    question: pair(
      "مين حاجز؟ إمتى؟ وفي أي فرع؟",
      "Who is booked, when, and at which branch?",
    ),
    body: pair(
      "الحجوزات والـWalk-ins موجودين في مكان واحد، بميعاد واضح وحالة واضحة، بدل ما الحجز يضيع بين رسالة ومكالمة ودفتر.",
      "Bookings and walk-ins are kept together with a clear time and status, rather than getting lost between a message, a call and a notebook.",
    ),
  },
  {
    id: "screen-car-status",
    title: pair("حالة العربيات", "Vehicle status"),
    question: pair(
      "العربية وصلت لفين ومين مسؤول عنها؟",
      "Where has this vehicle reached, and who is responsible?",
    ),
    body: pair(
      "تابع كل عربية من لحظة وصولها لحد التسليم، واعرف المرحلة الحالية والمسؤول عنها من غير ما تلف وتسأل.",
      "Follow each vehicle from arrival to handover and see its current stage and responsible person without walking around to ask.",
    ),
  },
  {
    id: "screen-finance",
    title: pair("المالية والقفلة", "Finance & daily closing"),
    question: pair(
      "دخل كام؟ اتسجل كام؟ والفرق جاي منين؟",
      "What came in, what was recorded, and where is the difference?",
    ),
    body: pair(
      "راجع الإيرادات والمصروفات وطرق الدفع والخدمات المسجلة، واربط الرقم بالتشغيل اللي حصل فعلًا.",
      "Review revenue, expenses, payment methods and recorded services, and connect the numbers to the work that actually happened.",
    ),
  },
  {
    id: "screen-team",
    title: pair("الفريق والصلاحيات", "Team & permissions"),
    question: pair(
      "مين حضر؟ مين مسؤول؟ وكل شخص يقدر يعمل إيه؟",
      "Who attended, who is responsible, and what can each person do?",
    ),
    body: pair(
      "نظّم الموظفين والشيفتات والصلاحيات، وخلي كل شخص يشوف ويستخدم الجزء المناسب لدوره.",
      "Organise employees, shifts and permissions so each person sees and uses the part relevant to their role.",
    ),
  },
  {
    id: "screen-inventory",
    title: pair("المخزون", "Inventory"),
    question: pair(
      "إيه اللي قرب يخلص قبل ما يفاجئنا وقت الزحمة؟",
      "What is running low before the rush?",
    ),
    body: pair(
      "تابع حركة الأصناف والاستهلاك والرصيد، وحدد مسؤولية المراجعة وإعادة الطلب.",
      "Follow item movements, consumption and balances, and make responsibility for review and reordering clear.",
    ),
  },
  {
    id: "screen-loyalty",
    title: pair("العملاء والولاء", "Customers & loyalty"),
    question: pair(
      "مين بيرجع؟ ومين مبقاش بيجيلنا؟",
      "Who is coming back, and who has stopped visiting?",
    ),
    body: pair(
      "احتفظ بتاريخ العميل وعربياته وزياراته، واعمل عروضًا ومكافآت تناسب علاقتك بيه بدل الرسائل العشوائية.",
      "Keep customer, vehicle and visit history together, and build offers and rewards around that relationship instead of sending unrelated messages.",
    ),
  },
];
export const journey = [
  pair(
    "العميل يحجز أو يدخل Walk-in.",
    "The customer books or arrives as a walk-in.",
  ),
  pair("الحجز يظهر عند الاستقبال.", "The booking appears at reception."),
  pair(
    "العربية تتسجل وتبدأ رحلة الخدمة.",
    "The vehicle is registered and starts its service journey.",
  ),
  pair(
    "المهمة تتحدد والمسؤول يعرف دوره.",
    "The task is assigned and the responsible person knows their role.",
  ),
  pair("الخدمات والإضافات تتسجل.", "Services and extras are recorded."),
  pair("الحساب يتقفل بطريقة واضحة.", "Payment is closed out clearly."),
  pair(
    "الزيارة تتحفظ في تاريخ العميل.",
    "The visit is saved in the customer’s history.",
  ),
  pair(
    "صاحب المغسلة يراجع الصورة كاملة من مكان واحد.",
    "The owner reviews the full picture from one place.",
  ),
];
export const setup = [
  {
    title: pair("نفهم تشغيلك", "Understand your operation"),
    body: pair(
      "نراجع عدد الفروع، الخدمات، الفريق، طريقة الحجوزات والقفلة، وأكتر مشكلة محتاج تحلها.",
      "Review branches, services, team structure, bookings, daily closing and the most important problem to solve.",
    ),
  },
  {
    title: pair("نجهّز السيستم", "Configure the system"),
    body: pair(
      "نضيف الفروع والخدمات والأسعار والمستخدمين والصلاحيات والإعدادات المناسبة لطريقة شغلك.",
      "Add branches, services, prices, users, permissions and settings that match your way of working.",
    ),
  },
  {
    title: pair("ندرّب كل شخص على دوره", "Train each role"),
    body: pair(
      "صاحب المغسلة، مدير الفرع، الاستقبال، الكاشير والعامل؛ كل شخص يتعلم الجزء اللي هيستخدمه فعلًا.",
      "The owner, branch manager, reception, cashier and worker learn the part they will actually use.",
    ),
  },
  {
    title: pair("نبدأ على تشغيل حقيقي", "Start with real operations"),
    body: pair(
      "نشغّل السيستم على عربيات وحجوزات وبيانات حقيقية، مش Demo بعيد عن واقع المغسلة.",
      "Use actual vehicles, bookings and working data rather than a demonstration disconnected from your car wash.",
    ),
  },
  {
    title: pair("نراجع النتيجة", "Review the result"),
    body: pair(
      "نشوف إيه اللي اشتغل، وإيه اللي محتاج يتظبط، وهل السيستم أثبت قيمة واضحة تستاهل إنك تكمل عليه.",
      "Look at what worked, what needs adjusting and whether the system has shown enough value to continue.",
    ),
  },
];
