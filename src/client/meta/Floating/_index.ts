import { FloatingProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FLOATING_PROPS_META } from './props'
import { FLOATING_EXAMPLES_META } from './examples'

const FLOATING_META: ComponentMeta<FloatingProps> = {
  overview: {
    bundle: 'pro',
    title: 'Headless positioning utility for overlays.',
    description:
      'Floating is a headless positioning utility for overlay content. It does not render or style anything on its own. Instead, it observes an anchor element and the surrounding viewport, then resolves a placement and the available space around that anchor. These resolved values are exposed through a callback, so you stay fully in control of how the overlay is rendered and styled.',
    features: [
      "When the overlay's block size is provided, Floating can reason about fit and visibility. This allows it to make more precise decisions, such as flipping sides only when it increases the visible content and clamping the overlay size when space is limited. This mode is ideal for dropdowns, menus and other scrollable overlays.",
      'When the overlay size is unknown, Floating resolves placement based purely on available space and configurable bias. Instead of trying to fit content, it favors stability and predictability, flipping only when the opposite side offers significantly more room. This mode is well suited for tooltips and lightweight contextual overlays.',
      'In both modes, Floating remains purely declarative - it reports placement and available space and leaves all rendering, sizing and styling decisions to you.',
    ],
  },
  props: FLOATING_PROPS_META,
  examples: FLOATING_EXAMPLES_META,
  changelog: {
    '0.3.0': ['Released'],
  },
}

export default {
  Floating: FLOATING_META,
}
