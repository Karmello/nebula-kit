import { ComponentMeta } from 'client/definitions'
import { ActionSurface, type ActionSurfaceProps } from 'lib/components'

const ACTION_SURFACE_EXAMPLES_META: ComponentMeta<ActionSurfaceProps>['examples'] = [
  {
    description: 'Default.',
    jsx: <ActionSurface heading="Heading text" />,
  },
  {
    description: 'With description.',
    jsx: <ActionSurface heading="Heading text" description="Description text" />,
  },
  {
    description: 'Disabled.',
    jsx: <ActionSurface heading="Heading text" description="Description text" disabled />,
  },
  {
    description: 'Loading.',
    jsx: <ActionSurface heading="Heading texte" description="Description text" loading />,
  },
  {
    description: 'Full width.',
    jsx: <ActionSurface heading="Heading text" description="Description text" fullWidth />,
  },
]

export { ACTION_SURFACE_EXAMPLES_META }
