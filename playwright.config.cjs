import { defineConfig } from '@playwright/experimental-ct-react'
import path from 'node:path'
import os from 'node:os'

export default defineConfig({
  testDir: 'src/lib',
  testMatch: ['**/*.test.ct.tsx'],
  outputDir: path.join(os.tmpdir(), 'pw-ct-output'),
  reporter: [['list']],
  workers: 1,
  use: {
    browserName: 'chromium',
    viewport: { width: 400, height: 800 },
    ctPort: 3500,
    testIdAttribute: 'data-testid',
    trace: 'off',
    screenshot: 'off',
    video: 'off',
    launchOptions: {
      executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
      args: ['--no-sandbox', '--disable-dev-shm-usage'],
    },
    ctViteConfig: {
      resolve: {
        alias: {
          client: path.resolve(__dirname, 'src/client'),
          lib: path.resolve(__dirname, 'src/lib'),
        },
      },
      css: {
        devSourcemap: false,
        preprocessorOptions: {
          scss: {
            loadPaths: [path.resolve(__dirname, 'src/lib')],
          },
        },
      },
      build: {
        sourcemap: false,
      },
    },
  },
})
