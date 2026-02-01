import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_TEXT_TYPOGRAPHY,
  DEFAULT_TEXT_SCALE,
  TEXT_SPACE,
  TEXT_TYPOGRAPHY,
  TEXT_SCALE,
  TextProps,
} from 'lib/components/core/base/Text'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { WITH_ICON_PROPS_META } from '../WithIcon/props'

const TEXT_PROPS_META: ComponentMeta<TextProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    ...HTML_TAG_PROPS_META['children'],
    isRequired: true,
  },
  clampLines: {
    options: ['number'],
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
  },
  color: BOX_PROPS_META.color,
  customSvgIcon: WITH_ICON_PROPS_META.customSvgIcon,
  disabled: {
    ...BOX_PROPS_META.disabled,
    description: 'Applies the disabled visual state and disables interaction when rendered as an <a> tag.',
  },
  iconName: {
    ...WITH_ICON_PROPS_META['iconName'],
    isRequired: false,
  },
  iconPlacement: WITH_ICON_PROPS_META['iconPlacement'],
  intent: BOX_PROPS_META['intent'],
  italic: {
    options: ['boolean'],
    description: 'Toggles italic styling.',
  },
  noWrap: {
    options: ['boolean'],
    description: 'Prevents the text from wrapping onto multiple lines.',
  },
  scale: {
    options: Object.values(TEXT_SCALE),
    defaultValue: DEFAULT_TEXT_SCALE,
    description: 'Selects the size scale used for text rendering.',
  },
  space: {
    options: TEXT_SPACE as unknown as string[],
    description:
      'Controls the insertion of non-breaking spaces before and/or after the text content. Useful when composing multiple inline Text elements.',
  },
  tag: {
    ...HTML_TAG_PROPS_META['tag'],
    defaultValue: 'p',
  },
  textAlign: BOX_PROPS_META['textAlign'],
  truncate: {
    options: ['boolean'],
    description: 'Shortens overflowing text to a single line with an ellipsis.',
  },
  typography: {
    options: TEXT_TYPOGRAPHY,
    defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
    description:
      'Applies a predefined typography style from the design system, controlling tag, fontSize and lineHeight together.',
    tooltip: TEXT_TYPOGRAPHY,
  },
  underline: {
    options: ['boolean'],
    description: 'Toggles underlined styling.',
  },
}

export { TEXT_PROPS_META }
