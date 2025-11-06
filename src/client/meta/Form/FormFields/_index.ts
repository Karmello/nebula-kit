import { ComponentMeta } from 'client/definitions'
import { FormFieldsProps } from 'lib/components'

import { FORM_FIELDS_PROPS_META } from './props'

const FORM_FIELDS_META: ComponentMeta<FormFieldsProps> = {
  overview: {
    name: 'Form.Fields',
    title: 'Container for grouping and laying out form fields.',
    description: ['expects Form.Field slot(s) as children', 'controls layout between its slots'],
    composedOf: ['Flex'],
    rendersAs: ['div'],
    slots: ['Form.Field'],
  },
  props: FORM_FIELDS_PROPS_META,
}

export { FORM_FIELDS_META }
