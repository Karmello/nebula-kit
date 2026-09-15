import type { DocOverview } from 'client/definitions'

export const USE_ROTATE_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Hook for animating rotation.',
  description:
    'useRotate applies transform-based rotation motion directly to the DOM element referenced by tagRef, animating changes to the provided angle value. It is intended for lightweight visual motion such as icons, indicators and directional state changes.',
  features: [
    'animates rotation using CSS transforms',
    'reacts to angle changes with smooth visual motion',
    'uses transform-based animation without affecting layout',
    'works well for icons, toggles and directional indicators',
  ],
}
