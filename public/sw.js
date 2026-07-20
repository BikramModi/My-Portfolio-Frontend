const STATIC_CACHE = "static-v2";
const PAGE_CACHE = "pages-v2";
const IMAGE_CACHE = "images-v2";
const API_CACHE = "api-v1";

const STATIC_ASSETS = [
  // Pages
  "/",
  "/about",
  "/projects",
  "/contact",

  // Offline page
  "/offline.html",

  // Resume
  "/Bikram_Modi_MERN_Developer_Resume.pdf",

  // Manifest
  "/manifest.webmanifest",

  // Images
  "/images/profile.jpg",
];

/*
========================================
CACHE LIMITS
========================================
*/

const MAX_PAGE_ENTRIES = 20;
const MAX_IMAGE_ENTRIES = 50;
const MAX_API_ENTRIES = 30;

/*
========================================
CACHE EXPIRATION
========================================
*/

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);

  const keys = await cache.keys();

  while (keys.length > maxEntries) {
    const oldest = keys.shift();

    if (oldest) {
      await cache.delete(oldest);
    }
  }
}

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
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
              key !== IMAGE_CACHE &&
              key !== API_CACHE
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

            await cache.put(request, response.clone());

            if (request.destination === "image") {
              await trimCache(IMAGE_CACHE, MAX_IMAGE_ENTRIES);
            }
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

            await cache.put(request, response.clone());

            await trimCache(PAGE_CACHE, MAX_PAGE_ENTRIES);
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
  NETWORK FIRST
  API Requests
  ========================================
  */

  if (
    url.origin === "https://api.bikrammodi.com" &&
    request.method === "GET" &&
    !url.pathname.startsWith("/auth")
  ) {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(API_CACHE);

            await cache.put(request, response.clone());

            await trimCache(API_CACHE, MAX_API_ENTRIES);
          }

          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);

          if (cached) {
            return cached;
          }

          return new Response(
            JSON.stringify({
              message: "Offline",
            }),
            {
              status: 503,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
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