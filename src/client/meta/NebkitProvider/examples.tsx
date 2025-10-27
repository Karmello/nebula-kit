import { ComponentMeta } from 'client/definitions'
import { NebkitProvider, NebkitProviderProps } from 'lib/components'
import { Theme } from 'lib/definitions'

const App = (): null => null
App.displayName = 'App'

const NEBKIT_PROVIDER_EXAMPLES_META: ComponentMeta<NebkitProviderProps<Theme>>['examples'] = [
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
      <NebkitProvider theme="dark" brand="brown" borderWidthSize="lg" borderRadiusSize="xs">
        <App />
      </NebkitProvider>
    ),
    noSandBox: true,
  },
]

export { NEBKIT_PROVIDER_EXAMPLES_META }
