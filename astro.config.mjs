// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://rxhxt.github.io',
  base: '/grad-portfolio',
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
