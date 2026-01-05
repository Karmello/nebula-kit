import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

import { HYDRATION_GATE_PROPS_META } from './props'
import { HYDRATION_GATE_EXAMPLES_META } from './examples'

const HYDRATION_GATE_META: ComponentMeta<HydrationGateProps> = {
  overview: {
    bundle: 'core',
    title: 'Top-level SSR utility that prevents flashes of unstyled or mismatched content during hydration.',
    description: [
      'provides an escape hatch for SSR setups where first-paint flicker is unacceptable',
      'renders children immediately so effects can run but keeps them visually hidden until hydration completes',
      'delays application visibility until the client is fully hydrated',
      'useful when theme, brand or responsive state must be resolved before first paint',
    ],
  },
  props: HYDRATION_GATE_PROPS_META,
  examples: HYDRATION_GATE_EXAMPLES_META,
  changelog: {
    '0.2.1': ['Released'],
  },
}

export default {
  HydrationGate: HYDRATION_GATE_META,
}
