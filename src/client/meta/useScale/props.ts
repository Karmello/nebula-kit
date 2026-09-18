import { USE_SCALE_AXIS, USE_SCALE_ORIGIN } from 'lib/components/pro/useScale/constants'
import {
  DEFAULT_USE_SCALE_AXIS,
  DEFAULT_USE_SCALE_DURATION,
  DEFAULT_USE_SCALE_EASING,
  DEFAULT_USE_SCALE_FROM,
  DEFAULT_USE_SCALE_ORIGIN,
  DEFAULT_USE_SCALE_TO,
} from 'lib/components/pro/useScale/use-scale'
import type { DocProp } from 'client/definitions'

export type UseScaleDocArgs = {
  ref: unknown
  visible: boolean
  axis?: unknown
  from?: number
  to?: number
  origin?: unknown
  duration?: number
  easing?: string
}

export const USE_SCALE_PROPS: Record<keyof UseScaleDocArgs, DocProp> = {
  ref: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Ref to the DOM element to scale.',
  },
  // animation
  visible: {
    options: ['boolean'],
    isRequired: true,
    description:
      'Controls whether the element is in its visible or hidden visual state. Triggers enter and exit scale transitions.',
    group: 'animation',
  },
  axis: {
    options: USE_SCALE_AXIS,
    defaultValue: DEFAULT_USE_SCALE_AXIS,
    description: 'Defines which axis the element scales on during the transition.',
    group: 'animation',
  },
  from: {
    options: ['number'],
    defaultValue: String(DEFAULT_USE_SCALE_FROM),
    description: 'Defines the scale value used when the element is hidden.',
    group: 'animation',
  },
  to: {
    options: ['number'],
    defaultValue: String(DEFAULT_USE_SCALE_TO),
    description: 'Defines the scale value used when the element is visible.',
    group: 'animation',
  },
  origin: {
    options: USE_SCALE_ORIGIN,
    defaultValue: DEFAULT_USE_SCALE_ORIGIN,
    description:
      'Defines the transform origin used for the scale transition. Controls the point from which the element visually scales.',
    group: 'animation',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_USE_SCALE_DURATION),
    description: 'Duration of the scale transition in milliseconds.',
    group: 'animation',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_USE_SCALE_EASING,
    description: 'Defines the CSS easing function used for the scale transition.',
    group: 'animation',
  },
}
