import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { Theme } from 'lib/definitions'

import { NEBKIT_PROVIDER_PROPS_META } from './props'
import { NEBKIT_PROVIDER_EXAMPLES_META } from './examples'

const NEBKIT_PROVIDER_META: ComponentMeta<NebkitProviderProps<Theme>> = {
  overview: {
    title: 'The root setup component for Nebula-kit.',
    description: [
      'provides a consistent context for all Nebula-kit components to operate within',
      'initializes global configuration and keeps theme tokens in sync with the environment',
      'loads the icon set and global stylesheet so they are available throughout the app',
    ],
  },
  props: NEBKIT_PROVIDER_PROPS_META,
  examples: NEBKIT_PROVIDER_EXAMPLES_META,
}

export default {
  NebkitProvider: NEBKIT_PROVIDER_META,
}
