import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const identity = siteConfig.identity;
  const contact = siteConfig.contact;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-monogram">{identity.monogram}</span>
              <span className="footer-name">
                {language === 'ar' ? identity.nameAr : identity.nameEn}
              </span>
            </div>
            <p className="footer-title">
              {language === 'ar' ? identity.titleAr : identity.titleEn}
            </p>
          </div>

          <div className="footer-socials">
            {contact.github && (
              <a
                href={contact.github}
                className="btn-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                className="btn-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {contact.facebook && (
              <a
                href={contact.facebook}
                className="btn-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                <FacebookIcon size={18} />
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="btn-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="btn-icon"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {language === 'ar' ? identity.nameAr : identity.nameEn}. {t.footer_rights}
          </p>
          <p className="footer-meta">
            {t.footer_template_notice}
          </p>
        </div>
      </div>
    </footer>
  );
};
