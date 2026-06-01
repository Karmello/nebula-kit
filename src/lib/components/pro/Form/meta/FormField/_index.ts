import { ComponentMeta } from 'client/definitions'

import { type FormFieldProps } from '../../slots/FormField/definitions'
import { FORM_FIELD_PROPS_META } from './props'

const FORM_FIELD_META: ComponentMeta<FormFieldProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.Field',
    title: 'Container for a single form field and its associated metadata.',
    features: [
      'manages field registration and value control using React Hook Form',
      'provides shorthand props for common validation rules',
      'automatically associates labels and controls for accessibility based on the "name" prop',
      'exposes Flex.Item props for per-field layout control',
    ],
    composedOf: ['Flex.Item'],
    topLevelTags: ['div'],
    slots: ['Form.Label', 'Form.Hint'],
  },
  props: FORM_FIELD_PROPS_META,
}

export { FORM_FIELD_META }
