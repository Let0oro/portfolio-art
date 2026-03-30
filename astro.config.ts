import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://let0oro.github.io',
  base: process.env.NODE_ENV === 'production' ? '/portfolio-art/' : '/',
  image: {
    domains: ['placehold.co']
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
