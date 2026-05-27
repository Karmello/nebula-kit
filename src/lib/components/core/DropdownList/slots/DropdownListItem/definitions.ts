import { ActionSurfaceProps } from 'lib/components'
import { ActionSurfaceTag, DEFAULT_ACTION_SURFACE_TAG } from 'lib/components/core/ActionSurface/definitions'

export type DropdownListItemProps<T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG> = Pick<
  ActionSurfaceProps<T>,
  'children' | 'tag' | 'tagAttrs' | 'tagRef' | 'disabled'
>
