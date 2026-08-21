import { ComponentMeta } from 'client/definitions'

import { BOX_COLORS } from '../../Box'
import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
  DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE,
  DEFAULT_NEBKIT_PROVIDER_SATURATION,
  DEFAULT_NEBKIT_PROVIDER_THEME,
  NEBKIT_PROVIDER_BORDER_RADIUS_SIZES,
  NEBKIT_PROVIDER_RIPPLE_MODES,
  NEBKIT_PROVIDER_SATURATIONS,
  NEBKIT_PROVIDER_THEMES,
} from '../constants'
import type { NebkitProviderProps } from '../types'
import { NEBKIT_PROVIDER_CHANGELOG } from './changelog'
import { NEBKIT_PROVIDER_EXAMPLES } from './examples'

export const NEBKIT_PROVIDER_META = {
  NebkitProvider: {
    overview: {
      bundle: 'core',
      title: 'Root configuration and context provider for NebulaKit.',
      features: [
        'provides the global context required by all NebulaKit components',
        'initializes theme, brand, design tokens and keeps them in sync with the runtime environment',
      ],
      guidelines: ['must wrap the application root and should be rendered once at the top level'],
    },
    props: {
      borderRadiusSize: {
        options: NEBKIT_PROVIDER_BORDER_RADIUS_SIZES,
        defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE),
        description: 'Global border radius size applied across all components.',
      },
      brand: {
        options: BOX_COLORS,
        defaultValue: DEFAULT_NEBKIT_PROVIDER_BRAND,
        description: 'Global brand color used as the primary accent across components.',
      },
      children: {
        options: ['ReactElement'],
        isRequired: true,
        description: 'Application component to be wrapped by the provider.',
      },
      lockGlobalScroll: {
        options: ['boolean'],
        description:
          'Locks global document scrolling while preserving layout by compensating for scrollbar width.',
      },
      rippleMode: {
        options: NEBKIT_PROVIDER_RIPPLE_MODES,
        defaultValue: DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE,
        description: 'Controls how visible the ripple interaction effect is across components.',
      },
      saturation: {
        options: NEBKIT_PROVIDER_SATURATIONS,
        defaultValue: DEFAULT_NEBKIT_PROVIDER_SATURATION,
        description: 'Global color saturation profile used across NebulaKit components.',
      },
      theme: {
        options: NEBKIT_PROVIDER_THEMES,
        defaultValue: DEFAULT_NEBKIT_PROVIDER_THEME,
        description: 'Global theme.',
      },
    },
    examples: NEBKIT_PROVIDER_EXAMPLES,
    hideExamplesThemeToggle: true,
    changelog: NEBKIT_PROVIDER_CHANGELOG,
  } satisfies ComponentMeta<NebkitProviderProps>,
}
