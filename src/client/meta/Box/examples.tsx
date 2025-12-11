import { ComponentMeta } from 'client/definitions'
import { Box, BoxProps } from 'lib/components'

const BOX_EXAMPLES_META: ComponentMeta<BoxProps>['examples'] = [
  {
    jsx: <Box>Default box</Box>,
    description:
      'By default Box renders with ghost variant and no intent applied. It inherits its text color from the nearest parent that defines a CSS color property.',
  },
  {
    jsx: <Box intent="neutral">Neutral box</Box>,
    description: 'Neutral Box uses the global text color for its content.',
  },
  {
    jsx: (
      <Box variant="outline" color="gray" intent="inverse">
        Box is a block
      </Box>
    ),
    description: 'Box renders as a block element that stretches to full width by default.',
  },
  {
    jsx: (
      <Box variant="outline" color="gray" intent="inverse" padding="20px">
        Padded box
      </Box>
    ),
    description: 'Box with padding applied.',
  },
  {
    jsx: (
      <Box variant="outline" color="gray" intent="inverse" padding="20px" textAlign="center">
        Centered content
      </Box>
    ),
    description: 'Box with the content centered.',
  },
  {
    jsx: (
      <Box variant="outline" color="gray" intent="inverse" padding="20px" display="inline-block">
        Box as inline block
      </Box>
    ),
    description: "Box rendered as inline-block, so it's only as wide as its content.",
  },
  {
    jsx: (
      <Box variant="solid" color="gray" intent="primary" padding="20px" interactive>
        Interactive Box
      </Box>
    ),
    description: 'Box with interactive behavior.',
  },
  {
    jsx: (
      <Box variant="solid" color="gray" intent="primary" padding="20px" interactive hoveredByDefault>
        Hovered Box
      </Box>
    ),
    description: 'Interactive Box in a hovered visual state by default.',
  },
  {
    jsx: (
      <Box variant="solid" color="gray" intent="primary" padding="20px" interactive disabled>
        Disabled Box
      </Box>
    ),
    description: 'Interactive Box in disabled state.',
  },
]

export { BOX_EXAMPLES_META }
