import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INTENT,
} from 'lib/components/pro/SplitView/slots/SplitViewSide/constants'
import type { SplitViewSideProps } from 'lib/components/pro/SplitView/slots/SplitViewSide/types'
import type { DocProp } from 'client/definitions'

export const SPLIT_VIEW_SIDE_PROPS: Record<keyof SplitViewSideProps, DocProp> = {
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
  // surface
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
    isResponsive: false,
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    isResponsive: false,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  // size
  blockSize: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE),
    description: 'Logical height.',
    group: 'size',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE),
    description: 'Logical width.',
    group: 'size',
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
