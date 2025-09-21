import { ComponentMeta } from 'client/definitions'
import { IconButton, IconButtonProps } from 'lib/components'

export default [
  {
    description: 'Renders the default IconButton with a close icon as its content.',
    jsx: <IconButton iconName="close" />,
  },
  {
    description: 'Renders the IconButton as a link that opens an external page in a new tab.',
    jsx: (
      <IconButton
        iconName="external-link"
        tag="a"
        tagAttrs={{ href: 'https://google.com', target: '_blank' }}
      />
    ),
  },
] as ComponentMeta<IconButtonProps>['examples']
