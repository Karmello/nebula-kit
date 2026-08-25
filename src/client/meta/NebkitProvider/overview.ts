import type { Overview } from 'client/definitions'

export const NEBKIT_PROVIDER_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Root configuration and context provider for NebulaKit.',
  features: [
    'provides the global context required by all NebulaKit components',
    'initializes theme, brand, design tokens and keeps them in sync with the runtime environment',
  ],
  guidelines: ['must wrap the application root and should be rendered once at the top level'],
}
