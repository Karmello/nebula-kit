import { ComponentMeta } from 'client/definitions'
import { TableHeaderCellProps } from 'lib/components'

import { TABLE_HEADER_CELL_PROPS_META } from './props'

const TABLE_HEADER_CELL_META: ComponentMeta<TableHeaderCellProps> = {
  overview: {
    name: 'Table.HeaderCell?',
    title: 'Represents a single header cell.',
    features: ['can be used inside Table.Row or Table.HeaderRow'],
    composedOf: ['Box'],
    topLevelTags: ['th'],
  },
  props: TABLE_HEADER_CELL_PROPS_META,
}

export { TABLE_HEADER_CELL_META }
