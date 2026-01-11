import { FloatingProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FLOATING_PROPS_META } from './props'
import { FLOATING_EXAMPLES_META } from './examples'

const FLOATING_META: ComponentMeta<FloatingProps> = {
  overview: {
    bundle: 'pro',
    title: 'Headless positioning utility for overlays.',
    description: [
      'applies viewport constraints to prevent overlays from overflowing the screen',
      'resolves the final placement of floating content relative to an anchor element',
      'resolves placement in response to environment changes such as mounting, scrolling or resizing',
      'operates headlessly and renders no DOM elements of its own',
      'computes available space and exposes layout limits without enforcing size',
      'does not apply visual positioning or movement to rendered content',
      'does not change, enforce or modify the rendered size of floating content',
      'commonly used with Portal-based rendering',
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
