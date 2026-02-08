// This is a "Pass-through" Service Worker. 
// It does nothing but satisfies the browser's "App" requirements.
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});
