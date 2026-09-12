import { pair, type Pair } from "./site";

export type FaqCategory = "system" | "value" | "operation" | "fit" | "setup" | "commercial";

export const faqCategories: { id: "all" | FaqCategory; label: Pair }[] = [
  { id: "all", label: pair("كل الأسئلة", "All questions") },
  { id: "system", label: pair("عن السيستم", "The system") },
  { id: "value", label: pair("القيمة والفرق", "Value") },
  { id: "operation", label: pair("التشغيل اليومي", "Operations") },
  { id: "fit", label: pair("مناسب لمين؟", "Who it fits") },
  { id: "setup", label: pair("التجهيز والدعم", "Setup & support") },
  { id: "commercial", label: pair("الاشتراك والتكلفة", "Plans & pricing") },
];

const item = (id: number, category: FaqCategory, question: Pair, answer: Pair) => ({ id, category, question, answer });

export const faq = [
  item(1, "system", pair("هل فيه فيديو يشرح سباركل أوتو والسيستم وهو شغال؟", "Is there a video showing Sparkle Auto in action?"), pair(
    "أيوه. تقدر تشوف فيديو يشرح السيستم بشكل عملي، وتشوف بنفسك إزاي بتتم إدارة التشغيل والحجوزات والعملاء والموظفين والمالية وباقي أجزاء المغسلة من مكان واحد.",
    "Yes. You can watch a practical walkthrough of the live system and see how bookings, customers, employees, finance and the rest of the car wash operation are managed from one place.",
  )),
  item(2, "value", pair("إيه الفرق بين سباركل أوتو وبرنامج فواتير أو كاشير عادي؟", "How is Sparkle Auto different from ordinary billing or POS software?"), pair(
    "سباركل أوتو مش مجرد برنامج فواتير أو سيستم تسجل عليه البيع.\n\nهو نظام متطور معمول مخصوص علشان يطوّر كل طريقة تشغيل المغسلة: تنظيم الحجوزات والمواعيد، متابعة العربيات، توزيع وتنظيم شغل الفريق، العملاء، المالية، المخزون والفروع وغيرهم.\n\nبدل ما كل جزء من المغسلة يتدار لوحده بطريقة مختلفة، سباركل بيجمع التشغيل كله في نظام واحد يخليه أسرع وأوضح ومنظم أكتر.",
    "Sparkle Auto goes beyond invoicing and recording sales. It is built around the complete car wash workflow: bookings, vehicle progress, team assignments, customers, finance, inventory and branches.\n\nInstead of managing each area through a separate tool or process, Sparkle brings the operation together so work is faster, clearer and more consistent.",
  )),
  item(3, "value", pair("ليه أشترك في سباركل أوتو بدل ما أعمل سيستم خاص وأدفع مرة واحدة؟", "Why subscribe instead of building a custom system once?"), pair(
    "لأن بناء سيستم بنفس حجم وجودة سباركل أوتو مش مجرد تصميم كام شاشة. هتحتاج تحليل وتشغيل وتصميم وبرمجة واختبارات وقاعدة بيانات واستضافة وأمان وصيانة وتحديثات مستمرة، وده معناه تكلفة أولية كبيرة جدًا ووقت تطوير طويل.\n\nوحتى بعد ما السيستم يخلص، هيفضل عندك مصاريف مستمرة للاستضافة وقاعدة البيانات والصيانة وحل المشاكل والتطوير.\n\nمع سباركل أوتو إنت بتبدأ فورًا بنظام تم بناؤه وتطويره بالفعل، وبتستفيد من التحديثات والدعم والتطوير المستمر من غير ما تتحول من صاحب مغسلة لصاحب مشروع برمجي كمان.",
    "A system at Sparkle Auto’s scope is more than a few screens. It requires operational analysis, product design, engineering, testing, databases, hosting, security, maintenance and ongoing updates. That means a large initial investment, a long build and continuing costs after launch.\n\nWith Sparkle Auto, you start with an established product and benefit from support and continuous development without having to run a software project alongside your car wash.",
  )),
  item(4, "value", pair("ليه أدفع اشتراك في سباركل أوتو؟ إيه القيمة اللي هاخدها فعلًا؟", "What value do I actually get from the subscription?"), pair(
    "الهدف مش إن يبقى عندك «برنامج جديد»؛ الهدف إن طريقة إدارة المغسلة نفسها تبقى أفضل.\n\nبدل ما الحجوزات تبقى في المكالمات والواتساب، والأرقام في دفتر، والمخزون عند موظف، وحالة العربيات محتاجة سؤال… يبقى عندك نظام واحد يربط كل ده ببعضه.\n\nفتعرف شغلك ماشي إزاي، فريقك بيعمل إيه، العربيات وصلت لفين، دخلك ومصروفاتك، عملاءك ومخزونك من غير ما كل معلومة تحتاج مكالمة. القيمة الحقيقية في الوقت والتنظيم والسيطرة على شغلك حتى وإنت مش واقف في المغسلة طول اليوم.",
    "The value is not simply having another piece of software. It is running the car wash better.\n\nBookings, vehicle progress, team activity, income, expenses, customers and inventory sit in one connected system instead of being scattered across calls, WhatsApp, notebooks and individual employees. You save time, gain clarity and stay in control even when you are away from the site.",
  )),
  item(5, "value", pair("أعرف إزاي إن سباركل أوتو فعلًا مناسب لمغسلتي ويستاهل التكلفة؟", "How do I know Sparkle Auto fits my car wash and is worth the cost?"), pair(
    "علشان كده عندك 14 يوم تجربة مجانية بدون التزام.\n\nمتتعاملش مع الـ14 يوم على إنهم مجرد حساب مجاني تتفرج عليه. استخدمه على شغلك الحقيقي وتعاون مع فريقنا في التجهيز والتجربة. هنساعدك خلال الفترة دي بدون مقابل علشان تطبق السيستم فعليًا.\n\nبعدها تقدر تحكم بنفسك بمنتهى الوضوح: هل وفرلك وقت؟ هل نظم التشغيل؟ هل خلاك تتابع أفضل؟ وفي النهاية القرار عندك بالكامل.",
    "That is why you get a 14-day free trial with no commitment. Use it with real operational data rather than treating it as a demo account. Our team will help you set it up and apply it to your actual workflow at no charge during the trial.\n\nBy the end, you can judge it on evidence: did it save time, organise the operation and improve visibility? The decision remains entirely yours.",
  )),
  item(6, "system", pair("سباركل أوتو هيفيد مغسلتي إزاي بشكل عملي؟", "How does Sparkle Auto help my car wash in practice?"), pair(
    "بيجمعلك أهم أجزاء تشغيل المغسلة في مكان واحد: الحجوزات، العربيات، الخدمات، الموظفين والصلاحيات، العملاء، الإيرادات والمصروفات، المخزون والفروع.\n\nبدل ما إدارة المغسلة تبقى موزعة بين واتساب ومكالمات ودفاتر وExcel وأشخاص مختلفين، يبقى عندك نظام واحد واضح.",
    "It brings the core parts of your operation into one place: bookings, vehicles, services, staff and permissions, customers, revenue, expenses, inventory and branches. Instead of piecing the day together from WhatsApp, calls, notebooks, spreadsheets and different people, you work from one clear system.",
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
  item(19, "commercial", pair("أختار أنهي باقة؟", "Which plan should I choose?"), pair(
    "ده بيعتمد على حجم التشغيل وعدد الفروع والخصائص اللي محتاج تستخدمها.\n\nمش هدفنا نحطك في أغلى باقة؛ الهدف إنك تبدأ بالمستوى اللي يناسب شغلك حاليًا، وتقدر تطوره بعدين مع نمو المشروع.",
    "It depends on your operating volume, number of branches and the capabilities you need. The aim is to start at the level that fits your business now, then expand as the operation grows—not to push you into the most expensive plan.",
  )),
  item(20, "commercial", pair("هل فيه مصاريف إضافية غير الاشتراك؟", "Are there costs beyond the subscription?"), pair(
    "الاشتراك وخدماته بيبقوا موضحين بشكل واضح.\n\nولو احتجت خدمة إضافية زي تجهيز كامل للسيستم، نقل كمية كبيرة من البيانات، وحدة تشغيل أو فرع إضافي، أو شغل خاص خارج الباقة، التكلفة بتكون واضحة قبل ما تطلب الخدمة.",
    "Your subscription and included services are stated clearly. If you need an optional service—such as complete setup, substantial data migration, extra operating capacity, another branch or custom work outside the plan—we confirm the cost before you request it.",
  )),
  item(21, "commercial", pair("هل بتاخدوا عمولة على الحجوزات؟", "Do you charge commission on bookings?"), pair(
    "لا. سباركل أوتو قائم على اشتراك واضح، مش نسبة من كل حجز يدخل لمغسلتك.",
    "No. Sparkle Auto uses a clear subscription model rather than taking a percentage of every booking.",
  )),
  item(22, "setup", pair("إيه اللي بيحصل خلال الـ14 يوم تجربة مجانية؟", "What happens during the 14-day free trial?"), pair(
    "الفكرة مش إننا نفتحلك Account وخلاص.\n\nبنساعدك تجهز البداية، وتدخل بيانات حقيقية، وتجرب السيستم على تشغيل مغسلتك قدر الإمكان، علشان قرارك في آخر التجربة يبقى مبني على تجربة فعلية.",
    "We do more than open an account. We help you prepare the essentials, enter real data and use the system with your actual operation as far as possible, so your decision at the end is based on experience rather than a sales demonstration.",
  )),
  item(23, "setup", pair("لو عندي بيانات على Excel أو برنامج قديم، ينفع أنقلها؟", "Can you move data from Excel or an old system?"), pair(
    "أيوه، حسب شكل وحجم البيانات.\n\nبنراجعها الأول، ولو البيانات كبيرة أو معقدة ممكن تحتاج خدمة Data Migration منفصلة علشان تتنقل بشكل منظم بدل ما نبدأ نقل عشوائي يسبب مشاكل.",
    "Yes, depending on the format and volume. We review the data first. Larger or more complex datasets may require a separate data migration service so the transfer is planned and organised rather than rushed.",
  )),
  item(24, "operation", pair("هل أقدر أحدد صلاحيات مختلفة لكل موظف؟", "Can I set different permissions for each employee?"), pair(
    "أيوه. مش لازم كل موظف يشوف كل حاجة. تقدر تحدد صلاحيات الموظفين حسب أدوارهم ومسؤولياتهم، وده مهم خصوصًا في المالية والإدارة والفروع.",
    "Yes. Each employee can have permissions that match their role and responsibilities, so people only see what they need—especially across finance, management and branches.",
  )),
  item(25, "system", pair("هل سباركل أوتو بديل لبرنامج الحسابات والفواتير؟", "Does Sparkle Auto replace accounting and invoicing software?"), pair(
    "سباركل أوتو فيه جزء مالي مربوط بتشغيل المغسلة لمتابعة الإيرادات والمصروفات والمدفوعات وغيرها.\n\nلكن لو عندك احتياجات محاسبية أو ضريبية متخصصة، ممكن تفضل محتاج برنامج محاسبي مخصص لها.",
    "Sparkle Auto includes financial tools connected to car wash operations, including revenue, expenses and payments. If you have specialised accounting or tax requirements, you may still need dedicated accounting software for those needs.",
  )),
  item(26, "value", pair("ليه ما أكملش بالواتساب والدفتر طالما شغالين معايا؟", "Why not keep using WhatsApp and a notebook if they already work?"), pair(
    "لأن الفرق مش بين «دفتر» و«برنامج» بس… الفرق في طريقة إدارة المغسلة كلها.\n\nمع الواتساب والدفتر، جزء كبير من يومك بيضيع في تجميع المعلومات: تراجع الحجوزات، تسأل العربية وصلت لفين، تعرف مين شغال، تحسب دخل اليوم، تراجع المصروفات، تفتكر العميل رجع إمتى وتتابع المخزون.\n\nسباركل أوتو بيجمع كل ده في نظام واحد علشان يوفر وقت المتابعة ويخلي الشغل أوضح. والتنظيم ده يساعدك تحسن الربحية لما تعرف أنهي الخدمات بتدخل أكتر، تتابع مصروفاتك، تقلل الأخطاء والحجوزات الضايعة وتحافظ على بيانات عملائك.\n\nبدل ما وقتك يضيع في معرفة «إيه اللي حصل؟»، تستخدمه في السؤال الأهم: إزاي أطوّر المغسلة وأكسب منها أكتر؟",
    "The difference is bigger than paper versus software; it is about how the whole business is managed. With disconnected tools, much of your day goes into assembling information: bookings, vehicle status, staff, revenue, expenses, customer visits and inventory.\n\nSparkle Auto connects that work. Clearer information helps you save management time, reduce missed bookings and errors, understand services and costs, retain customer history and make better decisions about growth and profitability. You spend less time asking what happened and more time deciding what to improve next.",
  )),
  item(27, "value", pair("ليه ما أستخدمش Excel أو ERP عام؟", "Why not use Excel or a general ERP?"), pair(
    "Excel والـERP والبرامج العامة أدوات قوية، وكل واحد ليه استخدامه.\n\nالفرق إن سباركل أوتو معمول من الأساس حوالين طريقة تشغيل مشروع العناية بالسيارات، بدل ما تاخد برنامج عام وتحاول تعدّله وتبني عليه Workflow يناسب المغسلة.",
    "Excel and general ERP products are powerful tools with valid uses. Sparkle Auto is different because it starts with the workflow of a vehicle care business, rather than asking you to reshape a general-purpose system around the car wash.",
  )),
  item(28, "fit", pair("لو فتحت فرع جديد أو كبرت بعدين، هحتاج أغير السيستم؟", "Will I need a different system when I grow or open another branch?"), pair(
    "لا. الفكرة إن سباركل أوتو يكبر مع المشروع. تقدر تضيف فروع أو وحدات تشغيل حسب الباقة المناسبة بدل ما تبدأ من الصفر كل ما المشروع يتوسع.",
    "No. Sparkle Auto is designed to grow with the business. You can add branches or operating capacity under the appropriate plan instead of starting again every time the operation expands.",
  )),
  item(29, "setup", pair("لو حصلت مشكلة، فيه دعم؟", "Is support available when there is a problem?"), pair(
    "أيوه. فريق سباركل أوتو موجود لمساعدتك في مرحلة التجهيز والاستخدام والمشاكل الفنية المتعلقة بالسيستم.\n\nهدفنا مش إننا نبيعلك الاشتراك ونسيبك؛ نجاح السيستم مرتبط أصلًا بإنك تعرف تستخدمه صح.",
    "Yes. The Sparkle Auto team supports setup, day-to-day use and technical issues related to the system. Successful adoption depends on your team knowing how to use it well, so support is part of the relationship.",
  )),
  item(30, "commercial", pair("هل أقدر أشوف وأجرب السيستم قبل ما أدفع؟", "Can I see and try the system before paying?"), pair(
    "أكيد. تقدر تشوف شرح حقيقي للسيستم، وبعدها عندك 14 يوم تجربة مجانية بدون بطاقة وبدون التزام علشان تجرب سباركل أوتو على شغلك وتقرر بنفسك.",
    "Absolutely. You can watch a real system walkthrough, then use a 14-day free trial with no card and no commitment to test Sparkle Auto with your operation and decide for yourself.",
  )),
];
