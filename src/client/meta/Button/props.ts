import { ComponentMeta } from 'client/definitions'

import {
  ButtonLabelAlign,
  ButtonProps,
  ButtonSize,
  ButtonTag,
  DEFAULT_BUTTON_LABEL_ALIGN,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from 'lib/components/controls/Button/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'

const BUTTON_PROPS_META: ComponentMeta<ButtonProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: ButtonTag as unknown as string[],
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
  labelAlign: {
    options: ButtonLabelAlign as unknown as string[],
    defaultValue: DEFAULT_BUTTON_LABEL_ALIGN,
    description: "Aligns the button's inner content.",
  },
  size: {
    options: Object.values(ButtonSize),
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
