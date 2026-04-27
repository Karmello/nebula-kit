import fs from 'node:fs/promises'
import path from 'node:path'

import META from '../../../src/client/meta/index'
import { generateDoc } from './helpers/generate-doc'

const outputDir = path.resolve(process.cwd(), 'assistant/generated/components')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const entries = Object.values(META).flatMap(metaGroup => Object.entries(metaGroup))

  for (const [name, componentMeta] of entries) {
    const doc = generateDoc(name, { [name]: componentMeta })
    if (!doc) continue

    const fileName = `${name}.md`
    const filePath = path.join(outputDir, fileName)

    await fs.writeFile(filePath, doc, 'utf8')

    console.log(`Generated ${filePath}`)
  }
}

run()
