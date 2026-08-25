import type { TableHeaderProps } from 'lib/components/core/Table/slots/TableHeader/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABLE_META } from '../Table'

export const TABLE_HEADER_PROPS: Record<keyof TableHeaderProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    options: ['Table.HeaderRow'],
    isRequired: true,
    description: 'Row slot.',
  },
  color: {
    ...BOX_META.props.color,
    description: 'Color applied to every cell.',
  },
  intent: {
    ...BOX_META.props.intent,
    description: 'Color tone applied to every cell.',
  },
  paddingBlock: {
    ...BOX_META.props.paddingBlock,
    description: 'Padding for the top and bottom sides applied to every cell.',
  },
  paddingInline: {
    ...BOX_META.props.paddingInline,
    description: 'Padding for the left and right sides applied to every cell.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  textAlign: TABLE_META.props.textAlign,
}
