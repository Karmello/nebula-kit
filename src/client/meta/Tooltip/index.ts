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
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TOOLTIP_CHANGELOG } from './changelog'
import { TOOLTIP_EXAMPLES } from './examples'

export const TOOLTIP_META = {
  overview: {
    bundle: 'pro',
    title: 'Non-interactive overlay for displaying short, contextual information.',
    description:
      'Tooltip displays supplementary information related to another element. It is intended for brief hints, explanations and labels that appear on demand without disrupting the surrounding interface.',
    features: [
      'supports hover and click activation modes',
      'positions itself automatically relative to its trigger',
      'prevents viewport overflow through collision detection',
      'supports automatic dismissal via outside click and Escape key',
      'configurable placement and offset behavior',
    ],
    composedOf: ['Floating', 'Box', 'Text'],
  },
  props: {
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
  },
  examples: TOOLTIP_EXAMPLES,
  changelog: TOOLTIP_CHANGELOG,
} satisfies ComponentMeta<TooltipProps>
