import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TEXT_TYPOGRAPHY,
  TEXT_SPACE,
  TEXT_TYPOGRAPHY,
  TEXT_WORD_BREAK,
} from 'lib/components/core/Text/constants'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import { TextProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const TEXT_PROPS: Record<keyof TextProps, DocProp> = {
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  clampLines: {
    options: ['number'],
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  fontSize: {
    options: ['string'],
    description: 'Sets the fontSize value, bypassing typography.',
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's main color.",
  },
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
    options: ['HTML tag'],
    defaultValue: 'p',
    description: 'The HTML tag to be rendered as the container.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  textAlign: {
    options: CSS_TEXT_ALIGN,
    isResponsive: true,
    description: 'Text alignment within the component.',
    link: true,
  },
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
