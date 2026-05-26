import { ComponentMeta } from 'client/definitions'
import { IconButtonProps, ICON_BUTTON_TAGS } from 'lib/components/core/IconButton/definitions'

import { ICON_BUTTON_PROPS_META } from './props'
import { ICON_BUTTON_EXAMPLES_META } from './examples'

const ICON_BUTTON_META: ComponentMeta<IconButtonProps> = {
  overview: {
    bundle: 'core',
    title: 'Interactive icon-only control for compact actions and utility triggers.',
    description:
      'IconButton is a compact authored control built on top of ActionSurface, designed for icon-only interactions such as toolbar actions, close buttons, navigation controls and utility triggers. It provides consistent interaction behavior, visual states and loading handling while keeping the surface constrained and visually balanced around a single icon.',
    features: [
      'provides a compact icon-only interactive control',
      'built on top of ActionSurface interaction infrastructure',
      'supports loading state with centered loader overlay',
      'supports both predefined and custom icon content',
      'handles interactive states: hover, active, focus, disabled, loading',
      'supports ripple interaction feedback',
      'supports polymorphic rendering as button or anchor',
      'keeps interaction geometry consistent with the global control sizing system',
    ],
    composedOf: ['ActionSurface', 'WithIcon', 'Loader'],
    topLevelTags: ICON_BUTTON_TAGS,
  },
  props: ICON_BUTTON_PROPS_META,
  examples: ICON_BUTTON_EXAMPLES_META,
  changelog: {
    '0.11.0': ['released'],
  },
}

export default {
  IconButton: ICON_BUTTON_META,
}
