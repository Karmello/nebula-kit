import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceProps } from 'lib/components'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/controls/ActionSurface/definitions'

import { ACTION_SURFACE_PROPS_META } from './props'
import { ACTION_SURFACE_EXAMPLES_META } from './examples'

const ACTION_SURFACE_META: ComponentMeta<ActionSurfaceProps> = {
  overview: {
    bundle: 'core',
    title: '...',
    features: ['...'],
    composedOf: ['Box', 'Text', 'Loader'],
    topLevelTags: ACTION_SURFACE_TAGS,
  },
  props: ACTION_SURFACE_PROPS_META,
  examples: ACTION_SURFACE_EXAMPLES_META,
  changelog: {
    '0.10.0': ['released'],
  },
}

export default {
  ActionSurface: ACTION_SURFACE_META,
}
