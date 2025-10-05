import { ComponentMeta } from 'client/definitions'
import { Text } from 'lib/components'
import { TextProps } from 'lib/components/base/Text/definitions'

const TEXT_EXAMPLES_META: ComponentMeta<TextProps>['examples'] = [
  {
    jsx: <Text intent="neutral">Paragraph</Text>,
    description: 'Text renders as <p> tag by default.',
  },
  {
    jsx: (
      <Text intent="neutral" bold>
        Bold paragraph
      </Text>
    ),
    description: 'Text can be bold.',
  },
  {
    jsx: (
      <Text intent="neutral" italic>
        Italic paragraph
      </Text>
    ),
    description: 'Text can be italic.',
  },
  {
    jsx: <Text intent="primary">Primary text intent</Text>,
    description: 'Text with primary intent color applied.',
  },
  {
    jsx: (
      <Text intent="primary" typography="h5">
        Heading 5
      </Text>
    ),
    description: 'Typography prop sets HTML tag, font size, and line height automatically.',
  },
  {
    jsx: (
      <Text intent="primary" iconName="search">
        Paragraph with an icon
      </Text>
    ),
    description: 'Text supports inline icons.',
  },
  {
    jsx: (
      <Text tag="a" intent="primary" tagAttrs={{ href: 'https://google.com', target: '_blank' }}>
        Link
      </Text>
    ),
    description: 'Text as link.',
  },
  {
    jsx: (
      <Text intent="neutral" textAlign="center">
        This is an intentionally long line of text that stretches across the container so you can clearly see
        how the textAlign prop changes the alignment inside the element.
      </Text>
    ),
    description: 'Centered text.',
  },
  {
    jsx: (
      <Text intent="neutral" truncate>
        This is a long piece of text that will not fit into a single line, so it will be truncated with an
        ellipsis at the end.
      </Text>
    ),
    description: 'Truncated text.',
  },
  {
    jsx: (
      <Text intent="neutral" clampLines={2}>
        This text demonstrates the clampLines prop in action. It keeps flowing with extra words so that it can
        wrap naturally, and once it reaches the set limit of three lines, the remaining content will be
        truncated with an ellipsis.
      </Text>
    ),
    description: 'Text clamped to two lines.',
  },
  {
    jsx: (
      <Text intent="neutral" noWrap>
        This is a very long line of text that will not wrap onto the next line when the noWrap prop is
        enabled.
      </Text>
    ),
    description: 'Text without wrapping.',
  },
]

export { TEXT_EXAMPLES_META }
