import { ComponentMeta } from 'client/definitions'
import { ActionSurface, type ActionSurfaceProps } from 'lib/components'

const ACTION_SURFACE_EXAMPLES_META: ComponentMeta<ActionSurfaceProps>['examples'] = [
  {
    jsx: (
      <ActionSurface>
        <ActionSurface.Heading>heading</ActionSurface.Heading>
        <ActionSurface.Description>description</ActionSurface.Description>
      </ActionSurface>
    ),
  },
]

export { ACTION_SURFACE_EXAMPLES_META }
