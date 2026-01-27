import fs from 'node:fs'
import path from 'node:path'

import META from '../src/client/meta/index.ts'

const outDir = path.resolve('dist')
fs.mkdirSync(outDir, { recursive: true })

const outFile = path.join(outDir, 'meta.js')

// Write a real ESM module
fs.writeFileSync(
  outFile,
  `// AUTO-GENERATED. DO NOT EDIT.
export default ${JSON.stringify(META, null, 2)}
`,
  'utf8'
)

console.log(`Meta wrote to ${outFile}`)
