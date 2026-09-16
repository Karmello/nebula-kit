import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'
import type { DocProp } from 'client/definitions'

export const HTML_TAG_PROPS: Record<keyof HtmlTagProps<ElementType>, DocProp> = {
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
  },
  className: {
    options: ['string'],
    description: 'CSS class applied to the root tag.',
  },
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the root tag.',
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
