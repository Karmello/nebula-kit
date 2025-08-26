import { defineConfig } from '@playwright/experimental-ct-react'
import path from 'node:path'

export default defineConfig({
  testDir: 'src/lib/components',
  testMatch: ['**/tests/**/*.test.ct.tsx'],
  use: {
    viewport: { width: 400, height: 800 },
    ctPort: 3500,
    ctViteConfig: {
      resolve: {
        alias: {
          client: path.resolve(__dirname, 'src/client'),
          lib: path.resolve(__dirname, 'src/lib'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [path.resolve(__dirname, 'src/lib')],
          },
        },
      },
    },
  },
})
