import { ComponentMeta } from 'client/definitions'
import { BUTTON_TAGS, ButtonProps } from 'lib/components/core/controls/Button'

import { BUTTON_PROPS_META } from './props'
import { BUTTON_EXAMPLES_META } from './examples'

const BUTTON_META: ComponentMeta<ButtonProps> = {
  overview: {
    bundle: 'core',
    title: 'Interactive control for triggering actions with consistent semantics, layout and visual states.',
    description: [
      'provides a consistent, accessible trigger for user actions',
      'handles interactive states: hover, active, focus, highlighted, disabled, loading',
      'supports first-class icon composition, including custom SVG icons',
      'supports full-width layout to span the entire container',
    ],
    composedOf: ['Box', 'Text', 'WithIcon', 'Loader'],
    topLevelTags: BUTTON_TAGS,
  },
  props: BUTTON_PROPS_META,
  examples: BUTTON_EXAMPLES_META,
  changelog: {
    '0.1.0': ['Released'],
  },
}

export default {
  Button: BUTTON_META,
}
