import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import { vitePluginErrorOverlay } from '@hiogawa/vite-plugin-error-overlay'

const forbidInternalPublicComponentBarrel = () => ({
  name: 'forbid-internal-public-component-barrel',
  enforce: 'pre' as const,

  resolveId(source: string, importer?: string) {
    if (source !== 'lib/components') return null
    if (!importer) return null

    const normalized = importer.replaceAll('\\', '/')

    const isBadImporter =
      normalized.includes('/src/lib/components/') ||
      normalized.includes('/src/client/meta/') ||
      normalized.includes('/src/client/definitions/')

    if (isBadImporter) {
      throw new Error(
        [
          'Forbidden internal import from public component barrel:',
          '',
          `  importer: ${normalized}`,
          `  import:   ${source}`,
          '',
          'Use a leaf import instead, e.g.',
          "  import { Box } from 'lib/components/core/Box'",
          "  import type { BoxProps } from 'lib/components/core/Box/definitions'",
        ].join('\n')
      )
    }

    return null
  },
})

export default defineConfig(({ mode }) => ({
  plugins: [tsconfigPaths(), forbidInternalPublicComponentBarrel(), react(), vitePluginErrorOverlay()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      overlay: true,
      host: 'localhost',
      clientPort: 5173,
      protocol: 'ws',
    },
  },
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
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
  },
}))
