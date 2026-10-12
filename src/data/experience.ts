import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-tech-solutions',
    roleEn: 'Senior Full-Stack Engineer',
    roleAr: 'مهندس برمجيات أول Full-Stack',
    companyEn: 'Tech Solutions Co.',
    companyAr: 'تيك سوليوشنز كو (Tech Solutions Co.)',
    periodEn: 'Jan 2024 – Present',
    periodAr: 'يناير 2024 – حتى الآن',
    locationEn: 'Cairo, Egypt (Remote)',
    locationAr: 'القاهرة، مصر (عن بُعد)',
    current: true,
    descriptionEn: 'Leading architectural design of web applications and establishing cohesive integration between front-end interfaces and resilient backend microservices.',
    descriptionAr: 'قيادة وتطوير البنية التحتية لتطبيقات الويب وتسهيل التكامل السلس بين الواجهات الأمامية والأنظمة الخلفية عالية التحمل.',
    achievementsEn: [
      'Led the architectural design of modern web applications, streamlining full-stack workflows across engineering teams',
      'Enhanced database query efficiency and indexed schemas, reducing page loading times by 35%',
      'Configured automated CI/CD pipelines and Docker environments for high-reliability staging and production deployments'
    ],
    achievementsAr: [
      'قيادة وتطوير البنية التحتية لتطبيقات الويب وتسهيل التكامل بين الواجهات الأمامية والخلفية',
      'تحسين كفاءة استعلامات قواعد البيانات وفهارس الجداول وتقليل زمن تحميل الصفحات بنسبة 35%',
      'بناء وتكوين خطوط أتمتة النشر CI/CD وبيئات العمل عبر Docker لضمان أعلى مستويات الاستقرار البرمجي'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'exp-digital-innovations',
    roleEn: 'Full-Stack Software Engineer',
    roleAr: 'مهندس برمجيات Full-Stack',
    companyEn: 'Digital Innovations Ltd.',
    companyAr: 'ديجيتال إنوفيشنز ليمتد (Digital Innovations Ltd.)',
    periodEn: 'Jun 2021 – Dec 2023',
    periodAr: 'يونيو 2021 – ديسمبر 2023',
    locationEn: 'Egypt (Hybrid / Remote)',
    locationAr: 'مصر (حضور وعن بُعد)',
    current: false,
    descriptionEn: 'Developed scalable RESTful APIs, maintained database schemas, and delivered fluid, accessible user interfaces for international client platforms.',
    descriptionAr: 'تطوير واجهات برمجة تطبيقات RESTful قوية وموثوقة، وصيانة قواعد البيانات، وبناء واجهات مستخدم تفاعلية متجاوبة.',
    achievementsEn: [
      'Engineered dependable RESTful APIs powering web and mobile platforms with robust JWT security',
      'Transformed Figma designs into responsive, cross-browser interactive interfaces with strict WCAG accessibility',
      'Collaborated in Agile sprints with Git version control, conducting peer code reviews and unit testing'
    ],
    achievementsAr: [
      'تطوير RESTful APIs قوية وموثوقة لخدمة تطبيقات الويب والهاتف المحمول مع حماية متقدمة',
      'تحويل التصاميم إلى واجهات مستخدم تفاعلية متجاوبة تماماً مع مختلف الشاشات ومعايير الوصول',
      'المساهمة في مراجعات الكود البرمجي وكتابة الاختبارات لضمان جودة الأداء وخلو التسليمات من الأخطاء'
    ],
    technologies: ['JavaScript (ES6+)', 'React.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git']
  }
];
