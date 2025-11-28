import { ComponentMeta } from 'client/definitions'
import { TableProps } from 'lib/components'

import {
  DEFAULT_TABLE_INTENT,
  DEFAULT_TABLE_LAYOUT,
  TABLE_LAYOUTS,
} from 'lib/components/layout/Table/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const TABLE_PROPS_META: ComponentMeta<TableProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
    isRequired: true,
    description: 'Table.Body is required, the rest optional.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: "Color applied to the table's background surface.",
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_TABLE_INTENT),
    description: "Tone level applied to the table's background surface.",
  },
  layout: {
    options: TABLE_LAYOUTS as unknown as string[],
    defaultValue: DEFAULT_TABLE_LAYOUT,
    description:
      'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
  },
  paddingBlock: {
    ...BOX_PROPS_META.paddingBlock,
    description: 'Padding for the top and bottom sides applied to every cell.',
  },
  paddingInline: {
    ...BOX_PROPS_META.paddingInline,
    description: 'Padding for the left and right sides applied to every cell.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { TABLE_PROPS_META }
