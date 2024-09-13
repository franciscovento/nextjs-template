import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/tests/setup.ts',
    css: true,
    coverage: {
      include: ['src/components/**/*.{ts,tsx}', 'src/lib/utils/**/*.{ts,tsx}'],
      exclude: [...configDefaults.exclude],
    },
  },
});
