import type { TableHeaderProps } from 'lib/components/core/Table/slots/TableHeader/types'
import { ComponentMeta } from 'client/definitions'

import { TABLE_HEADER_OVERVIEW } from './overview'
import { TABLE_HEADER_PROPS } from './props'

export const TABLE_HEADER_META = {
  overview: TABLE_HEADER_OVERVIEW,
  props: TABLE_HEADER_PROPS,
} satisfies ComponentMeta<TableHeaderProps>
