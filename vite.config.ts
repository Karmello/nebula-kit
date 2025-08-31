import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      client: '/src/client',
      lib: '/src/lib',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/setup/test-setup.ts'],
    coverage: { provider: 'v8', reporter: ['lcov'] },
    include: ['src/lib/**/*.test.tsx'],
  },
})
