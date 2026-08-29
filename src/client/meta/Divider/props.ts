import { BOX_COLORS, BOX_INTENTS, BOX_SURFACES } from 'lib/components/core/Box/constants'
import {
  DEFAULT_DIVIDER_INTENT,
  DEFAULT_DIVIDER_MARGIN_BLOCK,
  DEFAULT_DIVIDER_SURFACE,
} from 'lib/components/core/Divider/constants'
import { DividerProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const DIVIDER_PROPS: Record<keyof DividerProps, DocProp> = {
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_DIVIDER_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  marginBlock: {
    options: ['string'],
    defaultValue: String(DEFAULT_DIVIDER_MARGIN_BLOCK),
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
    link: true,
  },
  marginBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the bottom side.',
    link: true,
  },
  marginTop: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the top side.',
    link: true,
  },
  surface: {
    options: BOX_SURFACES,
    defaultValue: DEFAULT_DIVIDER_SURFACE,
    description:
      'Shifts the component onto an elevated surface level, adjusting the base surface and all related interaction states together.',
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
