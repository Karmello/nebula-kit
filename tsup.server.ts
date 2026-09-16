import { defineConfig } from 'tsup'
import { readFileSync } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))

// tsup already auto-externalizes everything in dependencies/peerDependencies,
// so listing those here is redundant but kept explicit for clarity. The real
// reason this list exists is packages the app imports directly that aren't
// themselves declared dependencies - qs, object-inspect and side-channel are
// transitive deps of express, and react-router is a transitive dep of the
// declared react-router-dom (the app imports the base package directly for
// SSR). Dockerfile.prod copies the full node_modules alongside build/ at
// runtime, so all of these are safe to leave external instead of bundling.
const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
  'qs',
  'object-inspect',
  'side-channel',
  'react-router',
]

const rawLoaderPlugin = {
  name: 'raw-loader',
  setup(build: any) {
    build.onResolve({ filter: /\?raw$/ }, (args: any) => ({
      path: path.resolve(args.resolveDir, args.path.replace(/\?raw$/, '')),
      namespace: 'raw-loader',
    }))
    build.onLoad({ filter: /.*/, namespace: 'raw-loader' }, async (args: any) => {
      const contents = await fs.readFile(args.path, 'utf8')
      return {
        contents: `export default ${JSON.stringify(contents)}`,
        loader: 'js',
      }
    })
  },
}

export default defineConfig({
  entry: ['src/server/server.prod.ts'],
  platform: 'node',
  target: 'node20',
  format: ['esm'],
  outDir: 'build/server',
  sourcemap: false,
  external,
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
