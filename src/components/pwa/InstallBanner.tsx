"use client";

import { X } from "lucide-react";

import { useState } from "react";

import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export default function InstallBanner() {
  const [dismissed, setDismissed] =
    useState(false);

  const {
    canInstall,
    install,
  } = useInstallPrompt();

  if (!canInstall || dismissed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-xl border bg-white p-5 shadow-xl">
      <div>
        <h3 className="font-semibold">
          Install Portfolio
        </h3>

        <p className="text-sm text-gray-500">
          Install this app for a faster experience.
        </p>
      </div>

      <button
        onClick={install}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Install
      </button>

      <button
        onClick={() => setDismissed(true)}
      >
        <X size={18} />
      </button>
    </div>
  );
}