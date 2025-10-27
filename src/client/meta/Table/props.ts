import { ComponentMeta } from 'client/definitions'
import { TableProps } from 'lib/components'
import { DEFAULT_TABLE_LAYOUT, TABLE_LAYOUTS } from 'lib/components/layout/Table/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const TABLE_PROPS_META: ComponentMeta<TableProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
    isRequired: true,
    description: 'Table.Body is required, the rest optional.',
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    description: "Semantic color intent applied to the table's background surface.",
  },
  layout: {
    options: TABLE_LAYOUTS as unknown as string[],
    defaultValue: DEFAULT_TABLE_LAYOUT,
    description:
      'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
  },
}

export { TABLE_PROPS_META }
