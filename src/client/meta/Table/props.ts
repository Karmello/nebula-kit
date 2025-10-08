import { ComponentMeta } from 'client/definitions'
import { TableProps } from 'lib/components'
import { DEFAULT_TABLE_LAYOUT, TableLayout } from 'lib/components/layout-base/Table/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const TABLE_PROPS_META: ComponentMeta<TableProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: [
      'Table.Head',
      'Table.Body',
      'Table.Foot',
      'Table.Row',
      'Table.Cell',
      'Table.HeadCell',
      'Table.Caption',
    ],
    isRequired: true,
  },
  intent: BOX_PROPS_META.intent,
  layout: {
    options: TableLayout as unknown as string[],
    defaultValue: DEFAULT_TABLE_LAYOUT,
    description:
      'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
  },
  zebra: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Applies alternating background colors to rows for easier readability.',
  },
}

export { TABLE_PROPS_META }
