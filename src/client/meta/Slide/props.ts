import { SLIDE_FROM } from 'lib/components/core/Slide/constants'
import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING } from 'lib/components/core/Slide/slide'
import { SlideProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const SLIDE_PROPS: Record<keyof SlideProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
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
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
}
