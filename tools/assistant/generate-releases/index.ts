import fs from 'node:fs/promises'
import path from 'node:path'

import { RELEASE_VERSIONS, RELEASE_INFO } from '../../../src/client/definitions/release'
import { generateRelease } from './helpers/generate-release'

const outputDir = path.resolve(process.cwd(), '../assistant')
const outputFile = path.join(outputDir, 'releases.md')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const docs: string[] = []

  for (const version of RELEASE_VERSIONS) {
    const doc = generateRelease(version, RELEASE_INFO)
    if (!doc) continue

    docs.push(doc)
  }

  const content = docs.join('\n\n---\n\n')

  await fs.writeFile(outputFile, content, 'utf8')

  console.log(`Generated ${outputFile}`)
}

run()
