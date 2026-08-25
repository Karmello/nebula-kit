import type { DocOverview } from 'client/definitions'

export const TABLE_OVERVIEW: DocOverview = {
  bundle: 'core',
  title:
    'Layout component built on the HTML table element, providing a semantic structure for displaying data in rows and columns.',
  features: [
    'provides a semantic table-based layout wrapper',
    'organizes content into rows and columns with header, body and footer sections',
    'supports alignment and sizing of cells for structured data presentation',
    'always renders with square corners and does not inherit the global border radius',
  ],
  composedOf: ['Box'],
  exposedTags: ['table'],
  slots: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
}
