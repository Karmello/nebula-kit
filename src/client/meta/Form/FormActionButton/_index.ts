import { ComponentMeta } from 'client/definitions'
import { FormActionButtonProps } from 'lib/components'

import { FORM_ACTION_BUTTON_PROPS_META } from './props'

const FORM_ACTION_BUTTON_META: ComponentMeta<FormActionButtonProps> = {
  overview: {
    bundle: 'pro',
    name: 'Form.ActionButton',
    title: 'Action button for form submission and related actions.',
    features: ['exposes Flex.Item props for per-button layout control'],
    guidelines: ['use the "type" prop to enable built-in behaviors such as submit, reset or clear'],
    composedOf: ['Flex.Item', 'Button'],
    topLevelTags: ['button'],
  },
  props: FORM_ACTION_BUTTON_PROPS_META,
}

export { FORM_ACTION_BUTTON_META }
