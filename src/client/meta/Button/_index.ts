import { ComponentMeta } from 'client/definitions'

import { BUTTON_TAGS, ButtonProps } from 'lib/components/controls/Button/definitions'

import { BUTTON_PROPS_META } from './props'
import { BUTTON_EXAMPLES_META } from './examples'

const BUTTON_META: ComponentMeta<ButtonProps> = {
  overview: {
    title: 'Interactive control for triggering actions.',
    description: [
      'provides a consistent, accessible trigger for user actions',
      'handles interactive states: hover, focus, active, disabled',
      'supports text and icon composition',
      'supports full-width layout to span the entire container',
    ],
    composedOf: ['Box', 'Text', 'WithIcon'],
    rendersAs: BUTTON_TAGS,
  },
  props: BUTTON_PROPS_META,
  examples: BUTTON_EXAMPLES_META,
}

export default {
  Button: BUTTON_META,
}
