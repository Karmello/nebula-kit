import { ComponentMeta } from 'client/definitions'
import { InputProps } from 'lib/components'

import { INPUT_EXAMPLES_META } from './examples'
import { INPUT_PROPS_META } from './props'

const INPUT_META: ComponentMeta<InputProps> = {
  overview: {
    bundle: 'core',
    title: 'Form control for entering or editing text.',
    description: ['supports both controlled and uncontrolled modes', 'supports start and end affixes'],
    composedOf: ['Box', 'Segment'],
    topLevelTags: ['input'],
  },
  props: INPUT_PROPS_META,
  examples: INPUT_EXAMPLES_META,
  changelog: {
    '0.2.2': ['Released'],
  },
}

export default {
  Input: INPUT_META,
}
