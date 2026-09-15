import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { DEFAULT_TABLE_FOOTER_INTENT } from 'lib/components/core/Table/slots/TableFooter/constants'
import type { TableFooterProps } from 'lib/components/core/Table/slots/TableFooter/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_FOOTER_PROPS: Record<keyof TableFooterProps, DocProp> = {
  children: {
    options: ['Table.Row'],
    isRequired: true,
    description: 'Row slot.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to every cell.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_TABLE_FOOTER_INTENT),
    description: 'Color tone applied to every cell.',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides applied to every cell.',
    link: true,
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides applied to every cell.',
    link: true,
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
