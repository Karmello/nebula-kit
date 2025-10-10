import { ComponentMeta } from 'client/definitions'
import { TableFooterProps } from 'lib/components'

import { TABLE_FOOTER_PROPS_META } from './props'

const TABLE_FOOTER_META: ComponentMeta<TableFooterProps> = {
  overview: {
    name: 'Table.Footer?',
    title: 'Summary or footer rows of the table.',
    description: ['expects Table.Row as children'],
    composedOf: ['Box'],
    rendersAs: ['tfoot'],
    slots: ['Table.Row'],
  },
  props: TABLE_FOOTER_PROPS_META,
}

export { TABLE_FOOTER_META }
