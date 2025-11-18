import { ComponentMeta } from 'client/definitions'
import { SlideProps } from 'lib/components/motion/Slide'

import { SLIDE_PROPS_META } from './props'
import { SLIDE_EXAMPLES_META } from './examples'

const SLIDE_META: ComponentMeta<SlideProps> = {
  overview: {
    plan: 'free',
    title: '...',
    description: ['...'],
  },
  props: SLIDE_PROPS_META,
  examples: SLIDE_EXAMPLES_META,
}

export default {
  Slide: SLIDE_META,
}
