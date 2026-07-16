"use client";

import { useEffect } from "react";

import { registerServiceWorker } from "@/lib/pwa/registerSW";

export function useServiceWorker() {
  useEffect(() => {
    registerServiceWorker();
  }, []);
}