import { ComponentMeta } from 'client/definitions'
import { FormFieldProps } from 'lib/components'

import { FORM_FIELD_EXAMPLES_META } from './examples'
import { FORM_FIELD_PROPS_META } from './props'

const FORM_FIELD_META: ComponentMeta<FormFieldProps> = {
  overview: {
    name: 'Form.Field',
    title: 'Wrapper for individual form controls.',
    description: ['...'],
    composedOf: ['Box'],
    rendersAs: ['label'],
    slots: ['Input', 'Select'],
  },
  props: FORM_FIELD_PROPS_META,
  examples: FORM_FIELD_EXAMPLES_META,
}

export { FORM_FIELD_META }
