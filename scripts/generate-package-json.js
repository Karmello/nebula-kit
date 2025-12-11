import fs from 'node:fs'
import path from 'node:path'

const bundle = process.env.TSUP_BUNDLE

if (!bundle) {
  console.error('TSUP_BUNDLE not set')
  process.exit(1)
}

const filterDeps = deps => {
  let allowed = ['classnames', 'change-case', 'lodash-es', 'lucide-react', 'zustand']
  if (bundle === 'pro') allowed.push('react-hook-form')
  return Object.fromEntries(Object.entries(deps || {}).filter(([name]) => allowed.includes(name)))
}

const ROOT = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const outDir = `dist/${bundle}`

const pkg = {
  name: `@nebula-kit/${bundle}`,
  version: ROOT.version,
  description: ROOT.description,
  license: ROOT.license,
  type: 'module',
  main: ROOT.main,
  module: ROOT.module,
  types: ROOT.types,
  style: ROOT.style,
  exports: ROOT.exports,
  sideEffects: ROOT.sideEffects,
  dependencies: filterDeps(ROOT.dependencies),
  peerDependencies: ROOT.peerDependencies,
}

fs.writeFileSync(path.join(outDir, 'package.json'), JSON.stringify(pkg, null, 2))

console.log(`Generated package.json for ${bundle}`)
