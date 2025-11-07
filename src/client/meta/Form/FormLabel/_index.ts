import { ComponentMeta } from 'client/definitions'
import { FormLabelProps } from 'lib/components'

import { FORM_LABEL_PROPS_META } from './props'

const FORM_LABEL_META: ComponentMeta<FormLabelProps> = {
  overview: {
    name: 'Form.Label',
    title: 'Slot for providing a custom label element for the field.',
    description: ['overrides the "label" prop on Form.Field when provided'],
    composedOf: ['Text', 'Spacer'],
    rendersAs: ['label'],
  },
  props: FORM_LABEL_PROPS_META,
}

export { FORM_LABEL_META }
