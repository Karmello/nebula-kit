import { ComponentMeta } from 'client/definitions'
import { InputProps } from 'lib/components'

import { INPUT_EXAMPLES_META } from './examples'
import { INPUT_PROPS_META } from './props'

const INPUT_META: ComponentMeta<InputProps> = {
  overview: {
    plan: 'free',
    title: 'Form control for entering or editing text.',
    description: ['supports both controlled and uncontrolled modes'],
    composedOf: ['Box', 'Segment'],
    rendersAs: ['input'],
  },
  props: INPUT_PROPS_META,
  examples: INPUT_EXAMPLES_META,
}

export default {
  Input: INPUT_META,
}
