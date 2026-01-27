import path from 'path'
import fs from 'fs'
import { pathToFileURL } from 'node:url'

const metaPath = path.resolve('./dist/meta.js')

const mod = await import(pathToFileURL(metaPath).href)
const META = mod.default

const bundle = process.env.TSUP_BUNDLE
if (!bundle) {
  console.error('TSUP_BUNDLE not set')
  process.exit(1)
}

const DTS_PATH = path.resolve(`dist/${bundle}/index.d.ts`)

if (!fs.existsSync(DTS_PATH)) {
  console.error(`index.d.ts not found at ${DTS_PATH}`)
  process.exit(1)
}

let dts = fs.readFileSync(DTS_PATH, 'utf8')

function escapeJsDoc(text: string) {
  return text.replace(/\*\//g, '*\\/')
}

function injectComponentJsDoc(source: string, componentName: string, heading?: string, description?: string) {
  if (!heading && !description) return source

  const decl = `declare const ${componentName}`
  const start = source.indexOf(decl)
  if (start === -1) return source

  const before = source.slice(0, start)
  const trimmed = before.replace(/\s*$/, '')

  // only skip if doc is directly attached
  if (trimmed.endsWith('*/')) return source

  const lines: string[] = []
  lines.push('/**')

  if (heading) {
    lines.push(` * ${escapeJsDoc(heading)}`)
  }

  if (description) {
    if (heading) lines.push(' *')
    for (const line of description.split('\n')) {
      lines.push(` * ${escapeJsDoc(line)}`)
    }
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

  const { title, description } = overview

  dts = injectComponentJsDoc(dts, componentName, title, description)
}

fs.writeFileSync(DTS_PATH, dts)

console.log(`Added component annotations for ${bundle}`)
