import { ComponentMeta } from 'client/definitions'
import { TableFooterProps } from 'lib/components'

const TABLE_FOOTER_META: ComponentMeta<TableFooterProps> = {
  overview: {
    name: 'Table.Footer?',
    title: 'Defines the summary or footer rows of the table.',
    description: ['expects Table.Row as children'],
    composedOf: ['Box'],
    rendersAs: ['tfoot'],
    slots: ['Table.Row'],
  },
}

export { TABLE_FOOTER_META }
