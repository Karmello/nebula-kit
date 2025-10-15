import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'

const rewriteScssToCss = (): Plugin => ({
  name: 'rewrite-scss-to-css',
  setup(build) {
    // only transform source files
    build.onLoad({ filter: /\.[cm]?[tj]sx?$/ }, async args => {
      const src = await readFile(args.path, 'utf8')

      // 1) global provider import: lib/styles/index.scss -> ./styles/index.css
      let out = src.replace(/(['"])lib\/styles\/index\.scss\1/g, '$1./styles/index.css$1')

      // 2) relative component imports: ./thing.scss -> ./thing.css
      out = out.replace(/(['"])(\.{1,2}\/[^'"]+)\.scss\1/g, '$1$2.css$1')

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
  dts: true,
  outDir: 'dist',
  target: 'es2020',
  sourcemap: false,
  clean: true,
  treeshake: true,
  splitting: false,
  external: ['react', 'react-dom'],
  esbuildPlugins: [rewriteScssToCss()],
  esbuildOptions(o) {
    o.logOverride = { 'ignored-bare-import': 'silent' }
  },
})
