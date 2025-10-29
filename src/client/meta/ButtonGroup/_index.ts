import { ComponentMeta } from 'client/definitions'
import { BUTTON_GROUP_TAGS, ButtonGroupProps } from 'lib/components/controls/ButtonGroup/definitions'

import { BUTTON_GROUP_PROPS_META } from './props'
import { BUTTON_GROUP_EXAMPLES_META } from './examples'

const BUTTON_GROUP_META: ComponentMeta<ButtonGroupProps> = {
  overview: {
    title: 'Composite control that unifies several buttons into a single interface element.',
    description: [
      'groups multiple buttons into a single horizontal or vertical block',
      'can appear as a separated or an attached group',
      'props set on individual buttons override props inherited from the group',
    ],

    composedOf: ['Flex', 'Flex.Item'],
    rendersAs: BUTTON_GROUP_TAGS,
    slots: ['Button', 'Link'],
  },
  props: BUTTON_GROUP_PROPS_META,
  examples: BUTTON_GROUP_EXAMPLES_META,
}

export default {
  ButtonGroup: BUTTON_GROUP_META,
}
