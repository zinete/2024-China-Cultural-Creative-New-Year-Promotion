import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcsstoviewport from "postcss-mobile-forever";

import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        tailwindcss(),
        postcsstoviewport({
          appSelector: "#root",
          viewportWidth: 750,
          maxDisplayWidth: 425,
          unitPrecision: 2,
          desktopWidth: 425,
        }),
      ],
    },
  },
});
