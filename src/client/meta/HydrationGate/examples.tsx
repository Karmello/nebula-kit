import { ComponentMeta } from 'client/definitions'
import { HydrationGate, HydrationGateProps, NebkitProvider } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

const HYDRATION_GATE_EXAMPLES_META: ComponentMeta<HydrationGateProps>['examples'] = [
  {
    description:
      'Wrap the entire application with HydrationGate so that no content is shown until hydration completes. This prevents initial flicker in SSR environments while keeping setup minimal.',
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
