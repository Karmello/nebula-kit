import type { Overview } from 'client/definitions'

export const ROTATE_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Motion component for animating rotation.',
  description:
    'Rotate applies transform-based rotation motion by animating changes to the provided angle value. It is intended for lightweight visual motion such as icons, indicators and directional state changes.',
  features: [
    'animates rotation using CSS transforms',
    'reacts to angle changes with smooth visual motion',
    'uses transform-based animation without affecting layou',
    'works well for icons, toggles and directional indicators',
  ],
  composedOf: ['Box'],
  exposedTags: ['span'],
}
