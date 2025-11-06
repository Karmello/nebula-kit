import { ComponentMeta } from 'client/definitions'
import { FormFieldProps } from 'lib/components'

import { FORM_FIELD_PROPS_META } from './props'

const FORM_FIELD_META: ComponentMeta<FormFieldProps> = {
  overview: {
    name: 'Form.Field',
    title: 'Container for individual form controls.',
    description: [
      'uses RHF Controller under the hood to manage field registration and value control',
      'exposes the Flex.Item interface for per-item layout control',
    ],
    composedOf: ['Flex.Item'],
    rendersAs: ['label'],
  },
  props: FORM_FIELD_PROPS_META,
}

export { FORM_FIELD_META }
