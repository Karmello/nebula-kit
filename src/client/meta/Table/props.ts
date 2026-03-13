import { ComponentMeta } from 'client/definitions'
import { TableProps } from 'lib/components'

import {
  DEFAULT_TABLE_INTENT,
  DEFAULT_TABLE_LAYOUT,
  DEFAULT_TABLE_PADDING_BLOCK,
  DEFAULT_TABLE_PADDING_INLINE,
  TABLE_LAYOUTS,
} from 'lib/components/core/layout/Table'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const TABLE_PROPS_META: ComponentMeta<TableProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
    isRequired: true,
    description: 'Table.Body is required, the rest optional.',
    tooltip: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
  },
  color: {
    ...BOX_PROPS_META.color,
    description: "Color applied to the table's background surface.",
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_TABLE_INTENT),
    description: "Color tone applied to the table's background surface.",
  },
  layout: {
    options: TABLE_LAYOUTS,
    defaultValue: DEFAULT_TABLE_LAYOUT,
    description: 'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
  },
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  paddingBlock: {
    ...BOX_PROPS_META.paddingBlock,
    defaultValue: DEFAULT_TABLE_PADDING_BLOCK as never,
    description: 'Padding for the top and bottom sides applied to every cell.',
  },
  paddingInline: {
    ...BOX_PROPS_META.paddingInline,
    defaultValue: DEFAULT_TABLE_PADDING_INLINE as never,
    description: 'Padding for the left and right sides applied to every cell.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  textAlign: {
    ...BOX_PROPS_META.textAlign,
    description: 'Text alignment applied to every cell.',
  },
}

export { TABLE_PROPS_META }
