import fs from 'node:fs'
import path from 'node:path'

const bundle = process.env.TSUP_BUNDLE

if (!bundle) {
  console.error('TSUP_BUNDLE not set')
  process.exit(1)
}

const outDir = `dist/${bundle}`

if (!fs.existsSync(outDir)) {
  console.error(`Output directory does not exist: ${outDir}`)
  process.exit(1)
}

const pkgName = `@nebula-kit/${bundle}`

const content = `# NebulaKit

React UI system built on composition and prop inheritance, with strict rules governing component appearance and behavior. Designed to reduce UI entropy and keep interfaces consistent and maintainable as products grow over time.

Get started:
https://nebulakit.dev/foundations/overview/getting-started/installation

License:
https://nebulakit.dev/foundations/other/legal/license

<br />
<img src="https://nebulakit.dev/captain-nebula.webp" alt="Captain Nebula" width="250px" />
`

fs.writeFileSync(path.join(outDir, 'README.md'), content, 'utf8')

console.log(`Generated README.md for ${bundle}`)
