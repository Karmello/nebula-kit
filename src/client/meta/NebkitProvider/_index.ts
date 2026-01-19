import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'

import { NEBKIT_PROVIDER_PROPS_META } from './props'
import { NEBKIT_PROVIDER_EXAMPLES_META } from './examples'

const NEBKIT_PROVIDER_META: ComponentMeta<NebkitProviderProps> = {
  overview: {
    bundle: 'core',
    title: 'Root configuration and context provider for NebulaKit.',
    features: [
      'provides the global context required by all NebulaKit components',
      'initializes theme, brand, design tokens and keeps them in sync with the runtime environment',
      'must wrap the application root and should be rendered once at the top level',
    ],
  },
  props: NEBKIT_PROVIDER_PROPS_META,
  examples: NEBKIT_PROVIDER_EXAMPLES_META,
  changelog: {
    '0.3.0': ['public API updated'],
    '0.2.3': ['released'],
  },
}

export default {
  NebkitProvider: NEBKIT_PROVIDER_META,
}
