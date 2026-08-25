import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'
import type { Prop } from 'client/definitions'

export const HTML_TAG_PROPS: Record<keyof HtmlTagProps<ElementType>, Prop> = {
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
  },
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
}
