import { AnimateProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { ANIMATE_PROPS_META } from './props'
import { ANIMATE_EXAMPLES_META } from './examples'

const ANIMATE_META: ComponentMeta<AnimateProps> = {
  overview: {
    title: 'Utility component for simple show-and-hide transitions.',
    description: ['wraps content in a Box and toggles its visibility by animating a specified property'],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: ANIMATE_PROPS_META,
  examples: ANIMATE_EXAMPLES_META,
}

export default {
  Animate: ANIMATE_META,
}
