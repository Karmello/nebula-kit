import { ComponentMeta } from 'client/definitions'
import { Box, WithIcon } from 'lib/components'
import { WithIconProps } from 'lib/components/elements/WithIcon/definitions'

const WITH_ICON_EXAMPLES_META: ComponentMeta<WithIconProps>['examples'] = [
  {
    description: 'Renders the search icon aligned with the provided text content.',
    jsx: (
      <WithIcon name="search" intent="neutral">
        <Box intent="neutral">Text content</Box>
      </WithIcon>
    ),
  },
  {
    description: 'Renders the icon aligned to the right',
    jsx: (
      <WithIcon name="search" intent="neutral" position="right">
        <Box intent="neutral">Text content</Box>
      </WithIcon>
    ),
  },
]

export { WITH_ICON_EXAMPLES_META }
