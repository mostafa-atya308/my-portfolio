import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'cartdash',
    titleEn: 'CartDash E-Commerce Platform',
    titleAr: 'منصة CartDash للتجارة الإلكترونية',
    summaryEn: 'Full-featured modern e-commerce solution with dynamic cart state management, responsive catalog filtering, and secure checkout workflows.',
    summaryAr: 'منصة تجارة إلكترونية سريعة ومتكاملة تدعم إدارة سلة المشتريات، فلترة المنتجات المتقدمة، وتجربة دفع وشراء مؤمنة وسلسة.',
    descriptionEn: 'Engineered an end-to-end e-commerce platform built with clean architecture principles. Implemented responsive product filtering, optimized inventory schemas, persistent shopping carts, and streamlined checkout pipelines.',
    descriptionAr: 'تطوير منصة تجارة إلكترونية متكاملة تعتمد على بنية برمجية متينة ونظيفة. تطبيق فلترة سريعة لكتالوج المنتجات، ونظام سلة تسوق مستمر، وتجربة إتمام طلبات عالية الأمان.',
    category: 'fullstack',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux', 'REST APIs'],
    imageUrl: './projects/cartdash.jpg',
    githubUrl: 'https://github.com/mostafa-atya308/CartDash',
    featured: true,
    highlightsEn: [
      'Engineered stateful cart architecture with optimistic client-side updates and zero layout shift',
      'Implemented secure RESTful API endpoints with JWT authentication and input validation',
      'Responsive mobile-first interface optimized for fast catalog browsing and checkout conversions'
    ],
    highlightsAr: [
      'تصميم معمارية سلة تسوق متقدمة مع تحديثات فورية للواجهة دون وميض أو تأخير',
      'بناء نقاط اتصال برمجية (REST APIs) آمنة تعتمد توثيق JWT والتحقق الصارم من المدخلات',
      'واجهة متجاوبة ومحسنة خصيصاً لشاشات الهواتف المحمولة لسرعة التصفح وإتمام عمليات الشراء'
    ]
  },
  {
    id: 'plancraft',
    titleEn: 'PlanCraft Project & Task Planning Suite',
    titleAr: 'أداة PlanCraft لإدارة وتخطيط المشاريع',
    summaryEn: 'Collaborative project planning and workflow execution platform featuring interactive Kanban boards and team productivity tracking.',
    summaryAr: 'منصة تعاونية متقدمة لتخطيط المشاريع وتنظيم المهام مع لوحات كانبان تفاعلية وتتبع دقيق لإنتاجية فرق العمل.',
    descriptionEn: 'Full-stack task management platform empowering teams to organize sprints, assign milestones, and visualize project velocity. Designed with modular backend APIs and reactive state synchronization.',
    descriptionAr: 'تطبيق ويب متكامل لإدارة المشاريع يُمكن فرق العمل من تنظيم دورات التطوير وتوزيع المهام ومتابعة تقدم الإنجاز عبر واجهات تفاعلية سريعة.',
    category: 'fullstack',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    imageUrl: './projects/plancraft.jpg',
    githubUrl: 'https://github.com/mostafa-atya308/PlanCraft',
    featured: true,
    highlightsEn: [
      'Interactive drag-and-drop workflow boards with instant reactive updates',
      'Structured relational database schemas with optimized query indexes for task workflows',
      'Containerized environment using Docker for consistent local and production deployment'
    ],
    highlightsAr: [
      'لوحات مهام تفاعلية تدعم السحب والإفلات مع مزامنة لحظية وتحديثات فورية',
      'تصميم جداول قواعد بيانات علائقية محكمة مع تحسين الفهارس لتسريع استعلامات المهام',
      'تجهيز بيئة العمل بالكامل عبر حاويات Docker لضمان استقرار النشر والاختبار المستمر'
    ]
  },
  {
    id: 'mealdash',
    titleEn: 'MealDash Food Delivery & Ordering System',
    titleAr: 'منصة MealDash لطلب وتوصيل الوجبات',
    summaryEn: 'On-demand food ordering platform featuring restaurant menus, real-time cart calculations, and responsive order management.',
    summaryAr: 'منظومة ويب متكاملة لطلب وتوصيل الوجبات، تضم قوائم المطاعم وحسابات الطلبات والتوصيل السريع مع تجربة مستخدم سلسة.',
    descriptionEn: 'Built a specialized food delivery system with dynamic catalog search, categorized meal selections, order state transitions, and delivery address verification.',
    descriptionAr: 'بناء نظام متخصص لطلب وتوصيل الطعام يتيح البحث السريع في القوائم وتصنيف الوجبات ومتابعة مراحل إعداد وتوصيل الطلبات بدقة.',
    category: 'fullstack',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'CSS3'],
    imageUrl: './projects/mealdash.jpg',
    githubUrl: 'https://github.com/mostafa-atya308/MealDash',
    featured: true,
    highlightsEn: [
      'Dynamic menu filtering by cuisine, dietary options, and delivery preparation estimates',
      'Validated order transaction lifecycle with real-time bill breakdown calculation',
      'Mobile-optimized touch interactions ensuring seamless ordering on all smartphone viewports'
    ],
    highlightsAr: [
      'فلترة ديناميكية لقوائم الطعام حسب الأصناف ووقت التحضير والتوصيل المتوقع',
      'معالجة دورة حياة الطلبات بدقة مع حساب لحظي لتفاصيل الفاتورة والرسوم',
      'تصميم متجاوب بالكامل لشاشات اللمس يضمن سهولة تصفح الوجبات والطلب من الهاتف'
    ]
  },
  {
    id: 'flashcart',
    titleEn: 'FlashCart High-Speed Shopping Engine',
    titleAr: 'نظام FlashCart للشراء السريع والفوري',
    summaryEn: 'Ultra-fast, lightweight shopping cart interface engineered for instant state transitions, sub-second renders, and high mobile conversion.',
    summaryAr: 'واجهة تسوق فائقة السرعة وخفيفة الحجم مصممة للتفاعل الفوري والتحديث اللحظي للبيانات مع أعلى معدلات تحويل على الموبايل.',
    descriptionEn: 'Focused frontend architecture engineering lightning-fast user interactions, client-side caching, fluid animations, and frictionless cart modifications without screen flickering.',
    descriptionAr: 'واجهة أمامية متقدمة تركز على الأداء الفائق وسرعة الاستجابة اللحظية لحركات السلة مع تخزين محلي ذكي وانتقالات سلسة.',
    category: 'frontend',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Vite'],
    imageUrl: './projects/flashcart.jpg',
    githubUrl: 'https://github.com/mostafa-atya308/FlashCart',
    featured: false,
    highlightsEn: [
      'Sub-second page rendering and instant state persistence across browser sessions',
      'Zero layout shifts (CLS < 0.01) and audited Lighthouse accessibility scores above 98%',
      'Custom micro-interactions delivering native-feeling tactile feedback on mobile screens'
    ],
    highlightsAr: [
      'سرعة تحميل فائقة مع حفظ تلقائي وسلس لحالة السلة عبر جلسات المتصفح المختلفة',
      'استقرار بصري كامل خالي من أي إزاحات تصميمية مع تقييم أداء يتجاوز 98% على Lighthouse',
      'تفاعلات حركية ناعمة مصممة لتعطي شعور التطبيقات الأصلية على شاشات الهواتف'
    ]
  },
  {
    id: 'tradenexus',
    titleEn: 'TradeNexus Marketplace & Trading Hub',
    titleAr: 'منصة TradeNexus للتبادل التجاري والأسواق',
    summaryEn: 'High-throughput trading gateway and marketplace API with secure authentication, transaction routing, and robust data integrity.',
    summaryAr: 'بوابة واجهات برمجية ومنصة أسواق عالية الكفاءة مع توثيق آمن وتوجيه المعاملات وضمان اتساق البيانات.',
    descriptionEn: 'Resilient backend architecture supporting multi-party listings, trade negotiations, structured inventory queries, and cryptographic transaction verification.',
    descriptionAr: 'معمارية أنظمة خلفية متينة تدعم عمليات التبادل التجاري والعروض المشتركة واستعلامات البيانات المعقدة مع أعلى معايير الأمان.',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'REST APIs'],
    imageUrl: './projects/tradenexus.jpg',
    githubUrl: 'https://github.com/mostafa-atya308/TradeNexus',
    featured: false,
    highlightsEn: [
      'Engineered low-latency API routes with Redis token caching and rate limiting safeguards',
      'Strict database transaction boundaries ensuring ACID consistency during order executions',
      'Standardized OpenAPI specifications for predictable client integration and testing'
    ],
    highlightsAr: [
      'بناء مسارات برمجية سريعة ومنخفضة التأخير مع تخزين مؤقت للرموز في Redis وتنظيم معدل الطلبات',
      'حماية اتساق المعاملات وفق مبادئ ACID لمنع أي تعارض في تنفيذ الصفقات والطلبات',
      'توثيق قياسي وشامل للواجهات البرمجية وفق مواصفات OpenAPI لتسهيل التكامل'
    ]
  }
];
