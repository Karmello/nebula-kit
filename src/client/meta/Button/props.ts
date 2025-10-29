import { ComponentMeta } from 'client/definitions'

import {
  ButtonProps,
  BUTTON_SIZES,
  BUTTON_TAGS,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_JUSTIFY_CONTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from 'lib/components/controls/Button/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { WITH_ICON_PROPS_META } from '../WithIcon/props'

const BUTTON_PROPS_META: ComponentMeta<ButtonProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    description: 'Label rendered.',
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: BUTTON_TAGS as unknown as string[],
    defaultValue: 'button',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: DEFAULT_BUTTON_VARIANT,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: DEFAULT_BUTTON_INTENT,
  },
  disabled: BOX_PROPS_META.disabled,
  iconName: TEXT_PROPS_META.iconName,
  iconPosition: TEXT_PROPS_META.iconPosition,
  labelIntent: {
    ...TEXT_PROPS_META.intent,
    description: "Semantic color intent applied to the button's inner content.",
  },
  justifyContent: {
    ...FLEX_PROPS_META.justifyContent,
    defaultValue: String(DEFAULT_BUTTON_JUSTIFY_CONTENT),
    description: 'Distributes text and icon along the main axis.',
  },
  iconAngle: WITH_ICON_PROPS_META.iconAngle,
  size: {
    options: Object.values(BUTTON_SIZES),
    defaultValue: DEFAULT_BUTTON_SIZE,
    isRequired: false,
    isResponsive: false,
    description:
      'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
  },
  fullWidth: {
    options: ['boolean'],
    defaultValue: 'false',
    isResponsive: true,
    description: 'Expands the button to match the full width of its container.',
  },
}

export { BUTTON_PROPS_META }
