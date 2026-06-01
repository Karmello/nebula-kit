import { ComponentMeta } from 'client/definitions'

import { type FormHintProps } from '../../slots/FormHint/definitions'
import { FORM_HINT_PROPS_META } from './props'

const FORM_HINT_META: ComponentMeta<FormHintProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.Hint',
    title: "Helper text slot for a form field's control.",
    features: ['replaces the "hint" prop on Form.Field when provided'],
    composedOf: ['Text', 'Spacer', 'WithIcon'],
    topLevelTags: ['span'],
  },
  props: FORM_HINT_PROPS_META,
}

export { FORM_HINT_META }
