import { IconButton, ICON_BUTTON_INHERITED_PROPS, IconButtonProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

const ICON_BUTTON_META: ComponentMeta<IconButtonProps> = {
  overview: {
    description: 'A button that relies on an icon as its main content.',
    responsibilities: ['render an icon as the content of a button'],
    characteristics: ['renders as a <button> element', 'does not accept children', 'iconName is required'],
    defaultBehavior: ['medium size', 'solid variant', 'tertiary intent'],
    useCases: ["useful for quick actions where text isn't needed"],
    composedOf: ICON_BUTTON_INHERITED_PROPS,
  },
  examples: [
    {
      description: 'Renders the default IconButton with a close icon as its content.',
      jsx: <IconButton iconName="close" />,
    },
  ],
}

export default {
  IconButton: ICON_BUTTON_META,
}
