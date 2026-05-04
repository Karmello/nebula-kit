import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { snakeCase } from 'change-case'

import * as Foundations from '../../../src/client/pages/foundations'
import { htmlToText } from './helpers/html-to-text'

const includedPages = {
  overview: {
    introduction: ['WhyNebula', 'AboutNebulaKit', 'Audience', 'UnderTheHood'],
    philosophy: [
      'JsxFirst',
      'BuiltOnComposition',
      'InheritingProps',
      'EnforcingSemantics',
      'OrthogonalStylingAxes',
      'UnifiedDrawingModel',
      'UnifiedResponsiveness',
      'ResistantToEntropy',
    ],
    gettingStarted: ['Installation', 'Requirements', 'UseWithVite', 'UseWithWebpack5'],
  },
  concepts: {
    architecture: ['System', 'Performance', 'ResponsiveProps', 'ReactRefs', 'Slots', 'RenderFunction'],
    stylingSystem: [
      'StylingAxes',
      'DrawableSurface',
      'StylingIsland',
      'IntentsAndVariants',
      'Typography',
      'Sizing scale',
      'Breakpoints',
    ],
  },
  other: {
    legal: ['TermsOfUse', 'License', 'PrivacyPolicy'],
  },
} as const

const outputDir = path.resolve(process.cwd(), 'assistant/generated/foundations')

const renderPage = (Page: React.ComponentType) => {
  const page = React.createElement(Page)
  const html = renderToStaticMarkup(<MemoryRouter>{page}</MemoryRouter>)

  return htmlToText(html)
}

const run = async () => {
  await fs.mkdir(outputDir, { recursive: true })

  for (const [sectionKey, section] of Object.entries(includedPages)) {
    for (const [groupKey, pageNames] of Object.entries(section)) {
      const docs: string[] = []

      for (const name of pageNames) {
        const Page = (Foundations as Record<string, React.ComponentType>)[name]

        if (!Page) {
          console.warn(`Missing page: ${name}`)
          continue
        }

        try {
          const text = renderPage(Page)
          if (!text) continue

          docs.push(`## ${name}\n\n${text}`)
        } catch (err) {
          console.error(`Failed to generate ${name}:`, err)
        }
      }

      if (!docs.length) continue

      const fileName = `${snakeCase(sectionKey)}_${snakeCase(groupKey)}.md`
      const filePath = path.join(outputDir, fileName)
      const content = docs.join('\n\n---\n\n')

      await fs.writeFile(filePath, content, 'utf8')

      console.log(`Generated ${filePath}`)
    }
  }
}

run()
