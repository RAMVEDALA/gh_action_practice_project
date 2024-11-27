import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      enabled: true,            // Enable coverage reporting
      reporter: ['text', 'lcov', 'json-summary'], // Generate multiple report formats
      reportsDirectory: './coverage', // Specify the output directory for coverage reports
      include: ['src/**/*.js'],  // Files to include in coverage
      exclude: ['node_modules', 'test/**', 'src/test/**'], // Files to exclude
  },
});
