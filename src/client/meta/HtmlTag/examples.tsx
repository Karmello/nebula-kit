import { HtmlTag } from 'lib/components'
import { type DocExample } from 'client/definitions'

export const HTML_TAG_EXAMPLES: DocExample[] = [
  {
    description: 'Renders as <div> by default.',
    jsx: <HtmlTag />,
    noSandBox: true,
  },
  {
    description:
      'Choosing the <a> tag, makes its all attributes available on the tagAttrs property.',
    jsx: <HtmlTag tag="a" tagAttrs={{ href: 'https://google.com' }} />,
    noSandBox: true,
  },
]
