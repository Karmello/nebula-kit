import { ComponentMeta } from 'client/definitions'

import { type ActionSurfaceProps } from 'lib/components'

import {
  ACTION_SURFACE_TAGS,
  ACTION_SURFACE_SIZES,
  DEFAULT_ACTION_SURFACE_SIZE,
  DEFAULT_ACTION_SURFACE_INTENT,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_JUSTIFY_CONTENT,
  DEFAULT_ACTION_SURFACE_TEXT_ALIGN,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_VARIANT,
} from 'lib/components/core/controls/ActionSurface/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'

const ACTION_SURFACE_PROPS_META: ComponentMeta<ActionSurfaceProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  color: BOX_PROPS_META.color,
  customSvgIcon: TEXT_PROPS_META.customSvgIcon,
  description: {
    options: ['ReactNode'],
    description: '...',
  },
  disabled: BOX_PROPS_META.disabled,
  elevated: BOX_PROPS_META.elevated,
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the button to match the full width of its container.',
  },
  heading: {
    options: ['ReactNode'],
    isRequired: true,
    description: '...',
  },
  iconAngle: TEXT_PROPS_META.iconAngle,
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: TEXT_PROPS_META.iconPlacement,
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_ACTION_SURFACE_INTENT),
  },
  interactive: {
    ...BOX_PROPS_META.interactive,
    defaultValue: String(DEFAULT_ACTION_SURFACE_INTERACTIVE),
  },
  justifyContent: {
    ...TEXT_PROPS_META.justifyContent,
    defaultValue: String(DEFAULT_ACTION_SURFACE_JUSTIFY_CONTENT),
    description: 'Distributes text and icon along the main axis.',
  },
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
  },
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the button element.',
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
  size: {
    options: Object.values(ACTION_SURFACE_SIZES),
    defaultValue: DEFAULT_ACTION_SURFACE_SIZE,
    description: 'Controls overall proportions to keep content balanced at each size.',
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: ACTION_SURFACE_TAGS,
    defaultValue: 'button',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  textAlign: {
    ...TEXT_PROPS_META.textAlign,
    defaultValue: String(DEFAULT_ACTION_SURFACE_TEXT_ALIGN),
  },
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_ACTION_SURFACE_VARIANT),
  },
}

export { ACTION_SURFACE_PROPS_META }
