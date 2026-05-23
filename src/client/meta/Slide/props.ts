import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'
import { SlideProps } from 'lib/components'
import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING, SLIDE_FROM } from 'lib/components/core/Slide'

import { BOX_PROPS_META } from '../Box/props'

const SLIDE_PROPS_META: ComponentMeta<SlideProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
    description: 'Content animated.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_SLIDE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: [DOCS_CSS_LABEL],
    defaultValue: DEFAULT_SLIDE_EASING,
    description: 'Timing function for the animation.',
  },
  from: {
    options: SLIDE_FROM,
    isRequired: true,
    description: 'Edge from which the content slides when becoming visible.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
}

export { SLIDE_PROPS_META }
