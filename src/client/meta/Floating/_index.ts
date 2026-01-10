import { FloatingProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FLOATING_PROPS_META } from './props'
import { FLOATING_EXAMPLES_META } from './examples'

const FLOATING_META: ComponentMeta<FloatingProps> = {
  overview: {
    bundle: 'pro',
    title: 'Headless positioning utility for overlays.',
    description: [
      'resolves the final placement of portalled content relative to an anchor element',
      'applies viewport constraints to prevent overlays from overflowing the screen',
      'computes available space and exposes layout limits (such as maxHeight) without enforcing size',
      'supports manual and automatic placement while keeping Portal as the execution layer',
      'operates headlessly and renders no DOM elements of its own',
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
