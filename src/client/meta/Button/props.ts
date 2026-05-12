import { ComponentMeta } from 'client/definitions'

import {
  ButtonProps,
  BUTTON_SIZES,
  BUTTON_TAGS,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_INTERACTIVE,
  DEFAULT_BUTTON_TEXT_ALIGN,
  DEFAULT_BUTTON_JUSTIFY_CONTENT,
} from 'lib/components/core/controls/Button'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'
import { FLEX_PROPS_META } from '../Flex/props'

const BUTTON_PROPS_META: ComponentMeta<ButtonProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  children: {
    ...HTML_TAG_PROPS_META.children,
    description: 'Label rendered.',
  },
  color: BOX_PROPS_META.color,
  customSvgIcon: TEXT_PROPS_META.customSvgIcon,
  disabled: BOX_PROPS_META.disabled,
  elevated: BOX_PROPS_META.elevated,
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the button to match the full width of its container.',
  },
  iconAngle: TEXT_PROPS_META.iconAngle,
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: TEXT_PROPS_META.iconPlacement,
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_BUTTON_INTENT),
  },
  interactive: {
    ...BOX_PROPS_META.interactive,
    defaultValue: String(DEFAULT_BUTTON_INTERACTIVE),
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
    options: ['e => void'],
    description: 'Click event handler for the button element.',
  },
  ripple: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_BUTTON_RIPPLE),
    description: 'Toggles the ripple effect on pointer interaction.',
  },
  selected: {
    options: ['boolean'],
    description: 'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
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
  textAlign: {
    ...TEXT_PROPS_META.textAlign,
    defaultValue: String(DEFAULT_BUTTON_TEXT_ALIGN),
  },
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_BUTTON_VARIANT),
  },
}

export { BUTTON_PROPS_META }
