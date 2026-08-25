import type { TableHeaderCellProps } from 'lib/components/core/Table/slots/TableHeaderCell/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const TABLE_HEADER_CELL_META = {
  overview: {
    bundle: 'core',
    name: 'Table.HeaderCell?',
    title: 'Represents a single header cell.',
    guidelines: ['can be used inside Table.Row or Table.HeaderRow'],
    composedOf: ['Box'],
    exposedTags: ['th'],
  },
  props: {
    blockSize: BOX_META.Box.props.blockSize,
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    colSpan: {
      options: ['number'],
      description: 'Specifies how many columns the cell should span across within a table row.',
    },
    color: BOX_META.Box.props.color,
    intent: BOX_META.Box.props.intent,
    maxInlineSize: BOX_META.Box.props.maxInlineSize,
    minInlineSize: BOX_META.Box.props.minInlineSize,
    rowSpan: {
      options: ['number'],
      description: 'Specifies how many rows the cell should span vertically within the table.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: BOX_META.Box.props.textAlign,
  },
} satisfies ComponentMeta<TableHeaderCellProps>
