import type { AppFrameMainProps } from 'lib/components/core/AppFrame/slots/AppFrameMain/types'
import type { DocProp } from 'client/definitions'

export const APP_FRAME_MAIN_PROPS: Record<keyof AppFrameMainProps, DocProp> = {
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
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
    link: true,
  },
  paddingBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the bottom side.',
    link: true,
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
    link: true,
  },
  paddingLeft: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left side.',
    link: true,
  },
  paddingRight: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the right side.',
    link: true,
  },
  paddingTop: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top side.',
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
}
