export function isOnline() {
  if (typeof navigator === "undefined") return true;

  return navigator.onLine;
}