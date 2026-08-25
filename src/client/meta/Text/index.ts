import {
  DEFAULT_TEXT_TYPOGRAPHY,
  TEXT_SPACE,
  TEXT_TAGS,
  TEXT_TYPOGRAPHY,
  TEXT_WORD_BREAK,
} from 'lib/components/core/Text/constants'
import { TextProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TEXT_CHANGELOG } from './changelog'
import { TEXT_EXAMPLES } from './examples'

export const TEXT_META = {
  Text: {
    overview: {
      bundle: 'core',
      title:
        'Foundational component for displaying and styling textual content that ensures consistent typography across the system.',
      features: [
        'renders semantic text elements with consistent typography',
        'provides common text styling and formatting options',
      ],
      composedOf: ['Box'],
      exposedTags: TEXT_TAGS,
    },
    props: {
      bold: {
        options: ['boolean'],
        description: 'Toggles bold styling.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      clampLines: {
        options: ['number'],
        description:
          'Limits text to a set number of lines and truncates the rest with an ellipsis.',
      },
      color: BOX_META.Box.props.color,
      fontSize: {
        options: ['string'],
        description: 'Sets the fontSize value, bypassing typography.',
      },
      intent: BOX_META.Box.props.intent,
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
        ...BOX_META.Box.props.tag,
        defaultValue: 'p',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      textAlign: BOX_META.Box.props.textAlign,
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
    },
    examples: TEXT_EXAMPLES,
    changelog: TEXT_CHANGELOG,
  } satisfies ComponentMeta<TextProps>,
}
