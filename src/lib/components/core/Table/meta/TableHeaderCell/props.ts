import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../Box/meta/props'
import { type TableHeaderCellProps } from '../../slots/TableHeaderCell/definitions'

const TABLE_HEADER_CELL_PROPS_META: ComponentMeta<TableHeaderCellProps>['props'] = {
  blockSize: BOX_PROPS_META.blockSize,
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  colSpan: {
    options: ['number'],
    description: 'Specifies how many columns the cell should span across within a table row.',
  },
  intent: BOX_PROPS_META.intent,
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  rowSpan: {
    options: ['number'],
    description: 'Specifies how many rows the cell should span vertically within the table.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  textAlign: BOX_PROPS_META.textAlign,
}

export { TABLE_HEADER_CELL_PROPS_META }
