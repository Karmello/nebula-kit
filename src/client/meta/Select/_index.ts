import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'

import { SELECT_EXAMPLES_META } from './examples'
import { SELECT_PROPS_META } from './props'

import { SELECT_OPTION_META } from './SelectOption/_index'

const SELECT_META: ComponentMeta<SelectProps> = {
  overview: {
    bundle: 'core',
    title: 'Form control for choosing a single option from a list.',
    description: ['supports both controlled and uncontrolled modes'],
    composedOf: ['DropdownList', 'Button'],
    topLevelTags: ['div'],
    slots: ['Select.Option'],
  },
  props: SELECT_PROPS_META,
  examples: SELECT_EXAMPLES_META,
  changelog: {
    '0.2.1': ['Released'],
  },
}

export default {
  Select: SELECT_META,
  'Select.Option': SELECT_OPTION_META,
}
