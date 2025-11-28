import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableCellProps } from 'lib/components'

const TABLE_CELL_PROPS_META: ComponentMeta<TableCellProps>['props'] = {
  blockSize: BOX_PROPS_META.blockSize,
  children: {
    ...HTML_TAG_PROPS_META.children,
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
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingInline: BOX_PROPS_META.paddingInline,
  rowSpan: {
    options: ['number'],
    description: 'Specifies how many rows the cell should span vertically within the table.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  textAlign: BOX_PROPS_META.textAlign,
}

export { TABLE_CELL_PROPS_META }
