import { ComponentMeta } from 'client/definitions'
import { FormHintProps } from 'lib/components'

import { FORM_HINT_PROPS_META } from './props'

const FORM_HINT_META: ComponentMeta<FormHintProps> = {
  overview: {
    name: 'Form.Hint',
    title: "Helper text slot for a form field's control.",
    description: ['replaces the "hint" prop on Form.Field when provided'],
    composedOf: ['Text', 'Spacer'],
    topLevelTags: ['span'],
  },
  props: FORM_HINT_PROPS_META,
}

export { FORM_HINT_META }
