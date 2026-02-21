import { ComponentMeta } from 'client/definitions'

import {
  ButtonProps,
  BUTTON_SIZES,
  BUTTON_TAGS,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_JUSTIFY_CONTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_BUTTON_RIPPLE,
} from 'lib/components/core/controls/Button'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { WITH_ICON_PROPS_META } from '../WithIcon/props'

const BUTTON_PROPS_META: ComponentMeta<ButtonProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  children: {
    ...HTML_TAG_PROPS_META.children,
    description: 'Label rendered.',
  },
  color: BOX_PROPS_META.color,
  customSvgIcon: WITH_ICON_PROPS_META.customSvgIcon,
  disabled: BOX_PROPS_META.disabled,
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the button to match the full width of its container.',
  },
  highlighted: BOX_PROPS_META.highlighted,
  iconAngle: WITH_ICON_PROPS_META.iconAngle,
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: TEXT_PROPS_META.iconPlacement,
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_BUTTON_INTENT),
  },
  justifyContent: {
    ...FLEX_PROPS_META.justifyContent,
    defaultValue: String(DEFAULT_BUTTON_JUSTIFY_CONTENT),
    description: 'Distributes text and icon along the main axis.',
  },
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
  },
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  onClick: {
    options: ['event => void'],
    description: 'Click event handler for the button element.',
  },
  pressed: BOX_PROPS_META.pressed,
  ripple: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_BUTTON_RIPPLE),
    description: 'Toggles the ripple effect on pointer interaction.',
  },
  size: {
    options: Object.values(BUTTON_SIZES),
    defaultValue: DEFAULT_BUTTON_SIZE,
    description:
      'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
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
    defaultValue: String(DEFAULT_BUTTON_VARIANT),
  },
}

export { BUTTON_PROPS_META }
