export async function registerServiceWorker() {
  if (typeof window === "undefined") return;

  if (!("serviceWorker" in navigator)) return;

  if (process.env.NODE_ENV !== "production") {
    console.info("[PWA] Service Worker disabled in development.");

    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });

    console.info("[PWA] Service Worker registered.", registration);

    return registration;
  } catch (error) {
    console.error("[PWA] Registration failed.", error);
  }
}