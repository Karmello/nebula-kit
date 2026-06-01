import { ComponentMeta } from 'client/definitions'
import { SATURATIONS, THEMES } from 'lib/constants'

import {
  type NebkitProviderProps,
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_RIPPLE_MODE,
  DEFAULT_NEBKIT_SATURATION,
  DEFAULT_NEBKIT_THEME,
  NEBKIT_BORDER_RADIUS_SIZES,
  NEBKIT_RIPPLE_MODES,
} from './definitions'

export default {
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
      children: {
        options: ['ReactElement'],
        isRequired: true,
        description: 'Application component to be wrapped by the provider.',
      },
      borderRadiusSize: {
        options: NEBKIT_BORDER_RADIUS_SIZES,
        defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
        description: 'Global border radius size applied across all components.',
      },
      brand: {
        options: ['BoxColor'],
        defaultValue: DEFAULT_NEBKIT_BRAND,
        description: 'Global brand color used as the primary accent across components.',
      },
      lockGlobalScroll: {
        options: ['boolean'],
        description: 'Locks global document scrolling while preserving layout by compensating for scrollbar width.',
      },
      rippleMode: {
        options: NEBKIT_RIPPLE_MODES,
        defaultValue: DEFAULT_NEBKIT_RIPPLE_MODE,
        description: 'Controls how visible the ripple interaction effect is across components.',
      },
      saturation: {
        options: SATURATIONS,
        defaultValue: DEFAULT_NEBKIT_SATURATION,
        description: 'Global color saturation profile used across NebulaKit components.',
      },
      theme: {
        options: THEMES,
        defaultValue: DEFAULT_NEBKIT_THEME,
        description: 'Global theme.',
      },
    },
    examples: [
      {
        description: 'Use it as a wrapper around your entire app.',
        code: `<NebkitProvider>
  <App />
</NebkitProvider>`,
        noSandBox: true,
      },
      {
        description: 'Changing global configuration.',
        code: `<NebkitProvider theme="dark" brand="blue" borderRadiusSize="xs">
  <App />
</NebkitProvider>`,
        noSandBox: true,
      },
    ],
    hideExamplesThemeToggle: true,
    changelog: {
      '0.9.0': ['added `saturation` prop'],
      '0.6.0': ['changed `ripple` prop to `rippleMode`'],
      '0.5.0': ['added `ripple` prop'],
      '0.3.0': ['updated public API'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<NebkitProviderProps>,
}
