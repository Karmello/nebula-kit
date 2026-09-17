import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { TableRowProps } from 'lib/components/core/Table/slots/TableRow/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_ROW_PROPS: Record<keyof TableRowProps, DocProp> = {
  children: {
    options: ['Table.Cell', 'Table.HeaderCell'],
    isRequired: true,
    description: 'Cell slot.',
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
    description: 'Color tone applied to every cell.',
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to every cell.',
    group: 'surface',
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
