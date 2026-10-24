import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mendodata.online',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !page.includes('404') && !page.includes('/landing') })],
  build: { inlineStylesheets: 'never' },
  // CSS sin minificar: los tests leen los estilos tal como están escritos
  vite: { build: { cssMinify: false } },
});
