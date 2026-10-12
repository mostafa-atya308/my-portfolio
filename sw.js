// Network-first fetch handler for navigation and images:
self.addEventListener("fetch", function(event) {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match("./index.html").then(function(res) {
          return res || caches.match("index.html");
        });
      })
    );
    return;
  }
  if (event.request.destination === "image" || event.request.url.indexOf("postimg.cc") !== -1) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          var copy = response.clone();
          caches.open("images-cache").then(function(cache) {
            cache.put(event.request, copy);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
    return;
  }
});

if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise(s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()}).then(()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e}));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const c=e=>n(e,r),t={module:{uri:r},exports:a,require:c};s[r]=Promise.all(i.map(e=>t[e]||c(e))).then(e=>(o(...e),a))}}define(["./workbox-835c8c05"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"registerSW.js",revision:"20261012-v2"},{url:"pwa-512x512.png",revision:"b2e674c3c9184a752b311141bb8a2a69"},{url:"pwa-192x192.png",revision:"cbbedfc9a2320e1b436af7f783f62b3d"},{url:"og-image.png",revision:"1870f76d3fd2e4b695d8e677da8a2665"},{url:"offline.html",revision:"ed993068fa95e2c4ba947c7b24c09474"},{url:"index.html",revision:"20261012-v2"},{url:"favicon.svg",revision:"8fe90080f4d4769e05cc7212091f81c6"},{url:"apple-touch-icon.png",revision:"7baff2d5b6d851a25fd8ed6db9d0baab"},{url:"404.html",revision:"5d189d6b47d93ffcf32abebce296e669"},{url:"assets/workbox-window.prod.es5-BBnX5xw4-BYcUr0TR.js",revision:null},{url:"assets/pwa-192x192-D-4Ki2H9.png",revision:null},{url:"assets/og-image-_V3hmCD1.png",revision:null},{url:"assets/index-DOOTndz3.css",revision:null},{url:"assets/index-B5PO4uIo.js",revision:"20261012-v2"},{url:"assets/favicon-Cr_H-78v.svg",revision:null},{url:"apple-touch-icon.png",revision:"7baff2d5b6d851a25fd8ed6db9d0baab"},{url:"favicon.svg",revision:"8fe90080f4d4769e05cc7212091f81c6"},{url:"offline.html",revision:"ed993068fa95e2c4ba947c7b24c09474"},{url:"pwa-192x192.png",revision:"cbbedfc9a2320e1b436af7f783f62b3d"},{url:"pwa-512x512.png",revision:"b2e674c3c9184a752b311141bb8a2a69"},{url:"manifest.webmanifest",revision:"87419d510d9fdb0d8cd43d2e0e55a6ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")});
