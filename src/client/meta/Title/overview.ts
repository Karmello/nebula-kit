import type { DocOverview } from 'client/definitions'

export const TITLE_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Title text component with optional icon support.',
  description:
    'Title renders concise text with an optional icon, keeping icon size, spacing, color and intent aligned with the selected typography.',
  features: [
    'renders concise title text with an optional icon',
    'syncs icon size and spacing with typography',
    'supports left or right icon placement',
    'applies shared color and intent to text and icon',
    'allows custom content when children are not plain text',
  ],
  composedOf: ['Box', 'Icon', 'Text'],
  exposedTags: ['span'],
}
