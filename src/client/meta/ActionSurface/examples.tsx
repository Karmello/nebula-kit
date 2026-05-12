import { ComponentMeta } from 'client/definitions'
import { ActionSurface, type ActionSurfaceProps } from 'lib/components'

const ACTION_SURFACE_EXAMPLES_META: ComponentMeta<ActionSurfaceProps>['examples'] = [
  {
    description: 'Default.',
    jsx: <ActionSurface heading="Default action surface" />,
  },
  {
    description: 'With description.',
    jsx: <ActionSurface heading="Action surface" description="Description text" />,
  },
  {
    description: 'Disabled.',
    jsx: <ActionSurface heading="Action surface" description="Description text" disabled />,
  },
  {
    description: 'Loading.',
    jsx: <ActionSurface heading="Action surface" description="Description text" loading />,
  },
  {
    description: 'Full width.',
    jsx: <ActionSurface heading="Action surface" description="Description text" fullWidth />,
  },
]

export { ACTION_SURFACE_EXAMPLES_META }
