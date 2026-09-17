import { HtmlElem } from 'lib/components'
import { type DocExample } from 'client/definitions'

export const HTML_ELEM_EXAMPLES: DocExample[] = [
  {
    description: 'Renders as <div> by default.',
    jsx: <HtmlElem />,
    noSandBox: true,
  },
  {
    description:
      'Choosing the <a> tag, makes its all attributes available on the elemAttrs property.',
    jsx: <HtmlElem elemTag="a" elemAttrs={{ href: 'https://google.com' }} />,
    noSandBox: true,
    isOverviewSnippet: true,
  },
]
