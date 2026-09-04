import type { DocOverview } from 'client/definitions'

export const SCALE_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Motion component for animating visual scale transitions.',
  description:
    'Scale applies transform-based motion that visually scales content between hidden and visible states. It can scale on both axes or a single axis, making it useful for dialogs, dropdowns, popovers, menus and floating UI surfaces.',
  features: [
    'animates visibility using CSS transform scale',
    'performs visual-only motion without affecting layout',
    'supports configurable scale values for hidden and visible states',
    'supports both-axis and single-axis scale transitions',
    'supports configurable transform origins for directional scaling behavior',
  ],
  composedOf: ['Box'],
}
