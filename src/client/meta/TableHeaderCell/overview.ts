import type { DocOverview } from 'client/definitions'

export const TABLE_HEADER_CELL_OVERVIEW: DocOverview = {
  bundle: 'core',
  name: 'Table.HeaderCell?',
  title: 'Represents a single header cell.',
  guidelines: ['can be used inside Table.Row or Table.HeaderRow'],
  composedOf: ['Box'],
  exposedTags: ['th'],
}
