import type { TableHeaderRowProps } from 'lib/components/core/Table/slots/TableHeaderRow/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABLE_META } from '../Table'

export const TABLE_HEADER_ROW_PROPS: Record<keyof TableHeaderRowProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    options: ['Table.HeaderCell'],
    isRequired: true,
    description: 'Cell slot.',
  },
  color: {
    ...BOX_META.props.color,
    description: 'Color applied to every cell.',
  },
  intent: {
    ...BOX_META.props.intent,
    description: 'Color tone applied to every cell.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  textAlign: TABLE_META.props.textAlign,
}
