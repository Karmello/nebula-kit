import { ComponentMeta } from 'client/definitions'
import { TableProps } from 'lib/components'

import { TABLE_PROPS_META } from './props'
import { TABLE_EXAMPLES_META } from './examples'

const TABLE_META: ComponentMeta<TableProps> = {
  overview: {
    title:
      'Layout component built on the HTML table element, providing a semantic structure for displaying data in rows and columns.',
    description: [
      'provides a semantic table-based layout wrapper',
      'organizes content into rows and columns with header, body, and footer sections',
      'supports alignment and sizing of cells for structured data presentation',
    ],
    composedOf: ['Box'],
    rendersAs: ['table'],
  },
  props: TABLE_PROPS_META,
  examples: TABLE_EXAMPLES_META,
}

export default {
  Table: TABLE_META,
}
