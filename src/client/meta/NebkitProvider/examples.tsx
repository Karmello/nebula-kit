import { ComponentMeta } from 'client/definitions'
import { NebkitProvider, NebkitProviderProps } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

export default [
  {
    description:
      "Wraps the entire application with NebkitProvider to enable Nebula-kit's global configuration and defaults.",
    jsx: (
      <NebkitProvider>
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
  {
    description: 'Wraps the application with NebkitProvider and applies the dark theme as the default.',
    jsx: (
      <NebkitProvider defaultTheme="dark">
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
] as ComponentMeta<NebkitProviderProps>['examples']
