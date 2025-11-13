import { ComponentMeta } from 'client/definitions'
import { BUTTON_GROUP_DIRECTIONS, ButtonGroupProps } from 'lib/components/controls/ButtonGroup/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { BUTTON_PROPS_META } from '../Button/props'

const BUTTON_GROUP_PROPS_META: ComponentMeta<ButtonGroupProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  attached: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Removes spacing between buttons so they appear as a single connected element.',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Button'],
    isRequired: true,
    description: 'One or more Button components.',
  },
  color: BUTTON_PROPS_META.color,
  direction: {
    options: Object.values(BUTTON_GROUP_DIRECTIONS),
    defaultValue: BUTTON_GROUP_DIRECTIONS[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether buttons are arranged horizontally or vertically.',
  },
  gap: {
    ...FLEX_PROPS_META.gap,
    description: 'Defines spacing between items on both axes. Applied only when attached is false.',
  },
  intent: BUTTON_PROPS_META.intent,
  size: BUTTON_PROPS_META.size,
  stretch: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: true,
    description: 'Makes all grouped buttons expand to fill the available space evenly.',
  },
  variant: BUTTON_PROPS_META.variant,
}

export { BUTTON_GROUP_PROPS_META }
