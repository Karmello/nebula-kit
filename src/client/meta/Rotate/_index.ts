import { ComponentMeta } from 'client/definitions'
import { RotateProps } from 'lib/components'

import { ROTATE_PROPS_META } from './props'
import { ROTATE_EXAMPLES_META } from './examples'

const ROTATE_META: ComponentMeta<RotateProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper component that animates rotation based on angle changes.',
    description: [
      'rotates its children based on the "angle" prop',
      'performs animation when the "angle" prop value changes',
    ],
    composedOf: ['Box'],
    topLevelTags: ['span'],
  },
  props: ROTATE_PROPS_META,
  examples: ROTATE_EXAMPLES_META,
  changelog: {
    '0.2.1': ['Released'],
  },
}

export default {
  Rotate: ROTATE_META,
}
