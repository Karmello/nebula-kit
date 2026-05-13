import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceProps } from 'lib/components'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/controls/ActionSurface/definitions'

import { ACTION_SURFACE_PROPS_META } from './props'
import { ACTION_SURFACE_EXAMPLES_META } from './examples'

const ACTION_SURFACE_META: ComponentMeta<ActionSurfaceProps> = {
  overview: {
    bundle: 'core',
    title: 'Composable action surface for interactive rows, buttons and navigation items.',
    description:
      'ActionSurface provides a shared foundation for interactive surfaces that combine a heading, optional description and optional icon. It is designed for reusable action patterns such as buttons, dropdown items and navigation entries, keeping their structure, alignment and visual states consistent.',
    features: [
      'supports leading and trailing icon placement',
      'automatically handles trailing icon edge alignment',
      'supports loading, selected and disabled interaction states',
      'supports button, anchor and neutral container semantics',
    ],
    composedOf: ['Box', 'Text', 'Loader', 'Flex'],
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
