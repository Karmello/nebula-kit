import { Loader } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Box } from '../../Box'

export const LOADER_EXAMPLES: Example[] = [
  {
    description: 'Default loader.',
    jsx: <Loader />,
  },
  {
    description: 'Custom loader.',
    jsx: <Loader size="48px" color="blue" />,
  },
  {
    description: 'Absolutely centered Loader rendered inside a parent container with position set to relative.',
    jsx: (
      <Box position="relative">
        <Loader centered />
      </Box>
    ),
  },
]
