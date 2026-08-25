import { DEFAULT_TABLE_BODY_INTENT } from 'lib/components/core/Table/slots/TableBody/constants'
import type { TableBodyProps } from 'lib/components/core/Table/slots/TableBody/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABLE_META } from '../Table'

export const TABLE_BODY_META = {
  overview: {
    bundle: 'core',
    name: 'Table.Body',
    title: 'Main data rows of the table.',
    guidelines: ['expects Table.Row as children', 'this slot can be used multiple times'],
    composedOf: ['Box'],
    exposedTags: ['tbody'],
    slots: ['Table.Row'],
  },
  props: {
    children: {
      ...BOX_META.props.children,
      options: ['Table.Row'],
      isRequired: true,
      description: 'Row slot.',
    },
    color: {
      ...BOX_META.props.color,
      description: 'Color applied to every cell.',
    },
    intent: {
      ...BOX_META.props.intent,
      defaultValue: DEFAULT_TABLE_BODY_INTENT as never,
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
  },
} satisfies ComponentMeta<TableBodyProps>
