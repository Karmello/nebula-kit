import { ComponentMeta } from 'client/definitions'
import { ActionSurface, type ActionSurfaceProps } from 'lib/components'

const ACTION_SURFACE_EXAMPLES_META: ComponentMeta<ActionSurfaceProps>['examples'] = [
  {
    jsx: (
      <ActionSurface inlineSize="400px" blockSize="250px">
        <ActionSurface.Heading>Heading text</ActionSurface.Heading>
        <ActionSurface.Description>Description text</ActionSurface.Description>
      </ActionSurface>
    ),
  },
]

export { ACTION_SURFACE_EXAMPLES_META }
