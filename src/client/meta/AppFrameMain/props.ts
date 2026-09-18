import type { AppFrameMainProps } from 'lib/components/core/AppFrame/slots/AppFrameMain/types'
import type { DocProp } from 'client/definitions'

export const APP_FRAME_MAIN_PROPS: Record<keyof AppFrameMainProps, DocProp> = {
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
  // padding
  padding: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for all sides.',
    link: true,
    group: 'padding',
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
    link: true,
    group: 'padding',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
    link: true,
    group: 'padding',
  },
  paddingTop: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top side.',
    link: true,
    group: 'padding',
  },
  paddingRight: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the right side.',
    link: true,
    group: 'padding',
  },
  paddingBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the bottom side.',
    link: true,
    group: 'padding',
  },
  paddingLeft: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left side.',
    link: true,
    group: 'padding',
  },
}
