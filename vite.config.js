import { defineConfig } from "vite";
// import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // createSvgSpritePlugin({
    //   exportType: 'react', // или 'react' или 'vue'
    //   include: '**/icons/*.svg',
    // }),
  ],

  // Для prerender: gsap отдаётся в CommonJS-формате, Node не видит его методы при импорте.
  // noExternal — Vite сам встроит эти пакеты в серверную сборку
  ssr: {
    noExternal: ["gsap", "@gsap/react", "swiper", "lenis"],
  },

  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
