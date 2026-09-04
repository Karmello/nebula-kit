import type { SplitViewMainProps } from 'lib/components/pro/SplitView/slots/SplitViewMain/types'
import type { DocProp } from 'client/definitions'

export const SPLIT_VIEW_MAIN_PROPS: Record<keyof SplitViewMainProps, DocProp> = {
  children: {
    options: ['ReactNode', 'SplitView.MainBar'],
    isRequired: true,
    description: 'Main slot content plus optional MainBar slot.',
  },
  padding: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for all sides.',
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the top and bottom sides.',
  },
  paddingBottom: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the bottom side.',
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the left and right sides.',
  },
  paddingLeft: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the left side.',
  },
  paddingRight: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the right side.',
  },
  paddingTop: {
    options: ['string'],
    isResponsive: true,
    link: true,
    description: 'Padding for the top side.',
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
