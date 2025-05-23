import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs'],
  target: 'node20',
  outDir: 'dist',
  sourcemap: true,
  clean: true,
});