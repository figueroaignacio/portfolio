import tailwindcss from '@tailwindcss/vite';
import velite from '@velite/plugin-vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), velite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@content': path.resolve(__dirname, '.velite'),
    },
  },
  build: {
    outDir: 'dist',
  },
  esbuild: {
    target: 'es2022',
  },
});
