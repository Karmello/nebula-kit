import type { DocOverview } from 'client/definitions'

export const STYLING_ISLAND_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Establishes a local theme and brand boundary for a subtree.',
  description:
    'StylingIsland wraps a subtree and gives it its own theme and brand context, independent of the rest of the app. All drawable descendants resolve their colors against the nearest StylingIsland, falling back to the global configuration set by NebkitProvider.',
  features: [
    'scopes theme and brand to a subtree without affecting the rest of the app',
    'the nearest StylingIsland always wins for its descendants',
    'falls back to the global theme and brand when a prop is left unset',
  ],
  guidelines: [
    'wrap a subtree that should render in a different theme or brand than its surroundings',
    'pair it with a drawable Box so the boundary has a visible surface - theme alone changes how colors are interpreted but does not paint a background',
  ],
}
