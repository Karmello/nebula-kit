import { kebabCase } from 'change-case'
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'node:url'

import { COMPONENTS_PAGE_SECTIONS } from '../../src/client/definitions/components-page-routing.js'

const bundle = process.env.TSUP_BUNDLE

if (!bundle) {
  console.error('[annotate-components-jsdoc.js]: TSUP_BUNDLE not set')
  process.exit(1)
}

const DTS_PATH = path.resolve(`dist/${bundle}/index.d.ts`)

if (!fs.existsSync(DTS_PATH)) {
  console.error(`index.d.ts not found at ${DTS_PATH}`)
  process.exit(1)
}

const META = (await import(pathToFileURL(path.resolve(`./dist/${bundle}/meta.js`)).href)).default

let dts = fs.readFileSync(DTS_PATH, 'utf8')

function escapeJsDoc(text) {
  return text.replace(/\*\//g, '*\\/')
}

function injectComponentJsDoc(source, componentName, heading, link) {
  if (!heading && !link) return source

  const decl = `declare const ${componentName}`
  const start = source.indexOf(decl)
  if (start === -1) return source

  const before = source.slice(0, start)
  const trimmed = before.replace(/\s*$/, '')

  // only skip if doc is directly attached
  if (trimmed.endsWith('*/')) return source

  const lines = []
  lines.push('/**')

  if (heading) {
    lines.push(` * ${escapeJsDoc(heading)}`)
  }

  if (link) {
    lines.push(' *')
    lines.push(` * @see ${link}`)
  }

  lines.push(' */')

  const jsdoc = lines.join('\n') + '\n'

  return source.slice(0, start) + jsdoc + source.slice(start)
}

// iterate components
for (const componentName of Object.keys(META)) {
  const metaComponent = META[componentName]?.[componentName]
  if (!metaComponent) continue

  const { overview } = metaComponent
  if (!overview) continue
  if (overview.bundle !== bundle) continue

  const { title } = overview

  const section = COMPONENTS_PAGE_SECTIONS.find(o => o.itemKey === kebabCase(componentName))

  if (!section) continue

  const { categoryKey, itemKey } = section
  const link = `https://nebulakit.dev/components/${categoryKey}/${itemKey}/overview`

  dts = injectComponentJsDoc(dts, componentName, title, link)
}

fs.writeFileSync(DTS_PATH, dts)

console.log(`Added component annotations for ${bundle}`)
