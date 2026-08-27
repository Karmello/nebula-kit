import type { DocOverview } from 'client/definitions'

export const SURFACE_GROUP_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Joins any set of child surfaces into a single joined or squared shape.',
  description:
    'SurfaceGroup arranges its children along an axis, collapsing the shared borders and corner radii between adjacent items so they read as one continuous surface. Unlike a fixed slot, children can be any component - Box, Button, or otherwise - as long as it forwards tagAttrs to its own outer surface.',
  guidelines: ['use `squared` prop to keep every item independently square-cornered instead'],
  composedOf: ['Box'],
}
