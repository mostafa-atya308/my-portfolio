import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/skills';
import { Layout, Server, Database, Cpu, Code } from 'lucide-react';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Code': return <Code size={20} />;
      default: return <Code size={20} />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_skills}</span>
          <h2 className="section-title">{t.section_skills_title}</h2>
          <p className="section-subtitle">{t.section_skills_subtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skills Filter">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('all')}
            role="tab"
            aria-selected={activeTab === 'all'}
          >
            {t.filter_all}
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'tab-btn-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              role="tab"
              aria-selected={activeTab === cat.id}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{language === 'ar' ? cat.titleAr : cat.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map(cat => (
            <div key={cat.id} className="card skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="category-title">
                  {language === 'ar' ? cat.titleAr : cat.titleEn}
                </h3>
              </div>

              <div className="skills-items-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-pill">
                    <span className="skill-name">{skill.name}</span>
                    {(skill.levelEn || skill.levelAr) && (
                      <span className="skill-level-tag">
                        {language === 'ar' ? skill.levelAr : skill.levelEn}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
