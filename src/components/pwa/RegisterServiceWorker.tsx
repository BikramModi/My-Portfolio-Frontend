"use client";

import { useServiceWorker } from "@/hooks/useServiceWorker";

export default function RegisterServiceWorker() {
  useServiceWorker();

  return null;
}