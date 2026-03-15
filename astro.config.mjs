import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/mj-home/', // 👈 SESUAIKAN DENGAN NAMA REPO
  site: 'https://hamudi2012.github.io/mj-home/',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
