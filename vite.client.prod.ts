import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
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
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
  },
  base: '/',
  build: {
    outDir: 'build/client',
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        coreRouting: path.resolve(__dirname, 'src/client/definitions/constants/routing/core-page-routing.ts'),
        foundationsRouting: path.resolve(
          __dirname,
          'src/client/definitions/constants/routing/foundations-routing.ts'
        ),
        proRouting: path.resolve(__dirname, 'src/client/definitions/constants/routing/pro-page-routing.ts'),
      },
      output: {
        // ⭐ ADD THIS BLOCK → static filenames for routing outputs
        entryFileNames(chunk) {
          if (chunk.name === 'coreRouting') return 'routing/coreRouting.js'
          if (chunk.name === 'foundationsRouting') return 'routing/foundationsRouting.js'
          if (chunk.name === 'proRouting') return 'routing/proRouting.js'
          return 'assets/[name]-[hash].js'
        },

        // keep your existing manual chunking logic
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/react-dom')) return 'react-dom'
            if (id.includes('/react-router')) return 'react-router'
            if (id.includes('/react/')) return 'react'
            if (id.includes('/classnames')) return 'classnames'
            return 'vendor'
          }
        },
      },
    },
  },
})
