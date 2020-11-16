// This is the service worker with the Cache-first network

const CACHE = "site-cache";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.setCacheNameDetails({
  prefix: 'algorithm-net',
  suffix: 'v2',
  precache: 'sw-cache'
})

workbox.precaching.precacheAndRoute([
  { url: '/global.css', revision: null },
  { url: '/index.html', revision: null },
  { url: '/home.css', revision: null },
  { url: '/projects', revision: null },
  { url: '/projects/projects.css', revision: null },
  { url: '/me', revision: null },
  { url: '/me/about.css', revision: null },
  { url: '/article', revision: null },
  { url: '/article/article.css', revision: null },
  { url: 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate', revision: null },
  { url: '/favicon.ico', revision: null}


], {
});


console.log("hell");