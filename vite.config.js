// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  plugins: [
    react(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
    }),
  ],
});
