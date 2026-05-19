import { ComponentMeta } from 'client/definitions'
import { PasswordInputProps } from 'lib/components'

import { PASSWORD_INPUT_EXAMPLES_META } from './examples'
import { PASSWORD_INPUT_PROPS_META } from './props'

const PASSWORD_INPUT_META: ComponentMeta<PasswordInputProps> = {
  overview: {
    bundle: 'pro',
    title: 'Secure text input with built-in password visibility toggle.',
    description: 'Handles password entry with optional reveal functionality for improving usability during authentication flows.',
    features: [
      'built-in password visibility toggle',
      'preserves native password input semantics',
      'supports both controlled and uncontrolled modes',
    ],
    composedOf: ['Input', 'Button'],
    topLevelTags: ['input'],
  },
  props: PASSWORD_INPUT_PROPS_META,
  examples: PASSWORD_INPUT_EXAMPLES_META,
  changelog: {
    '0.10.0': ['released'],
  },
}

export default {
  PasswordInput: PASSWORD_INPUT_META,
}
