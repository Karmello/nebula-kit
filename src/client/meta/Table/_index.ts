import { ComponentMeta } from 'client/definitions'
import { TableProps } from 'lib/components'

import { TABLE_PROPS_META } from './props'
import { TABLE_EXAMPLES_META } from './examples'

import { TABLE_BODY_META } from './TableBody/_index'
import { TABLE_HEADER_META } from './TableHeader/_index'
import { TABLE_FOOTER_META } from './TableFooter/_index'
import { TABLE_CAPTION_META } from './TableCaption/_index'

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
    slots: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
  },
  props: TABLE_PROPS_META,
  examples: TABLE_EXAMPLES_META,
}

export default {
  Table: TABLE_META,
  TableBody: TABLE_BODY_META,
  TableHeader: TABLE_HEADER_META,
  TableFooter: TABLE_FOOTER_META,
  TableCaption: TABLE_CAPTION_META,
}
