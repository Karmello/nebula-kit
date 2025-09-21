import { ElementType } from 'react'

import { ComponentMeta } from 'client/definitions'
import { HtmlTag, HtmlTagProps } from 'lib/components'

const HTML_TAG_EXAMPLES_META: ComponentMeta<HtmlTagProps<ElementType>>['examples'] = [
  {
    description: 'HtmlTag renders a div tag by default.',
    jsx: <HtmlTag />,
    noSandBox: true,
  },
  {
    description: 'When tag="a", all <a> tag attributes are available on tagAttrs.',
    jsx: <HtmlTag tag="a" tagAttrs={{ href: '...' }} />,
    noSandBox: true,
  },
]

export default HTML_TAG_EXAMPLES_META
