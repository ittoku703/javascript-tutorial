self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('video-store').then(function (cache) {
      return cache.addAll([
        'http://127.0.0.1:5500/client-side-web-api/video-store/',
        'http://127.0.0.1:5500/client-side-web-api/video-store/index.html',
        'http://127.0.0.1:5500/client-side-web-api/video-store/style.css',
        'http://127.0.0.1:5500/client-side-web-api/video-store/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
