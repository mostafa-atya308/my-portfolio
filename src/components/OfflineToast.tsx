import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { WifiOff, Wifi, RefreshCw } from 'lucide-react';

export const OfflineToast: React.FC = () => {
  const { t } = useLanguage();
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      setTimeout(() => setShowReconnected(false), 3000);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline && !showReconnected) return null;

  return (
    <div
      className={`offline-toast card ${isOffline ? 'toast-offline' : 'toast-online'}`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-icon">
        {isOffline ? <WifiOff size={18} /> : <Wifi size={18} />}
      </div>
      <div className="toast-content">
        <strong className="toast-title">
          {isOffline ? t.offline_notice_title : 'Back Online'}
        </strong>
        <p className="toast-desc">
          {isOffline ? t.offline_notice_desc : 'Connected to network.'}
        </p>
      </div>
      {isOffline && (
        <button
          onClick={() => window.location.reload()}
          className="btn btn-secondary btn-sm"
          title={t.offline_btn_retry}
        >
          <RefreshCw size={13} />
          <span>{t.offline_btn_retry}</span>
        </button>
      )}
    </div>
  );
};
