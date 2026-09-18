import type { TableHeaderRowProps } from 'lib/components/core/Table/slots/TableHeaderRow/types'
import { DocMeta } from 'client/definitions'

import { TABLE_HEADER_ROW_OVERVIEW } from './overview'
import { TABLE_HEADER_ROW_PROPS } from './props'

export const TABLE_HEADER_ROW_META = {
  overview: TABLE_HEADER_ROW_OVERVIEW,
  props: TABLE_HEADER_ROW_PROPS,
} satisfies DocMeta<TableHeaderRowProps>
