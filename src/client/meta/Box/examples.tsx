import { ComponentMeta } from 'client/definitions'
import { Box } from 'lib/components'
import { BoxProps } from 'lib/components/base/Box/definitions'

const BOX_EXAMPLES_META: ComponentMeta<BoxProps>['examples'] = [
  {
    jsx: <Box>Default box</Box>,
    description:
      'By default Box renders with no intent applied and inherits its text color from the nearest parent that defines a CSS color property.',
  },
  {
    jsx: <Box intent="neutral">Neutral box</Box>,
    description: 'Neutral Box uses the global text color for its content.',
  },
  {
    jsx: (
      <Box variant="outline" intent="primary">
        Box is a block
      </Box>
    ),
    description: 'Box renders as a block element that stretches to full width by default.',
  },
  {
    jsx: (
      <Box variant="outline" intent="primary" padding={10}>
        Padded box
      </Box>
    ),
    description: 'Box with padding applied.',
  },
  {
    jsx: (
      <Box variant="outline" intent="primary" padding={10} textAlign="center">
        Centered content
      </Box>
    ),
    description: 'Box with the content centered.',
  },
  {
    jsx: (
      <Box variant="outline" intent="primary" padding={10} display="inline-block">
        Box as inline
      </Box>
    ),
    description: "Box rendered as inline-block, so it's only as wide as its content.",
  },
  {
    jsx: (
      <Box variant="solid" intent="secondary" padding={10} interactive>
        Interactive Box
      </Box>
    ),
    description: 'Box with interactive behavior.',
  },
]

export { BOX_EXAMPLES_META }
