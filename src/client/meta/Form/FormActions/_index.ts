import { ComponentMeta } from 'client/definitions'
import { FormActionsProps } from 'lib/components'

import { FORM_ACTIONS_PROPS_META } from './props'

const FORM_ACTIONS_META: ComponentMeta<FormActionsProps> = {
  overview: {
    name: 'Form.Actions',
    title: 'Container for form action elements like submit button.',
    description: ['controls layout between its slots'],
    composedOf: ['Flex'],
    rendersAs: ['div'],
    slots: ['Form.SubmitButton', 'Form.ResetButton'],
  },
  props: FORM_ACTIONS_PROPS_META,
}

export { FORM_ACTIONS_META }
