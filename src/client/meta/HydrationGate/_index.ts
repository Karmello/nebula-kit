import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

import { HYDRATION_GATE_PROPS_META } from './props'
import { HYDRATION_GATE_EXAMPLES_META } from './examples'

const HYDRATION_GATE_META: ComponentMeta<HydrationGateProps> = {
  overview: {
    bundle: 'core',
    title:
      'Top-level utility component for SSR setups that prevents flashes of unstyled or mismatched content.',
    description: [
      'provides an escape hatch for SSR users to avoid first-paint flicker',
      'acts as a wrapper that delays app visibility until hydration is complete',
      'renders children immediately so their effects can run, but keeps them hidden until hydration finishes',
      'useful when building an SSR app where initial flicker of unstyled components is unacceptable',
    ],
  },
  props: HYDRATION_GATE_PROPS_META,
  examples: HYDRATION_GATE_EXAMPLES_META,
}

export default {
  HydrationGate: HYDRATION_GATE_META,
}
