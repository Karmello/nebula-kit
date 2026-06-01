import { ComponentMeta } from 'client/definitions'

import { type FormLabelProps } from '../../slots/FormLabel/definitions'
import { FORM_LABEL_PROPS_META } from './props'

const FORM_LABEL_META: ComponentMeta<FormLabelProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.Label',
    title: "Custom label slot for a form field's control.",
    features: ['replaces the "label" prop on Form.Field when provided'],
    composedOf: ['Text', 'Spacer', 'WithIcon'],
    topLevelTags: ['label'],
  },
  props: FORM_LABEL_PROPS_META,
}

export { FORM_LABEL_META }
