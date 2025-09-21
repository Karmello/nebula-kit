import { IconButtonProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'
import { ButtonTag } from 'lib/components/controls/Button/definitions'

import { ICON_BUTTON_EXAMPLES_META } from './examples'

const ICON_BUTTON_META: ComponentMeta<IconButtonProps> = {
  overview: {
    description: 'An interactive control that uses an icon as its primary content.',
    role: ['render an icon as the content of a button'],
    behavior: ['does not accept children', 'iconName is required'],
    byDefault: ['medium size', 'solid variant', 'tertiary intent'],
    examplesOfUse: ["useful for quick actions where text isn't needed"],
    composedOf: ['Button'],
    rendersAs: ButtonTag,
  },
  examples: ICON_BUTTON_EXAMPLES_META,
}

export default {
  IconButton: ICON_BUTTON_META,
}
