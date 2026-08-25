import { DEFAULT_ROTATE_DURATION, DEFAULT_ROTATE_EASING } from 'lib/components/core/Rotate/rotate'
import { RotateProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const ROTATE_PROPS: Record<keyof RotateProps, Prop> = {
  angle: {
    options: ['number'],
    isRequired: true,
    description:
      'Rotation angle of the content in degrees. Changing the value triggers a rotation animation.',
  },
  children: {
    ...BOX_META.props.children,
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
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
