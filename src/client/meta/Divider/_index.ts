import { ComponentMeta } from 'client/definitions'
import { DividerOwnProps } from 'lib/components/elements/Divider/definitions'

import { DIVIDER_PROPS_META } from './props'
import { DIVIDER_EXAMPLES_META } from './examples'

const DIVIDER_META: ComponentMeta<DividerOwnProps> = {
  overview: {
    title: 'Boundary marker between content sections.',
    description: [
      'creates clear visual separation to reduce scanning effort',
      'marks a thematic break between related blocks of content',
    ],
    composedOf: ['Box'],
    rendersAs: ['hr'],
  },
  props: DIVIDER_PROPS_META,
  examples: DIVIDER_EXAMPLES_META,
}

export default {
  Divider: DIVIDER_META,
}
