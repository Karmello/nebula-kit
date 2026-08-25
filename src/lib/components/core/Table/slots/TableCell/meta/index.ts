import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../../../Box/meta'
import type { TableCellProps } from '../types'

export const TABLE_CELL_META = {
  overview: {
    bundle: 'core',
    name: 'Table.Cell',
    title: 'Represents a single cell within a table row.',
    guidelines: ['should be used inside Table.Row'],
    composedOf: ['Box'],
    exposedTags: ['td'],
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
} satisfies ComponentMeta<TableCellProps>
