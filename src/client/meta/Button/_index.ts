import { ComponentMeta } from 'client/definitions'

import { ButtonTag, ButtonOwnProps } from 'lib/components/controls/Button/definitions'

import { BUTTON_PROPS_META } from './props'
import { BUTTON_EXAMPLES_META } from './examples'

const BUTTON_META: ComponentMeta<ButtonOwnProps> = {
  overview: {
    title:
      'The primary interactive control for triggering actions, combining surface and text systems to provide a consistent, accessible entry point for user interaction.',
    description: [
      'provide a consistent, accessible trigger for user actions',
      'handle interactivity states such as hover, focus, active, and disabled',
      'support optional icon and text composition for clarity of meaning',
      'requires children',
      'medium size',
      'solid variant',
      'tertiary intent',
      'applied wherever a clear, consistent action trigger is needed in the interface',
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
