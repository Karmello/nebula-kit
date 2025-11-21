import { ComponentMeta } from 'client/definitions'
import { Box, Loader, LoaderProps } from 'lib/components'

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
    description:
      'Absolutely centered Loader rendered inside a parent container with position set to relative.',
    jsx: (
      <Box position="relative">
        <Loader centered />
      </Box>
    ),
  },
]

export { LOADER_EXAMPLES_META }
