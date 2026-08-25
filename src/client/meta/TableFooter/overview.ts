import type { Overview } from 'client/definitions'

export const TABLE_FOOTER_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'Table.Footer?',
  title: 'Summary or footer rows of the table.',
  guidelines: ['expects Table.Row as children'],
  composedOf: ['Box'],
  exposedTags: ['tfoot'],
  slots: ['Table.Row'],
}
