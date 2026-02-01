import { ComponentMeta } from 'client/definitions'
import { FormFieldsProps } from 'lib/components'

import { FORM_FIELDS_PROPS_META } from './props'

const FORM_FIELDS_META: ComponentMeta<FormFieldsProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.Fields',
    title: 'Container for grouping and laying out form fields within a Form.',
    features: ['expects Form.Field slots as children', 'controls layout and spacing between form fields'],
    composedOf: ['Flex'],
    topLevelTags: ['div'],
    slots: ['Form.Field'],
  },
  props: FORM_FIELDS_PROPS_META,
}

export { FORM_FIELDS_META }
