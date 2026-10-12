import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Mail, ArrowDown, ExternalLink, Terminal, Code2, Database, Tag } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const identity = siteConfig.identity;
  const contact = siteConfig.contact;

  const techBadges = [
    { name: 'TypeScript', icon: <Code2 size={14} /> },
    { name: 'React.js', icon: <Terminal size={14} /> },
    { name: 'Node.js', icon: <Terminal size={14} /> },
    { name: 'Next.js', icon: <Terminal size={14} /> },
    { name: 'PostgreSQL', icon: <Database size={14} /> },
    { name: 'MongoDB', icon: <Database size={14} /> },
    { name: 'Docker', icon: <Terminal size={14} /> },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Availability Status & Pricing Badges */}
          <div className="hero-top-badges">
            {identity.availability.available && (
              <div className="badge-status hero-status-pill">
                <span className="status-dot"></span>
                <span>
                  {language === 'ar'
                    ? identity.availability.statusAr
                    : identity.availability.statusEn}
                </span>
              </div>
            )}

            {siteConfig.pricing && (
              <div className="badge badge-tech hero-pricing-pill">
                <Tag size={13} />
                <span>
                  {language === 'ar'
                    ? siteConfig.pricing.labelAr
                    : siteConfig.pricing.labelEn}
                </span>
              </div>
            )}
          </div>

          {/* Hero Greeting and Name */}
          <div className="hero-titles">
            <span className="hero-greeting">{t.hero_greeting}</span>
            <h1 className="hero-name">
              {language === 'ar' ? identity.nameAr : identity.nameEn}
            </h1>
            <h2 className="hero-role">
              {language === 'ar' ? identity.titleAr : identity.titleEn}
            </h2>
          </div>

          {/* Headline and Intro */}
          <p className="hero-headline">
            {language === 'ar' ? identity.headlineAr : identity.headlineEn}
          </p>
          <p className="hero-intro">
            {language === 'ar' ? identity.introAr : identity.introEn}
          </p>

          {/* Technology Highlights */}
          <div className="hero-tech-highlights">
            <span className="hero-tech-label">{t.hero_technologies_title}:</span>
            <div className="hero-tech-badges">
              {techBadges.map(tech => (
                <span key={tech.name} className="badge badge-tech">
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>{t.cta_view_projects}</span>
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={16} />
              <span>{t.cta_contact_me}</span>
            </a>
            {contact.cvUrl && contact.cvUrl !== '#' && (
              <a
                href={contact.cvUrl}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t.cta_download_cv}</span>
                <ExternalLink size={15} />
              </a>
            )}
          </div>

          {/* Social Links */}
          <div className="hero-socials" aria-label="Social Profiles">
            {contact.github && (
              <a
                href={contact.github}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
            {contact.facebook && (
              <a
                href={contact.facebook}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                <FacebookIcon size={20} />
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="social-link"
                aria-label="Direct Email"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Visual Graphic / Avatar Presentation */}
        <div className="hero-visual">
          <div className="hero-visual-stack">
            {identity.avatarUrl && (
              <div className="hero-avatar-frame">
                <img
                  src={identity.avatarUrl}
                  alt={language === 'ar' ? identity.nameAr : identity.nameEn}
                  className="hero-avatar-image"
                  width="180"
                  height="180"
                />
              </div>
            )}

            <div className="hero-avatar-card">
              <div className="code-card-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-filename">Engineer.ts</span>
              </div>
              <div className="code-snippet" dir="ltr">
                <pre>
                  <code>
{`// Full-Stack Engineer Profile
interface Engineer {
  name: "${identity.nameEn}";
  role: "Full-Stack Software Engineer";
  stack: ["TypeScript", "React", "Node", "PostgreSQL", "Docker"];
  status: "Available for high-impact roles";
}

export const mostafa: Engineer = {
  passion: "Scalable Systems & Fluid UI",
  education: "B.Eng. Computer Engineering (Honors)",
  readyForImpact: true
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
