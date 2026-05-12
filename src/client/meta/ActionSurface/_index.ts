import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceProps } from 'lib/components'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/controls/ActionSurface/definitions'

import { ACTION_SURFACE_PROPS_META } from './props'
import { ACTION_SURFACE_EXAMPLES_META } from './examples'

import { ACTION_SURFACE_HEADING_META } from './ActionSurfaceHeading/_index'
import { ACTION_SURFACE_DESCRIPTION_META } from './ActionSurfaceDescription/_index'

const ACTION_SURFACE_META: ComponentMeta<ActionSurfaceProps> = {
  overview: {
    bundle: 'core',
    title: '...',
    features: ['...'],
    composedOf: ['Box'],
    topLevelTags: ACTION_SURFACE_TAGS,
    slots: ['ActionSurface.Heading', 'ActionSurface.Description'],
  },
  props: ACTION_SURFACE_PROPS_META,
  examples: ACTION_SURFACE_EXAMPLES_META,
  changelog: {
    '0.10.0': ['released'],
  },
}

export default {
  ActionSurface: ACTION_SURFACE_META,
  ActionSurfaceHeading: ACTION_SURFACE_HEADING_META,
  ActionSurfaceDescription: ACTION_SURFACE_DESCRIPTION_META,
}
