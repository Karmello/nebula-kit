import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'

import { SELECT_EXAMPLES_META } from './examples'
import { SELECT_PROPS_META } from './props'

import { SELECT_OPTION_META } from './SelectOption/_index'

const SELECT_META: ComponentMeta<SelectProps> = {
  overview: {
    bundle: 'core',
    title: 'Form control for choosing a single option from a list.',
    description:
      'Select allows users to choose a single value from a predefined list of options while keeping the interface compact. It combines an interactive trigger with a dropdown list, handling selection, keyboard navigation, focus management and positioning automatically.',
    features: [
      'supports controlled and uncontrolled modes',
      'keyboard navigation with arrow keys',
      'automatic option scrolling to the selected item',
      'automatic dropdown positioning and viewport collision handling',
      'click outside and Escape key dismissal',
      'supports fixed trigger labels via `staticLabel`',
    ],
    composedOf: ['ActionSurface', 'Box', 'Text', 'Flex', 'WithIcon'],
    slots: ['Select.Option'],
  },
  props: SELECT_PROPS_META,
  examples: SELECT_EXAMPLES_META,
  changelog: {
    '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
    '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
    '0.5.0': ['removed `onClosed` prop'],
    '0.3.0': ['updated public API'],
    '0.2.3': ['released'],
  },
}

export default {
  Select: SELECT_META,
  SelectOption: SELECT_OPTION_META,
}
