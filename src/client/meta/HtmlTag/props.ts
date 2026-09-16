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
  onFocus: {
    options: ['e => void'],
    description: 'Focus event handler for the root tag.',
  },
  onBlur: {
    options: ['e => void'],
    description: 'Blur event handler for the root tag.',
  },
  onKeyDown: {
    options: ['e => void'],
    description: 'Key down event handler for the root tag.',
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
