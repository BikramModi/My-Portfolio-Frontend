const CACHE_NAME = "portfolio-v1";

const STATIC_ASSETS = [
  "/",
  "/offline.html",
  "/manifest.webmanifest",

  "/favicon.ico",

  "/icons/icon-192.png",

  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),

      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      }),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const request = event.request;

  const url = new URL(request.url);

  /*
      Cache First

      Images

      Fonts

      JS

      CSS

      Icons
  */

  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/icons") ||
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "style" ||
    request.destination === "script"
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return (
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, copy);
            });

            return response;
          })
        );
      })
    );

    return;
  }

  /*
      Network First

      HTML Pages
  */

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, copy);
          });

          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);

          if (cached) return cached;

          return caches.match("/offline.html");
        })
    );
  }
});