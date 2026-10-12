import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Mail, MapPin, Copy, Check, Send, ExternalLink, Tag } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const contact = siteConfig.contact;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Construct legitimate mailto link with encoded parameters
    const subjectLine = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${subjectLine}&body=${bodyContent}`;
    window.location.href = mailtoUrl;

    setStatusMessage(t.contact_form_success);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_contact}</span>
          <h2 className="section-title">{t.section_contact_title}</h2>
          <p className="section-subtitle">{t.section_contact_subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Direct Details & Profiles Card */}
          <div className="card contact-details-card">
            <h3 className="contact-card-title">{t.contact_info_heading}</h3>
            <p className="contact-card-text">{t.contact_info_text}</p>

            <div className="contact-items-list">
              {/* Email Address with Copy Button */}
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-item-info">
                  <span className="contact-item-label">{t.contact_email_label}</span>
                  <a href={`mailto:${contact.email}`} className="contact-item-value">
                    {contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-icon"
                  title={copied ? t.cta_email_copied : t.cta_copy_email}
                  aria-label={t.cta_copy_email}
                >
                  {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              {(contact.locationEn || contact.locationAr) && (
                <div className="contact-item-row">
                  <div className="contact-item-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-item-info">
                    <span className="contact-item-label">{t.contact_location_label}</span>
                    <span className="contact-item-value">
                      {language === 'ar' ? contact.locationAr : contact.locationEn}
                    </span>
                  </div>
                </div>
              )}

              {/* Pricing Highlight */}
              {siteConfig.pricing && (
                <div className="contact-item-row contact-pricing-row">
                  <div className="contact-item-icon">
                    <Tag size={18} />
                  </div>
                  <div className="contact-item-info">
                    <span className="contact-item-label">
                      {language === 'ar' ? 'سعر تطوير الموقع / القالب' : 'Project / Template Pricing'}
                    </span>
                    <span className="contact-item-value text-cyan">
                      {language === 'ar' ? siteConfig.pricing.labelAr : siteConfig.pricing.labelEn}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="contact-social-section">
              <span className="contact-social-label">{t.contact_socials_label}</span>
              <div className="contact-social-buttons">
                {contact.github && (
                  <a
                    href={contact.github}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {contact.facebook && (
                  <a
                    href={contact.facebook}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon size={16} />
                    <span>Facebook</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Direct Message Composer */}
          <div className="card contact-form-card">
            <h3 className="contact-card-title">{t.contact_form_title}</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    {t.contact_form_name} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    {t.contact_form_email} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  {t.contact_form_subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-input"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  {t.contact_form_message} *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="form-textarea"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  <span>{t.contact_form_submit}</span>
                </button>
                <span className="contact-form-notice">{t.contact_form_note}</span>
              </div>

              {statusMessage && (
                <div className="form-status-alert">
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
