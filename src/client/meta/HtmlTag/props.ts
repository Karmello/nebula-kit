import { ElementType } from 'react'

import { ComponentMeta } from 'client/definitions'
import { HtmlTagProps } from 'lib/components'

const HTML_TAG_PROPS_META: ComponentMeta<HtmlTagProps<ElementType>>['props'] = {
  tag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    description: 'The HTML tag to be rendered as the container.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
  },
}

export { HTML_TAG_PROPS_META }
