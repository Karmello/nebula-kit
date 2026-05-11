import fs from 'node:fs/promises'
import path from 'node:path'

import { generateMarketing } from './helpers/generate-marketing'
import { generateBundleRegistry } from './helpers/generate-bundle-registry'

const outputDir = path.resolve(process.cwd(), '../assistant')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const marketingDoc = generateMarketing()
  const registryDoc = generateBundleRegistry()

  const content = [marketingDoc, registryDoc].filter(Boolean).join('\n\n---\n\n')

  const marketingPath = path.join(outputDir, 'marketing.md')

  await fs.writeFile(marketingPath, content, 'utf8')

  console.log(`Generated ${marketingPath}`)
}

run()
