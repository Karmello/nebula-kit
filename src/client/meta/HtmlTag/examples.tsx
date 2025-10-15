import { ElementType } from 'react'

import { ComponentMeta } from 'client/definitions'
import { HtmlTag, HtmlTagProps } from 'lib/components'

const HTML_TAG_EXAMPLES_META: ComponentMeta<HtmlTagProps<ElementType>>['examples'] = [
  {
    description: 'Renders as <div> by default.',
    jsx: <HtmlTag />,
    noSandBox: true,
  },
  {
    description: 'Choosing the <a> tag, makes its all attributes available on the tagAttrs property.',
    jsx: <HtmlTag tag="a" tagAttrs={{ href: '...' }} />,
    noSandBox: true,
  },
]

export { HTML_TAG_EXAMPLES_META }
