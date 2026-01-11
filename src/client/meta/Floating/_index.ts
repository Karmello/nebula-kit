import { FloatingProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FLOATING_PROPS_META } from './props'
import { FLOATING_EXAMPLES_META } from './examples'

const FLOATING_META: ComponentMeta<FloatingProps> = {
  overview: {
    bundle: 'pro',
    title: 'Headless positioning utility for overlays.',
    description: [
      'resolves the final placement of floating content relative to an anchor element, commonly used with Portal-based rendering',
      'applies viewport constraints to prevent overlays from overflowing the screen',
      'computes available space and exposes layout limits without enforcing size',
      'supports manual and automatic placement while keeping Portal as the execution layer',
      'operates headlessly and renders no DOM elements of its own',
      'resolves placement in response to environment changes such as mounting, scrolling or resizing',
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
