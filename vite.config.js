import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // This ensures that the paths are relative
  build: {
    outDir: 'dist', // Output directory for the build
    target: 'esnext', // Ensure modern JavaScript features are supported
  },
});