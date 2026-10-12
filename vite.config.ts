import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Supports customizable base path via environment variable for GitHub Pages deployment
// In production defaults to '/my-portfolio/' matching GitHub repo
export default defineConfig(() => {
  const basePath = process.env.VITE_BASE_PATH || './';

  return {
    base: basePath,
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png', 'offline.html'],
        manifest: {
          name: 'mostafa Atya - Full-Stack Developer Portfolio',
          short_name: 'mostafa Atya',
          description: 'Mostafa Atya - Senior Full-Stack Software Engineer & Web Developer Portfolio',
          theme_color: '#0a0f1d',
          background_color: '#0a0f1d',
          display: 'standalone',
          orientation: 'portrait',
          start_url: './',
          scope: './',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff2}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            // Navigation requests (HTML): Always fetch from network when online with fallback to cache
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              networkTimeoutSeconds: 3,
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Images (local & external like postimg): Network-first when online, offline cache fallback
            urlPattern: ({ request, url }) =>
              request.destination === 'image' ||
              /\.(?:png|jpg|jpeg|svg|gif|webp)$/i.test(url.pathname) ||
              url.hostname.includes('postimg.cc'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images-cache',
              networkTimeoutSeconds: 3,
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
  };
});
