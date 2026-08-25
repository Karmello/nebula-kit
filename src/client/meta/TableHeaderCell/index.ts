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
    blockSize: BOX_META.props.blockSize,
    children: {
      ...BOX_META.props.children,
      isRequired: true,
    },
    colSpan: {
      options: ['number'],
      description: 'Specifies how many columns the cell should span across within a table row.',
    },
    color: BOX_META.props.color,
    intent: BOX_META.props.intent,
    maxInlineSize: BOX_META.props.maxInlineSize,
    minInlineSize: BOX_META.props.minInlineSize,
    rowSpan: {
      options: ['number'],
      description: 'Specifies how many rows the cell should span vertically within the table.',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
    textAlign: BOX_META.props.textAlign,
  },
} satisfies ComponentMeta<TableHeaderCellProps>
