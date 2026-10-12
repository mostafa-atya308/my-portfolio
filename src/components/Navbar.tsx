import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../data/siteConfig';
import { Sun, Moon, Globe, Menu, X, Download, Smartphone, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenPwaGuide?: () => void;
  canInstallPwa?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPwaGuide, canInstallPwa }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav_home },
    { href: '#about', label: t.nav_about },
    { href: '#skills', label: t.nav_skills },
    { href: '#projects', label: t.nav_projects },
    { href: '#experience', label: t.nav_experience },
    { href: '#education', label: t.nav_education },
    { href: '#certifications', label: t.nav_certifications },
    { href: '#contact', label: t.nav_contact },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Monogram */}
        <a href="#home" className="navbar-brand" aria-label="Developer Home">
          <span className="brand-monogram" title="mostafa Atya">
            <Code2 size={18} strokeWidth={2.5} />
          </span>
          <span className="brand-name">
            mostafa Atya
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls: Theme, Language, PWA, Mobile Toggle */}
        <div className="navbar-actions">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="btn-icon"
            title={t.toggle_language}
            aria-label={t.toggle_language}
          >
            <Globe size={18} />
            <span className="lang-indicator">{language === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={t.toggle_theme}
            aria-label={t.toggle_theme}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* PWA App Install Button (if supported or open guide) */}
          {onOpenPwaGuide && (
            <button
              onClick={onOpenPwaGuide}
              className="btn btn-secondary btn-sm pwa-nav-btn"
              title={t.pwa_install_btn}
              aria-label={t.pwa_install_btn}
            >
              <Smartphone size={15} />
              <span>{canInstallPwa ? t.pwa_install_btn : 'App'}</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-toggle"
            aria-label={mobileMenuOpen ? t.close_menu : t.open_menu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="navbar-brand">
                <span className="brand-monogram">
                  <Code2 size={18} strokeWidth={2.5} />
                </span>
                <span className="brand-name">mostafa Atya</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="btn-icon"
                aria-label={t.close_menu}
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="mobile-nav-link" onClick={handleNavClick}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-actions">
              <a href="#contact" className="btn btn-primary" onClick={handleNavClick}>
                {t.cta_contact_me}
              </a>
              {siteConfig.contact.cvUrl && (
                <a
                  href={siteConfig.contact.cvUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  <span>{t.cta_download_cv}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
