import { ElementType } from 'react'

import { HtmlElemProps } from 'lib/components'
import type { DocProp } from 'client/definitions'

export const HTML_ELEM_PROPS: Record<keyof HtmlElemProps<ElementType>, DocProp> = {
  children: {
    options: ['ReactNode'],
    description: 'Content rendered.',
  },
  className: {
    options: ['string'],
    description: 'CSS class applied to the element.',
  },
  elemTag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    description: 'The HTML tag to be rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // events
  onClick: {
    options: ['e => void'],
    description: 'Click event handler.',
    group: 'events',
  },
  onFocus: {
    options: ['e => void'],
    description: 'Focus event handler.',
    group: 'events',
  },
  onBlur: {
    options: ['e => void'],
    description: 'Blur event handler.',
    group: 'events',
  },
  onKeyDown: {
    options: ['e => void'],
    description: 'Key down event handler.',
    group: 'events',
  },
}
