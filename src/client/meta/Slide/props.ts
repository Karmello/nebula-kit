import { SLIDE_FROM } from 'lib/components/core/Slide/constants'
import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING } from 'lib/components/core/Slide/slide'
import { SlideProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const SLIDE_PROPS: Record<keyof SlideProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content animated.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_SLIDE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_SLIDE_EASING,
    description: 'Timing function for the animation.',
  },
  from: {
    options: SLIDE_FROM,
    isRequired: true,
    description: 'Edge from which the content slides when becoming visible.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
}
