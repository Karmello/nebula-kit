import { SCALE_AXIS, SCALE_ORIGIN } from 'lib/components/pro/Scale/constants'
import {
  DEFAULT_SCALE_AXIS,
  DEFAULT_SCALE_DURATION,
  DEFAULT_SCALE_EASING,
  DEFAULT_SCALE_FROM,
  DEFAULT_SCALE_ORIGIN,
  DEFAULT_SCALE_TO,
} from 'lib/components/pro/Scale/scale'
import { ScaleProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const SCALE_PROPS: Record<keyof ScaleProps, DocProp> = {
  axis: {
    options: SCALE_AXIS,
    defaultValue: DEFAULT_SCALE_AXIS,
    description: 'Defines which axis the content scales on during the transition.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_SCALE_DURATION),
    description: 'Duration of the scale transition in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_SCALE_EASING,
    description: 'Defines the CSS easing function used for the scale transition.',
  },
  from: {
    options: ['number'],
    defaultValue: String(DEFAULT_SCALE_FROM),
    description: 'Defines the scale value used when the content is hidden.',
  },
  origin: {
    options: SCALE_ORIGIN,
    defaultValue: DEFAULT_SCALE_ORIGIN,
    description:
      'Defines the transform origin used for the scale transition. Controls the point from which the content visually scales.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  to: {
    options: ['number'],
    defaultValue: String(DEFAULT_SCALE_TO),
    description: 'Defines the scale value used when the content is visible.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description:
      'Controls whether the content is rendered in its visible or hidden visual state. Triggers enter and exit scale transitions.',
  },
}
