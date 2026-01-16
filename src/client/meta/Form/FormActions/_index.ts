import { ComponentMeta } from 'client/definitions'
import { FormActionsProps } from 'lib/components'

import { FORM_ACTIONS_PROPS_META } from './props'

const FORM_ACTIONS_META: ComponentMeta<FormActionsProps> = {
  overview: {
    name: 'Form.Actions',
    title: 'Container for form action elements such as submit and secondary buttons.',
    features: ['controls layout and alignment of form action elements independently from form fields'],
    composedOf: ['Flex'],
    topLevelTags: ['div'],
    slots: ['Form.ActionButton'],
  },
  props: FORM_ACTIONS_PROPS_META,
}

export { FORM_ACTIONS_META }
