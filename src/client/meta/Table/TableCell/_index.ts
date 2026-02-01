import { ComponentMeta } from 'client/definitions'
import { TableCellProps } from 'lib/components'

import { TABLE_CELL_PROPS_META } from './props'

const TABLE_CELL_META: ComponentMeta<TableCellProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.Cell',
    title: 'Represents a single cell within a table row.',
    features: ['should be used inside Table.Row'],
    composedOf: ['Box'],
    topLevelTags: ['td'],
  },
  props: TABLE_CELL_PROPS_META,
}

export { TABLE_CELL_META }
