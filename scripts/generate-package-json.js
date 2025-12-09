import fs from 'node:fs'
import path from 'node:path'

const filterDeps = deps => {
  const allowed = ['classnames', 'change-case', 'lodash-es', 'lucide-react', 'zustand']
  return Object.fromEntries(Object.entries(deps || {}).filter(([name]) => allowed.includes(name)))
}

const ROOT = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const bundle = process.env.TSUP_BUNDLE
if (!bundle) {
  console.error('TSUP_BUNDLE not set')
  process.exit(1)
}

const outDir = `dist/${bundle}`

const pkg = {
  name: `@nebula-kit/${bundle}`,
  version: ROOT.version,
  description: ROOT.description,
  license: ROOT.license,
  type: 'module',
  main: `index.${bundle}.cjs`,
  module: `index.${bundle}.mjs`,
  types: `index.${bundle}.d.ts`,
  style: `index.${bundle}.css`,
  exports: {
    '.': {
      types: `./index.${bundle}.d.ts`,
      import: `./index.${bundle}.mjs`,
      require: `./index.${bundle}.cjs`,
    },
  },
  sideEffects: ['**/*.css'],
  dependencies: filterDeps(ROOT.dependencies),
  peerDependencies: ROOT.peerDependencies,
}

fs.writeFileSync(path.join(outDir, 'package.json'), JSON.stringify(pkg, null, 2))

console.log(`Generated package.json for ${bundle}`)
