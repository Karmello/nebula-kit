import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'

import * as Foundations from '../../../src/client/pages/foundations'
import { htmlToText } from './helpers/html-to-text'

const includedPages = [
  'WhyNebula',
  'AboutNebulaKit',
  'Audience',
  'UnderTheHood',
  'JsxFirst',
  'BuiltOnComposition',
  'InheritingProps',
  'EnforcingSemantics',
  'OrthogonalStylingAxes',
  'UnifiedDrawingModel',
  'UnifiedResponsiveness',
  'ResistantToEntropy',
  'Installation',
  'Requirements',
  'UseWithVite',
  'UseWithWebpack5',
  'System',
  'ResponsiveProps',
  'ReactRefs',
  'Slots',
  'RenderFunction',
  'Performance',
  'DrawableSurface',
  'StylingAxes',
  'Breakpoints',
  'Typography',
  'IntentsAndVariants',
  'ThemeIsland',
  'TermsOfUse',
  'License',
  'PrivacyPolicy',
] as const

const outputDir = path.resolve(process.cwd(), 'assistant/generated/foundations')

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  const entries = Object.entries(Foundations).filter(([name]) => {
    return includedPages.includes(name as (typeof includedPages)[number])
  })

  for (const [name, Page] of entries) {
    try {
      const page = React.createElement(Page)
      const html = renderToStaticMarkup(<MemoryRouter>{page}</MemoryRouter>)
      const text = htmlToText(html)

      if (!text) continue

      const doc = `# ${name}\n\n${text}\n`
      const filePath = path.join(outputDir, `${name}.md`)

      await fs.writeFile(filePath, doc, 'utf8')

      console.log(`Generated ${filePath}`)
    } catch (err) {
      console.error(`Failed to generate ${name}:`, err)
    }
  }
}

run()
