import { ComponentMeta } from 'client/definitions'

import {
  ButtonGroupTag,
  ButtonGroupOwnProps,
  DEFAULT_BUTTON_GROUP_GAP,
} from 'lib/components/controls/ButtonGroup/definitions'

import { BUTTON_GROUP_PROPS_META } from './props'
import { BUTTON_GROUP_EXAMPLES_META } from './examples'

const BUTTON_GROUP_META: ComponentMeta<ButtonGroupOwnProps> = {
  overview: {
    description: 'A composite control that unifies several buttons into a single interface element.',
    role: [
      'groups multiple buttons together into a single block',
      'provides consistent styling',
      'aligns buttons horizontally or vertically',
      'renders buttons in a horizontal row',
      `applies gap of ${DEFAULT_BUTTON_GROUP_GAP}`,
      'grouping actions in a toolbar',
      'creating a segmented control for switching views',
      'displaying confirm/cancel buttons as a pair',
      'building pagination or step navigation',
    ],

    composedOf: ['Flex', 'Flex.Item', 'Button'],
    rendersAs: ButtonGroupTag,
  },
  props: BUTTON_GROUP_PROPS_META,
  examples: BUTTON_GROUP_EXAMPLES_META,
}

export default {
  ButtonGroup: BUTTON_GROUP_META,
}
