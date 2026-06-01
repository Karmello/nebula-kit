import { ComponentMeta } from 'client/definitions'

import { Box } from '../../Box'
import { Loader } from '../../Loader'
import { type LoaderProps } from '../definitions'

const LOADER_EXAMPLES_META: ComponentMeta<LoaderProps>['examples'] = [
  {
    description: 'Default loader.',
    jsx: <Loader />,
  },
  {
    description: 'Custom loader.',
    jsx: <Loader size="lg" color="blue" />,
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

export { LOADER_EXAMPLES_META }
