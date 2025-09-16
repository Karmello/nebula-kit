import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server/server.prod.ts'],
  platform: 'node',
  target: 'node20',
  format: ['esm'],
  outDir: 'dist/server',
  sourcemap: false,
  external: ['react', 'react-dom', 'qs', 'object-inspect', 'side-channel'],
  loader: { '.scss': 'text' },
  esbuildOptions(o) {
    o.logOverride = { 'ignored-bare-import': 'silent' }
  },
  clean: false,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
