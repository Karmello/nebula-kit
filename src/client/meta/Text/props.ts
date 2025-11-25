import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_TEXT_TYPOGRAPHY,
  DEFAULT_TEXT_SCALE,
  TEXT_SPACE,
  TEXT_TYPOGRAPHY,
  TEXT_SCALE,
  TextProps,
} from 'lib/components/base/Text/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { WITH_ICON_PROPS_META } from '../WithIcon/props'

const TEXT_PROPS_META: ComponentMeta<TextProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  bold: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Toggles bold styling.',
  },
  children: {
    ...HTML_TAG_PROPS_META['children'],
    isRequired: true,
  },
  clampLines: {
    options: ['number'],
    isRequired: false,
    isResponsive: false,
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
  },
  color: BOX_PROPS_META.color,
  disabled: BOX_PROPS_META.disabled,
  iconName: {
    ...WITH_ICON_PROPS_META['name'],
    isRequired: false,
  },
  iconPosition: WITH_ICON_PROPS_META['position'],
  intent: BOX_PROPS_META['intent'],
  italic: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Toggles italic styling.',
  },
  noWrap: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Prevents the text from wrapping onto multiple lines.',
  },
  scale: {
    options: Object.values(TEXT_SCALE),
    defaultValue: DEFAULT_TEXT_SCALE,
    description: 'Defines the size system used for text rendering.',
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
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Shortens overflowing text to a single line with an ellipsis.',
  },
  typography: {
    options: Object.values(TEXT_TYPOGRAPHY),
    defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
    isRequired: false,
    isResponsive: false,
    description:
      'Applies a predefined typography style from the design system, controlling tag, fontSize and lineHeight together.',
  },
  underline: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Toggles underlined styling.',
  },
}

export { TEXT_PROPS_META }
