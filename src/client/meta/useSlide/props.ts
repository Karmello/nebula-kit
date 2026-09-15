import { USE_SLIDE_FROM } from 'lib/components/core/useSlide/constants'
import {
  DEFAULT_USE_SLIDE_DURATION,
  DEFAULT_USE_SLIDE_EASING,
} from 'lib/components/core/useSlide/use-slide'
import type { DocProp } from 'client/definitions'

export type UseSlideDocArgs = {
  ref: unknown
  from: unknown
  visible: boolean
  duration?: number
  easing?: string
}

export const USE_SLIDE_PROPS: Record<keyof UseSlideDocArgs, DocProp> = {
  ref: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Ref to the DOM element to slide.',
  },
  from: {
    options: USE_SLIDE_FROM,
    isRequired: true,
    description: 'Edge from which the content slides when becoming visible.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_USE_SLIDE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_USE_SLIDE_EASING,
    description: 'Timing function for the animation.',
  },
}
