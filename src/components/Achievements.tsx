import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { achievements } from '../data/achievements';
import { Trophy, Star, ExternalLink, Calendar } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_achievements}</span>
          <h2 className="section-title">{t.section_achievements_title}</h2>
          <p className="section-subtitle">{t.section_achievements_subtitle}</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach) => {
            const title = language === 'ar' ? ach.titleAr : ach.titleEn;
            const desc = language === 'ar' ? ach.descriptionAr : ach.descriptionEn;
            const date = language === 'ar' ? ach.dateAr : ach.dateEn;

            return (
              <div key={ach.id} className="card achievement-card">
                <div className="achievement-top">
                  <div className="achievement-icon-wrapper">
                    <Trophy size={22} />
                  </div>
                  {ach.metric && (
                    <span className="badge badge-tech achievement-metric">
                      <Star size={13} />
                      <span>{ach.metric}</span>
                    </span>
                  )}
                </div>

                <h3 className="achievement-title">{title}</h3>
                <p className="achievement-desc">{desc}</p>

                <div className="achievement-footer">
                  <div className="achievement-date">
                    <Calendar size={13} />
                    <span>{date}</span>
                  </div>

                  {ach.link && (
                    <a
                      href={ach.link}
                      className="achievement-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} link`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
