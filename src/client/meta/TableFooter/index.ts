import type { TableFooterProps } from 'lib/components/core/Table/slots/TableFooter/types'
import { ComponentMeta } from 'client/definitions'

import { TABLE_FOOTER_OVERVIEW } from './overview'
import { TABLE_FOOTER_PROPS } from './props'

export const TABLE_FOOTER_META = {
  overview: TABLE_FOOTER_OVERVIEW,
  props: TABLE_FOOTER_PROPS,
} satisfies ComponentMeta<TableFooterProps>
