import { ComponentMeta } from 'client/definitions'

import { ButtonTag, ButtonProps } from 'lib/components/controls/Button/definitions'

import { BUTTON_PROPS_META } from './props'
import { BUTTON_EXAMPLES_META } from './examples'

const BUTTON_META: ComponentMeta<ButtonProps> = {
  overview: {
    title:
      'Interactive control for triggering actions, combining surface and text systems to provide a consistent, accessible entry point.',
    description: [
      'provides a consistent, accessible trigger for user actions',
      'handles interactive states: hover, focus, active, disabled',
      'supports optional icon and text composition for clarity',
    ],
    composedOf: ['Box', 'Text'],
    rendersAs: ButtonTag,
  },
  props: BUTTON_PROPS_META,
  examples: BUTTON_EXAMPLES_META,
}

export default {
  Button: BUTTON_META,
}
