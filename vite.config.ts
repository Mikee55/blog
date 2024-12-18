import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svg from "vite-svg-loader";
import proxy from "http-proxy-middleware";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svg()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});
