import fs from 'node:fs/promises'
import path from 'node:path'

import { PATTERNS } from '../../../src/client/definitions/patterns'
import { generatePatterns } from './helpers/generate-patterns'

const outputDir = path.resolve(process.cwd(), '../assistant')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const doc = generatePatterns(PATTERNS)

  const filePath = path.join(outputDir, 'patterns.md')

  await fs.writeFile(filePath, doc, 'utf8')

  console.log(`Generated ${filePath}`)
}

run()
