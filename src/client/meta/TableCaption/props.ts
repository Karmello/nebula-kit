import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { DEFAULT_TABLE_CAPTION_INTENT } from 'lib/components/core/Table/slots/TableCaption/constants'
import type { TableCaptionProps } from 'lib/components/core/Table/slots/TableCaption/types'
import { CSS_TEXT_ALIGN } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const TABLE_CAPTION_PROPS: Record<keyof TableCaptionProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_TABLE_CAPTION_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the top and bottom sides.',
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the left and right sides.',
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
    description: 'Text alignment within the component.',
  },
}
