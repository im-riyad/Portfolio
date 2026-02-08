const CACHE_NAME = 'whr-portfolio-v1';
const assets = [
  '/',
  '/index.html',
  '/photo1.jpg',
  '/Title-logo1.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Install Service Worker and cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
