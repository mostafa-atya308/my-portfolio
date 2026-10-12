import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { siteConfig } from './data/siteConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { OfflineToast } from './components/OfflineToast';

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage();
  const [showPwaModal, setShowPwaModal] = useState(false);
  const sections = siteConfig.sections;

  return (
    <>
      {/* Skip to Content Accessibility Anchor */}
      <a href="#main-content" className="skip-link">
        {t.skip_to_content}
      </a>

      {/* Navigation Header */}
      <Navbar
        onOpenPwaGuide={() => setShowPwaModal(true)}
        canInstallPwa={siteConfig.preferences.enablePwaPrompt}
      />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        {sections.about && <About />}
        {sections.skills && <Skills />}
        {sections.projects && <Projects />}
        {sections.experience && <Experience />}
        {sections.education && <Education />}
        {sections.certifications && <Certifications />}
        {sections.achievements && <Achievements />}
        {sections.contact && <Contact />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Progressive Web App Installation & Offline Support */}
      {siteConfig.preferences.enablePwaPrompt && (
        <PwaInstallBanner
          showModal={showPwaModal}
          onCloseModal={() => setShowPwaModal(false)}
        />
      )}
      <OfflineToast />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
