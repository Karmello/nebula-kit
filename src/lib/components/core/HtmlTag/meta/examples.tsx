import { HtmlTag } from 'lib/components'
import { type Example } from 'client/definitions'

export const HTML_TAG_EXAMPLES: Example[] = [
  {
    description: 'Renders as <div> by default.',
    jsx: <HtmlTag />,
    noSandBox: true,
  },
  {
    description: 'Choosing the <a> tag, makes its all attributes available on the tagAttrs property.',
    jsx: <HtmlTag tag="a" tagAttrs={{ href: 'https://google.com' }} />,
    noSandBox: true,
  },
]
