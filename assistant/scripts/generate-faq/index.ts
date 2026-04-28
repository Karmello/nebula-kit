import fs from 'node:fs/promises'
import path from 'node:path'

import { FAQ } from '../../../src/client/pages/app/FaqPage/definitions'
import { generateFAQ } from './helpers/generate-faq'

const outputDir = path.resolve(process.cwd(), 'assistant/generated/faq')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const doc = generateFAQ(FAQ)

  const filePath = path.join(outputDir, 'faq.md')

  await fs.writeFile(filePath, doc, 'utf8')

  console.log(`Generated ${filePath}`)
}

run()
