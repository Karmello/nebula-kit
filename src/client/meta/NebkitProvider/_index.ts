import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'

import props from './props'
import examples from './examples'

const NEBKIT_PROVIDER_META: ComponentMeta<NebkitProviderProps> = {
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
      'always wrap with NebkitProvider to inherit theming and global configuration across the app',
    ],
  },
  props,
  examples,
}

export default {
  NebkitProvider: NEBKIT_PROVIDER_META,
}
