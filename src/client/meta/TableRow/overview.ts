import type { Overview } from 'client/definitions'

export const TABLE_ROW_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'Table.Row',
  title: 'Represents a single row within the table structure.',
  guidelines: ['should be placed inside Table.Body or Table.Footer to define individual data rows'],
  composedOf: ['Box'],
  exposedTags: ['tr'],
  slots: ['Table.Cell', 'Table.HeaderCell'],
}
