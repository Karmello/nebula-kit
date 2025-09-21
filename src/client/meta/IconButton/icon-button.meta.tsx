import { IconButton, IconButtonProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'
import { ButtonTag } from 'lib/components/controls/Button/definitions'
import { ICON_BUTTON_INHERITED_PROPS } from 'lib/components/controls/IconButton/definitions'

const ICON_BUTTON_META: ComponentMeta<IconButtonProps> = {
  overview: {
    description: 'An interactive control that uses an icon as its primary content.',
    role: ['render an icon as the content of a button'],
    behavior: ['does not accept children', 'iconName is required'],
    byDefault: ['medium size', 'solid variant', 'tertiary intent'],
    examplesOfUse: ["useful for quick actions where text isn't needed"],
    composedOf: ICON_BUTTON_INHERITED_PROPS,
    rendersAs: ButtonTag,
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
          tag="a"
          tagAttrs={{ href: 'https://google.com', target: '_blank' }}
        />
      ),
    },
  ],
}

export default {
  IconButton: ICON_BUTTON_META,
}
