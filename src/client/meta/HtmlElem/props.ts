import { ElementType } from 'react'

import { HtmlElemProps } from 'lib/components'
import type { DocProp } from 'client/definitions'

export const HTML_ELEM_PROPS: Record<keyof HtmlElemProps<ElementType>, DocProp> = {
  // base
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
    group: 'base',
  },
  className: {
    options: ['string'],
    description: 'CSS class applied to the tag.',
    group: 'base',
  },
  elemTag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    description: 'The HTML tag to be rendered as the container.',
    group: 'base',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the HTML tag.',
    group: 'base',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the tag.',
    group: 'base',
  },
  // interaction
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the tag.',
    group: 'interaction',
  },
  onFocus: {
    options: ['e => void'],
    description: 'Focus event handler for the tag.',
    group: 'interaction',
  },
  onBlur: {
    options: ['e => void'],
    description: 'Blur event handler for the tag.',
    group: 'interaction',
  },
  onKeyDown: {
    options: ['e => void'],
    description: 'Key down event handler for the tag.',
    group: 'interaction',
  },
}
