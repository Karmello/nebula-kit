import { ComponentMeta } from 'client/definitions'
import { WithIconProps } from 'lib/components/layout/WithIcon/definitions'

import { WITH_ICON_PROPS_META } from './props'
import { WITH_ICON_EXAMPLES_META } from './examples'

const WITH_ICON_META: ComponentMeta<WithIconProps> = {
  overview: {
    bundle: 'core',
    title: 'Layout component that aligns an icon with accompanying content.',
    description: [
      'renders an icon next to the children passed, either on the left or right',
      'handles icon rotation if required',
    ],
    composedOf: ['Flex', 'Rotate', 'Icon'],
    rendersAs: ['span'],
  },
  props: WITH_ICON_PROPS_META,
  examples: WITH_ICON_EXAMPLES_META,
}

export default {
  WithIcon: WITH_ICON_META,
}
