import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { DEFAULT_TEXT_TYPOGRAPHY, TEXT_SPACE, TEXT_TYPOGRAPHY, TEXT_WORD_BREAK, type TextProps } from './definitions'
import { Text } from './text'
import BOX_META from '../Box/meta'
import { TEXT_TAGS } from 'lib/constants'

export default {
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
      topLevelTags: TEXT_TAGS,
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
        description: 'Limits text to a set number of lines and truncates the rest with an ellipsis.',
      },
      color: BOX_META.Box.props.color,
      fontSize: {
        options: [DOCS_CSS_LABEL],
        description: 'Sets the fontSize value, bypassing typography.',
      },
      intent: BOX_META.Box.props.intent,
      italic: {
        options: ['boolean'],
        description: 'Toggles italic styling.',
      },
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
    examples: [
      {
        jsx: <Text>Paragraph</Text>,
        description: 'Text renders as <p> tag by default.',
      },
      {
        jsx: <Text bold>Bold paragraph</Text>,
        description: 'Text can be bold.',
      },
      {
        jsx: <Text italic>Italic paragraph</Text>,
        description: 'Text can be italic.',
      },
      {
        jsx: <Text underline>Underlined paragraph</Text>,
        description: 'Text can be underlined.',
      },
      {
        jsx: (
          <Text color="blue" intent="primary">
            Custom color paragraph
          </Text>
        ),
        description: 'Text with custom color applied.',
      },
      {
        jsx: <Text typography="h5">Heading 5</Text>,
        description: 'Typography prop sets HTML tag, font size and line height automatically.',
      },
      {
        jsx: (
          <Text textAlign="center">
            This is an intentionally long line of text that stretches across the container so you can clearly see how the
            textAlign prop changes the alignment inside the element.
          </Text>
        ),
        description: 'Centered text.',
      },
      {
        jsx: (
          <Text truncate>
            This is a long piece of text that will not fit into a single line, so it will be truncated with an ellipsis at the
            end.
          </Text>
        ),
        description: 'Truncated text.',
      },
      {
        jsx: (
          <Text clampLines={2}>
            This text demonstrates the clampLines prop in action. It keeps flowing with extra words so that it can wrap naturally
            and once it reaches the set limit of three lines, the remaining content will be truncated with an ellipsis.
          </Text>
        ),
        description: 'Text clamped to two lines.',
      },
      {
        jsx: (
          <Text noWrap>
            This is a very long line of text that will not wrap onto the next line when the noWrap prop is enabled.
          </Text>
        ),
        description: 'Text without wrapping.',
      },
      {
        jsx: (
          <Text wordBreak="break-word">
            This text contains a very long unbroken value like
            user-generated-content-without-natural-spaces-that-would-normally-overflow, so wordBreak allows it to wrap safely
            inside the container.
          </Text>
        ),
        description: 'Text with controlled word breaking.',
      },
      {
        jsx: (
          <Text>
            This paragraph combines different text styles like
            <Text tag="span" bold space="both">
              bold emphasis
            </Text>
            and
            <Text tag="span" italic space="both">
              italic highlights
            </Text>
            within the same line to demonstrate how inline formatting behaves in longer text blocks.
          </Text>
        ),
        description: 'Inline formatting.',
      },
    ],
    changelog: {
      '0.10.0': ['removed `scale` prop', 'added `wordBreak` prop', 'removed `WithIcon` dependency'],
      '0.9.0': ['added `fontSize` and `lineHeight` props for overriding typography-derived values directly'],
      '0.7.0': ['fixed text link display behavior inside table cells'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<TextProps>,
}
