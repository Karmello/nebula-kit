import { ComponentMeta } from 'client/definitions'

import { type MultiSelectProps } from '../definitions'
import { MULTI_SELECT_EXAMPLES_META } from './examples'
import { MULTI_SELECT_PROPS_META } from './props'

import { MULTI_SELECT_OPTION_META } from './MultiSelectOption/_index'

const MULTI_SELECT_META: ComponentMeta<MultiSelectProps> = {
  overview: {
    bundle: 'pro',
    title: 'Form control for choosing multiple options from a list.',
    features: ['supports both controlled and uncontrolled modes'],
    composedOf: ['Text', 'WithIcon'],
    topLevelTags: ['div'],
    slots: ['MultiSelect.Option'],
  },
  props: MULTI_SELECT_PROPS_META,
  examples: MULTI_SELECT_EXAMPLES_META,
  changelog: {
    '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
    '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
    '0.3.0': ['released'],
  },
}

export default {
  MultiSelect: MULTI_SELECT_META,
  MultiSelectOption: MULTI_SELECT_OPTION_META,
}
