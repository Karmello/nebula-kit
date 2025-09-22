import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

import { HYDRATION_GATE_PROPS_META } from './props'
import { HYDRATION_GATE_EXAMPLES_META } from './examples'

const HYDRATION_GATE_META: ComponentMeta<HydrationGateProps> = {
  overview: {
    description:
      'A top-level utility component for SSR setups preventing flashes of unstyled or mismatched content.',
    role: [
      'acts as a wrapper that delays visibility of the app until hydration is complete',
      'provides an escape hatch for SSR users to prevent first-paint flicker',
    ],
    behavior: [
      'children are rendered immediately so their effects can run, but remain hidden until hydration completes',
    ],
    examplesOfUse: ['building an app with SSR where initial flicker of unstyled components is unacceptable'],
  },
  props: HYDRATION_GATE_PROPS_META,
  examples: HYDRATION_GATE_EXAMPLES_META,
}

export default {
  HydrationGate: HYDRATION_GATE_META,
}
