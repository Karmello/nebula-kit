import { ComponentMeta } from 'client/definitions'

import { IMAGE_PROPS_META } from './props'
import { IMAGE_EXAMPLES_META } from './examples'
import { type ImageProps } from '../definitions'

const IMAGE_META: ComponentMeta<ImageProps> = {
  overview: {
    bundle: 'core',
    title: 'Foundational component for rendering and styling images consistently across the system.',
    features: [
      'renders a native img element',
      'exposes logical sizing and constraints',
      'supports responsive object-fit and object-position',
      'serves as a base for composed image components',
    ],
    composedOf: ['Box'],
    topLevelTags: ['img'],
  },
  props: IMAGE_PROPS_META,
  examples: IMAGE_EXAMPLES_META,
  changelog: {
    '0.4.0': ['released'],
  },
}

export default {
  Image: IMAGE_META,
}
