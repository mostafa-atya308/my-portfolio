import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { educations } from '../data/education';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_education}</span>
          <h2 className="section-title">{t.section_education_title}</h2>
          <p className="section-subtitle">{t.section_education_subtitle}</p>
        </div>

        <div className="education-grid">
          {educations.map((edu) => {
            const institution = language === 'ar' ? edu.institutionAr : edu.institutionEn;
            const degree = language === 'ar' ? edu.degreeAr : edu.degreeEn;
            const field = language === 'ar' ? edu.fieldAr : edu.fieldEn;
            const period = language === 'ar' ? edu.periodAr : edu.periodEn;
            const honors = language === 'ar' ? edu.honorsAr : edu.honorsEn;
            const coursework = language === 'ar' ? edu.courseworkAr : edu.courseworkEn;

            return (
              <div key={edu.id} className="card education-card">
                <div className="education-card-top">
                  <div className="education-icon-wrapper">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="education-degree">{degree} in {field}</h3>
                    <h4 className="education-institution">{institution}</h4>
                  </div>
                  <div className="education-period">
                    <Calendar size={14} />
                    <span>{period}</span>
                  </div>
                </div>

                {honors && (
                  <div className="education-honors">
                    <Award size={16} className="honors-icon" />
                    <span>{honors}</span>
                  </div>
                )}

                {coursework && coursework.length > 0 && (
                  <div className="education-coursework-section">
                    <div className="coursework-label">
                      <BookOpen size={14} />
                      <span>{t.education_coursework}:</span>
                    </div>
                    <div className="coursework-tags">
                      {coursework.map((course, idx) => (
                        <span key={idx} className="badge">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
