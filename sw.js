// Service Worker sencillo para que la PWA funcione bien
const CACHE_NAME = "acudiente-v1";

// Se instala el SW
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Se activa el SW
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Intercepta las peticiones para poder usar caché
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => cache.match(event.request));
    })
  );
});
