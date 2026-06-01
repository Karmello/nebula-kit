import { ComponentMeta } from 'client/definitions'

import { type TableCellProps } from '../../slots/TableCell/definitions'
import { TABLE_CELL_PROPS_META } from './props'

const TABLE_CELL_META: ComponentMeta<TableCellProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.Cell',
    title: 'Represents a single cell within a table row.',
    guidelines: ['should be used inside Table.Row'],
    composedOf: ['Box'],
    topLevelTags: ['td'],
  },
  props: TABLE_CELL_PROPS_META,
}

export { TABLE_CELL_META }
