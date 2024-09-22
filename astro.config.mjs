import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://SaeYoshizaki.github.io',
  vite: {
    ssr: {
      noExternal: ['microcms-js-sdk'],  // microcms-js-sdkを外部依存として扱わない
    },
  },
});
