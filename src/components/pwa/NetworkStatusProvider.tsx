"use client";

import { useEffect, useRef } from "react";

import { toast } from "react-toastify";

import { useNetworkStatus } from "@/hooks/useNetworkStatus";

export default function NetworkStatusProvider() {
  const { online } = useNetworkStatus();

  const previous = useRef(online);

  useEffect(() => {
    if (previous.current !== online) {
      if (online) {
        toast.success("Connection restored.");
      } else {
        toast.warning("You're offline.");
      }

      previous.current = online;
    }
  }, [online]);

  return null;
}