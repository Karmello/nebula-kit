#!/usr/bin/env node
// Scans every src/client/meta/<Key>/overview.ts, finds that entry's component
// implementation under src/lib/components, and diffs the declared `composedOf`
// array against the Nebula components actually imported AND rendered as JSX
// in that implementation file.
//
// This is a heuristic first pass, not a verdict. It only looks at ONE file per
// key (the one whose kebab-case name matches the folder), so it will misfire
// (report false "used: []" / "extra") whenever a component's real rendering
// lives elsewhere - e.g. delegated to an internal components/ subfolder, or a
// slot component that just does `return children` and gets wrapped by its
// PARENT's render function instead of its own. SKILL.md walks through how to
// resolve each flag by hand before treating it as a real mismatch.
//
// Usage: node check-composed-of.cjs [projectRoot]

const fs = require('fs')
const path = require('path')

const ROOT = process.argv[2] || process.cwd()
const META_ROOT = path.join(ROOT, 'src/client/meta')
const LIB_ROOT = path.join(ROOT, 'src/lib/components')

function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

function findAllTsx(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'meta' || entry.name === 'tests') continue
      findAllTsx(full, acc)
    } else if (entry.name.endsWith('.tsx')) {
      if (entry.name.includes('.test.') || entry.name === 'playground.tsx') continue
      acc.push(full)
    }
  }
  return acc
}

const allTsxFiles = findAllTsx(LIB_ROOT)

function findComponentFile(key) {
  const kebab = toKebab(key)
  const candidates = allTsxFiles.filter(f => path.basename(f) === `${kebab}.tsx`)
  if (candidates.length === 1) return candidates[0]
  if (candidates.length > 1) {
    const exact = candidates.find(f => path.basename(path.dirname(f)) === key)
    if (exact) return exact
    return candidates[0]
  }
  return null
}

const metaKeys = fs
  .readdirSync(META_ROOT)
  .filter(d => fs.statSync(path.join(META_ROOT, d)).isDirectory())

// Compound/shared primitives that are consistently excluded from composedOf
// across this codebase because they have no meta entry of their own (e.g.
// the internal DropdownList used by Select/Autocomplete/MultiSelect/Breadcrumb).
// Extend this list if a new undocumented shared primitive appears.
const KNOWN_EXTRA_COMPONENT_BASE_NAMES = ['DropdownList']

function getOverviewComposedOf(key) {
  const overviewPath = path.join(META_ROOT, key, 'overview.ts')
  if (!fs.existsSync(overviewPath)) return null
  const text = fs.readFileSync(overviewPath, 'utf8')
  const m = text.match(/composedOf:\s*\[([^\]]*)\]/)
  if (!m) return []
  return m[1]
    .split(',')
    .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)
}

function parseImportedNames(text) {
  const names = []
  const re = /import\s+(?:type\s+)?\{([\s\S]*?)\}\s+from\s+'([^']+)'/g
  let m
  while ((m = re.exec(text))) {
    const specifier = m[2]
    for (const raw of m[1].split(',')) {
      const n = raw.trim().replace(/^type\s+/, '')
      if (n) names.push({ name: n, specifier })
    }
  }
  return names
}

function findJsxTagUsage(text, name) {
  if (new RegExp(`<${name}[\\s/.>]`).test(text)) return true
  if (new RegExp(`<${name}\\.[A-Za-z]+`).test(text)) return true // e.g. <DropdownList.Item>
  return false
}

const results = []

for (const key of metaKeys) {
  const declared = getOverviewComposedOf(key)
  if (declared === null) continue

  const filePath = findComponentFile(key)
  if (!filePath) {
    results.push({ key, declared, error: 'NO SOURCE FILE FOUND' })
    continue
  }

  const text = fs.readFileSync(filePath, 'utf8')
  const imported = parseImportedNames(text)

  const usedComponents = new Set()
  for (const { name } of imported) {
    if (!/^[A-Z]/.test(name)) continue
    const isKnownMeta = metaKeys.includes(name)
    const isKnownExtra = KNOWN_EXTRA_COMPONENT_BASE_NAMES.includes(name)
    if (!isKnownMeta && !isKnownExtra) continue
    if (findJsxTagUsage(text, name)) usedComponents.add(name)
  }

  const declaredBase = declared.map(d => d.split('.')[0])
  const missing = [...usedComponents].filter(u => !declaredBase.includes(u))
  const extra = declaredBase.filter(d => !usedComponents.has(d))

  if (missing.length || extra.length) {
    results.push({
      key,
      filePath: path.relative(ROOT, filePath),
      declared,
      used: [...usedComponents].sort(),
      missing: missing.sort(),
      extra: extra.sort(),
    })
  }
}

console.log(JSON.stringify(results, null, 2))
console.error(`\n${results.length} flagged out of ${metaKeys.length} meta entries.`)
