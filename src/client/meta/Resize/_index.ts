import { ResizeProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { RESIZE_PROPS_META } from './props'
import { RESIZE_EXAMPLES_META } from './examples'

const RESIZE_META: ComponentMeta<ResizeProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper that animates element size using measured layout.',
    description:
      'Resize is intended for layout-affecting expand/collapse motion, such as accordions, panels and content reveals.',
    features: [
      'wraps content in a Box and animates its block or inline size',
      'measures content size and animates the container between collapsed and expanded layout states',
      'enables smooth expand/collapse transitions without hard-coding sizes',
    ],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: RESIZE_PROPS_META,
  examples: RESIZE_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Resize: RESIZE_META,
}
