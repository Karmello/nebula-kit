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

function formatDefaultValue(value: unknown) {
  if (typeof value === 'string') return `"${value}"`
  return String(value)
}

function injectPropsJsDoc(
  source: string,
  typeName: string,
  props: Record<string, { description?: string; defaultValue?: unknown }>
) {
  const propEntries = Object.entries(props)
    .filter(([, meta]) => meta?.description)
    .map(([prop, meta]) => {
      const lines: string[] = []
      lines.push(`    /**`)
      lines.push(`     * ${escapeJsDoc(meta.description!)}`)
      if (meta.defaultValue !== undefined) {
        lines.push(`     * @default ${formatDefaultValue(meta.defaultValue)}`)
      }
      lines.push(`     */`)
      lines.push(`    ${prop}?: unknown;`)
      return lines.join('\n')
    })

  if (propEntries.length === 0) return source

  const start = source.indexOf(`type ${typeName}`)
  if (start === -1) return source

  const eq = source.indexOf('=', start)
  if (eq === -1) return source

  let i = eq + 1
  let depth = 0
  let end = -1

  while (i < source.length) {
    const ch = source[i]

    if (ch === '{') depth++
    if (ch === '}') depth--

    if (depth === 0 && ch === ';') {
      end = i
      break
    }

    i++
  }

  if (end === -1) return source

  const full = source.slice(start, end + 1)

  // avoid double injection
  if (full.includes('/**')) return source

  const injection = ` & {\n${propEntries.join('\n\n')}\n  }`
  const updated = full.replace(/;$/, `${injection};`)

  return source.slice(0, start) + updated + source.slice(end + 1)
}

for (const componentName of Object.keys(META)) {
  const metaComponent = META[componentName]?.[componentName]
  if (!metaComponent) continue

  const { overview, props } = metaComponent
  if (overview.bundle !== bundle) continue

  const propsTypeName = `${componentName}Props`
  dts = injectPropsJsDoc(dts, propsTypeName, props)
}

fs.writeFileSync(DTS_PATH, dts)

console.log(`Added type annotations for ${bundle}`)
