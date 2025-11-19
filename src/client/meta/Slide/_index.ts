import { ComponentMeta } from 'client/definitions'
import { SlideProps } from 'lib/components/motion/Slide'

import { SLIDE_PROPS_META } from './props'
import { SLIDE_EXAMPLES_META } from './examples'

const SLIDE_META: ComponentMeta<SlideProps> = {
  overview: {
    plan: 'free',
    title: 'Wrapper component that animates its children by sliding them.',
    description: [
      'wraps content in a Box and shifts it along a single axis based on the "direction" prop',
      'animates between offset and resting positions when the "visible" prop changes',
    ],
  },
  props: SLIDE_PROPS_META,
  examples: SLIDE_EXAMPLES_META,
}

export default {
  Slide: SLIDE_META,
}
