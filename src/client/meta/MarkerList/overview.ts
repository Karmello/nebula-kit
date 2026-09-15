import { MARKER_LIST_TAGS } from 'lib/components/core/MarkerList/constants'
import type { DocOverview } from 'client/definitions'

export const MARKER_LIST_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'List component that displays items with native markers.',
  features: ['presents short text collections with bullets or numbers'],
  guidelines: [
    'use ol tag with numeric marker styles and ul with bullet marker styles for correct semantics',
  ],
  composedOf: ['Box'],
  exposedTags: MARKER_LIST_TAGS,
  slots: ['MarkerList.Item'],
}
