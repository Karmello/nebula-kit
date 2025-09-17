import { ComponentMeta } from 'client/definitions'
import { HydrationGate, HydrationGateProps, NebKitProvider } from 'lib/components'

const App = (): null => null
App.displayName = 'App'

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
  ownProps: [
    {
      name: 'children',
      options: ['ReactElement'],
      isRequired: true,
      isResponsive: false,
      description: 'The React element tree wrapped by HydrationGate.',
    },
    {
      name: 'minDelay',
      options: ['number'],
      isRequired: false,
      isResponsive: false,
      description:
        'An optional number in milliseconds that postpones revealing the children after hydration. Useful for ensuring a loader is visible long enough to avoid a quick flash.',
    },
    {
      name: 'fallback',
      options: ['ReactNode'],
      isRequired: false,
      isResponsive: false,
      description:
        'An optional React node displayed while the children are hidden. Typically used to show a loader or placeholder during hydration.',
    },
  ],
  examples: [
    {
      description:
        'Wrap the entire application with HydrationGate so that no content is shown until hydration completes. This prevents initial flicker in SSR environments while keeping setup minimal.',
      jsx: (
        <HydrationGate>
          <NebKitProvider>
            <App />
          </NebKitProvider>
        </HydrationGate>
      ),
      noSandBox: true,
    },
  ],
}

export default {
  HydrationGate: HYDRATION_GATE_META,
}
