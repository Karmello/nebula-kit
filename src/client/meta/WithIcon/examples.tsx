import { ComponentMeta } from 'client/definitions'
import { Box, WithIcon } from 'lib/components'
import { WithIconProps } from 'lib/components/core/layout/WithIcon/definitions'

const WITH_ICON_EXAMPLES_META: ComponentMeta<WithIconProps>['examples'] = [
  {
    description: 'Search icon aligned with the provided text content.',
    jsx: (
      <WithIcon name="search" intent="neutral">
        <Box tag="span" intent="neutral">
          Text content
        </Box>
      </WithIcon>
    ),
  },
  {
    description: 'Icon on the right.',
    jsx: (
      <WithIcon name="search" intent="neutral" position="right">
        <Box tag="span" intent="neutral">
          Text content
        </Box>
      </WithIcon>
    ),
  },
  {
    description: 'Icon aligned to the right edge of the container.',
    jsx: (
      <WithIcon name="search" intent="neutral" position="right" justifyContent="space-between">
        <Box tag="span" intent="neutral">
          Text content
        </Box>
      </WithIcon>
    ),
  },
]

export { WITH_ICON_EXAMPLES_META }
