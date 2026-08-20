import { BOX_META } from 'lib/components/core/Box/meta'
import { PROP_GROUPS } from 'lib/constants'
import { TooltipProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

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
} from './constants'
import { TOOLTIP_EXAMPLES } from './examples'

export const TOOLTIP_META = {
  Tooltip: {
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
      content: {
        group: PROP_GROUPS.TOOLTIP,
        options: ['string'],
        isRequired: true,
        description: 'The text content displayed inside the tooltip.',
      },
      placement: {
        group: PROP_GROUPS.TOOLTIP,
        options: TOOLTIP_PLACEMENTS,
        defaultValue: DEFAULT_TOOLTIP_PLACEMENT,
        description:
          'Preferred position of the tooltip relative to its trigger element. The position gets auto-adjusted so the tooltip stays visible.',
      },
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      variant: {
        ...BOX_META.Box.props.variant,
        options: TOOLTIP_VARIANTS,
        defaultValue: String(DEFAULT_TOOLTIP_VARIANT),
        isResponsive: false,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        options: TOOLTIP_INTENTS,
        defaultValue: String(DEFAULT_TOOLTIP_INTENT),
        isResponsive: false,
      },
      mode: {
        group: PROP_GROUPS.INTERACTION,
        options: TOOLTIP_MODES,
        defaultValue: DEFAULT_TOOLTIP_MODE,
        description: 'Controls which interaction opens the tooltip.',
      },
      minInlineSize: {
        ...BOX_META.Box.props.minInlineSize,
        options: ['number'],
        isResponsive: false,
      },
      maxInlineSize: {
        ...BOX_META.Box.props.maxInlineSize,
        options: ['number'],
        defaultValue: String(DEFAULT_TOOLTIP_MAX_INLINE_SIZE),
        isResponsive: false,
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Trigger element.',
      },
    },
    examples: TOOLTIP_EXAMPLES,
    changelog: {
      '0.9.0': ['added configurable hover and click interaction modes with improved dismissal behavior'],
      '0.3.0': ['released'],
    },
  } satisfies ComponentMeta<TooltipProps>,
}
