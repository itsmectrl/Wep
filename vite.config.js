import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        terms: resolve(import.meta.dirname, 'termsOfService.html'),
        privacy: resolve(import.meta.dirname, 'privacyPolicy.html'),
        licenses: resolve(import.meta.dirname, 'openSource.html'),
      },
    },
  },
});
