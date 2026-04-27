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
JSX is the primary development flow. CSS exists as an internal implementation detail. Customization happens directly through props without switching contexts.

#### Composition and inheritance
Pure composition drives all component behavior. Functionality is never duplicated. Composed functionality flows through prop inheritance, not redefinition.

#### Enforcing HTML semantics
Semantic HTML is part of the component contract. Components preserve structure and meaning by default.

#### Orthogonal styling engine
Styling concerns are separated and scoped to prevent interference. Each styling dimension stays isolated. Performance is a property of the architecture, not an added optimization.

#### Unified models
The mechanisms for drawing visual output and handling responsiveness are each driven by their own explicit model, ensuring consistent behavior across the system.

#### Resistant to entropy
System constraints minimize UI entropy and optimize for long-term consistency, keeping products stable as they grow.

<br /><br />

Get started:
https://nebulakit.dev/foundations/overview/getting-started/installation

License:
https://nebulakit.dev/foundations/other/legal/license

Release notes:
https://nebulakit.dev/foundations/resources/changelog/v${ROOT.version}

<br /><br />
<img src="https://nebulakit.dev/captain-nebula.webp" alt="Captain Nebula" width="225px" />
`

fs.writeFileSync(path.join(outDir, 'README.md'), content, 'utf8')

console.log(`Generated README.md for ${bundle}`)
