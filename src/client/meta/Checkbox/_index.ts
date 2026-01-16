import { ComponentMeta } from 'client/definitions'
import { CheckboxProps } from 'lib/components'

import { CHECKBOX_PROPS_META } from './props'
import { CHECKBOX_EXAMPLES_META } from './examples'

const CHECKBOX_META: ComponentMeta<CheckboxProps> = {
  overview: {
    bundle: 'core',
    title: 'Form control for toggling a binary on/off state.',
    features: ['supports both controlled and uncontrolled modes'],
    composedOf: ['Box', 'Icon'],
    topLevelTags: ['div'],
  },
  props: CHECKBOX_PROPS_META,
  examples: CHECKBOX_EXAMPLES_META,
  changelog: {
    '0.3.0': ['Released'],
  },
}

export default {
  Checkbox: CHECKBOX_META,
}
