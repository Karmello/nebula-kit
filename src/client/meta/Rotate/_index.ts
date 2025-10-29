import { ComponentMeta } from 'client/definitions'
import { RotateProps } from 'lib/components/motion/Rotate/definitions'

import { ROTATE_PROPS_META } from './props'
import { ROTATE_EXAMPLES_META } from './examples'

const ROTATE_META: ComponentMeta<RotateProps> = {
  overview: {
    title: 'Wrapper component that animates its children by rotating them.',
    description: [
      'rotates its children based on the "angle" prop',
      'animates rotation when the angle value changes',
    ],
    composedOf: ['Box'],
    rendersAs: ['span'],
  },
  props: ROTATE_PROPS_META,
  examples: ROTATE_EXAMPLES_META,
}

export default {
  Rotate: ROTATE_META,
}
