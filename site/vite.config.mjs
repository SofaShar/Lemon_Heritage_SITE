import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
  plugins: [react()],
  base: '/Lemon_Heritage_SITE/',
export default defineConfig({
  build: {
    outDir: "build",
  },
});
