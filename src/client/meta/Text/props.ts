import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import {
  DEFAULT_TEXT_TYPOGRAPHY,
  TEXT_SPACE,
  TEXT_TYPOGRAPHY,
  TEXT_WORD_BREAK,
  TextProps,
} from 'lib/components/core/base/Text/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { WITH_ICON_PROPS_META } from '../WithIcon/props'

const TEXT_PROPS_META: ComponentMeta<TextProps>['props'] = {
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
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
  fontSize: {
    options: [DOCS_CSS_LABEL],
    description: 'Sets the fontSize value, bypassing typography.',
  },
  iconAngle: WITH_ICON_PROPS_META.iconAngle,
  iconName: {
    ...WITH_ICON_PROPS_META.iconName,
    isRequired: false,
  },
  iconPlacement: WITH_ICON_PROPS_META.iconPlacement,
  intent: BOX_PROPS_META.intent,
  italic: {
    options: ['boolean'],
    description: 'Toggles italic styling.',
  },
  justifyContent: WITH_ICON_PROPS_META.justifyContent,
  lineHeight: {
    options: [DOCS_CSS_LABEL],
    description: 'Sets the lineHeight value, bypassing typography.',
  },
  noWrap: {
    options: ['boolean'],
    description: 'Prevents the text from wrapping onto multiple lines.',
  },
  space: {
    options: TEXT_SPACE,
    description:
      'Controls the insertion of non-breaking spaces before and/or after the text content. Useful when composing multiple inline Text elements.',
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    defaultValue: 'p',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  textAlign: BOX_PROPS_META.textAlign,
  truncate: {
    options: ['boolean'],
    description: 'Shortens overflowing text to a single line with an ellipsis.',
  },
  typography: {
    options: TEXT_TYPOGRAPHY,
    defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
    description: 'Applies a predefined typography style from the design system.',
  },
  underline: {
    options: ['boolean'],
    description: 'Toggles underlined styling.',
  },
  wordBreak: {
    options: TEXT_WORD_BREAK,
    description: 'Controls how words break and wrap when text overflows its container.',
  },
}

export { TEXT_PROPS_META }
