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
    dedupe: ['react', 'react-dom'],
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
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }

          if (id.includes('/src/lib/')) {
            return 'nebulakit'
          }
        },
      },
    },
  },
})
