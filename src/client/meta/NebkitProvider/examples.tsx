import { ComponentMeta } from 'client/definitions'
import { NebkitProvider, NebkitProviderProps } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

const NEBKIT_PROVIDER_EXAMPLES_META: ComponentMeta<NebkitProviderProps>['examples'] = [
  {
    description: 'Use it as a wrapper around your entire app.',
    jsx: (
      <NebkitProvider>
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
  {
    description: 'Changing global configuration.',
    jsx: (
      <NebkitProvider theme="dark" brand="blue" borderRadiusSize="xs">
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
]

export { NEBKIT_PROVIDER_EXAMPLES_META }
