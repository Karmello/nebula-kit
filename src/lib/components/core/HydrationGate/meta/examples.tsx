import { ComponentMeta } from 'client/definitions'

import { type HydrationGateProps } from '../definitions'
import { HydrationGate } from '../hydration-gate'
import { NebkitProvider } from '../../NebkitProvider'

const App = (): null => null
App.displayName = 'App'

const HYDRATION_GATE_EXAMPLES_META: ComponentMeta<HydrationGateProps>['examples'] = [
  {
    description: 'Must wrap NebkitProvider in SSR environments.',
    jsx: (
      <HydrationGate>
        <NebkitProvider>
          <App />
        </NebkitProvider>
      </HydrationGate>
    ),
    noSandBox: true,
  },
]

export { HYDRATION_GATE_EXAMPLES_META }
