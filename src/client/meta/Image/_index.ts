import { ImageProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { IMAGE_PROPS_META } from './props'
import { IMAGE_EXAMPLES_META } from './examples'

const IMAGE_META: ComponentMeta<ImageProps> = {
  overview: {
    bundle: 'core',
    title: '...',
    features: ['...'],
  },
  props: IMAGE_PROPS_META,
  examples: IMAGE_EXAMPLES_META,
  changelog: {
    '0.4.0': ['Released'],
  },
}

export default {
  Image: IMAGE_META,
}
