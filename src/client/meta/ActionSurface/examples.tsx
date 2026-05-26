import { ComponentMeta } from 'client/definitions'
import { ActionSurface, ActionSurfaceProps, Text } from 'lib/components'

const ACTION_SURFACE_EXAMPLES_META: ComponentMeta<ActionSurfaceProps>['examples'] = [
  {
    description: 'Custom action area.',
    jsx: (
      <ActionSurface variant="solid" intent="primary" padding="md">
        <Text>Clickable surface</Text>
      </ActionSurface>
    ),
  },
]

export { ACTION_SURFACE_EXAMPLES_META }
