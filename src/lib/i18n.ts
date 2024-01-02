"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MINECRAFT_NAME, MINECRAFT_PREVIEW_NAME } from "./constants";

const resources = {
  en: {
    translation: {
      "button.select": "Select",
      "button.save": "Save",
      "button.remove": "Remove",
      "navigation.setup": "Setup",
      "navigation.mod": "Mod",
      "setup.title": "Setup",
      "setup.description": "Setup modding options",
      "setup.tab.sideloading": "Sideloading",
      "setup.tab.unlocking": "Unlocking",
      "setup.tab.betterRenderDragon": "Better RD",
      "setup.sideloading.title": "Sideload Minecraft",
      "setup.sideloading.sideloaderPathLabel": "Sideload location",
      "setup.sideloading.description": "Enable sideloading",
      "setup.sideloading.pathPlaceholder":
        "C:\\NotWindowsApps\\[Minecraft.exe]",
      "setup.sideloading.pathDescription":
        "Select the sideloaded Minecraft installation directory.",
      "setup.sideloading.minecraftNotFound":
        "Can not find Windows.Minecraft.exe in the selected directory.",
      "setup.sideloading.instanceNameLabel": "Add a sideloaded instance",
      "setup.sideloading.instanceNamePlaceholder": "Unique instance name",
      "setup.sideloading.addInstance": "Create new instance",
      "setup.sideloading.processTitle": "Begin sideloading",
      "setup.sideloading.processDescription":
        "Start Minecraft to identify the process ID and begin sideloading to the location selected above.",
      "setup.sideloading.startMinecraft": `Launch ${MINECRAFT_NAME}`,
      "setup.sideloading.startMinecraftPreview": `Launch ${MINECRAFT_PREVIEW_NAME}`,
      "setup.sideloading.processButton": "Sideload",
      "setup.sideloading.launchingMinecraft": "Launching Minecraft...",
      "setup.sideloading.consoleTitle": "Console output",
      "setup.sideloading.processing": "Processing...",
      "setup.brd.betterRenderDragonTitle": "Better RenderDragon",
      "setup.brd.betterRenderDragonDescription":
        "Use Better RenderDragon to load BetterRTX shader materials.",
      "mod.loading": "Loading BetterRTX edits...",
      "mod.title": "Apply Shader",
      "mod.description": "Apply BetterRTX shader to a selected instance.",
      "mod.installUnlockerInstance": "Install with Unlocker",
      "mod.installSideloadInstance": "Install to sideloaded instance",
      "mod.installLabel": "Install",
      "mod.errorCopyingSideloadPack": "Error copying to sideloaded instance",
      "mod.errorCopyingSideloadPackDescription":
        "You may manually save the mod files to your sideloaded instance.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
