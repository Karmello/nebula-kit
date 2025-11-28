import { ComponentMeta } from 'client/definitions'
import { FormProps } from 'lib/components'

import { FORM_PROPS_META } from './props'
import { FORM_EXAMPLES_META } from './examples'

import { FORM_FIELDS_META } from './FormFields/_index'
import { FORM_ACTIONS_META } from './FormActions/_index'
import { FORM_FIELD_META } from './FormField/_index'
import { FORM_ACTION_BUTTON_META } from './FormActionButton/_index'
import { FORM_LABEL_META } from './FormLabel/_index'
import { FORM_HINT_META } from './FormHint/_index'

const FORM_META: ComponentMeta<FormProps> = {
  overview: {
    bundle: 'pro',
    title: 'Component for building and managing forms, powered by React Hook Form under the hood.',
    description: [
      'controls layout between its slots',
      'receives RHF configuration props and passes them to "useForm" hook internally',
      'passes "onValidSubmission" and "onInvalidSubmission" to RHF "handleSubmit" internally',
    ],
    composedOf: ['Flex', 'Flex.Item'],
    rendersAs: ['form'],
    slots: ['Form.Fields', 'Form.Actions'],
  },
  props: FORM_PROPS_META,
  examples: FORM_EXAMPLES_META,
}

export default {
  Form: FORM_META,
  FormFields: FORM_FIELDS_META,
  FormActions: FORM_ACTIONS_META,
  FormField: FORM_FIELD_META,
  FormActionButton: FORM_ACTION_BUTTON_META,
  FormLabel: FORM_LABEL_META,
  FormHint: FORM_HINT_META,
}
