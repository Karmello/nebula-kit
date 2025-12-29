import { ComponentMeta } from 'client/definitions'
import { DividerProps } from 'lib/components'

import { DIVIDER_PROPS_META } from './props'
import { DIVIDER_EXAMPLES_META } from './examples'

const DIVIDER_META: ComponentMeta<DividerProps> = {
  overview: {
    bundle: 'core',
    title: 'Boundary marker between content sections.',
    description: [
      'creates clear visual separation to reduce scanning effort',
      'marks a thematic break between related blocks of content',
    ],
    composedOf: ['Box'],
    topLevelTags: ['hr'],
  },
  props: DIVIDER_PROPS_META,
  examples: DIVIDER_EXAMPLES_META,
  changelog: {
    '0.1.0': ['Released'],
  },
}

export default {
  Divider: DIVIDER_META,
}
