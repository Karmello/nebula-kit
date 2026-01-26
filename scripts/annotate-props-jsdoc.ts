import path from 'path'
import fs from 'fs'

import META from '../src/client/meta/index.ts'

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
      // IMPORTANT: unknown preserves existing prop types via intersection
      lines.push(`    ${prop}?: unknown;`)

      return lines.join('\n')
    })

  if (propEntries.length === 0) return source

  const injection = ` & {\n${propEntries.join('\n\n')}\n  }`

  const typeRegex = new RegExp(`(type\\s+${typeName}\\b[\\s\\S]*?=)([\\s\\S]*?);`, 'm')

  const match = source.match(typeRegex)
  if (!match) return source

  // Avoid double-injection
  if (match[0].includes('/**')) return source

  const full = match[0]
  const updated = full.replace(/;$/, `${injection};`)

  return source.replace(full, updated)
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
