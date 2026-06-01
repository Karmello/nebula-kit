import { TooltipProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { TOOLTIP_PROPS_META } from './props'
import { TOOLTIP_EXAMPLES_META } from './examples'

const TOOLTIP_META: ComponentMeta<TooltipProps> = {
  overview: {
    bundle: 'pro',
    title: 'Non-interactive overlay for displaying short, contextual information.',
    description:
      'Tooltip displays supplementary information related to another element. It is intended for brief hints, explanations and labels that appear on demand without disrupting the surrounding interface.',
    features: [
      'supports hover and click activation modes',
      'positions itself automatically relative to its trigger',
      'prevents viewport overflow through collision detection',
      'supports automatic dismissal via outside click and Escape key',
      'configurable placement and offset behavior',
    ],
    composedOf: ['Box', 'Text'],
  },
  props: TOOLTIP_PROPS_META,
  examples: TOOLTIP_EXAMPLES_META,
  changelog: {
    '0.9.0': ['added configurable hover and click interaction modes with improved dismissal behavior'],
    '0.3.0': ['released'],
  },
}

export default {
  Tooltip: TOOLTIP_META,
}
