import { ComponentMeta } from 'client/definitions'
import { FormSubmitButtonProps } from 'lib/components'

import { FORM_SUBMIT_BUTTON_PROPS_META } from './props'

const FORM_SUBMIT_BUTTON_META: ComponentMeta<FormSubmitButtonProps> = {
  overview: {
    name: 'Form.SubmitButton',
    title: 'Button slot that triggers form submission.',
    description: ['exposes the Flex.Item interface for per-item layout control'],
    composedOf: ['Flex.Item', 'Button'],
    rendersAs: ['button'],
  },
  props: FORM_SUBMIT_BUTTON_PROPS_META,
}

export { FORM_SUBMIT_BUTTON_META }
