import { Box, SurfaceGroup, Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const SURFACE_GROUP_EXAMPLES: DocExample[] = [
  {
    description: 'Segmented action group of three joined, interactive items.',
    jsx: (
      <SurfaceGroup display="flex">
        <Box
          tag="button"
          interactive
          ripple
          cursor="pointer"
          variant="solid"
          intent="primary"
          padding="12px"
        >
          <Text>One</Text>
        </Box>
        <Box
          tag="button"
          interactive
          ripple
          cursor="pointer"
          variant="solid"
          intent="primary"
          padding="12px"
        >
          <Text>Two</Text>
        </Box>
        <Box
          tag="button"
          interactive
          ripple
          cursor="pointer"
          variant="solid"
          intent="primary"
          padding="12px"
        >
          <Text>Three</Text>
        </Box>
      </SurfaceGroup>
    ),
  },
  {
    description: '...',
    jsx: (
      <SurfaceGroup drawable variant="outline" intent="primary" brand="blue" display="flex">
        <Box drawable variant="solid" intent="tertiary">
          Content 1
        </Box>
        <Box drawable variant="solid" intent="tertiary">
          Content 2
        </Box>
      </SurfaceGroup>
    ),
  },
]
