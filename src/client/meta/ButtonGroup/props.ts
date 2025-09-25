import { ComponentMeta } from 'client/definitions'
import { ButtonGroupDirection, ButtonGroupProps } from 'lib/components/controls/ButtonGroup/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { BUTTON_PROPS_META } from '../Button/props'

const BUTTON_GROUP_PROPS_META: ComponentMeta<ButtonGroupProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'One or more <Button> elements.',
  },
  gap: FLEX_PROPS_META.gap,
  variant: BUTTON_PROPS_META.variant,
  intent: BUTTON_PROPS_META.intent,
  size: BUTTON_PROPS_META.size,
  direction: {
    options: Object.values(ButtonGroupDirection),
    defaultValue: ButtonGroupDirection[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether buttons are arranged horizontally or vertically.',
  },
  stretch: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: true,
    description: 'Makes all grouped buttons expand to fill the available space evenly.',
  },
  attached: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Removes spacing between buttons so they appear as a single connected element.',
  },
}

export { BUTTON_GROUP_PROPS_META }
