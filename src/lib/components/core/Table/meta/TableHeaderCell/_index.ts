import { ComponentMeta } from 'client/definitions'

import { type TableHeaderCellProps } from '../../slots/TableHeaderCell/definitions'
import { TABLE_HEADER_CELL_PROPS_META } from './props'

const TABLE_HEADER_CELL_META: ComponentMeta<TableHeaderCellProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.HeaderCell?',
    title: 'Represents a single header cell.',
    guidelines: ['can be used inside Table.Row or Table.HeaderRow'],
    composedOf: ['Box'],
    topLevelTags: ['th'],
  },
  props: TABLE_HEADER_CELL_PROPS_META,
}

export { TABLE_HEADER_CELL_META }
