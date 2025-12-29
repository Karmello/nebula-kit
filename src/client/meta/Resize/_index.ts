import { ResizeProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { RESIZE_PROPS_META } from './props'
import { RESIZE_EXAMPLES_META } from './examples'

const RESIZE_META: ComponentMeta<ResizeProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper that animates element size using measured layout.',
    description: [
      'wraps content in a Box and animates its block or inline size',
      "measures the content's natural size before animating, preventing layout jumps and reflow glitches",
      'enables smooth expand/collapse transitions without hard-coding sizes',
    ],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: RESIZE_PROPS_META,
  examples: RESIZE_EXAMPLES_META,
  changelog: {
    '0.1.0': ['Released'],
  },
}

export default {
  Resize: RESIZE_META,
}
