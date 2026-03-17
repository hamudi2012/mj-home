import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/mj-home/',
  site: 'https://hamudi2012.github.io/mj-home/',
  integrations: [tailwind()],
  output: 'static',
  build: {
           inlineStylesheets: 'auto'
           }
});
