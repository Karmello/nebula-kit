import { ComponentMeta } from 'client/definitions'
import { FormProps } from 'lib/components'

import { FORM_PROPS_META } from './props'
import { FORM_EXAMPLES_META } from './examples'

import { FORM_FIELD_META } from './FormField/_index'

const FORM_META: ComponentMeta<FormProps> = {
  overview: {
    plan: 'pro',
    title: 'Wrapper around form related components combining them into a functional unit.',
    description: ['collects and manages user input data', 'handles validation and submission logic'],
    composedOf: ['Flex'],
    rendersAs: ['form'],
    slots: ['Form.Field'],
  },
  props: FORM_PROPS_META,
  examples: FORM_EXAMPLES_META,
}

export default {
  Form: FORM_META,
  'Form.Field': FORM_FIELD_META,
}
