import { ComponentMeta } from 'client/definitions'
import { Box, WithIcon, WithIconProps } from 'lib/components'

const WITH_ICON_EXAMPLES_META: ComponentMeta<WithIconProps>['examples'] = [
  {
    description: 'Search icon aligned with the provided text content.',
    jsx: (
      <WithIcon iconName="search">
        <Box tag="span">Text content</Box>
      </WithIcon>
    ),
  },
  {
    description: 'Icon on the right.',
    jsx: (
      <WithIcon iconName="search" iconPlacement="right">
        <Box tag="span">Text content</Box>
      </WithIcon>
    ),
  },
  {
    description: 'Icon aligned to the right edge of the container.',
    jsx: (
      <WithIcon iconName="search" iconPlacement="right" justifyContent="space-between">
        <Box tag="span">Text content</Box>
      </WithIcon>
    ),
  },
]

export { WITH_ICON_EXAMPLES_META }
