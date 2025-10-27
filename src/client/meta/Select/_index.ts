import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'

import { SELECT_EXAMPLES_META } from './examples'
import { SELECT_PROPS_META } from './props'

const SELECT_META: ComponentMeta<SelectProps> = {
  overview: {
    title: 'Form control for choosing a single option from a list.',
    description: ['handles both controlled and uncontrolled selection states'],
    composedOf: ['DropdownList', 'Button'],
    rendersAs: ['div'],
  },
  props: SELECT_PROPS_META,
  examples: SELECT_EXAMPLES_META,
}

export default {
  Select: SELECT_META,
}
