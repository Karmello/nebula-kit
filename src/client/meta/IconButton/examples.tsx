import { ComponentMeta } from 'client/definitions'
import { IconButton, IconButtonProps } from 'lib/components'

const ICON_BUTTON_EXAMPLES_META: ComponentMeta<IconButtonProps>['examples'] = [
  {
    description: 'Default IconButton with a close icon as its content.',
    jsx: <IconButton iconName="close" />,
  },
  {
    description: 'IconButton as a link that opens an external page in a new tab.',
    jsx: (
      <IconButton
        iconName="external-link"
        tag="a"
        tagAttrs={{ href: 'https://google.com', target: '_blank' }}
      />
    ),
  },
]

export { ICON_BUTTON_EXAMPLES_META }
