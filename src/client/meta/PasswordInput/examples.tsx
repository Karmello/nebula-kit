import { ComponentMeta } from 'client/definitions'
import { PasswordInput, type PasswordInputProps } from 'lib/components'

const PASSWORD_INPUT_EXAMPLES_META: ComponentMeta<PasswordInputProps>['examples'] = [
  {
    description: 'Basic PasswordInput.',
    jsx: <PasswordInput />,
  },
]

export { PASSWORD_INPUT_EXAMPLES_META }
