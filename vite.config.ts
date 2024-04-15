import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const PORT = `${env.VITE_PORT ?? 3001}`;

  return {
    base: "/",
    server: { port: parseInt(PORT), open: true },
    plugins: [react()],
  };
});
