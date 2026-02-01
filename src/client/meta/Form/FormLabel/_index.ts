import { ComponentMeta } from 'client/definitions'
import { FormLabelProps } from 'lib/components'

import { FORM_LABEL_PROPS_META } from './props'

const FORM_LABEL_META: ComponentMeta<FormLabelProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.Label',
    title: "Custom label slot for a form field's control.",
    features: ['replaces the "label" prop on Form.Field when provided'],
    composedOf: ['Text', 'Spacer'],
    topLevelTags: ['label'],
  },
  props: FORM_LABEL_PROPS_META,
}

export { FORM_LABEL_META }
