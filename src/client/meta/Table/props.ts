import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TABLE_INTENT,
  DEFAULT_TABLE_LAYOUT,
  DEFAULT_TABLE_PADDING_BLOCK,
  DEFAULT_TABLE_PADDING_INLINE,
  TABLE_LAYOUTS,
} from 'lib/components/core/Table/constants'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import { TableProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const TABLE_PROPS: Record<keyof TableProps, DocProp> = {
  children: {
    options: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
    isRequired: true,
    description: 'Table.Body is required, the rest optional.',
  },
  color: {
    options: BOX_COLORS,
    description: "Color applied to the table's background surface.",
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_TABLE_INTENT),
    description: "Color tone applied to the table's background surface.",
  },
  layout: {
    options: TABLE_LAYOUTS,
    defaultValue: DEFAULT_TABLE_LAYOUT,
    description:
      'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides applied to every cell.',
    link: true,
    defaultValue: DEFAULT_TABLE_PADDING_BLOCK as never,
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides applied to every cell.',
    link: true,
    defaultValue: DEFAULT_TABLE_PADDING_INLINE as never,
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  textAlign: {
    options: CSS_TEXT_ALIGN,
    isResponsive: true,
    description: 'Text alignment applied to every cell.',
    link: true,
  },
}
