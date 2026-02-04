import fs from 'node:fs'
import path from 'node:path'

const bundle = process.env.TSUP_BUNDLE

if (!bundle) {
  console.error('[generate-readme.js]: TSUP_BUNDLE not set')
  process.exit(1)
}

const outDir = `dist/${bundle}`

if (!fs.existsSync(outDir)) {
  console.error(`Output directory does not exist: ${outDir}`)
  process.exit(1)
}

const ROOT = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const content = `# NebulaKit

React UI system built on composition and prop inheritance, with strict rules governing component appearance and behavior. Designed to reduce UI entropy and keep interfaces consistent and maintainable as products grow over time.

<br />

#### JSX first
JSX is the primary development flow. CSS exists only as an internal implementation detail.

#### Built on composition
Pure composition drives all component behavior. Functionality is never duplicated.

#### Inheriting props
Composed functionality flows through prop inheritance, not redefinition.

#### Enforcing semantics
Semantic HTML is part of the component contract.

#### Orthogonal styling axes
Styling concerns are separated and scoped to prevent interference.

#### Unified drawing model
All visual output is produced through a single drawing model.

#### Unified responsiveness
Responsive behavior follows a single explicit model.

#### Resistant to entropy
System constraints minimize UI entropy and optimize for long-term consistency.

<br /><br />

Get started:
https://nebulakit.dev/foundations/overview/getting-started/installation

License:
https://nebulakit.dev/foundations/other/legal/license

Release notes:
https://nebulakit.dev/foundations/resources/changelog/${ROOT.version}

<br /><br />
<img src="https://nebulakit.dev/captain-nebula.webp" alt="Captain Nebula" width="225px" />
`

fs.writeFileSync(path.join(outDir, 'README.md'), content, 'utf8')

console.log(`Generated README.md for ${bundle}`)
