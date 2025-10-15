import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'

const cssWiringPlugin = (): Plugin => ({
  name: 'nebula-css-wiring',
  setup(build) {
    // keep CSS imports as external so tsup/esbuild don't try to load them
    build.onResolve({ filter: /\.css$/ }, args => ({
      path: args.path,
      external: true,
    }))

    // rewrite provider import and strip component-level scss imports
    build.onLoad({ filter: /\.[cm]?[tj]sx?$/ }, async args => {
      const src = await readFile(args.path, 'utf8')

      // 1) NebkitProvider: lib/styles/index.scss -> lib/styles/index.css
      // (build script will compile src/lib/styles/index.pkg.scss -> dist/lib/styles/index.css)
      let out = src.replace(/(['"])lib\/styles\/index\.scss\1/g, '$1lib/styles/index.css$1')

      // 2) Remove any *.scss imports inside component source files
      //    (shipping a single CSS bundle, so component SCSS shouldn't be referenced)
      const isComponentFile = /[/\\]src[/\\]lib[/\\]components[/\\]/.test(args.path)
      if (isComponentFile) {
        // side-effect imports: import './box.scss'
        out = out.replace(/^\s*import\s+['"][^'"]+\.scss['"]\s*;?\s*$/gm, '')
        // imported as a binding: import x from './box.scss'
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
  entry: ['src/lib/index.ts'],
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
  dts: true,
  outDir: 'dist',
  target: 'es2020',
  clean: true,
  treeshake: true,
  splitting: false,
  sourcemap: false,
  external: ['react', 'react-dom'],
  esbuildPlugins: [cssWiringPlugin()],
  esbuildOptions(o) {
    o.logOverride = { 'ignored-bare-import': 'silent' }
  },
})
