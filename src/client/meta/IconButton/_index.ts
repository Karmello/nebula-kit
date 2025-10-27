import { IconButtonProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'
import { BUTTON_TAGS } from 'lib/components/controls/Button/definitions'

import { ICON_BUTTON_EXAMPLES_META } from './examples'
import { ICON_BUTTON_PROPS_META } from './props'

const ICON_BUTTON_META: ComponentMeta<IconButtonProps> = {
  overview: {
    title: 'Interactive control that uses an icon as its primary content.',
    description: [
      'renders an icon as the content of Button',
      "useful for quick actions where text isn't needed",
    ],
    composedOf: ['Button'],
    rendersAs: BUTTON_TAGS,
  },
  props: ICON_BUTTON_PROPS_META,
  examples: ICON_BUTTON_EXAMPLES_META,
}

export default {
  IconButton: ICON_BUTTON_META,
}
