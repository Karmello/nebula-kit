import type { DocOverview } from 'client/definitions'

export const TABLE_CELL_OVERVIEW: DocOverview = {
  bundle: 'core',
  name: 'Table.Cell',
  title: 'Represents a single cell within a table row.',
  guidelines: ['should be used inside Table.Row'],
  composedOf: ['Box'],
  exposedTags: ['td'],
}
