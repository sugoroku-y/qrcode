self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open('qrcode-caches');
      await cache.addAll([
        './',
        './index.html',
        './main.js',
        './qrcode.js',
        './style.css',
        './sw.js',
      ]);
    })()
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      const response = await caches.match(event.request);
      return response || (await fetch(event.request));
    })()
  );
});
