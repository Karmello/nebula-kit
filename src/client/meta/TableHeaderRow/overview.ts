import type { DocOverview } from 'client/definitions'

export const TABLE_HEADER_ROW_OVERVIEW: DocOverview = {
  bundle: 'core',
  name: 'Table.HeaderRow?',
  title: 'Represents a row within Table.Head for organizing header cells.',
  guidelines: [
    "should be use within Table.Head to group header cells and define the table's column labels.",
  ],
  composedOf: ['Box'],
  exposedTags: ['tr'],
  slots: ['Table.HeaderCell'],
}
