import { DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/constants'
import type { AppFrameFooterSectionProps } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/types'
import type { DocProp } from 'client/definitions'

export const APP_FRAME_FOOTER_SECTION_PROPS: Record<keyof AppFrameFooterSectionProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  padding: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for all sides.',
    link: true,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING),
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
    link: true,
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
    link: true,
  },
}
