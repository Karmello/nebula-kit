import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceDescriptionProps } from 'lib/components/core/controls/ActionSurface/slots/ActionSurfaceDescription'

import { ACTION_SURFACE_DESCRIPTION_PROPS_META } from './props'

const ACTION_SURFACE_DESCRIPTION_META: ComponentMeta<ActionSurfaceDescriptionProps> = {
  overview: {
    bundle: 'core',
    name: 'ActionSurface.Description',
    title: '...',
    guidelines: ['...'],
    composedOf: ['Text'],
    // topLevelTags: ['footer'],
  },
  props: ACTION_SURFACE_DESCRIPTION_PROPS_META,
}

export { ACTION_SURFACE_DESCRIPTION_META }
