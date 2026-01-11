import { TooltipProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { TOOLTIP_PROPS_META } from './props'
import { TOOLTIP_EXAMPLES_META } from './examples'

const TOOLTIP_META: ComponentMeta<TooltipProps> = {
  overview: {
    bundle: 'pro',
    title: '...',
    description: ['...'],
  },
  props: TOOLTIP_PROPS_META,
  examples: TOOLTIP_EXAMPLES_META,
  changelog: {
    '0.3.0': ['Released'],
  },
}

export default {
  Tooltip: TOOLTIP_META,
}
