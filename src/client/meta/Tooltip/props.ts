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
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLTIP_PROPS: Record<keyof TooltipProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
    description: 'Trigger element.',
  },
  color: {
    ...BOX_META.props.color,
    isResponsive: false,
  },
  content: {
    options: ['string'],
    isRequired: true,
    description: 'The text content displayed inside the tooltip.',
  },
  intent: {
    ...BOX_META.props.intent,
    options: TOOLTIP_INTENTS,
    defaultValue: String(DEFAULT_TOOLTIP_INTENT),
    isResponsive: false,
  },
  maxInlineSize: {
    ...BOX_META.props.maxInlineSize,
    options: ['number'],
    defaultValue: String(DEFAULT_TOOLTIP_MAX_INLINE_SIZE),
    isResponsive: false,
  },
  minInlineSize: {
    ...BOX_META.props.minInlineSize,
    options: ['number'],
    isResponsive: false,
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
    ...BOX_META.props.variant,
    options: TOOLTIP_VARIANTS,
    defaultValue: String(DEFAULT_TOOLTIP_VARIANT),
    isResponsive: false,
  },
}
