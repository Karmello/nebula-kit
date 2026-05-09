import fs from 'node:fs/promises'
import path from 'node:path'

import META from '../../../src/client/meta/index'
import { generateDoc } from './helpers/generate-doc'

const outputDir = path.resolve(process.cwd(), 'assistant/generated/components')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  for (const [groupName, metaGroup] of Object.entries(META)) {
    const doc = generateDoc(groupName, metaGroup)
    if (!doc) continue

    const fileName = `${groupName}.md`
    const filePath = path.join(outputDir, fileName)

    await fs.writeFile(filePath, doc, 'utf8')

    console.log(`Generated ${filePath}`)
  }
}

run()
