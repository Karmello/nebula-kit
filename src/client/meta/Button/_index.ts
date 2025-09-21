import { ComponentMeta } from 'client/definitions'

import { BUTTON_INHERITED_PROPS, ButtonTag, ButtonOwnProps } from 'lib/components/controls/Button/definitions'

import { BUTTON_PROPS_META } from './props'
import { BUTTON_EXAMPLES_META } from './examples'

const BUTTON_META: ComponentMeta<ButtonOwnProps> = {
  overview: {
    description:
      'The primary interactive control for triggering actions, combining surface and text systems to provide a consistent, accessible entry point for user interaction.',
    role: [
      'provide a consistent, accessible trigger for user actions',
      'handle interactivity states such as hover, focus, active, and disabled',
      'support optional icon and text composition for clarity of meaning',
    ],
    behavior: ['requires children'],
    byDefault: ['medium size', 'solid variant', 'tertiary intent'],
    examplesOfUse: ['applied wherever a clear, consistent action trigger is needed in the interface'],
    composedOf: BUTTON_INHERITED_PROPS,
    rendersAs: ButtonTag,
  },
  props: BUTTON_PROPS_META,
  examples: BUTTON_EXAMPLES_META,
}

export default {
  Button: BUTTON_META,
}
