import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",

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

  adapter: netlify({
    edge: false,
  }),
});
