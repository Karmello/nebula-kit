import { ComponentMeta } from 'client/definitions'
import { TableCellProps } from 'lib/components'

import { TABLE_CELL_PROPS_META } from './props'

const TABLE_CELL_META: ComponentMeta<TableCellProps> = {
  overview: {
    name: 'Table.Cell',
    title: 'Represents a single cell within a table row.',
    description: ['should be used inside Table.Row'],
    composedOf: ['Box'],
    rendersAs: ['td'],
  },
  props: TABLE_CELL_PROPS_META,
}

export { TABLE_CELL_META }
