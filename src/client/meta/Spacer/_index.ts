import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components'

import { SPACER_EXAMPLES_META } from './examples'
import { SPACER_PROPS_META } from './props'

const SPACER_META: ComponentMeta<SpacerProps> = {
  overview: {
    bundle: 'core',
    title: 'Layout component that introduces controlled empty space between elements.',
    features: [
      'enables consistent vertical spacing across layouts',
      'supports predefined spacing scale and custom CSS values',
      'supports responsive spacing for adaptive layouts',
    ],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: SPACER_PROPS_META,
  examples: SPACER_EXAMPLES_META,
  changelog: {
    '0.9.0': ['added support for predefined size scale values on the `blockSize` prop'],
    '0.2.3': ['released'],
  },
}

export default {
  Spacer: SPACER_META,
}
