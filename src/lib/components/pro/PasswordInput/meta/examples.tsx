import { ComponentMeta } from 'client/definitions'

import { type PasswordInputProps } from '../definitions'
import { PasswordInput } from '../password-input'

const PASSWORD_INPUT_EXAMPLES_META: ComponentMeta<PasswordInputProps>['examples'] = [
  {
    description: 'Basic PasswordInput.',
    jsx: <PasswordInput />,
  },
]

export { PASSWORD_INPUT_EXAMPLES_META }
