"use client";

import { Download } from "lucide-react";

import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export default function InstallButton() {
  const {
    canInstall,
    install,
  } = useInstallPrompt();

  if (!canInstall) return null;

  return (
    <button
      onClick={install}
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      <Download size={18} />

      Install App
    </button>
  );
}