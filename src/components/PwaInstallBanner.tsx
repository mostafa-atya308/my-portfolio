import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, X, Share2, Smartphone, Monitor } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface PwaInstallBannerProps {
  showModal: boolean;
  onCloseModal: () => void;
}

export const PwaInstallBanner: React.FC<PwaInstallBannerProps> = ({ showModal, onCloseModal }) => {
  const { language, t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    // Check if running in standalone display mode
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true;
      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      // Fallback: opens the guide modal
      onCloseModal();
    }
  };

  // If already installed or dismissed, hide the bottom banner
  const showBottomBanner = !isStandalone && !bannerDismissed && deferredPrompt !== null;

  return (
    <>
      {/* Floating Bottom Install Banner (when native install prompt is primed) */}
      {showBottomBanner && (
        <aside className="pwa-banner card" aria-label="Install App Prompt">
          <div className="pwa-banner-content">
            <div className="pwa-banner-icon">
              <Smartphone size={22} />
            </div>
            <div className="pwa-banner-text">
              <strong className="pwa-banner-title">{t.pwa_install_title}</strong>
              <p className="pwa-banner-desc">{t.pwa_install_desc}</p>
            </div>
          </div>
          <div className="pwa-banner-actions">
            <button
              onClick={handleInstallClick}
              className="btn btn-primary btn-sm"
            >
              <Download size={14} />
              <span>{t.pwa_install_btn}</span>
            </button>
            <button
              onClick={() => setBannerDismissed(true)}
              className="btn-icon btn-sm"
              aria-label={t.pwa_dismiss_btn}
            >
              <X size={16} />
            </button>
          </div>
        </aside>
      )}

      {/* Manual Installation Guide Modal */}
      {showModal && (
        <div
          className="modal-backdrop"
          onClick={onCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-guide-title"
        >
          <div className="modal-content card pwa-guide-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="pwa-guide-header-title">
                <Smartphone size={24} className="text-cyan" />
                <h3 id="pwa-guide-title" className="modal-title">{t.pwa_install_title}</h3>
              </div>
              <button onClick={onCloseModal} className="btn-icon" aria-label={t.cta_close}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body pwa-guide-body">
              <p className="modal-desc">{t.pwa_install_desc}</p>

              {deferredPrompt ? (
                <div className="pwa-prompt-direct">
                  <button onClick={handleInstallClick} className="btn btn-primary btn-full">
                    <Download size={16} />
                    <span>{t.pwa_install_btn}</span>
                  </button>
                </div>
              ) : (
                <div className="pwa-platform-instructions">
                  {/* Chrome / Edge Desktop */}
                  <div className="platform-card">
                    <div className="platform-header">
                      <Monitor size={18} />
                      <strong>
                        {language === 'ar' ? 'متصفح الكمبيوتر (Chrome / Edge)' : 'Desktop (Chrome / Edge)'}
                      </strong>
                    </div>
                    <p>
                      {language === 'ar'
                        ? 'انقر على أيقونة التثبيت في شريط العنوان أعلى المتصفح، أو من قائمة الإعدادات اختر "تثبيت التطبيق".'
                        : 'Click the install icon in your address bar (right side), or choose "Install App" from the browser menu.'}
                    </p>
                  </div>

                  {/* iOS Safari */}
                  <div className="platform-card">
                    <div className="platform-header">
                      <Share2 size={18} />
                      <strong>Apple iOS (Safari)</strong>
                    </div>
                    <p>{t.pwa_ios_instruction}</p>
                  </div>

                  {/* Android */}
                  <div className="platform-card">
                    <div className="platform-header">
                      <Smartphone size={18} />
                      <strong>Android (Chrome)</strong>
                    </div>
                    <p>
                      {language === 'ar'
                        ? 'انقر على النقاط الثلاث في زاوية المتصفح، ثم اختر "إضافة إلى الشاشة الرئيسية" أو "تثبيت التطبيق".'
                        : 'Tap the three-dot menu icon in Chrome, then choose "Add to Home screen" or "Install app".'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button onClick={onCloseModal} className="btn btn-secondary btn-full">
                {t.cta_close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
