import {
  DEFAULT_USE_ROTATE_DURATION,
  DEFAULT_USE_ROTATE_EASING,
} from 'lib/components/core/useRotate/use-rotate'
import { UseRotateArgs } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const USE_ROTATE_PROPS: Record<keyof UseRotateArgs, DocProp> = {
  angle: {
    options: ['number'],
    isRequired: true,
    description:
      'Rotation angle of the content in degrees. Changing the value triggers a rotation animation.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_USE_ROTATE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_USE_ROTATE_EASING,
    description: 'Timing function for the animation.',
  },
  ref: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Ref to the DOM element to rotate.',
  },
}
