import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INTENT,
} from 'lib/components/pro/SplitView/slots/SplitViewSide/constants'
import type { SplitViewSideProps } from 'lib/components/pro/SplitView/slots/SplitViewSide/types'
import type { DocProp } from 'client/definitions'

export const SPLIT_VIEW_SIDE_PROPS: Record<keyof SplitViewSideProps, DocProp> = {
  blockSize: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE),
    description: 'Logical height.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  color: {
    options: BOX_COLORS,
    isResponsive: false,
    description: 'Color applied to the component.',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE),
    description: 'Logical width.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
    isResponsive: false,
    description: "Color tone applied to the component's main color.",
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
