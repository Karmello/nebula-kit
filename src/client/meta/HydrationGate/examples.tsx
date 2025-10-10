import { ComponentMeta } from 'client/definitions'
import { HydrationGate, HydrationGateProps, NebkitProvider } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

const HYDRATION_GATE_EXAMPLES_META: ComponentMeta<HydrationGateProps>['examples'] = [
  {
    description: 'Always use it as a wrapper of NebkitProvider.',
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
