import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Server, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  const pillars = [
    {
      icon: <Layers size={24} className="pillar-icon" />,
      title: t.about_philosophy_title,
      text: t.about_philosophy_text,
    },
    {
      icon: <Server size={24} className="pillar-icon" />,
      title: t.about_architecture_title,
      text: t.about_architecture_text,
    },
    {
      icon: <Sparkles size={24} className="pillar-icon" />,
      title: t.about_quality_title,
      text: t.about_quality_text,
    },
  ];

  const highlights = [
    {
      en: 'Microservices & REST API architecture design',
      ar: 'تصميم وبناء معماريات المايكروسيرفسز وواجهات REST البرمجية'
    },
    {
      en: 'Strict TypeScript typing & test-driven reliability',
      ar: 'كتابة كود TypeScript صارم وتطبيق الاختبارات التلقائية الموثوقة'
    },
    {
      en: 'Database indexing, schema migrations, and caching tiers',
      ar: 'تحسين فهارس قواعد البيانات وإدارة المزامنة وطبقات الذاكرة المؤقتة'
    },
    {
      en: 'Cross-browser responsive layouts & native RTL support',
      ar: 'تصميم واجهات متجاوبة لكافة المتصفحات ودعم كامل للغة العربية RTL'
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_about}</span>
          <h2 className="section-title">{t.section_about_title}</h2>
          <p className="section-subtitle">{t.section_about_subtitle}</p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="card pillar-card">
              <div className="pillar-icon-wrapper">{pillar.icon}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>

        {/* Engineering Highlights List */}
        <div className="about-highlights-card card">
          <h3 className="highlights-heading">
            {language === 'ar' ? 'المعايير الهندسية المتبعة' : 'Core Engineering Standards'}
          </h3>
          <div className="highlights-list">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>{language === 'ar' ? item.ar : item.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
