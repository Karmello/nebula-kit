import { ElementType } from 'react'

import { ComponentMeta } from 'client/definitions'
import { HtmlTag, HtmlTagProps } from 'lib/components'

const HTML_TAG_EXAMPLES_META: ComponentMeta<HtmlTagProps<ElementType>>['examples'] = [
  {
    description: 'Renders a <div> tag.',
    jsx: <HtmlTag />,
    noSandBox: true,
  },
  {
    description: 'Setting the tag prop to "a" makes <a> tag attributes available on tagAttrs.',
    jsx: <HtmlTag tag="a" tagAttrs={{ href: '...' }} />,
    noSandBox: true,
  },
]

export { HTML_TAG_EXAMPLES_META }
