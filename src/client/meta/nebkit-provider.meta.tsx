import { ComponentMeta } from 'client/definitions'
import { NebKitProvider, NebKitProviderProps } from 'lib/components'
import { DEFAULT_BORDER_RADIUS, Theme } from 'lib/definitions'

const App = (): null => null
App.displayName = 'App'

const NEB_KIT_PROVIDER_META: ComponentMeta<NebKitProviderProps> = {
  overview: {
    description:
      'The root setup component for Nebula-kit. It initializes global configuration, connects the internal store, and keeps the application environment in sync so that all components work consistently.',
    role: [
      'initialize global configuration and keep theme tokens in sync with the environment',
      'provide a consistent context for all Nebula-kit components to operate within',
      'load the icon set and global stylesheet so they are available throughout the app',
    ],
    behavior: [
      'must wrap the application (or relevant subtree) to enable Nebula-kit features',
      'applies configuration changes globally rather than per component',
      'does not render additional markup beyond its children',
    ],
    byDefault: ['applies the light theme to the document root', 'sets border radius to 0 for all components'],
    examplesOfUse: [
      'always wrap with NebKitProvider to inherit theming and global configuration across the app',
    ],
  },
  ownProps: [
    {
      name: 'children',
      options: ['ReactElement'],
      isRequired: true,
      isResponsive: false,
      description: 'The application or subtree wrapped by the provider.',
    },
    {
      name: 'defaultTheme',
      options: Theme as unknown as string[],
      defaultValue: Theme[0],
      isRequired: false,
      isResponsive: false,
      description: 'Starting theme for the app.',
    },
    {
      name: 'defaultBorderRadius',
      options: ['ScaleValue', 'CSS'],
      defaultValue: String(DEFAULT_BORDER_RADIUS),
      isRequired: false,
      isResponsive: false,
      description: 'Starting border radius scale or custom value.',
    },
  ],
  examples: [
    {
      description:
        "Wraps the entire application with NebKitProvider to enable Nebula-kit's global configuration and defaults.",
      jsx: (
        <NebKitProvider>
          <App />
        </NebKitProvider>
      ),
      noSandBox: true,
    },
    {
      description: 'Wraps the application with NebKitProvider and applies the dark theme as the default.',
      jsx: (
        <NebKitProvider defaultTheme="dark">
          <App />
        </NebKitProvider>
      ),
      noSandBox: true,
    },
  ],
}

export default {
  NebKitProvider: NEB_KIT_PROVIDER_META,
}
