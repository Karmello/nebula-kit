import type { SplitViewMainProps } from 'lib/components/pro/SplitView/slots/SplitViewMain/types'
import type { DocProp } from 'client/definitions'

export const SPLIT_VIEW_MAIN_PROPS: Record<keyof SplitViewMainProps, DocProp> = {
  children: {
    options: ['ReactNode', 'SplitView.MainBar'],
    isRequired: true,
    description: 'Main slot content plus optional MainBar slot.',
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
    link: true,
    description: 'Padding for all sides.',
    group: 'padding',
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the left and right sides.',
    group: 'padding',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the top and bottom sides.',
    group: 'padding',
  },
  paddingTop: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the top side.',
    group: 'padding',
  },
  paddingRight: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the right side.',
    group: 'padding',
  },
  paddingBottom: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the bottom side.',
    group: 'padding',
  },
  paddingLeft: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the left side.',
    group: 'padding',
  },
}
