import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { DEFAULT_TABLE_BODY_INTENT } from 'lib/components/core/Table/slots/TableBody/constants'
import type { TableBodyProps } from 'lib/components/core/Table/slots/TableBody/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_BODY_PROPS: Record<keyof TableBodyProps, DocProp> = {
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
    defaultValue: DEFAULT_TABLE_BODY_INTENT as never,
    description: 'Color tone applied to every cell.',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the top and bottom sides applied to every cell.',
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the left and right sides applied to every cell.',
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
    link: true,
    description: 'Text alignment applied to every cell.',
  },
}
