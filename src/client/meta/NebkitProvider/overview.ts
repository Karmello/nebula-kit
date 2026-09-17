import type { DocOverview } from 'client/definitions'

export const NEBKIT_PROVIDER_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Root configuration and context provider for NebulaKit.',
  description:
    'NebkitProvider configures the global theme, brand and border radius for the whole application and makes them available to every NebulaKit component automatically.',
  features: [
    'provides the global context required by all NebulaKit components',
    'initializes theme, brand, design tokens and keeps them in sync with the runtime environment',
    'avoids a flash of unstyled content while server-rendered markup is hydrating',
    'can lock global page scroll via the `lockGlobalScroll` prop',
  ],
  guidelines: [
    'must wrap the application root and should be rendered once at the top level',
    'switching theme, brand or border radius updates the whole app without animating it',
  ],
  composedOf: ['StylingIsland'],
}
