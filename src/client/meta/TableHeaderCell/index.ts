import type { TableHeaderCellProps } from 'lib/components/core/Table/slots/TableHeaderCell/types'
import { DocMeta } from 'client/definitions'

import { TABLE_HEADER_CELL_OVERVIEW } from './overview'
import { TABLE_HEADER_CELL_PROPS } from './props'

export const TABLE_HEADER_CELL_META = {
  overview: TABLE_HEADER_CELL_OVERVIEW,
  props: TABLE_HEADER_CELL_PROPS,
} satisfies DocMeta<TableHeaderCellProps>
