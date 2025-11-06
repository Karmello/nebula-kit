import { ComponentMeta } from 'client/definitions'
import { FormResetButtonProps } from 'lib/components'

import { FORM_RESET_BUTTON_PROPS_META } from './props'

const FORM_RESET_BUTTON_META: ComponentMeta<FormResetButtonProps> = {
  overview: {
    name: 'Form.ResetButton',
    title: 'Button slot that resets all form fields to their default values.',
    description: ['exposes the Flex.Item interface for per-item layout control'],
    composedOf: ['Flex.Item', 'Button'],
    rendersAs: ['button'],
  },
  props: FORM_RESET_BUTTON_PROPS_META,
}

export { FORM_RESET_BUTTON_META }
