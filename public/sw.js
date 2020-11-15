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
  precache: 'sw-cache'
})

workbox.precaching.precacheAndRoute([
    {url: '/index.html',revision: null},
    {url: '/projects',revision: null},
    {url: '/projects/projects.css',revision: null},
    {url: '/global.css',revision: null},
    {url: '/home.css',revision: null},
    {url: '/about',revision: null},
    {url: '/about/about.css',revision: null},
    {url: '/article',revision: null},
    {url: 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate',revision: null}

  
  ], {
  });
  

console.log("hell");