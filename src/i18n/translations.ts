export interface TranslationDictionary {
  // Navigation
  nav_home: string;
  nav_about: string;
  nav_skills: string;
  nav_projects: string;
  nav_experience: string;
  nav_education: string;
  nav_certifications: string;
  nav_achievements: string;
  nav_contact: string;

  // General Actions & CTAs
  cta_view_projects: string;
  cta_contact_me: string;
  cta_download_cv: string;
  cta_view_code: string;
  cta_live_demo: string;
  cta_view_details: string;
  cta_close: string;
  cta_copy_email: string;
  cta_email_copied: string;
  cta_direct_email: string;

  // Hero Section
  hero_greeting: string;
  hero_badge: string;
  hero_technologies_title: string;
  hero_scroll_explore: string;

  // About Section
  section_about_title: string;
  section_about_subtitle: string;
  about_philosophy_title: string;
  about_philosophy_text: string;
  about_architecture_title: string;
  about_architecture_text: string;
  about_quality_title: string;
  about_quality_text: string;

  // Skills Section
  section_skills_title: string;
  section_skills_subtitle: string;

  // Projects Section
  section_projects_title: string;
  section_projects_subtitle: string;
  filter_all: string;
  filter_fullstack: string;
  filter_frontend: string;
  filter_backend: string;
  filter_architecture: string;
  project_tech_stack: string;
  project_key_highlights: string;
  project_no_results: string;

  // Experience Section
  section_experience_title: string;
  section_experience_subtitle: string;
  experience_present: string;

  // Education Section
  section_education_title: string;
  section_education_subtitle: string;
  education_coursework: string;

  // Certifications Section
  section_certifications_title: string;
  section_certifications_subtitle: string;
  cert_verify_credential: string;
  cert_id_label: string;

  // Achievements Section
  section_achievements_title: string;
  section_achievements_subtitle: string;

  // Contact Section
  section_contact_title: string;
  section_contact_subtitle: string;
  contact_info_heading: string;
  contact_info_text: string;
  contact_location_label: string;
  contact_email_label: string;
  contact_socials_label: string;
  contact_form_title: string;
  contact_form_name: string;
  contact_form_email: string;
  contact_form_subject: string;
  contact_form_message: string;
  contact_form_submit: string;
  contact_form_sending: string;
  contact_form_success: string;
  contact_form_note: string;

  // PWA & Offline
  pwa_install_title: string;
  pwa_install_desc: string;
  pwa_install_btn: string;
  pwa_dismiss_btn: string;
  pwa_ios_instruction: string;
  pwa_app_installed: string;
  offline_notice_title: string;
  offline_notice_desc: string;
  offline_btn_retry: string;

  // Accessibility & Theme
  toggle_theme: string;
  theme_dark: string;
  theme_light: string;
  toggle_language: string;
  skip_to_content: string;
  open_menu: string;
  close_menu: string;

  // Footer
  footer_rights: string;
  footer_built_with: string;
  footer_template_notice: string;
}

export const translations: Record<'en' | 'ar', TranslationDictionary> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_certifications: 'Certifications',
    nav_achievements: 'Achievements',
    nav_contact: 'Contact',

    cta_view_projects: 'Explore Projects',
    cta_contact_me: 'Get In Touch',
    cta_download_cv: 'Download Resume',
    cta_view_code: 'Source Code',
    cta_live_demo: 'Live Demo',
    cta_view_details: 'Technical Details',
    cta_close: 'Close',
    cta_copy_email: 'Copy Email',
    cta_email_copied: 'Copied to clipboard!',
    cta_direct_email: 'Send Message via Email',

    hero_greeting: 'Hello, I am',
    hero_badge: 'Full-Stack Software Architecture',
    hero_technologies_title: 'Core Technology Stack',
    hero_scroll_explore: 'Scroll to explore',

    section_about_title: 'Engineering Philosophy',
    section_about_subtitle: 'Delivering resilient, maintainable, and high-performance software across the stack',
    about_philosophy_title: 'Clean Architecture & Scalability',
    about_philosophy_text: 'I approach software from first principles: decoupled components, predictable state management, and clear interfaces that withstand growing user demands.',
    about_architecture_title: 'API & Database Precision',
    about_architecture_text: 'Deep focus on query optimization, caching tiers, data consistency, and robust authentication safeguards across Node.js, PostgreSQL, and Redis.',
    about_quality_title: 'Accessible & Performant UI',
    about_quality_text: 'Crafting responsive, WCAG 2.2 compliant web experiences with sub-second page loads, zero layout shifts, and native-feeling fluid interactions.',

    section_skills_title: 'Technical Stack',
    section_skills_subtitle: 'Categorized capabilities across frontend, backend, databases, and DevOps',

    section_projects_title: 'Featured Projects',
    section_projects_subtitle: 'Real-world full-stack platforms, microservices architectures, and frontend applications',
    filter_all: 'All Projects',
    filter_fullstack: 'Full-Stack',
    filter_frontend: 'Frontend',
    filter_backend: 'Backend & APIs',
    filter_architecture: 'Architecture & SDKs',
    project_tech_stack: 'Technologies Used',
    project_key_highlights: 'Engineering Highlights',
    project_no_results: 'No projects found in this category.',

    section_experience_title: 'Professional Experience',
    section_experience_subtitle: 'Proven track record of delivering business impact and technical excellence',
    experience_present: 'Present',

    section_education_title: 'Education',
    section_education_subtitle: 'Academic foundation in computer science and software engineering',
    education_coursework: 'Key Coursework',

    section_certifications_title: 'Certifications',
    section_certifications_subtitle: 'Validated industry credentials and professional specializations',
    cert_verify_credential: 'Verify Credential',
    cert_id_label: 'Credential ID',

    section_achievements_title: 'Achievements & Milestones',
    section_achievements_subtitle: 'Recognitions, open-source milestones, and engineering contributions',

    section_contact_title: "Let's Connect",
    section_contact_subtitle: 'Available for technical discussions, engineering roles, and high-impact projects',
    contact_info_heading: 'Direct Inquiries',
    contact_info_text: 'Feel free to reach out via email or connect on LinkedIn and GitHub. I respond promptly to professional inquiries.',
    contact_location_label: 'Location / Work Mode',
    contact_email_label: 'Direct Email',
    contact_socials_label: 'Professional Profiles',
    contact_form_title: 'Send a Message',
    contact_form_name: 'Your Name',
    contact_form_email: 'Your Email',
    contact_form_subject: 'Subject',
    contact_form_message: 'Your Message',
    contact_form_submit: 'Send Message',
    contact_form_sending: 'Sending...',
    contact_form_success: 'Thank you! Your email client has been prepared with your message.',
    contact_form_note: 'Static-first deployment: Clicking submit prepares a prefilled message directly to my verified email address.',

    pwa_install_title: 'Install as Application',
    pwa_install_desc: 'Add this developer portfolio to your device for instant offline access and standalone performance.',
    pwa_install_btn: 'Install App',
    pwa_dismiss_btn: 'Maybe Later',
    pwa_ios_instruction: 'To install on iOS: tap the Share button in Safari, then select "Add to Home Screen".',
    pwa_app_installed: 'App Installed & Offline Ready',
    offline_notice_title: 'Offline Mode Active',
    offline_notice_desc: 'You are viewing cached application content. Interactive network requests require connectivity.',
    offline_btn_retry: 'Check Connection',

    toggle_theme: 'Switch Theme',
    theme_dark: 'Dark Mode',
    theme_light: 'Light Mode',
    toggle_language: 'تغيير إلى العربية',
    skip_to_content: 'Skip to main content',
    open_menu: 'Open navigation menu',
    close_menu: 'Close navigation menu',

    footer_rights: 'All rights reserved.',
    footer_built_with: 'Built with React, TypeScript, and modern standards.',
    footer_template_notice: 'Reusable Developer Portfolio Template with PWA support'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'عني',
    nav_skills: 'المهارات',
    nav_projects: 'المشاريع',
    nav_experience: 'الخبرات',
    nav_education: 'التعليم',
    nav_certifications: 'الشهادات',
    nav_achievements: 'الإنجازات',
    nav_contact: 'تواصل معي',

    cta_view_projects: 'استعراض المشاريع',
    cta_contact_me: 'تواصل معي',
    cta_download_cv: 'تحميل السيرة الذاتية',
    cta_view_code: 'الكود المصدري',
    cta_live_demo: 'معاينة حية',
    cta_view_details: 'التفاصيل التقنية',
    cta_close: 'إغلاق',
    cta_copy_email: 'نسخ البريد',
    cta_email_copied: 'تم النسخ للحافظة!',
    cta_direct_email: 'إرسال عبر البريد الإلكتروني',

    hero_greeting: 'مرحباً، أنا',
    hero_badge: 'معمارية برمجيات الويب المتكاملة Full-Stack',
    hero_technologies_title: 'المجموعة التقنية الأساسية',
    hero_scroll_explore: 'مرر للأسفل للاستكشاف',

    section_about_title: 'الرؤية والنهج الهندسي',
    section_about_subtitle: 'تطوير برمجيات مرنة، متينة وعالية الأداء عبر مختلف طبقات النظام',
    about_philosophy_title: 'المعمارية النظيفة وقابلية التوسع',
    about_philosophy_text: 'أبني البرمجيات وفق مبادئ هندسية واضحة: فصل المسؤوليات، إدارة الحالة بشكل موثوق، وتصميم واجهات برمجية تتحمل النمو المتسارع للمستخدمين.',
    about_architecture_title: 'دقة الواجهات وقواعد البيانات',
    about_architecture_text: 'تركيز عميق على تحسين الاستعلامات، طبقات التخزين المؤقت، اتساق البيانات، وحماية التوثيق المتقدمة عبر Node.js و PostgreSQL و Redis.',
    about_quality_title: 'واجهات مستخدم سريعة وشاملة',
    about_quality_text: 'بناء واجهات متجاوبة ومطابقة لمعايير WCAG 2.2 AA العالمية مع سرعة تحميل فائقة وتفاعل سلس وطبيعي على كافة الأجهزة.',

    section_skills_title: 'المهارات التقنية',
    section_skills_subtitle: 'تصنيف شامل للقدرات الهندسية عبر الواجهات والأنظمة الخلفية وقواعد البيانات و DevOps',

    section_projects_title: 'المشاريع المميزة',
    section_projects_subtitle: 'منصات ويب متكاملة، وبوابات مايكروسيرفسز، وتطبيقات واجهات تفاعلية',
    filter_all: 'كافة المشاريع',
    filter_fullstack: 'Full-Stack متكامل',
    filter_frontend: 'واجهات أمامية',
    filter_backend: 'أنظمة و APIs',
    filter_architecture: 'معمارية وحزم برمجية',
    project_tech_stack: 'التقنيات المستخدمة',
    project_key_highlights: 'المحطات والتحديات الهندسية',
    project_no_results: 'لا توجد مشاريع في هذا التصنيف حالياً.',

    section_experience_title: 'الخبرات المهنية',
    section_experience_subtitle: 'سجل حافل بتقديم القيمة التقنية وتطوير الأنظمة المعقدة بنجاح',
    experience_present: 'حتى الآن',

    section_education_title: 'المؤهل الأكاديمي',
    section_education_subtitle: 'خلفية أكاديمية متخصصة في علوم الحاسب وهندسة البرمجيات',
    education_coursework: 'المقررات الأساسية',

    section_certifications_title: 'الشهادات والاعتمادات',
    section_certifications_subtitle: 'شهادات احترافية وتخصصات معتمدة من كبرى المنظمات التقنية',
    cert_verify_credential: 'التحقق من الشهادة',
    cert_id_label: 'رقم الاعتماد',

    section_achievements_title: 'الإنجازات والمحطات البارزة',
    section_achievements_subtitle: 'تكريمات ومساهمات مفتوحة المصدر وإنجازات برمجية ملموسة',

    section_contact_title: 'تواصل معي',
    section_contact_subtitle: 'متاح للنقاشات التقنية وفرص العمل الاحترافية والمشاريع النوعية',
    contact_info_heading: 'التواصل المباشر',
    contact_info_text: 'يسعدني تواصلكم عبر البريد الإلكتروني أو من خلال شبكات LinkedIn و GitHub. أحرص على الرد السريع.',
    contact_location_label: 'الموقع / طبيعة العمل',
    contact_email_label: 'البريد الإلكتروني المباشر',
    contact_socials_label: 'الملفات المهنية',
    contact_form_title: 'أرسل رسالة مباشرة',
    contact_form_name: 'الاسم الكريم',
    contact_form_email: 'البريد الإلكتروني',
    contact_form_subject: 'الموضوع',
    contact_form_message: 'نص الرسالة',
    contact_form_submit: 'إرسال الرسالة',
    contact_form_sending: 'جاري التجهيز...',
    contact_form_success: 'شكراً لك! تم تجهيز تطبيق البريد برسالتك للإرسال المباشر.',
    contact_form_note: 'استضافة ساكنة آمنة: النقر على الإرسال يفتح مسودة مجهزة مباشرة إلى بريدي الإلكتروني دون وسيط.',

    pwa_install_title: 'تثبيت كتطبيق مستقل',
    pwa_install_desc: 'أضف هذا الموقع إلى جهازك للوصول الفوري وتصفح المحتوى دون اتصال بالإنترنت.',
    pwa_install_btn: 'تثبيت التطبيق',
    pwa_dismiss_btn: 'لاحقاً',
    pwa_ios_instruction: 'للتثبيت على iPhone/iPad: انقر على زر المشاركة في Safari ثم اختر "إضافة إلى الصفحة الرئيسية".',
    pwa_app_installed: 'التطبيق مثبت وجاهز للعمل دون اتصال',
    offline_notice_title: 'أنت تتصفح دون اتصال',
    offline_notice_desc: 'يتم عرض النسخة المحفوظة محلياً. العمليات الشبكية تتطلب اتصالاً فعالاً.',
    offline_btn_retry: 'إعادة فحص الاتصال',

    toggle_theme: 'تبديل المظهر',
    theme_dark: 'الوضع الداكن',
    theme_light: 'الوضع الفاتح',
    toggle_language: 'Switch to English',
    skip_to_content: 'تخطي إلى المحتوى الرئيسي',
    open_menu: 'فتح القائمة الرئيسية',
    close_menu: 'إغلاق القائمة',

    footer_rights: 'جميع الحقوق محفوظة.',
    footer_built_with: 'تم البناء باستخدام React و TypeScript وأحدث معايير الويب.',
    footer_template_notice: 'قالب سيرة ذاتية برمجية احترافي وقابل لإعادة الاستخدام مع دعم PWA'
  }
};
