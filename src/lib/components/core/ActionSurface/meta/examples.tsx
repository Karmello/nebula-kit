import { ComponentMeta } from 'client/definitions'

import { Text } from '../../Text/text'
import { ActionSurface } from '../action-surface'
import { type ActionSurfaceProps } from '../definitions'

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
