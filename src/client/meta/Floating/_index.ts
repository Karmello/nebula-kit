import { FloatingProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FLOATING_PROPS_META } from './props'
import { FLOATING_EXAMPLES_META } from './examples'

const FLOATING_META: ComponentMeta<FloatingProps> = {
  overview: {
    bundle: 'pro',
    title: 'Headless positioning engine for overlay components.',
    description:
      'Floating is a headless positioning utility for overlay content. It does not render or style anything on its own. Instead, it observes an anchor element and the surrounding viewport, then resolves a placement for your overlay. The resolved placement (and for fit modes the resolved visible block size) is reported through onResolve, so you stay fully in control of rendering and styling. Positioning behavior is configured through mode, which combines the strategy (project or fit) with an axis constraint (x, y, or both).',
    features: [
      "Mode selects both the positioning strategy and which sides are eligible for resolution: project-x, project-y, project-both, fit-x, fit-y. This removes ambiguity and makes the resolver's behavior predictable.",
      'Fit-* modes require floatingBlockSize and resolve both placement and a final blockSize. They flip only when the opposite side is strictly better and clamp the resolved blockSize to the visible space when nothing fully fits - ideal for menus, dropdowns and scrollable overlays.',
      'Project-* modes require minInlineSize and maxInlineSize and resolve placement using an inline-size envelope rather than a known overlay height. The resolver chooses the first acceptable side (with smart fallbacks) and uses a stable auto-alignment, making it a strong default for tooltips and lightweight contextual overlays.',
      'Floating only performs placement calculations (including offset and viewportPadding) and reports the result. It never creates DOM and never applies styles - you decide how the overlay is rendered, sized and themed.',
    ],
  },
  props: FLOATING_PROPS_META,
  examples: FLOATING_EXAMPLES_META,
  changelog: {
    '0.4.0': [
      'refactored into two distinct modes with a complete rewrite of the underlying algorithms',
      'updated public API',
    ],
    '0.3.0': ['released'],
  },
}

export default {
  Floating: FLOATING_META,
}
