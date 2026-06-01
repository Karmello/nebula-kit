import { ComponentMeta } from 'client/definitions'
import { COLORS } from 'lib/definitions'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING_BLOCK,
  DEFAULT_TOOLTIP_PADDING_INLINE,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TOOLTIP_INTENTS,
  TOOLTIP_MODES,
  TOOLTIP_OFFSET,
  TOOLTIP_PLACEMENTS,
  TOOLTIP_VARIANTS,
} from './constants'

import { Button } from './../../core/Button'
import { Icon } from './../../core/Icon'
import { Tooltip, type TooltipProps } from '..'
import BOX_META from './../../core/Box/meta'

export default {
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
      composedOf: ['Box', 'Text'],
    },
    props: {
      children: {
        options: BOX_META.Box.props.children.options,
        isRequired: true,
        description: BOX_META.Box.props.children.description,
      },
      color: {
        options: COLORS,
        description: BOX_META.Box.props.color.description,
      },
      content: {
        options: ['string'],
        isRequired: true,
        description: 'The text content displayed inside the tooltip.',
      },
      intent: {
        options: TOOLTIP_INTENTS,
        defaultValue: String(DEFAULT_TOOLTIP_INTENT),
        description: BOX_META.Box.props.intent.description,
      },
      maxInlineSize: {
        options: ['number'],
        defaultValue: String(DEFAULT_TOOLTIP_MAX_INLINE_SIZE),
        description: 'Maximum logical width in pixels.',
      },
      minInlineSize: {
        options: ['number'],
        description: 'Minimum logical width in pixels.',
      },
      mode: {
        options: TOOLTIP_MODES,
        defaultValue: DEFAULT_TOOLTIP_MODE,
        description: 'Controls which interaction opens the tooltip.',
      },
      offset: {
        options: TOOLTIP_OFFSET,
        defaultValue: String(DEFAULT_TOOLTIP_OFFSET),
        description: 'Distance between the tooltip and its trigger element.',
      },
      padding: BOX_META.Box.props.padding,
      paddingBlock: {
        ...BOX_META.Box.props.paddingBlock,
        defaultValue: String(DEFAULT_TOOLTIP_PADDING_BLOCK),
      },
      paddingInline: {
        ...BOX_META.Box.props.paddingInline,
        defaultValue: String(DEFAULT_TOOLTIP_PADDING_INLINE),
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
        description: BOX_META.Box.props.variant.description,
      },
    },
    examples: [
      {
        description: 'Tooltip using hover mode (default).',
        jsx: (
          <Tooltip content="This tooltip shows on hover." mode="hover">
            <Icon name="message-circle-question-mark" size="40px" />
          </Tooltip>
        ),
      },
      {
        description: 'Tooltip using click mode.',
        jsx: (
          <Tooltip content="This tooltip shows on click." mode="click">
            <Button>Click me</Button>
          </Tooltip>
        ),
      },
    ],
    changelog: {
      '0.9.0': ['added configurable hover and click interaction modes with improved dismissal behavior'],
      '0.3.0': ['released'],
    },
  } as ComponentMeta<TooltipProps>,
}
