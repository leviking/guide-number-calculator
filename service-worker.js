const CACHE_NAME = 'guide-number-v1';
const urlsToCache = [
  '/index.html', 
  '/power.html',
  '/distance.html'
];

// Install Event: Precache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch Event: Serve cached content or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

