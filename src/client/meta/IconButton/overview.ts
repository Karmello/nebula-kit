import { ICON_BUTTON_TAGS } from 'lib/components/core/IconButton/constants'
import type { Overview } from 'client/definitions'

export const ICON_BUTTON_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Interactive icon-only control for compact actions and utility triggers.',
  description:
    'IconButton is a compact authored control built on top of Box, designed for icon-only interactions such as toolbar actions, close buttons, navigation controls and utility triggers. It provides consistent interaction behavior, visual states and loading handling while keeping the surface constrained and visually balanced around a single icon.',
  features: [
    'provides a compact icon-only interactive control',
    'supports loading state with centered loader overlay',
    'supports both predefined and custom icon content',
    'handles interactive states: hover, active, focus, disabled, loading',
    'supports ripple interaction feedback',
    'supports polymorphic rendering as button or anchor',
    'keeps interaction geometry consistent with the global control sizing system',
  ],
  composedOf: ['Icon', 'Loader'],
  exposedTags: ICON_BUTTON_TAGS,
}
