import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableCellProps } from 'lib/components'

const TABLE_CELL_PROPS_META: ComponentMeta<TableCellProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: BOX_PROPS_META.intent,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  textAlign: BOX_PROPS_META.textAlign,
  colSpan: {
    options: ['number'],
    description: 'Specifies how many columns the cell should span across within a table row.',
  },
  rowSpan: {
    options: ['number'],
    description: 'Specifies how many rows the cell should span vertically within the table.',
  },
}

export { TABLE_CELL_PROPS_META }
