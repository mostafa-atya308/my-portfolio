import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_experience}</span>
          <h2 className="section-title">{t.section_experience_title}</h2>
          <p className="section-subtitle">{t.section_experience_subtitle}</p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {experiences.map((exp) => {
            const role = language === 'ar' ? exp.roleAr : exp.roleEn;
            const company = language === 'ar' ? exp.companyAr : exp.companyEn;
            const period = language === 'ar' ? exp.periodAr : exp.periodEn;
            const location = language === 'ar' ? exp.locationAr : exp.locationEn;
            const description = language === 'ar' ? exp.descriptionAr : exp.descriptionEn;
            const achievements = language === 'ar' ? exp.achievementsAr : exp.achievementsEn;

            return (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    <Briefcase size={14} />
                  </div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-card card">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role-row">
                        <h3 className="timeline-role">{role}</h3>
                        {exp.current && (
                          <span className="badge-status">
                            <span className="status-dot"></span>
                            <span>{t.experience_present}</span>
                          </span>
                        )}
                      </div>
                      <h4 className="timeline-company">{company}</h4>
                    </div>

                    <div className="timeline-meta">
                      <span className="meta-item">
                        <Calendar size={14} />
                        <span>{period}</span>
                      </span>
                      {location && (
                        <span className="meta-item">
                          <MapPin size={14} />
                          <span>{location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="timeline-desc">{description}</p>

                  {/* Verified Achievements */}
                  {achievements.length > 0 && (
                    <div className="timeline-achievements">
                      {achievements.map((item, idx) => (
                        <div key={idx} className="timeline-achievement-row">
                          <CheckCircle size={15} className="achievement-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="timeline-tech">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
