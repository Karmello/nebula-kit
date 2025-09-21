import { ComponentMeta } from 'client/definitions'
import { HydrationGate, HydrationGateProps, NebkitProvider } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

export default [
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
] as ComponentMeta<HydrationGateProps>['examples']
