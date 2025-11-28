import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'

const BUNDLE_TYPE = process.env.TSUP_BUNDLE || 'core'

const cssWiringPlugin = (): Plugin => ({
  name: 'nebula-css-wiring',
  setup(build) {
    // mark CSS as external (unchanged)
    build.onResolve({ filter: /\.css$/ }, args => ({
      path: args.path,
      external: true,
    }))

    // rewrite imports + strip component-level scss
    build.onLoad({ filter: /\.[cm]?[tj]sx?$/ }, async args => {
      const src = await readFile(args.path, 'utf8')

      let out = src

      //
      // 1) Rewrite the NebkitProvider CSS import:
      // FROM: lib/styles/index.css
      // TO:   index.css (top-level in dist/)
      //
      out = out.replace(/(['"])lib\/styles\/index\.css\1/g, `$1index.${BUNDLE_TYPE}.css$1`)

      //
      // 2) Strip component-level SCSS imports
      //
      const isComponentFile = /[/\\]src[/\\]lib[/\\]components[/\\]/.test(args.path)

      if (isComponentFile) {
        // side-effect SCSS:  import './x.scss'
        out = out.replace(/^\s*import\s+['"][^'"]+\.scss['"]\s*;?\s*$/gm, '')
        // binding SCSS:      import x from './x.scss'
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
  entry: [BUNDLE_TYPE === 'core' ? 'src/lib/index.core.ts' : 'src/lib/index.pro.ts'],
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
