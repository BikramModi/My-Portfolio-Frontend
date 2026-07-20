const STATIC_CACHE = "static-v2";
const PAGE_CACHE = "pages-v2";
const IMAGE_CACHE = "images-v2";

const STATIC_ASSETS = [
  // Pages
  "/",
  "/about",
  "/projects",
  "/contact",

  // Offline page
  "/offline.html",

  //Resume
  "/Bikram_Modi_MERN_Developer_Resume.pdf",

  // Manifest
  "/manifest.webmanifest",

  // Icons
  "/favicon.ico",
  "/icons/icon-192.png",
  "/icons/icon-512.png",

  // Images
  "/images/profile.jpg",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),

      caches.keys().then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (
              key !== STATIC_CACHE &&
              key !== PAGE_CACHE &&
              key !== IMAGE_CACHE
            ) {
              return caches.delete(key);
            }

            return Promise.resolve();
          })
        )
      ),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const request = event.request;
  const url = new URL(request.url);

  /*
  ========================================
  CACHE FIRST
  ========================================

  Static assets

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
      caches.match(request).then(async (cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache =
              request.destination === "image"
                ? await caches.open(IMAGE_CACHE)
                : await caches.open(STATIC_CACHE);

            cache.put(request, response.clone());
          }

          return response;
        } catch {
          return cachedResponse;
        }
      })
    );

    return;
  }

  /*
  ========================================
  NETWORK FIRST
  ========================================

  HTML navigation

  */

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(PAGE_CACHE);

            cache.put(request, response.clone());
          }

          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);

          if (cachedPage) {
            return cachedPage;
          }

          return caches.match("/offline.html");
        })
    );

    return;
  }

  /*
  ========================================
  EVERYTHING ELSE
  ========================================

  */

  event.respondWith(
    fetch(request).catch(async () => {
      const cached = await caches.match(request);

      if (cached) {
        return cached;
      }

      return Response.error();
    })
  );
});