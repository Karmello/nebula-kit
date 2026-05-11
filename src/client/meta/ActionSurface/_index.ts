import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceProps } from 'lib/components'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/controls/ActionSurface'

import { ACTION_SURFACE_PROPS_META } from './props'

const ACTION_SURFACE_META: ComponentMeta<ActionSurfaceProps> = {
  overview: {
    bundle: 'core',
    title: '...',
    features: ['...'],
    composedOf: ['Box'],
    topLevelTags: ACTION_SURFACE_TAGS,
  },
  props: ACTION_SURFACE_PROPS_META,
  // examples: BUTTON_EXAMPLES_META,
  changelog: {
    '0.10.0': ['released'],
  },
}

export default {
  ActionSurface: ACTION_SURFACE_META,
}
