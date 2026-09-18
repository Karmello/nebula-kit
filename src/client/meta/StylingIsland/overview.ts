import type { DocOverview } from 'client/definitions'

export const STYLING_ISLAND_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Local theme and brand boundary for a subtree.',
  description:
    'StylingIsland lets any drawable descendant resolve its colors from this local context instead of the global one.',
  features: [
    'lets a specific region use a different theme without touching global configuration',
    'lets a specific region use a different brand color without touching global configuration',
    'can be nested to further scope a smaller region within an already-scoped one',
  ],
  guidelines: [
    'wrap a region that should stand out from its surroundings with a different theme or brand - for example a dark panel inside a light app, a promotional banner with its own brand color or an embedded widget that must keep a fixed look regardless of the host theme',
    'pair it with a drawable Box so the boundary has a visible surface - theme alone changes how colors are interpreted but does not paint a background',
  ],
}
