import { ElementType } from 'react'

import { ComponentMeta } from 'client/definitions'
import { HtmlTagProps } from 'lib/components'

const HTML_TAG_PROPS_META: ComponentMeta<HtmlTagProps<ElementType>>['props'] = {
  children: {
    options: ['ReactNode'],
    isRequired: false,
    isResponsive: false,
    description: 'Content rendered inside the tag.',
  },
  tag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    isRequired: false,
    isResponsive: false,
    description: 'Specifies the HTML tag that will be rendered as the container.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    isRequired: false,
    isResponsive: false,
    description: 'Additional HTML attributes applied to the chosen tag.',
  },
  tagRef: {
    options: ['RefObject'],
    isRequired: false,
    isResponsive: false,
    description: 'Reference to the rendered HTML tag.',
  },
}

export { HTML_TAG_PROPS_META }
