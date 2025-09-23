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
      'uses the tertiary intent',
      'uses the thickness of 1',
      'placed under a heading to emphasize separation from following content',
      'used between sections of a form or card to group related information',
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
