import { pair, type Pair } from "./site";
import { pricingOptions, pricingTerms } from "./pricing";

const pricingAnswer = pair(
  pricingOptions.map(p => `${p.title.ar}: ${p.oneTime.toLocaleString("ar-EG")} جنيه للدفع مرة واحدة، مع صيانة ${p.maintenance.toLocaleString("ar-EG")} جنيه شهريًا بعد ${pricingTerms.maintenanceAfterMonths} شهور. أو اشتراك ${p.monthly.toLocaleString("ar-EG")} جنيه شهريًا شامل الصيانة، بحد أدنى ${pricingTerms.minimumSubscriptionMonths} شهر.`).join("\n\n"),
  pricingOptions.map(p => `${p.title.en}: EGP ${p.oneTime.toLocaleString("en-GB")} pay-once, with EGP ${p.maintenance.toLocaleString("en-GB")} monthly maintenance after ${pricingTerms.maintenanceAfterMonths} months. Alternatively, EGP ${p.monthly.toLocaleString("en-GB")} per month, including maintenance, with a ${pricingTerms.minimumSubscriptionMonths}-month minimum.`).join("\n\n"),
);

export type FaqCategory = "system" | "value" | "operation" | "fit" | "setup" | "commercial";

export const faqCategories: { id: "all" | FaqCategory; label: Pair }[] = [
  { id: "all", label: pair("كل الأسئلة", "All questions") },
  { id: "system", label: pair("عن المنصة", "The platform") },
  { id: "value", label: pair("القيمة والفرق", "Value") },
  { id: "operation", label: pair("التشغيل اليومي", "Operations") },
  { id: "fit", label: pair("مناسب لمين؟", "Who it fits") },
  { id: "setup", label: pair("التجهيز والدعم", "Setup & support") },
  { id: "commercial", label: pair("الاشتراك والتكلفة", "Plans & pricing") },
];

const item = (id: number, category: FaqCategory, question: Pair, answer: Pair) => ({ id, category, question, answer });

const faqItems = [
  item(1, "system", pair("هل فيه فيديو يشرح سباركل أوتو؟", "Is there a video showing Sparkle Auto?"), pair(
    "أيوه. صفحة الفيلم بتشرح رحلة تشغيل المغسلة وإزاي أجزاء المنصة بتكمل بعض. وتقدر تشوف لقطات حقيقية للشاشات في صفحة المنصة، وتتواصل معانا عشان نساعدك تبدأ استخدام المنصة على شغلك.",
    "Yes. The film explains the car wash journey and how the platform connects it. The Platform page shows actual product screens. Tell us about your business so we can help you get started with the platform.",
  )),
  item(2, "value", pair("إيه الفرق بين سباركل أوتو وبرنامج حسابات أو كاشير عادي؟", "How is Sparkle Auto different from accounting or POS software?"), pair(
    "الحسابات جزء من Sparkle Auto، لكن المنصة بتربط شغل المغسلة كله: الحجز والجدول، حالة العربيات ولوحة التشغيل، الفريق والورديات والرواتب والعمولات، الإيرادات والمصروفات والمخزون، والعملاء والحملات والولاء.\n\nوفي نفس مساحة العمل تقدر تتابع واتساب المرتبط بمغسلتك وتوصل لدعم المنصة. الفكرة إن الشغل والناس والفلوس وعلاقة العميل يبقوا متصلين، بدل ما كل جزء يعيش في برنامج لوحده.",
    "Finance is one part of Sparkle Auto. The platform connects bookings and schedules, vehicle progress and the operations board, staff and shifts, payroll and commissions, revenue and expenses, inventory, and customer relationships, campaigns and loyalty.\n\nYour connected WhatsApp inbox and platform support sit alongside that work. The aim is to connect the operation, people, money and customer experience in one place.",
  )),
  item(3, "value", pair("ليه أختار سباركل أوتو بدل ما أعمل سيستم خاص؟", "Why choose Sparkle Auto instead of building a custom system?"), pair(
    "لأن بناء سيستم بنفس حجم وجودة سباركل أوتو مش مجرد تصميم كام شاشة. هتحتاج تحليل وتشغيل وتصميم وبرمجة واختبارات وقاعدة بيانات واستضافة وأمان وصيانة وتحديثات مستمرة، وده معناه تكلفة أولية كبيرة جدًا ووقت تطوير طويل.\n\nوحتى بعد ما السيستم يخلص، هيفضل عندك مصاريف مستمرة للاستضافة وقاعدة البيانات والصيانة وحل المشاكل والتطوير.\n\nمع سباركل أوتو إنت بتبدأ فورًا بنظام تم بناؤه وتطويره بالفعل، وبتستفيد من التحديثات والدعم والتطوير المستمر من غير ما تتحول من صاحب مغسلة لصاحب مشروع برمجي كمان.",
    "A system at Sparkle Auto’s scope is more than a few screens. It requires operational analysis, product design, engineering, testing, databases, hosting, security, maintenance and ongoing updates. That means a large initial investment, a long build and continuing costs after launch.\n\nWith Sparkle Auto, you start with an established product and benefit from support and continuous development without having to run a software project alongside your car wash.",
  )),
  item(4, "value", pair("إيه القيمة اللي هاخدها من سباركل أوتو؟", "What value do I actually get from Sparkle Auto?"), pair(
    "الهدف مش إن يبقى عندك «برنامج جديد»؛ الهدف إن طريقة إدارة المغسلة نفسها تبقى أفضل.\n\nبدل ما الحجوزات تبقى في المكالمات والواتساب، والأرقام في دفتر، والمخزون عند موظف، وحالة العربيات محتاجة سؤال… يبقى عندك نظام واحد يربط كل ده ببعضه.\n\nفتعرف شغلك ماشي إزاي، فريقك بيعمل إيه، العربيات وصلت لفين، دخلك ومصروفاتك، عملاءك ومخزونك من غير ما كل معلومة تحتاج مكالمة. القيمة الحقيقية في الوقت والتنظيم والسيطرة على شغلك حتى وإنت مش واقف في المغسلة طول اليوم.",
    "The value is not simply having another piece of software. It is running the car wash better.\n\nBookings, vehicle progress, team activity, income, expenses, customers and inventory sit in one connected system instead of being scattered across calls, WhatsApp, notebooks and individual employees. You save time, gain clarity and stay in control even when you are away from the site.",
  )),
  item(5, "value", pair("أعرف إزاي إن سباركل أوتو مناسب لمغسلتي؟", "How do I know Sparkle Auto fits my car wash?"), pair(
    "ابدأ بإنك تعرّفنا بطريقة شغلك والمشاكل اللي عايز تحلّها. وللمغاسل الجديدة، فترة التقييم بتساعدك تختبر المنصة على بيانات وتشغيل حقيقي.\n\nراجع النتيجة مع فريقك: هل الحجوزات أوضح؟ متابعة العربيات أسهل؟ الإيرادات والمصروفات والمسؤوليات مرتبطة بالشغل؟ قرارك يبقى مبني على استخدام فعلي.",
    "Start by telling us about your workflow and the problems you want to solve. For new businesses, the evaluation period lets you try the platform with real data and operations.\n\nReview the result with your team: are bookings clearer, vehicles easier to follow, and money and responsibilities connected to the work? Base the decision on actual use.",
  )),
  item(6, "system", pair("إزاي سباركل أوتو يساعد مغسلتي فعليًا؟", "How does Sparkle Auto help my car wash in practice?"), pair(
    "بدل ما تجمع صورة اليوم من مكالمات ودفاتر وبرامج منفصلة، Sparkle Auto بيربط الحجوزات والجدول والتشغيل والفريق والمالية والمخزون والعملاء والحملات ومحادثات واتساب في منصة واحدة.\n\nتتابع كل عربية، توزّع المسؤوليات، تراجع الإيراد والمصروف، وتكمّل علاقتك بالعميل بعد الزيارة. وكل شخص بيستخدم الأجزاء المناسبة لصلاحياته، مع الوصول لدعم المنصة من نفس مساحة العمل.",
    "Sparkle Auto brings bookings, schedules, operations, workforce, finance, inventory, customers, campaigns and WhatsApp conversations into one platform.\n\nFollow each vehicle, assign responsibility, review income and expenses, and keep the customer relationship going after the visit. Each person uses the parts allowed by their permissions, with platform support accessible from the same workspace.",
  )),
  item(7, "setup", pair("لو بدأت معاكم، إزاي هنطبق سباركل أوتو على مغسلتي؟", "How will Sparkle Auto be introduced into my car wash?"), pair(
    "مش هنديك حساب ونقولك اتصرف.\n\nبنبدأ نفهم طريقة تشغيل مغسلتك، وبعدها نجهز الفروع والخدمات والأسعار ومواعيد العمل والموظفين والصلاحيات، ونساعدك تبدأ تستخدم السيستم على شغلك الحقيقي خطوة بخطوة.",
    "We do not simply hand you an account and leave you to figure it out. We first understand how your car wash works, then configure branches, services, prices, opening hours, employees and permissions. From there, we help your team start using Sparkle Auto with real work, one step at a time.",
  )),
  item(8, "operation", pair("أنا بستقبل الحجوزات من واتساب والمكالمات والدفتر… سباركل هيغير ده إزاي؟", "I take bookings through WhatsApp, calls and a notebook. What changes?"), pair(
    "بدل ما الحجوزات تبقى موزعة بين كذا مكان، بتجمعها في جدول واحد واضح.\n\nتقدر تدي العميل لينك يحجز منه بنفسه، وفي نفس الوقت تضيف الحجوزات اللي جتلك بالمكالمة أو واتساب. بالتالي مش لازم كل حجز يعدي عليك شخصيًا علشان تعرف اليوم ماشي إزاي.",
    "All bookings move into one clear schedule. Customers can book through a mobile link, while your team can still add bookings received by phone or WhatsApp. You get one view of the day without every booking having to pass through you personally.",
  )),
  item(9, "fit", pair("أغلب عملائي بييجوا من غير حجز، هل سباركل لسه هيفيدني؟", "Most customers arrive without booking. Is Sparkle Auto still useful?"), pair(
    "أيوه. سباركل مش معمول للحجز الأونلاين بس.\n\nالعربية اللي جت مباشرة للمغسلة تقدر تدخلها وتتابع حالتها وتشغيلها زي أي عربية تانية، وبالتالي تقدر تستخدم السيستم سواء شغلك بيعتمد على الحجوزات أو الـWalk-ins أو الاتنين.",
    "Yes. Sparkle Auto is not limited to online bookings. Walk-in vehicles can be added and tracked through the same operational flow, so the system works whether your business is booking-led, walk-in-led or a mix of both.",
  )),
  item(10, "setup", pair("أنا والموظفين مش متعودين على السيستمات… الموضوع هيكون صعب؟", "My team is not used to software. Will it be difficult?"), pair(
    "الهدف إن كل شخص يستخدم الجزء اللي يخص شغله فقط، مش إن كل موظف يتعلم النظام كله.\n\nوكمان بنساعدكم في مرحلة البداية والتجهيز علشان الانتقال يكون تدريجي وطريقة التشغيل الجديدة تبقى واضحة للفريق.",
    "Each person only needs to learn the part relevant to their role, not the entire platform. We also support the team during setup so the transition is gradual and the new way of working is clear.",
  )),
  item(11, "value", pair("لو عندي مدير وأنا واثق فيه، ليه أحتاج سباركل أوتو؟", "Why do I need Sparkle Auto if I already trust my manager?"), pair(
    "وجود مدير كويس حاجة مهمة جدًا، وسباركل مش معمول علشان يستبدله.\n\nهو بيساعد المدير يشتغل بطريقة منظمة، وفي نفس الوقت يخليك تتابع الصورة بنفسك بدل ما كل معلومات المغسلة تفضل موجودة عند شخص واحد.",
    "A strong manager is valuable, and Sparkle Auto is not designed to replace them. It gives the manager a more organised way to work while giving you direct visibility, so the business’s information does not live with one person alone.",
  )),
  item(12, "system", pair("هل أقدر أتابع المغسلة وأنا مش موجود فيها؟", "Can I follow the car wash when I am away?"), pair(
    "أيوه، ودي من أهم الأفكار اللي سباركل أوتو معمول علشانها.\n\nبدل ما كل ما تبعد عن المغسلة تبدأ تتصل وتسأل: كام عربية؟ مين شغال؟ دخلنا كام؟ العربية دي خلصت؟ افتح واعرف.\n\nمش لازم تفضل في المغسلة عشان تكون مسيطر عليها.",
    "Yes. That is one of the main reasons Sparkle Auto exists. Instead of calling to ask how many vehicles are in, who is working, what the day earned or whether a car is finished, you can open the system and see. You do not have to stay at the car wash to stay in control.",
  )),
  item(13, "fit", pair("هل سباركل أوتو مناسب للمغاسل الصغيرة ومراكز العناية والـDetailing والـPPF؟", "Does it suit small washes, detailing centres and PPF businesses?"), pair(
    "أيوه. النظام مش مخصص لنوع واحد فقط من مراكز السيارات.\n\nممكن يناسب مغسلة سيارات، Detailing Center، مركز عناية، مركز أفلام حماية PPF وغيرها، وبيتم ضبط الخدمات والأسعار وطريقة التشغيل حسب طبيعة النشاط.",
    "Yes. The system can be configured for car washes, detailing and care centres, PPF businesses and related automotive services. Services, prices and workflows are adjusted to the way each business operates.",
  )),
  item(14, "fit", pair("هل سباركل أوتو ينفع للمغسلة المتنقلة Mobile Car Wash؟", "Can Sparkle Auto support a mobile car wash?"), pair(
    "أيوه. سباركل أوتو يقدر يخدم نموذج المغسلة المتنقلة، خصوصًا في تنظيم الحجوزات والعملاء والخدمات والمواعيد ومتابعة التشغيل والمالية.\n\nوبنظبط طريقة الاستخدام حسب نموذج شغلك بدل ما نفترض إن كل المغاسل بتشتغل من فرع ثابت.",
    "Yes. It can support a mobile car wash by organising bookings, customers, services, appointments, operations and finances. We configure the workflow around your mobile model rather than assuming every car wash operates from a fixed branch.",
  )),
  item(15, "fit", pair("لو المغسلة عندها نشاط جانبي زي غسيل السجاد أو خدمات تانية، ينفع؟", "Can I include side services such as carpet cleaning?"), pair(
    "في خدمات جانبية كتير ممكن تتضاف كخدمات داخل النشاط بأسعارها وتنظيمها.\n\nولو عندك نشاط جانبي طريقة تشغيله مختلفة تمامًا عن تشغيل السيارات، بنراجع معاك طريقة شغله الأول ونحدد إيه اللي نقدر نديره جوه نفس النظام بشكل مناسب بدل ما نوعدك بحاجة مش هتخدمك فعلًا.",
    "Many related services can be added with their own pricing and organisation. If a side business operates very differently from vehicle care, we review its workflow first and tell you honestly what can be managed well inside the same system.",
  )),
  item(16, "value", pair("هل سباركل أوتو هيجيبلي عملاء جدد؟", "Will Sparkle Auto bring me new customers?"), pair(
    "سباركل أوتو مش شركة إعلانات بتوعدك بعدد عملاء معين.\n\nلكن النظام بيساعدك تبني قاعدة عملاء منظمة، تعرف تاريخ العميل، تتابع رجوعه، تستخدم العروض والولاء والحملات، وتعرف مين مبقاش بيزورك وتبدأ تشتغل على رجوعه.\n\nيعني بدل ما العميل يغسل ويمشي وتبدأ من الصفر كل مرة، يبقى عندك نظام يساعدك تستفيد من قاعدة عملائك بشكل أفضل.",
    "Sparkle Auto is not an advertising service and does not promise a set number of new customers. It helps you build an organised customer base, understand visit history, track returns and use offers, loyalty and campaigns more effectively. The value is making better use of the relationships you already build.",
  )),
  item(17, "operation", pair("هل العميل لازم ينزل تطبيق علشان يحجز؟", "Does the customer need to download an app to book?"), pair(
    "لا. العميل يقدر يحجز من لينك على الموبايل من غير تحميل تطبيق، وده بيخلي تجربة الحجز أسهل وأسرع.",
    "No. Customers can book from a mobile link without installing an app, keeping the booking experience quick and simple.",
  )),
  item(18, "fit", pair("لو عندي أكتر من فرع، أقدر أتابعهم كلهم؟", "Can I manage more than one branch?"), pair(
    "أيوه. تقدر تدير الفروع من نفس النظام وتتابع بيانات وتشغيل كل فرع بشكل منفصل، وفي نفس الوقت يبقى عندك رؤية أوضح للمشروع كله.",
    "Yes. You can manage branches from the same system, follow each branch separately and retain a clearer view of the business as a whole.",
  )),
  item(19, "commercial", pair("إيه أسعار سباركل أوتو وطرق الدفع؟", "What does Sparkle Auto cost, and how can I pay?"), pricingAnswer),
  item(20, "commercial", pair("هل فيه تكاليف إضافية؟", "Are there additional costs?"), pair(
    "في خيار الدفع مرة واحدة، الصيانة الشهرية بتبدأ بعد 6 شهور. الاشتراك الشهري شامل الصيانة. الفروع الإضافية ليها الرسوم الموضحة في صفحة الأسعار.\n\nأي خدمات إضافية، زي تجهيز أو نقل بيانات أو استخدام خدمات متصلة، بنراجع نطاقها وتكلفتها معاك قبل الاتفاق.",
    "With pay-once, monthly maintenance starts after six months. The monthly subscription includes maintenance. Additional branches have the fees shown on the Pricing page.\n\nAdditional services such as data setup, migration or connected-service usage need their scope and cost confirmed before agreement.",
  )),
  item(21, "commercial", pair("هل بتاخدوا عمولة على الحجوزات؟", "Do you charge commission on bookings?"), pair(
    "لا. التسعير قائم على طريقة الدفع المختارة ورسوم الفروع، مش نسبة من كل حجز يدخل لمغسلتك.",
    "No. Pricing is based on your selected payment option and branch fees rather than a percentage of each booking.",
  )),
  item(22, "setup", pair("إزاي أستفيد من فترة التقييم؟", "How should I use the evaluation period?"), pair(
    "جهّز بياناتك الأساسية، وابدأ بحجوزات وزيارات فعلية، وخلّي الفريق يجرّب الأجزاء اللي تخصه. الهدف إنك تقيّم تنظيم التشغيل ومتابعة الفريق والأرقام، مش تتفرج على حساب تجريبي فاضي. تفاصيل التجهيز والدعم بتتراجع معاك في البداية.",
    "Prepare your essential data, use actual bookings and visits, and let each team member try the parts relevant to their work. Evaluate operations, team visibility and the numbers rather than an empty demo account. Setup and support details are reviewed at the start.",
  )),
  item(23, "setup", pair("لو عندي بيانات على Excel أو برنامج قديم، ينفع أنقلها؟", "Can you move data from Excel or an old system?"), pair(
    "أيوه، حسب شكل وحجم البيانات.\n\nبنراجعها الأول، ولو البيانات كبيرة أو معقدة ممكن تحتاج خدمة Data Migration منفصلة علشان تتنقل بشكل منظم بدل ما نبدأ نقل عشوائي يسبب مشاكل.",
    "Yes, depending on the format and volume. We review the data first. Larger or more complex datasets may require a separate data migration service so the transfer is planned and organised rather than rushed.",
  )),
  item(24, "operation", pair("هل أقدر أحدد صلاحيات مختلفة لكل موظف؟", "Can I set different permissions for each employee?"), pair(
    "أيوه. مش لازم كل موظف يشوف كل حاجة. تقدر تحدد صلاحيات الموظفين حسب أدوارهم ومسؤولياتهم، وده مهم خصوصًا في المالية والإدارة والفروع.",
    "Yes. Each employee can have permissions that match their role and responsibilities, so people only see what they need—especially across finance, management and branches.",
  )),
  item(25, "system", pair("هل سباركل أوتو سهل الاستخدام فعلًا؟ وإيه المختلف في تصميمه؟", "Is Sparkle Auto genuinely easy to use, and what makes its design different?"), pair(
    "أيوه. صممنا Sparkle Auto بعناية من البداية علشان يكون واضح وسهل ومريح، حتى للي مش متعود على السيستمات.\n\nبدل الشاشات المزدحمة والخطوات المعقدة، كل شاشة مبنية حوالين مهمة واضحة، والمعلومة المهمة بتظهر في مكانها ووقتها. واعتمدنا معايير UI وUX الحديثة علشان يكون تعلّمه أسرع، والأخطاء أقل، واستخدامه اليومي عملي ومريح بصريًا.\n\nالشكل الجميل هنا مش مجرد زينة؛ هو جزء من تجربة تساعدك أنت وفريقك تنجزوا الشغل بسهولة.",
    "Yes. Sparkle Auto was carefully designed from the start to feel clear, approachable and comfortable, even for people who are not used to business software.\n\nInstead of crowded screens and complicated steps, each screen is built around a clear task and presents the right information at the right time. Modern UI and UX principles make the system quicker to learn, reduce avoidable mistakes and keep everyday work both practical and visually comfortable.\n\nThe polished design is functional: it helps you and your team complete work with less effort.",
  )),
  item(26, "value", pair("ليه ما أكملش بالواتساب والدفتر طالما شغالين معايا؟", "Why not keep using WhatsApp and a notebook if they already work?"), pair(
    "لأن الفرق مش بين «دفتر» و«برنامج» بس… الفرق في طريقة إدارة المغسلة كلها.\n\nمع الواتساب والدفتر، جزء كبير من يومك بيضيع في تجميع المعلومات: تراجع الحجوزات، تسأل العربية وصلت لفين، تعرف مين شغال، تحسب دخل اليوم، تراجع المصروفات، تفتكر العميل رجع إمتى وتتابع المخزون.\n\nسباركل أوتو بيجمع كل ده في نظام واحد علشان يوفر وقت المتابعة ويخلي الشغل أوضح. والتنظيم ده يساعدك تحسن الربحية لما تعرف أنهي الخدمات بتدخل أكتر، تتابع مصروفاتك، تقلل الأخطاء والحجوزات الضايعة وتحافظ على بيانات عملائك.\n\nبدل ما وقتك يضيع في معرفة «إيه اللي حصل؟»، تستخدمه في السؤال الأهم: إزاي أطوّر المغسلة وأكسب منها أكتر؟",
    "The difference is bigger than paper versus software; it is about how the whole business is managed. With disconnected tools, much of your day goes into assembling information: bookings, vehicle status, staff, revenue, expenses, customer visits and inventory.\n\nSparkle Auto connects that work. Clearer information helps you save management time, reduce missed bookings and errors, understand services and costs, retain customer history and make better decisions about growth and profitability. You spend less time asking what happened and more time deciding what to improve next.",
  )),
  item(27, "value", pair("ليه ما أستخدمش Excel أو ERP عام؟", "Why not use Excel or a general ERP?"), pair(
    "Excel والـERP والبرامج العامة أدوات قوية، وكل واحد ليه استخدامه.\n\nالفرق إن سباركل أوتو معمول من الأساس حوالين طريقة تشغيل مشروع العناية بالسيارات، بدل ما تاخد برنامج عام وتحاول تعدّله وتبني عليه Workflow يناسب المغسلة.",
    "Excel and general ERP products are powerful tools with valid uses. Sparkle Auto is different because it starts with the workflow of a vehicle care business, rather than asking you to reshape a general-purpose system around the car wash.",
  )),
  item(28, "fit", pair("لو فتحت فرع جديد، هحتاج أغيّر المنصة؟", "Will I need a different platform when I open another branch?"), pair(
    "Sparkle Auto بيدعم إدارة الفروع ومتابعة بيانات وتشغيل كل فرع من مكان واحد. بنراجع إعداد الفرع والخدمات والصلاحيات معاك وقت التوسع، علشان يفضل التشغيل متصل بنفس المنصة.",
    "Sparkle Auto supports managing branches and following each branch’s operation from one place. As you expand, we review branch setup, services and permissions so the operation stays connected within the same platform.",
  )),
  item(29, "setup", pair("هل أقدر أوصل لدعم المنصة من جوّه Sparkle Auto؟", "Can I access platform support inside Sparkle Auto?"), pair(
    "أيوه، فيه مساحة لدعم المنصة جوّه لوحة التحكم، علشان تتواصل بخصوص الاستخدام أو مشكلة فنية من نفس مكان إدارة شغلك. تقدر تستخدمها للوصول لفريق الدعم، وتتراجع تفاصيل التجهيز والدعم معاك في البداية.",
    "Yes. The dashboard includes a platform support area so you can get help with using Sparkle Auto or a technical issue from the same workspace. Setup and support arrangements are reviewed with you at the start.",
  )),
  item(30, "commercial", pair("هل أقدر أشوف وأقيّم المنصة قبل الدفع؟", "Can I see and evaluate the platform before paying?"), pair(
    `تقدر تشوف الفيلم ولقطات الشاشات الحقيقية، وتتواصل معانا عشان تبدأ. وفيه تجربة مجانية ${pricingTerms.trialDays} يوم لتقييم المنصة على شغل حقيقي، مع مناقشة تفاصيل البداية معاك.`,
    `You can watch the film, explore actual product screens and contact us to get started. A ${pricingTerms.trialDays}-day free trial lets you evaluate the platform with real operations, with onboarding details discussed together.`,
  )),

  item(31, "operation", pair("إزاي واتساب بيشتغل جوّه المنصة؟", "How does WhatsApp work inside the platform?"), pair(
    "بعد تجهيز وربط رقم واتساب الخاص بمغسلتك وتفعيل الخدمة، رسائل العملاء بتظهر في صندوق المحادثات داخل Sparkle Auto. تقدر تتابع المحادثة وترد وفق الصلاحيات وقواعد الخدمة، وتشوف معاينة آخر رسالة وتوقيتها.\n\nده مش معناه إن كل الرسائل التلقائية شغالة تلقائيًا؛ الربط والتفعيل وإعدادات الرسائل وشروط الإرسال بتتراجع بشكل منفصل.",
    "Once your business WhatsApp number is connected and the service is activated, customer messages appear in Sparkle Auto’s inbox. Your team can follow conversations and reply according to permissions and service rules, with the latest-message preview and time visible in the list.\n\nThis does not mean every automation is active by default. Connection, activation, message settings and sending requirements are reviewed separately.",
  )),
];

// Ordered by the buyer's decision journey: understand the product, see its value,
// assess daily use and adoption, then review setup, commercial terms and edge cases.
const faqPriority = [
  6, 1, 2, 31, 12, 30, 5, 22, 25, 10, 8,
  9, 17, 26, 4, 3, 27, 24, 11, 18, 28,
  7, 23, 29, 19, 20, 21, 16, 13, 14, 15,
];

const faqBySourceId = new Map(faqItems.map((entry) => [entry.id, entry]));

export const faq = faqPriority.map((sourceId, index) => {
  const entry = faqBySourceId.get(sourceId);
  if (!entry) {
    throw new Error(`Missing FAQ source item ${sourceId}`);
  }
  return { ...entry, id: index + 1 };
});
