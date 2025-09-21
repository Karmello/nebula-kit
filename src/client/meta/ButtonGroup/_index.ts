import { ComponentMeta } from 'client/definitions'

import {
  BUTTON_GROUP_INHERITED_PROPS,
  ButtonGroupTag,
  ButtonGroupOwnProps,
  DEFAULT_BUTTON_GROUP_GAP,
} from 'lib/components/controls/ButtonGroup/definitions'

import props from './props'
import examples from './examples'

const BUTTON_GROUP_META: ComponentMeta<ButtonGroupOwnProps> = {
  overview: {
    description: 'A composite control that unifies several buttons into a single interface element.',
    role: ['groups multiple buttons together into a single block', 'provides consistent styling'],
    behavior: ['aligns buttons horizontally or vertically'],
    byDefault: ['renders buttons in a horizontal row', `applies gap of ${DEFAULT_BUTTON_GROUP_GAP}`],
    examplesOfUse: [
      'grouping actions in a toolbar',
      'creating a segmented control for switching views',
      'displaying confirm/cancel buttons as a pair',
      'building pagination or step navigation',
    ],
    composedOf: BUTTON_GROUP_INHERITED_PROPS,
    rendersAs: ButtonGroupTag,
  },
  props,
  examples,
}

export default {
  ButtonGroup: BUTTON_GROUP_META,
}
