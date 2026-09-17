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
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // surface
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_TABLE_INTENT),
    description: "Color tone applied to the table's background surface.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: "Color applied to the table's background surface.",
    group: 'surface',
  },
  // layout
  layout: {
    options: TABLE_LAYOUTS,
    defaultValue: DEFAULT_TABLE_LAYOUT,
    description:
      'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
    group: 'layout',
  },
  // size
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
    group: 'size',
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
    group: 'size',
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
    group: 'size',
  },
  // padding
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides applied to every cell.',
    link: true,
    defaultValue: DEFAULT_TABLE_PADDING_INLINE as never,
    group: 'padding',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides applied to every cell.',
    link: true,
    defaultValue: DEFAULT_TABLE_PADDING_BLOCK as never,
    group: 'padding',
  },
  // appearance
  textAlign: {
    options: CSS_TEXT_ALIGN,
    isResponsive: true,
    description: 'Text alignment applied to every cell.',
    link: true,
    group: 'appearance',
  },
}
