"use client";

import { WifiOff } from "lucide-react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

export default function OfflineBanner() {
  const { offline } = useNetworkStatus();

  if (!offline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-red-600 py-3 text-center text-sm font-medium text-white shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <WifiOff size={18} />
        You are offline. Some features may be unavailable.
      </div>
    </div>
  );
}