import { ComponentMeta } from 'client/definitions'
import { FormActionButtonProps } from 'lib/components'

import { FORM_ACTION_BUTTON_PROPS_META } from './props'

const FORM_ACTION_BUTTON_META: ComponentMeta<FormActionButtonProps> = {
  overview: {
    name: 'Form.ActionButton',
    title: 'Button slot for form-related or custom actions.',
    description: [
      'exposes the Flex.Item interface for per-item layout control',
      'use the "type" prop to enable built-in behaviors like submit, reset or clear',
    ],
    composedOf: ['Flex.Item', 'Button'],
    topLevelTags: ['button'],
  },
  props: FORM_ACTION_BUTTON_PROPS_META,
}

export { FORM_ACTION_BUTTON_META }
