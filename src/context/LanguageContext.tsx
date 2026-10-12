import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, TranslationDictionary } from '../i18n/translations';
import { siteConfig } from '../data/siteConfig';

interface LanguageContextType {
  language: Language;
  dir: 'ltr' | 'rtl';
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio_preferred_lang');
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    } catch {
      // Storage unavailable or disabled
    }
    return siteConfig.preferences.defaultLanguage;
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_preferred_lang', language);
    } catch {
      // Storage unavailable
    }
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
