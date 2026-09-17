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
    description: 'CSS class applied to the tag.',
  },
  elemTag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    description: 'The HTML tag to be rendered as the container.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the HTML tag.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the tag.',
  },
  // events
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the tag.',
    group: 'events',
  },
  onFocus: {
    options: ['e => void'],
    description: 'Focus event handler for the tag.',
    group: 'events',
  },
  onBlur: {
    options: ['e => void'],
    description: 'Blur event handler for the tag.',
    group: 'events',
  },
  onKeyDown: {
    options: ['e => void'],
    description: 'Key down event handler for the tag.',
    group: 'events',
  },
}
