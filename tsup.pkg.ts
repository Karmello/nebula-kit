import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'

const BUNDLE_TYPE = process.env.TSUP_BUNDLE || 'core'

const cssWiringPlugin = (): Plugin => ({
  name: 'nebula-css-wiring',
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, args => ({ path: args.path, external: true }))

    build.onLoad({ filter: /\.[cm]?[tj]sx?$/ }, async args => {
      let out = await readFile(args.path, 'utf8')

      const isComponentFile = /[/\\]src[/\\]lib[/\\]components[/\\]/.test(args.path)

      if (isComponentFile) {
        out = out.replace(/^\s*import\s+['"][^'"]+\.scss['"]\s*;?\s*$/gm, '')
        out = out.replace(/^\s*import\s+[^'"]+\s+from\s+['"][^'"]+\.scss['"]\s*;?\s*$/gm, '')
      }

      const loader =
        extname(args.path) === '.tsx'
          ? 'tsx'
          : extname(args.path) === '.ts'
            ? 'ts'
            : extname(args.path) === '.jsx'
              ? 'jsx'
              : 'js'

      return { contents: out, loader }
    })
  },
})

export default defineConfig({
  entry: {
    index: BUNDLE_TYPE === 'core' ? 'src/lib/index.core.ts' : 'src/lib/index.pro.ts',
  },
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
  dts: true,
  outDir: `dist/${BUNDLE_TYPE}`,
  target: 'es2020',
  clean: false,
  minify: true,
  treeshake: true,
  splitting: false,
  sourcemap: false,
  external: ['react', 'react-dom'],
  esbuildPlugins: [cssWiringPlugin()],
  esbuildOptions(o) {
    o.logOverride = { 'ignored-bare-import': 'silent' }
    o.minifyIdentifiers = true
    o.minifySyntax = true
    o.minifyWhitespace = true
  },
})
