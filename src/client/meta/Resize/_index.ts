import { ResizeProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { RESIZE_PROPS_META } from './props'
import { RESIZE_EXAMPLES_META } from './examples'

const RESIZE_META: ComponentMeta<ResizeProps> = {
  overview: {
    bundle: 'core',
    title: 'Motion component for animating layout size.',
    description:
      'Resize animates layout-affecting expand and collapse motion by measuring content and transitioning block or inline size.',
    features: [
      'animates block or inline size using measured content dimensions',
      'supports expand and collapse motion for panels, accordions and content reveals',
      'keeps layout motion explicit without hard-coded sizes',
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
