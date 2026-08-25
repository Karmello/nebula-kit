import { BOX_COLORS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TOOLTIP_INTENTS,
  TOOLTIP_MODES,
  TOOLTIP_PLACEMENTS,
  TOOLTIP_VARIANTS,
} from 'lib/components/pro/Tooltip/constants'
import { TooltipProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const TOOLTIP_PROPS: Record<keyof TooltipProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Trigger element.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    isResponsive: false,
  },
  content: {
    options: ['string'],
    isRequired: true,
    description: 'The text content displayed inside the tooltip.',
  },
  intent: {
    options: TOOLTIP_INTENTS,
    defaultValue: String(DEFAULT_TOOLTIP_INTENT),
    description: "Color tone applied to the component's main color.",
    isResponsive: false,
  },
  maxInlineSize: {
    options: ['number'],
    defaultValue: String(DEFAULT_TOOLTIP_MAX_INLINE_SIZE),
    isResponsive: false,
    description: 'Maximum logical width.',
    link: true,
  },
  minInlineSize: {
    options: ['number'],
    isResponsive: false,
    description: 'Minimum logical width.',
    link: true,
  },
  mode: {
    options: TOOLTIP_MODES,
    defaultValue: DEFAULT_TOOLTIP_MODE,
    description: 'Controls which interaction opens the tooltip.',
  },
  placement: {
    options: TOOLTIP_PLACEMENTS,
    defaultValue: DEFAULT_TOOLTIP_PLACEMENT,
    description:
      'Preferred position of the tooltip relative to its trigger element. The position gets auto-adjusted so the tooltip stays visible.',
  },
  variant: {
    options: TOOLTIP_VARIANTS,
    defaultValue: String(DEFAULT_TOOLTIP_VARIANT),
    description: 'Visual style variant.',
    isResponsive: false,
  },
}
