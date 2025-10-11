import { ComponentMeta } from 'client/definitions'
import { IconButton, IconButtonProps } from 'lib/components'

const ICON_BUTTON_EXAMPLES_META: ComponentMeta<IconButtonProps>['examples'] = [
  {
    description: 'Default IconButton with a close icon as its content.',
    jsx: <IconButton iconName="close" />,
  },
]

export { ICON_BUTTON_EXAMPLES_META }
