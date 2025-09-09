import { IconButton, ICON_BUTTON_INHERITED_PROPS, ButtonOwnProps } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'

export default {
  overview: {
    name: 'IconButton',
    description: 'A button that relies on an icon as its main content.',
    responsibilities: ['render an icon as the content of a button'],
    characteristics: ['renders as a <button> element', 'does not accept children', 'iconName is required'],
    defaultBehavior: ['medium size', 'solid variant', 'tertiary intent'],
    useCases: ["useful for quick actions where text isn't needed"],
    inheritedProps: ICON_BUTTON_INHERITED_PROPS,
  },
  examples: [
    {
      description: 'Renders the default IconButton with a close icon as its content.',
      jsx: <IconButton iconName="close" />,
    },
  ],
} as ComponentMeta<ButtonOwnProps>
