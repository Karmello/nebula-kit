import { RESIZE_PROPERTIES } from 'lib/components/core/Resize/constants'
import { DEFAULT_RESIZE_DURATION, DEFAULT_RESIZE_EASING } from 'lib/components/core/Resize/resize'
import { ResizeProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const RESIZE_PROPS: Record<keyof ResizeProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content animated.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // animation
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
    group: 'animation',
  },
  property: {
    options: RESIZE_PROPERTIES,
    isRequired: true,
    description: 'Property to animate (logical size only).',
    group: 'animation',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_RESIZE_DURATION),
    description: 'Animation duration in milliseconds.',
    group: 'animation',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_RESIZE_EASING,
    description: 'Timing function for the animation.',
    group: 'animation',
  },
}
