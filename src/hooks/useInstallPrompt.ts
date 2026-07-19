"use client";

import { useEffect, useState } from "react";
import { BeforeInstallPromptEvent } from "@/lib/pwa/install";

export function useInstallPrompt() {
  const [prompt, setPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [installed, setInstalled] =
    useState(false);

  useEffect(() => {
    console.log("Hook mounted");

    const beforeInstall = (
      event: Event
    ) => {
      console.log(
        "beforeinstallprompt fired"
      );

      event.preventDefault();

      setPrompt(
        event as BeforeInstallPromptEvent
      );
    };

    const installedHandler = () => {
      console.log("App Installed");

      setInstalled(true);

      setPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      beforeInstall
    );

    window.addEventListener(
      "appinstalled",
      installedHandler
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        beforeInstall
      );

      window.removeEventListener(
        "appinstalled",
        installedHandler
      );
    };
  }, []);

  useEffect(() => {
    console.log("prompt =", prompt);

    console.log("installed =", installed);

    console.log(
      "canInstall =",
      !!prompt && !installed
    );
  }, [prompt, installed]);

  async function install() {
    if (!prompt) return;

    await prompt.prompt();

    const result =
      await prompt.userChoice;

    console.log(result);

    if (result.outcome === "accepted") {
      setPrompt(null);
    }
  }

  return {
    canInstall: !!prompt && !installed,
    installed,
    install,
  };
}