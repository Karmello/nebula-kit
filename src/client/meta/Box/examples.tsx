import { ComponentMeta } from 'client/definitions'
import { Box } from 'lib/components'
import { BoxOwnProps } from 'lib/components/base/Box/definitions'

export default [
  {
    jsx: <Box>Default box</Box>,
    description: 'A plain default Box with ghost variant and neutral intent.',
  },
  {
    jsx: (
      <Box variant="outline" intent="primary">
        Box is a block
      </Box>
    ),
    description:
      'A Box in outline variant with primary intent, rendering as a block that stretches full width by default.',
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
    description:
      "A Box rendered as inline-block, so it's only as wide as its content instead of stretching full width.",
  },
  {
    jsx: (
      <Box variant="solid" intent="secondary" padding={10} interactive>
        Interactive Box
      </Box>
    ),
    description: 'An example of a Box component with a solid secondary style, and interactive behavior.',
  },
] as ComponentMeta<BoxOwnProps>['examples']
