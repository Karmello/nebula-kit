import { DEFAULT_ROTATE_DURATION, DEFAULT_ROTATE_EASING } from 'lib/components/core/Rotate/rotate'
import { RotateProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const ROTATE_PROPS: Record<keyof RotateProps, DocProp> = {
  angle: {
    options: ['number'],
    isRequired: true,
    description:
      'Rotation angle of the content in degrees. Changing the value triggers a rotation animation.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content being rotated.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_ROTATE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_ROTATE_EASING,
    description: 'Timing function for the animation.',
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
