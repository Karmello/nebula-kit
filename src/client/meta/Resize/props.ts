import { RESIZE_PROPERTIES } from 'lib/components/core/Resize/constants'
import { DEFAULT_RESIZE_DURATION, DEFAULT_RESIZE_EASING } from 'lib/components/core/Resize/resize'
import { ResizeProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const RESIZE_PROPS: Record<keyof ResizeProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
    description: 'Content animated.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_RESIZE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_RESIZE_EASING,
    description: 'Timing function for the animation.',
  },
  property: {
    options: RESIZE_PROPERTIES,
    isRequired: true,
    description: 'Property to animate (logical size only).',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
}
