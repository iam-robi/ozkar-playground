// https://nuxt.com/docs/api/configuration/nuxt-config
import {
  defineConfig,
  type ViteDevServer,
  type PreviewServerForHook,
} from "vite";

//@ts-ignore
import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon", "@nuxt/ui"],

  pinia: {
    storesDirs: ["./store/**"],
  },
  colorMode: {
    preference: "night", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
  },
  vite: {
    plugins: [crossOriginIsolation()],
    build: {
      target: "esnext",
    },
    optimizeDeps: { esbuildOptions: { target: "esnext" } },
  },
});
