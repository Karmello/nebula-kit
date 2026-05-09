import { ComponentMeta } from 'client/definitions'
import { TooltipProps } from 'lib/components'
import { PORTAL_PLACEMENTS } from 'lib/components/core/utility/Portal'

import {
  DEFAULT_TOOLTIP_INTENT,
  DEFAULT_TOOLTIP_MODE,
  DEFAULT_TOOLTIP_OFFSET,
  DEFAULT_TOOLTIP_PADDING,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TOOLTIP_VARIANT,
  TOOLTIP_MODES,
  TOOLTIP_VARIANTS,
} from 'lib/components/pro/overlays/Tooltip'

import { BOX_PROPS_META } from '../Box/props'

const TOOLTIP_PROPS_META: ComponentMeta<TooltipProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  content: {
    options: ['string'],
    isRequired: true,
    description: 'The text content displayed inside the tooltip.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_TOOLTIP_INTENT),
  },
  maxInlineSize: {
    ...BOX_PROPS_META.maxInlineSize,
    options: ['number'],
    isRequired: true,
    isResponsive: false,
  },
  minInlineSize: {
    ...BOX_PROPS_META.minInlineSize,
    options: ['number'],
    isRequired: true,
    isResponsive: false,
  },
  mode: {
    options: TOOLTIP_MODES,
    defaultValue: DEFAULT_TOOLTIP_MODE,
    description: 'Controls which interaction opens the tooltip.',
  },
  offset: {
    options: ['number'],
    defaultValue: String(DEFAULT_TOOLTIP_OFFSET),
    description: 'Distance in pixels between the tooltip and its trigger element.',
  },
  padding: {
    ...BOX_PROPS_META.padding,
    defaultValue: String(DEFAULT_TOOLTIP_PADDING),
  },
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingInline: BOX_PROPS_META.paddingInline,
  placement: {
    options: PORTAL_PLACEMENTS,
    defaultValue: DEFAULT_TOOLTIP_PLACEMENT,
    description:
      'Preferred position of the tooltip relative to its trigger element. The position gets auto-adjusted so the tooltip stays visible.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  textAlign: BOX_PROPS_META.textAlign,
  variant: {
    ...BOX_PROPS_META.variant,
    options: TOOLTIP_VARIANTS,
    defaultValue: DEFAULT_TOOLTIP_VARIANT,
  },
}

export { TOOLTIP_PROPS_META }
