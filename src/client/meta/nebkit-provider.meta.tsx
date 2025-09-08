import { NebKitProvider, NebKitProviderProps } from 'lib/components'
import { ComponentMeta, DEFAULT_BORDER_RADIUS, Theme } from 'lib/definitions'

const App = (): null => null

export default {
  overview: {
    name: 'NebKitProvider',
    description:
      'NebKitProvider is the root setup component for Nebula-kit. It initializes global configuration, connects the internal store, and keeps the application environment in sync so that all components work consistently.',
    responsibilities: [
      'initialize global configuration and keep theme tokens in sync with the environment',
      'provide a consistent context for all Nebula-kit components to operate within',
      'load the icon set and global stylesheet so they are available throughout the app',
    ],
    characteristics: [
      'must wrap the application (or relevant subtree) to enable Nebula-kit features',
      'applies configuration changes globally rather than per component',
      'does not render additional markup beyond its children',
    ],
    defaultBehavior: [
      'applies the light theme to the document root',
      'sets border radius to 0 for all components',
    ],
    useCases: ['always wrap with NebKitProvider to inherit theming and global configuration across the app'],
  },
  props: [
    {
      category: '',
      name: 'children',
      options: ['ReactElement'],
      isRequired: true,
      isResponsive: false,
      description: 'The application or subtree wrapped by the provider.',
    },
    {
      category: '',
      name: 'defaultTheme',
      options: Theme,
      defaultValue: Theme[0],
      isRequired: false,
      isResponsive: false,
      description: 'Starting theme for the app.',
    },
    {
      category: '',
      name: 'defaultBorderRadius',
      options: ['ScaleValue', 'CSS'],
      defaultValue: DEFAULT_BORDER_RADIUS,
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
} as ComponentMeta<NebKitProviderProps>
