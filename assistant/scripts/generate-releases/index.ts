import fs from 'node:fs/promises'
import path from 'node:path'

import { RELEASE_VERSIONS, RELEASE_INFO } from '../../../src/client/definitions/release'
import { generateRelease } from './helpers/generate-release'

const outputDir = path.resolve(process.cwd(), 'assistant/generated')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  for (const version of RELEASE_VERSIONS) {
    const doc = generateRelease(version, RELEASE_INFO)
    if (!doc) continue

    const filePath = path.join(outputDir, `v${version}.md`)

    await fs.writeFile(filePath, doc, 'utf8')

    console.log(`Generated ${filePath}`)
  }
}

run()
