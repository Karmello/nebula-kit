import fs from 'node:fs/promises'
import path from 'node:path'

import { generateMarketing } from './helpers/generate-marketing'
import { generateBundleRegistry } from './helpers/generate-bundle-registry'

const outputDir = path.resolve(process.cwd(), 'assistant/generated')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  // marketing.md
  const marketingDoc = generateMarketing()
  const marketingPath = path.join(outputDir, 'marketing.md')

  await fs.writeFile(marketingPath, marketingDoc, 'utf8')
  console.log(`Generated ${marketingPath}`)

  // bundle-registry.md
  const registryDoc = generateBundleRegistry()
  const registryPath = path.join(outputDir, 'bundle-registry.md')

  await fs.writeFile(registryPath, registryDoc, 'utf8')
  console.log(`Generated ${registryPath}`)
}

run()
