import { TooltipProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { TOOLTIP_PROPS_META } from './props'
import { TOOLTIP_EXAMPLES_META } from './examples'

const TOOLTIP_META: ComponentMeta<TooltipProps> = {
  overview: {
    bundle: 'pro',
    title: 'Non-interactive, overlaid hint for displaying short, contextual text.',
    features: [
      'displays short, non-interactive text in an overlaid surface',
      'supports hover and click interaction modes',
      'click mode supports outside click, Escape dismissal and applies pointer cursor automatically',
      'positions itself relative to the trigger with automatic collision handling',
    ],
    composedOf: ['Box', 'Floating', 'Portal', 'Measure'],
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
