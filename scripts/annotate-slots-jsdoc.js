import path from 'path'
import fs from 'fs'
import { pathToFileURL } from 'node:url'

const bundle = process.env.TSUP_BUNDLE

if (!bundle) {
  console.error('[annotate-slots-jsdoc.js]: TSUP_BUNDLE not set')
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

function getSlotPropName(parentName, entryName) {
  if (entryName === parentName) return null
  if (!entryName.startsWith(parentName)) return null

  const suffix = entryName.slice(parentName.length)
  return suffix || null
}

function injectSlotJsDoc(source, parentName, slotPropName, heading) {
  if (!heading) return source

  const decl = `declare const ${parentName}`
  const start = source.indexOf(decl)
  if (start === -1) return source

  // find colon after declare const X
  const colon = source.indexOf(':', start)
  if (colon === -1) return source

  // walk until the semicolon ending the declaration
  let i = colon + 1
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

  const declBlock = source.slice(start, end + 1)

  // find slot property (Item:, Option:, Header:, etc)
  const slotRegex = new RegExp(`\\n\\s*${slotPropName}:`)
  const match = declBlock.match(slotRegex)
  if (!match) return source

  const insertPos = start + match.index + 1

  // avoid double injection
  if (source.slice(0, insertPos).trimEnd().endsWith('*/')) {
    return source
  }

  const jsdoc = `    /**\n` + `     * ${escapeJsDoc(heading)}\n` + `     */\n`

  return source.slice(0, insertPos) + jsdoc + source.slice(insertPos)
}

// 🔥 Iterate META and inject slot docs
for (const [parentName, group] of Object.entries(META)) {
  const parentMeta = group[parentName]
  if (!parentMeta?.overview) continue
  if (parentMeta.overview.bundle !== bundle) continue

  for (const [entryName, metaEntry] of Object.entries(group)) {
    if (!metaEntry?.overview) continue
    if (metaEntry.overview.bundle !== bundle) continue

    const slotPropName = getSlotPropName(parentName, entryName)
    if (!slotPropName) continue

    const heading = metaEntry.overview.title
    if (!heading) continue

    dts = injectSlotJsDoc(dts, parentName, slotPropName, heading)
  }
}

fs.writeFileSync(DTS_PATH, dts)

console.log(`Added slot component annotations for ${bundle}`)
