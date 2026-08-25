import type { Overview } from 'client/definitions'

export const TABLE_BODY_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'Table.Body',
  title: 'Main data rows of the table.',
  guidelines: ['expects Table.Row as children', 'this slot can be used multiple times'],
  composedOf: ['Box'],
  exposedTags: ['tbody'],
  slots: ['Table.Row'],
}
