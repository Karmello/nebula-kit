import type { TableHeaderRowProps } from 'lib/components/core/Table/slots/TableHeaderRow/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABLE_META } from '../Table'

export const TABLE_HEADER_ROW_META = {
  overview: {
    bundle: 'core',
    name: 'Table.HeaderRow?',
    title: 'Represents a row within Table.Head for organizing header cells.',
    guidelines: [
      "should be use within Table.Head to group header cells and define the table's column labels.",
    ],
    composedOf: ['Box'],
    exposedTags: ['tr'],
    slots: ['Table.HeaderCell'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Table.HeaderCell'],
      isRequired: true,
      description: 'Cell slot.',
    },
    color: {
      ...BOX_META.Box.props.color,
      description: 'Color applied to every cell.',
    },
    intent: {
      ...BOX_META.Box.props.intent,
      description: 'Color tone applied to every cell.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: TABLE_META.props.textAlign,
  },
} satisfies ComponentMeta<TableHeaderRowProps>
