import fs from 'node:fs/promises'
import path from 'node:path'

import { defineConfig } from 'tsup'

const rawLoaderPlugin = {
  name: 'raw-loader',

  setup(build: any) {
    build.onResolve({ filter: /\?raw$/ }, (args: any) => ({
      path: path.resolve(args.resolveDir, args.path.replace(/\?raw$/, '')),
      namespace: 'raw-loader',
    }))

    build.onLoad(
      { filter: /.*/, namespace: 'raw-loader' },

      async (args: any) => {
        const contents = await fs.readFile(args.path, 'utf8')

        return {
          contents: `export default ${JSON.stringify(contents)}`,
          loader: 'js',
        }
      }
    )
  },
}

export default defineConfig({
  entry: ['src/server/server.prod.ts'],

  platform: 'node',
  target: 'node20',
  format: ['esm'],

  outDir: 'build/server',

  sourcemap: false,

  external: ['react', 'react-dom', 'qs', 'object-inspect', 'side-channel'],

  loader: {
    '.scss': 'text',
  },

  esbuildPlugins: [rawLoaderPlugin],

  esbuildOptions(o) {
    o.logOverride = {
      'ignored-bare-import': 'silent',
    }
  },

  clean: false,

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
