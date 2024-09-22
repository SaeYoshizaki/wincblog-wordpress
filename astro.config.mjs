import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],

  vite: {
    ssr: {
      noExternal: ['microcms-js-sdk'],  // microcms-js-sdkを外部依存として扱わない
    },
  },

  output: 'server',
  adapter: vercel(),
});