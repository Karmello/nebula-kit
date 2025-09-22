import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'

import { NEBKIT_PROVIDER_PROPS_META } from './props'
import { NEBKIT_PROVIDER_EXAMPLES_META } from './examples'

const NEBKIT_PROVIDER_META: ComponentMeta<NebkitProviderProps> = {
  overview: {
    description: 'The root setup component for Nebula-kit.',
    role: [
      'provide a consistent context for all Nebula-kit components to operate within',
      'initialize global configuration and keep theme tokens in sync with the environment',
      'load the icon set and global stylesheet so they are available throughout the app',
      'must wrap the whole application to enable Nebula-kit features',
      'always wrap with NebkitProvider to inherit theming and global configuration across the app',
    ],
  },
  props: NEBKIT_PROVIDER_PROPS_META,
  examples: NEBKIT_PROVIDER_EXAMPLES_META,
}

export default {
  NebkitProvider: NEBKIT_PROVIDER_META,
}
