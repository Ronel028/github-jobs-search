import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/job/api": "http://localhost:8080/",
      "/job": "http://localhost:8080/",
    },
  },
});
