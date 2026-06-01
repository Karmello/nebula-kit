import { ComponentMeta } from 'client/definitions'

import { type FormFieldsProps } from '../../slots/FormFields/definitions'
import { FORM_FIELDS_PROPS_META } from './props'

const FORM_FIELDS_META: ComponentMeta<FormFieldsProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.Fields',
    title: 'Container for grouping and laying out form fields within a Form.',
    features: ['controls layout and spacing between form fields'],
    guidelines: ['expects Form.Field slots as children'],
    composedOf: ['Flex'],
    topLevelTags: ['div'],
    slots: ['Form.Field'],
  },
  props: FORM_FIELDS_PROPS_META,
}

export { FORM_FIELDS_META }
