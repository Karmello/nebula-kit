import { ResizeProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { RESIZE_PROPS_META } from './props'
import { RESIZE_EXAMPLES_META } from './examples'

const RESIZE_META: ComponentMeta<ResizeProps> = {
  overview: {
    bundle: 'core',
    title: 'Wrapper component that animates size.',
    description: [
      'wraps content in a Box and toggles its size by animating a specified property',
      "measures content's maximum available size before animating, ensuring smooth transitions without abrupt layout shifts",
    ],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: RESIZE_PROPS_META,
  examples: RESIZE_EXAMPLES_META,
}

export default {
  Resize: RESIZE_META,
}
