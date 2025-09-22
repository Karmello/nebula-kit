import { ComponentMeta } from 'client/definitions'
import { NebkitProvider, NebkitProviderProps } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

const NEBKIT_PROVIDER_EXAMPLES_META: ComponentMeta<NebkitProviderProps>['examples'] = [
  {
    description: 'Wraps the entire application.',
    jsx: (
      <NebkitProvider>
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
  {
    description: 'Wraps the entire application and sets the dark theme.',
    jsx: (
      <NebkitProvider defaultTheme="dark">
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
]

export { NEBKIT_PROVIDER_EXAMPLES_META }
