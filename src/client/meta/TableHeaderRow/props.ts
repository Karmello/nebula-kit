import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { TableHeaderRowProps } from 'lib/components/core/Table/slots/TableHeaderRow/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_HEADER_ROW_PROPS: Record<keyof TableHeaderRowProps, DocProp> = {
  children: {
    options: ['Table.HeaderCell'],
    isRequired: true,
    description: 'Cell slot.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to every cell.',
  },
  intent: {
    options: BOX_INTENTS,
    description: 'Color tone applied to every cell.',
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
