import { IconButton, ICON_BUTTON_INHERITED_PROPS, IconButtonProps, ButtonElem } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

const ICON_BUTTON_META: ComponentMeta<IconButtonProps> = {
  overview: {
    description: 'A button that relies on an icon as its main content.',
    role: ['render an icon as the content of a button'],
    behavior: ['does not accept children', 'iconName is required'],
    byDefault: ['medium size', 'solid variant', 'tertiary intent'],
    examplesOfUse: ["useful for quick actions where text isn't needed"],
    composedOf: ICON_BUTTON_INHERITED_PROPS,
    rendersAs: ButtonElem,
  },
  examples: [
    {
      description: 'Renders the default IconButton with a close icon as its content.',
      jsx: <IconButton iconName="close" />,
    },
    {
      description: 'Renders the IconButton as a link that opens an external page in a new tab.',
      jsx: (
        <IconButton
          iconName="external-link"
          elem="a"
          elemProps={{ href: 'https://google.com', target: '_blank' }}
        />
      ),
    },
  ],
}

export default {
  IconButton: ICON_BUTTON_META,
}
