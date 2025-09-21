import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

import props from './props'
import examples from './examples'

const HYDRATION_GATE_META: ComponentMeta<HydrationGateProps> = {
  overview: {
    description:
      'A top-level utility component for SSR setups. It prevents flashes of unstyled or mismatched content by keeping the application hidden until the client has hydrated.',
    role: [
      'provides an escape hatch for SSR users to prevent first-paint flicker',
      'acts as a wrapper that delays visibility of the app until hydration is complete',
    ],
    behavior: [
      'children are rendered immediately so their effects can run, but remain hidden until hydration completes',
    ],
    byDefault: [
      'requires children to wrap the application subtree',
      'does not apply any additional delay before revealing',
      'does not render a fallback component while hidden',
    ],
    examplesOfUse: ['building an app with SSR where initial flicker of unstyled components is unacceptable'],
  },
  props,
  examples,
}

export default {
  HydrationGate: HYDRATION_GATE_META,
}
