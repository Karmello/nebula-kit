import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { TableHeaderCellProps } from 'lib/components/core/Table/slots/TableHeaderCell/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_HEADER_CELL_PROPS: Record<keyof TableHeaderCellProps, DocProp> = {
  blockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical height.',
    link: true,
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  colSpan: {
    options: ['number'],
    description: 'Specifies how many columns the cell should span across within a table row.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's main color.",
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
  rowSpan: {
    options: ['number'],
    description: 'Specifies how many rows the cell should span vertically within the table.',
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
    description: 'Text alignment within the component.',
    link: true,
  },
}
