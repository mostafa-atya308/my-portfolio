import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { certifications } from '../data/certifications';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_certifications}</span>
          <h2 className="section-title">{t.section_certifications_title}</h2>
          <p className="section-subtitle">{t.section_certifications_subtitle}</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => {
            const title = language === 'ar' ? cert.titleAr : cert.titleEn;
            const issuer = language === 'ar' ? cert.issuerAr : cert.issuerEn;
            const date = language === 'ar' ? cert.dateAr : cert.dateEn;

            return (
              <div key={cert.id} className="card cert-card">
                <div className="cert-card-header">
                  <div className="cert-icon-wrapper">
                    <Award size={22} />
                  </div>
                  <div className="cert-header-content">
                    <h3 className="cert-title">{title}</h3>
                    <h4 className="cert-issuer">{issuer}</h4>
                  </div>
                </div>

                <div className="cert-meta-row">
                  <div className="cert-date">
                    <Calendar size={14} />
                    <span>{date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="cert-id">
                      <span>{t.cert_id_label}:</span>
                      <code>{cert.credentialId}</code>
                    </div>
                  )}
                </div>

                {cert.verifyUrl && (
                  <div className="cert-actions">
                    <a
                      href={cert.verifyUrl}
                      className="btn btn-secondary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShieldCheck size={15} />
                      <span>{t.cert_verify_credential}</span>
                      <ExternalLink size={13} />
                    </a>
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
