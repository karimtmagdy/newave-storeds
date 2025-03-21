import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  server: {
    port: 3000,
    // cors: {
    //   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    //   origin: ["http://localhost:8000", "https://nw-express.vercel.app"],
    // },
  },
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@/app": path.resolve(__dirname, "./src/app"),
      '@/app':"./src/app",
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/common": path.resolve(__dirname, "./src/common"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/context": path.resolve(__dirname, "./src/context"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/layout": path.resolve(__dirname, "./src/layout"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/types": path.resolve(__dirname, "./src/types"),
    },
  },
});
