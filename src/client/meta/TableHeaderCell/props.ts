import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { TableHeaderCellProps } from 'lib/components/core/Table/slots/TableHeaderCell/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_HEADER_CELL_PROPS: Record<keyof TableHeaderCellProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
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
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  // span
  colSpan: {
    options: ['number'],
    description: 'Specifies how many columns the cell should span across within a table row.',
    group: 'span',
  },
  rowSpan: {
    options: ['number'],
    description: 'Specifies how many rows the cell should span vertically within the table.',
    group: 'span',
  },
  // size
  blockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical height.',
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
  // appearance
  textAlign: {
    options: CSS_TEXT_ALIGN,
    isResponsive: true,
    description: 'Text alignment within the component.',
    link: true,
    group: 'appearance',
  },
}
