import { defineConfig } from '@playwright/experimental-ct-react'
import path from 'node:path'

export default defineConfig({
  testDir: 'src/lib/components',
  testMatch: ['**/tests/**/*.test.ct.tsx'],
  use: {
    browserName: 'chromium',
    viewport: { width: 400, height: 800 },
    ctPort: 3500,
    launchOptions: {
      executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    },
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
