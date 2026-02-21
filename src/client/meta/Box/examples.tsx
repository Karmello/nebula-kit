import { ComponentMeta } from 'client/definitions'
import { Box, BoxProps } from 'lib/components'

const BOX_EXAMPLES_META: ComponentMeta<BoxProps>['examples'] = [
  {
    jsx: <Box>Default box</Box>,
    description:
      'By default Box is non-drawable. It does not paint any colors and serves only as a structural container for layout and composition.',
  },
  {
    jsx: (
      <Box drawable variant="outline" color="gray" intent="inverse">
        Box is a block
      </Box>
    ),
    description: 'Drawable Box renders as a block element that stretches to full width by default.',
  },
  {
    jsx: (
      <Box drawable variant="outline" color="gray" intent="inverse" padding="20px">
        Padded box
      </Box>
    ),
    description: 'Box with padding applied.',
  },
  {
    jsx: (
      <Box drawable variant="outline" color="gray" intent="inverse" padding="20px" textAlign="center">
        Centered content
      </Box>
    ),
    description: 'Box with the content centered.',
  },
  {
    jsx: (
      <Box drawable variant="outline" color="gray" intent="inverse" padding="20px" display="inline-block">
        Box as inline block
      </Box>
    ),
    description: "Box rendered as inline-block, so it's only as wide as its content.",
  },
  {
    jsx: (
      <Box drawable interactive variant="solid" color="gray" intent="primary" padding="20px">
        Interactive Box
      </Box>
    ),
    description: 'Box with interactive behavior.',
  },
  {
    jsx: (
      <Box
        drawable
        interactive
        defaultState="hover"
        variant="solid"
        color="gray"
        intent="primary"
        padding="20px"
      >
        Hovered Box
      </Box>
    ),
    description: 'Interactive Box in a hovered visual state by default.',
  },
  {
    jsx: (
      <Box
        drawable
        interactive
        defaultState="active"
        variant="solid"
        color="gray"
        intent="primary"
        padding="20px"
      >
        Active Box
      </Box>
    ),
    description: 'Interactive Box in an active visual state by default.',
  },
  {
    jsx: (
      <Box drawable interactive disabled variant="solid" color="gray" intent="primary" padding="20px">
        Disabled Box
      </Box>
    ),
    description: 'Interactive Box in disabled state.',
  },
]

export { BOX_EXAMPLES_META }
