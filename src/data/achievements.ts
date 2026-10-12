import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    titleEn: '1,500+ GitHub Stars on Open Source Utilities',
    titleAr: 'أكثر من 1,500 نجمة على مستودعات ومكتبات مفتوحة المصدر',
    descriptionEn: 'Authored widely adopted developer utility packages providing zero-dependency caching, AST parsing, and RTL utility helpers.',
    descriptionAr: 'تطوير حزم برمجية مفتوحة المصدر للمطورين تدعم إدارة التخزين المؤقت وتحليل الكود وتسهيل دعم RTL دون اعتماديات ثقيلة.',
    dateEn: '2023 - Present',
    dateAr: '2023 - حتى الآن',
    metric: '1,500+ Stars',
    link: 'https://github.com/developer-username'
  },
  {
    id: 'ach-2',
    titleEn: '1st Place Winner - Regional Web Hackathon',
    titleAr: 'المركز الأول في هاكاثون الويب الإقليمي للحلول البرمجية',
    descriptionEn: 'Designed and shipped a distributed offline-first medical inventory routing application in 48 hours with high availability.',
    descriptionAr: 'تصميم وبناء نظام إدارة وتوزيع مستلزمات طبية يعمل دون اتصال وبكفاءة عالية خلال 48 ساعة.',
    dateEn: '2022',
    dateAr: '2022',
    metric: '1st Place'
  },
  {
    id: 'ach-3',
    titleEn: 'Web Accessibility & Core Web Vitals Auditor',
    titleAr: 'مراجع ومختص معايير إمكانية الوصول وسرعة الأداء للمواقع',
    descriptionEn: 'Helped modern enterprises achieve 100/100 Lighthouse performance metrics and WCAG 2.2 AA compliance.',
    descriptionAr: 'مساعدة شركات متعددة في الوصول إلى تقييم 100/100 في معايير Lighthouse وتطبيق إرشادات WCAG 2.2 AA العالمية.',
    dateEn: '2021 - 2024',
    dateAr: '2021 - 2024',
    metric: '100% Score'
  }
];
