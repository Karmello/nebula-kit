import { ComponentMeta } from 'client/definitions'
import { DEFAULT_TEXT_TYPOGRAPHY, TextProps, TextTypography } from 'lib/components/base/Text/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { WITH_ICON_PROPS_META } from '../WithIcon/props'

const TEXT_PROPS_META: ComponentMeta<TextProps>['props'] = {
  typography: {
    options: Object.values(TextTypography),
    defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
    isRequired: false,
    isResponsive: false,
    description:
      'Applies a predefined typography style from the design system, controlling tag, fontSize and lineHeight together.',
  },
  bold: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Toggles bold styling.',
  },
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
  truncate: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Shortens overflowing text to a single line with an ellipsis.',
  },
  clampLines: {
    options: ['number'],
    isRequired: false,
    isResponsive: false,
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
  },
  intent: BOX_PROPS_META['intent'],
  textAlign: BOX_PROPS_META['textAlign'],
  iconName: {
    ...WITH_ICON_PROPS_META['name'],
    isRequired: false,
  },
  iconPosition: WITH_ICON_PROPS_META['position'],
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META['children'],
    isRequired: true,
  },
  tag: {
    ...HTML_TAG_PROPS_META['tag'],
    defaultValue: '<p>',
  },
}

export { TEXT_PROPS_META }
