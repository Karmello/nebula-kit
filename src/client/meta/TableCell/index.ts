import type { TableCellProps } from 'lib/components/core/Table/slots/TableCell/types'
import { DocMeta } from 'client/definitions'

import { TABLE_CELL_OVERVIEW } from './overview'
import { TABLE_CELL_PROPS } from './props'

export const TABLE_CELL_META = {
  overview: TABLE_CELL_OVERVIEW,
  props: TABLE_CELL_PROPS,
} satisfies DocMeta<TableCellProps>
