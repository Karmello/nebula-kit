import type { TableCaptionProps } from 'lib/components/core/Table/slots/TableCaption/types'
import { ComponentMeta } from 'client/definitions'

import { TABLE_CAPTION_OVERVIEW } from './overview'
import { TABLE_CAPTION_PROPS } from './props'

export const TABLE_CAPTION_META = {
  overview: TABLE_CAPTION_OVERVIEW,
  props: TABLE_CAPTION_PROPS,
} satisfies ComponentMeta<TableCaptionProps>
