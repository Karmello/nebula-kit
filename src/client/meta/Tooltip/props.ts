import { ComponentMeta } from 'client/definitions'
import { TooltipProps } from 'lib/components'
import { COLORS } from 'lib/definitions'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MAX_INLINE_SIZE,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TOOLTIP_INTENTS,
  TOOLTIP_MODES,
  TOOLTIP_OFFSET,
  TOOLTIP_PLACEMENTS,
  TOOLTIP_VARIANTS,
} from 'lib/components/pro/Tooltip/constants'

import { BOX_PROPS_META } from '../Box/props'

const TOOLTIP_PROPS_META: ComponentMeta<TooltipProps>['props'] = {
  children: {
    options: BOX_PROPS_META.children.options,
    isRequired: true,
    description: BOX_PROPS_META.children.description,
  },
  color: {
    options: COLORS,
    description: BOX_PROPS_META.color.description,
  },
  content: {
    options: ['string'],
    isRequired: true,
    description: 'The text content displayed inside the tooltip.',
  },
  intent: {
    options: TOOLTIP_INTENTS,
    defaultValue: String(DEFAULT_TOOLTIP_INTENT),
    description: BOX_PROPS_META.intent.description,
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
  padding: {
    ...BOX_PROPS_META.padding,
    defaultValue: String(DEFAULT_TOOLTIP_PADDING),
  },
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingInline: BOX_PROPS_META.paddingInline,
  placement: {
    options: TOOLTIP_PLACEMENTS,
    defaultValue: DEFAULT_TOOLTIP_PLACEMENT,
    description:
      'Preferred position of the tooltip relative to its trigger element. The position gets auto-adjusted so the tooltip stays visible.',
  },
  variant: {
    options: TOOLTIP_VARIANTS,
    defaultValue: String(DEFAULT_TOOLTIP_VARIANT),
    description: BOX_PROPS_META.variant.description,
  },
}

export { TOOLTIP_PROPS_META }
