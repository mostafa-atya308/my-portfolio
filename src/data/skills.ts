import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    titleEn: 'Frontend Development',
    titleAr: 'تطوير الواجهات الأمامية',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'TypeScript', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'Next.js', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'Tailwind CSS', levelEn: 'Expert', levelAr: 'خبير' },
      { name: 'HTML5 & CSS3', levelEn: 'Expert', levelAr: 'خبير' },
      { name: 'Redux Toolkit', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'JavaScript (ES6+)', levelEn: 'Expert', levelAr: 'خبير' }
    ]
  },
  {
    id: 'backend',
    titleEn: 'Backend & APIs',
    titleAr: 'الأنظمة الخلفية والواجهات البرمجية',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'Express.js', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'RESTful APIs', levelEn: 'Expert', levelAr: 'خبير' },
      { name: 'GraphQL', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'Authentication (JWT, OAuth)', levelEn: 'Advanced', levelAr: 'متقدم' }
    ]
  },
  {
    id: 'databases',
    titleEn: 'Databases & Storage',
    titleAr: 'قواعد البيانات والتخزين',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'MongoDB', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'MySQL', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'Redis', levelEn: 'Proficient', levelAr: 'متمرس' }
    ]
  },
  {
    id: 'devops',
    titleEn: 'DevOps & Cloud',
    titleAr: 'العمليات السحابية والأدوات',
    iconName: 'Cpu',
    skills: [
      { name: 'Docker', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'Git & GitHub', levelEn: 'Expert', levelAr: 'خبير' },
      { name: 'CI/CD Pipelines', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'Linux', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'Nginx', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'Vercel & Cloud Deployment', levelEn: 'Advanced', levelAr: 'متقدم' }
    ]
  },
  {
    id: 'languages',
    titleEn: 'Programming Languages',
    titleAr: 'لغات البرمجة',
    iconName: 'Code',
    skills: [
      { name: 'JavaScript', levelEn: 'Expert', levelAr: 'خبير' },
      { name: 'TypeScript', levelEn: 'Advanced', levelAr: 'متقدم' },
      { name: 'Python', levelEn: 'Proficient', levelAr: 'متمرس' },
      { name: 'SQL', levelEn: 'Advanced', levelAr: 'متقدم' }
    ]
  }
];
