import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import { vitePluginErrorOverlay } from '@hiogawa/vite-plugin-error-overlay'

export default defineConfig(({ mode }) => ({
  plugins: [tsconfigPaths(), react(), vitePluginErrorOverlay()],
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
  },
}))
