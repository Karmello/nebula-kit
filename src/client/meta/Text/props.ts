import {
  DEFAULT_TEXT_TYPOGRAPHY,
  TEXT_SPACE,
  TEXT_TYPOGRAPHY,
  TEXT_WORD_BREAK,
} from 'lib/components/core/Text/constants'
import { TextProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TEXT_PROPS: Record<keyof TextProps, DocProp> = {
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  clampLines: {
    options: ['number'],
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
  },
  color: BOX_META.props.color,
  fontSize: {
    options: ['string'],
    description: 'Sets the fontSize value, bypassing typography.',
  },
  intent: BOX_META.props.intent,
  italic: {
    options: ['boolean'],
    description: 'Toggles italic styling.',
  },
  lineHeight: {
    options: ['string'],
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
    ...BOX_META.props.tag,
    defaultValue: 'p',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  textAlign: BOX_META.props.textAlign,
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
