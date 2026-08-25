import type { Overview } from 'client/definitions'

export const TABLE_HEADER_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'Table.Header?',
  title: 'Column headers of the table.',
  guidelines: ['expects Table.HeaderRow as children'],
  composedOf: ['Box'],
  exposedTags: ['thead'],
  slots: ['Table.HeaderRow'],
}
