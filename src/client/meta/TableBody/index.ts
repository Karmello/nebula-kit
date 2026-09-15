import type { TableBodyProps } from 'lib/components/core/Table/slots/TableBody/types'
import { DocMeta } from 'client/definitions'

import { TABLE_BODY_OVERVIEW } from './overview'
import { TABLE_BODY_PROPS } from './props'

export const TABLE_BODY_META = {
  overview: TABLE_BODY_OVERVIEW,
  props: TABLE_BODY_PROPS,
} satisfies DocMeta<TableBodyProps>
