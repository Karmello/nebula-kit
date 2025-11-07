import { ComponentMeta } from 'client/definitions'
import { FormHintProps } from 'lib/components'

import { FORM_HINT_PROPS_META } from './props'

const FORM_HINT_META: ComponentMeta<FormHintProps> = {
  overview: {
    name: 'Form.Hint',
    title: 'Slot for providing additional helper text or guidance for the field.',
    composedOf: ['Text', 'Spacer'],
    rendersAs: ['span'],
  },
  props: FORM_HINT_PROPS_META,
}

export { FORM_HINT_META }
