import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with immediate auto-update & auto-reload
if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      // Force service worker to activate and reload the page with new content
      updateSW(true);
    },
    onOfflineReady() {
      console.log('PWA: App cached for offline usage.');
    },
    onRegistered(registration) {
      if (registration) {
        // Check for updates whenever user comes online
        window.addEventListener('online', () => {
          registration.update();
        });
        // Check for updates when tab gains focus
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible' && navigator.onLine) {
            registration.update();
          }
        });
      }
    }
  });

  // Reload page when the new service worker takes control
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
