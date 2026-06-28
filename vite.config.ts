import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      server: { entry: "src/server.ts" },
    }),
    nitro({ preset: "vercel" }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    exclude: ['dotenv'],
  },
  ssr: {
    noExternal: [],
    external: ['dotenv'],
  },
});
