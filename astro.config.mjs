import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "hybrid",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
