import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // Ganti jadi '/mj-home/' kalau repo name beda
  site: 'https://mj-shops.biz.id',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
