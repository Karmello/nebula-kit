import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceHeadingProps } from 'lib/components/core/controls/ActionSurface/slots/ActionSurfaceHeading'

import { ACTION_SURFACE_HEADING_PROPS_META } from './props'

const ACTION_SURFACE_HEADING_META: ComponentMeta<ActionSurfaceHeadingProps> = {
  overview: {
    bundle: 'core',
    name: 'ActionSurface.Heading',
    title: '...',
    guidelines: ['...'],
    composedOf: ['Text'],
    // topLevelTags: ['footer'],
  },
  props: ACTION_SURFACE_HEADING_PROPS_META,
}

export { ACTION_SURFACE_HEADING_META }
