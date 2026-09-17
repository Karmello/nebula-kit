import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { TableHeaderProps } from 'lib/components/core/Table/slots/TableHeader/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_HEADER_PROPS: Record<keyof TableHeaderProps, DocProp> = {
  children: {
    options: ['Table.HeaderRow'],
    isRequired: true,
    description: 'Row slot.',
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
  // padding
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides applied to every cell.',
    link: true,
    group: 'padding',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides applied to every cell.',
    link: true,
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
