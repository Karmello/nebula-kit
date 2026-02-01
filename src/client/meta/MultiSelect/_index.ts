import { ComponentMeta } from 'client/definitions'
import { MultiSelectProps } from 'lib/components'

import { MULTI_SELECT_EXAMPLES_META } from './examples'
import { MULTI_SELECT_PROPS_META } from './props'

import { MULTI_SELECT_OPTION_META } from './MultiSelectOption/_index'

const MULTI_SELECT_META: ComponentMeta<MultiSelectProps> = {
  overview: {
    bundle: 'pro',
    title: 'Form control for choosing multiple options from a list.',
    features: ['supports both controlled and uncontrolled modes'],
    composedOf: ['DropdownList', 'Button'],
    topLevelTags: ['div'],
    slots: ['MultiSelect.Option'],
  },
  props: MULTI_SELECT_PROPS_META,
  examples: MULTI_SELECT_EXAMPLES_META,
  changelog: {
    '0.3.0': ['released'],
  },
}

export default {
  MultiSelect: MULTI_SELECT_META,
  MultiSelectOption: MULTI_SELECT_OPTION_META,
}
