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
    title: 'Composable form container with layout and submission orchestration, built on React Hook Form.',
    features: [
      'coordinates layout between form sections and actions',
      'manages form state and validation using React Hook Form internally',
      'orchestrates the submission lifecycle via valid and invalid submission handlers',
    ],
    composedOf: ['Flex', 'Flex.Item'],
    topLevelTags: ['form'],
    slots: ['Form.Fields', 'Form.Actions'],
  },
  props: FORM_PROPS_META,
  examples: FORM_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Form: FORM_META,
  'Form.Fields': FORM_FIELDS_META,
  'Form.Actions': FORM_ACTIONS_META,
  'Form.Field': FORM_FIELD_META,
  'Form.ActionButton': FORM_ACTION_BUTTON_META,
  'Form.Label': FORM_LABEL_META,
  'Form.Hint': FORM_HINT_META,
}
