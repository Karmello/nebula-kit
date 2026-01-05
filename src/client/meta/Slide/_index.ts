import { ComponentMeta } from 'client/definitions'
import { SlideProps } from 'lib/components'

import { SLIDE_PROPS_META } from './props'
import { SLIDE_EXAMPLES_META } from './examples'

const SLIDE_META: ComponentMeta<SlideProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper component that animates content by sliding it into and out of view.',
    description: [
      'wraps content in a Box and positions it on and off view based on the "from" prop',
      'slides content into and out of view when "visible" prop changes',
    ],
  },
  props: SLIDE_PROPS_META,
  examples: SLIDE_EXAMPLES_META,
  changelog: {
    '0.1.2': ['Released'],
  },
}

export default {
  Slide: SLIDE_META,
}
