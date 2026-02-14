import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'

import { SELECT_EXAMPLES_META } from './examples'
import { SELECT_PROPS_META } from './props'

import { SELECT_OPTION_META } from './SelectOption/_index'

const SELECT_META: ComponentMeta<SelectProps> = {
  overview: {
    bundle: 'core',
    title: 'Form control for choosing a single option from a list.',
    features: ['supports both controlled and uncontrolled modes'],
    composedOf: ['DropdownList', 'Button'],
    topLevelTags: ['div'],
    slots: ['Select.Option'],
  },
  props: SELECT_PROPS_META,
  examples: SELECT_EXAMPLES_META,
  changelog: {
    '0.7.0': ['changed trigger behavior to use listIntent prop instead of triggerIntent while opened'],
    '0.6.0': ['replaced intent with separate triggerIntent and listIntent props'],
    '0.5.0': ['removed onClosed prop'],
    '0.3.0': ['updated public API'],
    '0.2.3': ['released'],
  },
}

export default {
  Select: SELECT_META,
  SelectOption: SELECT_OPTION_META,
}
