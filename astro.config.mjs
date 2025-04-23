// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "path";
import cloudflare from "@astrojs/cloudflare";
import astroI18next from "astro-i18next";
import icon from "astro-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    },
    adapter: cloudflare(),
    integrations: [astroI18next(), icon()],
});
