import { ComponentMeta } from 'client/definitions'
import { Text } from 'lib/components'
import { TextOwnProps } from 'lib/components/base/Text/definitions'

const TEXT_EXAMPLES_META: ComponentMeta<TextOwnProps>['examples'] = [
  {
    jsx: <Text>Paragraph</Text>,
    description: 'Uses body typography and renders a <p> tag by default.',
  },
  {
    jsx: <Text bold>Bold paragraph</Text>,
    description: 'Renders bold paragraph.',
  },
  {
    jsx: <Text italic>Italic paragraph</Text>,
    description: 'Renders text in italic style.',
  },
  {
    jsx: <Text intent="primary">Primary text intent</Text>,
    description: 'Applies the primary intent color.',
  },
  {
    jsx: <Text iconName="search">Paragraph with an icon</Text>,
    description: 'Supports inline icons aligned with text.',
  },
  {
    jsx: <Text typography="h5">Heading 5</Text>,
    description: 'The typography prop sets the HTML tag, font size, and line height automatically.',
  },
  {
    jsx: (
      <Text tag="a" intent="primary" tagAttrs={{ href: 'https://google.com', target: '_blank' }}>
        Link
      </Text>
    ),
    description:
      'A semantic anchor rendered through Text, keeping the underline and styled with the primary intent color for emphasis.',
  },
]

export default TEXT_EXAMPLES_META
