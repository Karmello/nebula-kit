import type { DocOverview } from 'client/definitions'

export const BOX_GROUP_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Groups a set of Box items into a single joined or squared shape.',
  description:
    'BoxGroup arranges its BoxGroup.Item children along an axis, collapsing the shared borders and corner radii between adjacent items so they read as one continuous surface.',
  guidelines: ['use `squared` prop to keep every item independently square-cornered instead'],
  composedOf: ['Box'],
  slots: ['BoxGroup.Item'],
}
