import type { DocOverview } from 'client/definitions'

export const TABLE_BODY_OVERVIEW: DocOverview = {
  bundle: 'core',
  name: 'Table.Body',
  title: 'Main data rows of the table.',
  guidelines: ['expects Table.Row as children', 'this slot can be used multiple times'],
  composedOf: ['Box'],
  exposedTags: ['tbody'],
  slots: ['Table.Row'],
}
