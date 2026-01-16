import { ComponentMeta } from 'client/definitions'
import { WithIconProps } from 'lib/components'

import { WITH_ICON_PROPS_META } from './props'
import { WITH_ICON_EXAMPLES_META } from './examples'

const WITH_ICON_META: ComponentMeta<WithIconProps> = {
  overview: {
    bundle: 'core',
    title: 'Layout component that aligns an icon with accompanying content.',
    features: [
      'renders an icon next to the children passed',
      'controls layout of an icon and children',
      'handles icon rotation if required',
    ],
    composedOf: ['Box', 'Flex', 'Rotate', 'Icon'],
    topLevelTags: ['span'],
  },
  props: WITH_ICON_PROPS_META,
  examples: WITH_ICON_EXAMPLES_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  WithIcon: WITH_ICON_META,
}
