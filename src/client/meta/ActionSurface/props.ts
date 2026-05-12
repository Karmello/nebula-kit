import { ComponentMeta } from 'client/definitions'

import { type ActionSurfaceProps } from 'lib/components'

import {
  ACTION_SURFACE_TAGS,
  DEFAULT_ACTION_SURFACE_INTENT,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_VARIANT,
} from 'lib/components/core/controls/ActionSurface/definitions'

import { BOX_PROPS_META } from '../Box/props'

const ACTION_SURFACE_PROPS_META: ComponentMeta<ActionSurfaceProps>['props'] = {
  blockSize: BOX_PROPS_META.blockSize,
  children: {
    ...BOX_PROPS_META.children,
    options: ['ActionSurface.Heading', 'ActionSurface.Description'],
    isRequired: true,
    description: 'ActionSurface.Heading slot is required.',
  },
  color: BOX_PROPS_META.color,
  disabled: BOX_PROPS_META.disabled,
  elevated: BOX_PROPS_META.elevated,
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the ActionSurface to match the full width of its container.',
  },
  hidden: BOX_PROPS_META.hidden,
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_ACTION_SURFACE_INTENT),
  },
  interactive: {
    ...BOX_PROPS_META.interactive,
    defaultValue: String(DEFAULT_ACTION_SURFACE_INTERACTIVE),
  },
  maxBlockSize: BOX_PROPS_META.maxBlockSize,
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minBlockSize: BOX_PROPS_META.minBlockSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  onClick: {
    options: ['e => void'],
    description: 'Click event handler.',
  },
  ripple: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_ACTION_SURFACE_RIPPLE),
    description: 'Toggles the ripple effect on pointer interaction.',
  },
  selected: {
    options: ['boolean'],
    description: 'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
  },
  tag: {
    ...BOX_PROPS_META.tag,
    options: ACTION_SURFACE_TAGS,
    defaultValue: 'button',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_ACTION_SURFACE_VARIANT),
  },
}

export { ACTION_SURFACE_PROPS_META }
