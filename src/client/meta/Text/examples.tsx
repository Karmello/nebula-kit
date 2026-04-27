import { ComponentMeta } from 'client/definitions'
import { Text, TextProps } from 'lib/components'

const TEXT_EXAMPLES_META: ComponentMeta<TextProps>['examples'] = [
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
    jsx: <Text iconName="search">Paragraph with an icon</Text>,
    description: 'Text supports inline icons.',
  },
  {
    jsx: (
      <Text textAlign="center">
        This is an intentionally long line of text that stretches across the container so you can clearly see how the textAlign
        prop changes the alignment inside the element.
      </Text>
    ),
    description: 'Centered text.',
  },
  {
    jsx: (
      <Text truncate>
        This is a long piece of text that will not fit into a single line, so it will be truncated with an ellipsis at the end.
      </Text>
    ),
    description: 'Truncated text.',
  },
  {
    jsx: (
      <Text clampLines={2}>
        This text demonstrates the clampLines prop in action. It keeps flowing with extra words so that it can wrap naturally and
        once it reaches the set limit of three lines, the remaining content will be truncated with an ellipsis.
      </Text>
    ),
    description: 'Text clamped to two lines.',
  },
  {
    jsx: (
      <Text noWrap>This is a very long line of text that will not wrap onto the next line when the noWrap prop is enabled.</Text>
    ),
    description: 'Text without wrapping.',
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
]

export { TEXT_EXAMPLES_META }
