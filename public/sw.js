const CACHE_NAME = "portfolio-v1";

self.addEventListener("install", (event) => {
  console.log("[SW] Installed");

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activated");

  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Cache strategies will be implemented later.
});