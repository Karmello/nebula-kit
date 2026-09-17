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
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemTag: {
    options: ['HTML tag'],
    defaultValue: 'p',
    description: 'The HTML tag to be rendered as the container.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  // surface
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  // typography
  typography: {
    options: TEXT_TYPOGRAPHY,
    defaultValue: DEFAULT_TEXT_TYPOGRAPHY,
    description: 'Applies a predefined typography style from the design system.',
    group: 'typography',
  },
  fontSize: {
    options: ['string'],
    description: 'Sets the fontSize value, bypassing typography.',
    group: 'typography',
  },
  lineHeight: {
    options: ['string'],
    description: 'Sets the lineHeight value, bypassing typography.',
    group: 'typography',
  },
  // formatting
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
    group: 'formatting',
  },
  italic: {
    options: ['boolean'],
    description: 'Toggles italic styling.',
    group: 'formatting',
  },
  underline: {
    options: ['boolean'],
    description: 'Toggles underlined styling.',
    group: 'formatting',
  },
  // overflow
  noWrap: {
    options: ['boolean'],
    description: 'Prevents the text from wrapping onto multiple lines.',
    group: 'overflow',
  },
  truncate: {
    options: ['boolean'],
    description: 'Shortens overflowing text to a single line with an ellipsis.',
    group: 'overflow',
  },
  clampLines: {
    options: ['number'],
    description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
    group: 'overflow',
  },
  wordBreak: {
    options: TEXT_WORD_BREAK,
    description: 'Controls how words break and wrap when text overflows its container.',
    group: 'overflow',
  },
  // layout
  textAlign: {
    options: CSS_TEXT_ALIGN,
    isResponsive: true,
    description: 'Text alignment within the component.',
    link: true,
    group: 'layout',
  },
  space: {
    options: TEXT_SPACE,
    description:
      'Controls the insertion of non-breaking spaces before and/or after the text content. Useful when composing multiple inline Text elements.',
    group: 'layout',
  },
}
