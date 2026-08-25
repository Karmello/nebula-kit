import type { TableRowProps } from 'lib/components/core/Table/slots/TableRow/types'
import { ComponentMeta } from 'client/definitions'

import { TABLE_ROW_OVERVIEW } from './overview'
import { TABLE_ROW_PROPS } from './props'

export const TABLE_ROW_META = {
  overview: TABLE_ROW_OVERVIEW,
  props: TABLE_ROW_PROPS,
} satisfies ComponentMeta<TableRowProps>
