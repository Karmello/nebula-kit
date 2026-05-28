import fs from 'node:fs/promises'

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server/server.prod.ts'],
  platform: 'node',
  target: 'node20',
  format: ['esm'],
  outDir: 'build/server',
  sourcemap: false,
  external: ['react', 'react-dom', 'qs', 'object-inspect', 'side-channel'],
  loader: { '.scss': 'text' },

  esbuildOptions(o) {
    o.logOverride = { 'ignored-bare-import': 'silent' }

    o.plugins = [
      ...(o.plugins || []),

      {
        name: 'raw-loader',

        setup(build) {
          build.onResolve({ filter: /\?raw$/ }, args => {
            return {
              path: args.path,
              namespace: 'raw-loader',
              pluginData: {
                resolveDir: args.resolveDir,
              },
            }
          })

          build.onLoad({ filter: /.*/, namespace: 'raw-loader' }, async args => {
            const resolveDir = args.pluginData.resolveDir

            const relativePath = args.path.replace('?raw', '')

            const fullPath = new URL(relativePath, `file://${resolveDir}/`)

            const contents = await fs.readFile(fullPath, 'utf8')

            return {
              contents: `export default ${JSON.stringify(contents)}`,
              loader: 'js',
            }
          })
        },
      },
    ]
  },

  clean: false,

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
