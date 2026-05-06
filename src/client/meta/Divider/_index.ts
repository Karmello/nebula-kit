import { ComponentMeta } from 'client/definitions'
import { DividerProps } from 'lib/components'

import { DIVIDER_PROPS_META } from './props'
import { DIVIDER_EXAMPLES_META } from './examples'

const DIVIDER_META: ComponentMeta<DividerProps> = {
  overview: {
    bundle: 'core',
    title: 'Boundary marker between content sections.',
    features: [
      'creates clear visual separation to reduce scanning effort',
      'marks a thematic break between related blocks of content',
    ],
    composedOf: ['Box'],
    topLevelTags: ['hr'],
  },
  props: DIVIDER_PROPS_META,
  examples: DIVIDER_EXAMPLES_META,
  changelog: {
    '0.9.0': ['added support for predefined size scale values on margin-related props', 'removed opacity prop'],
    '0.8.0': ['changed elevated prop to surface'],
    '0.7.0': ['exposed elevated prop via Box'],
    '0.6.0': ['exposed opacity prop via Box'],
    '0.2.3': ['released'],
  },
}

export default {
  Divider: DIVIDER_META,
}
