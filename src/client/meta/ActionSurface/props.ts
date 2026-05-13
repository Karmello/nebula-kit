import { ComponentMeta } from 'client/definitions'

import { type ActionSurfaceProps } from 'lib/components'

import {
  ACTION_SURFACE_TAGS,
  ACTION_SURFACE_SIZES,
  DEFAULT_ACTION_SURFACE_SIZE,
  DEFAULT_ACTION_SURFACE_INTENT,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_TEXT_ALIGN,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_VARIANT,
  ACTION_SURFACE_TEXT_ALIGNS,
} from 'lib/components/core/controls/ActionSurface/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'

const ACTION_SURFACE_PROPS_META: ComponentMeta<ActionSurfaceProps>['props'] = {
  boldHeading: {
    ...TEXT_PROPS_META.bold,
    description: 'Toggles bold styling for the heading text.',
  },
  color: BOX_PROPS_META.color,
  customSvgIcon: TEXT_PROPS_META.customSvgIcon,
  description: {
    options: ['ReactNode'],
    description: 'Secondary text displayed below the heading.',
  },
  disabled: BOX_PROPS_META.disabled,
  elevated: BOX_PROPS_META.elevated,
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the surface to match the full width of its container.',
  },
  heading: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Primary text displayed within the component.',
  },
  iconAngle: TEXT_PROPS_META.iconAngle,
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: {
    ...TEXT_PROPS_META.iconPlacement,
    description: 'Icon placement relative to the heading text.',
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  inlineTrailingIcon: {
    options: ['boolean'],
    description: 'Keeps the trailing icon inline with the heading text instead of pushing it to the edge.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_ACTION_SURFACE_INTENT),
  },
  interactive: {
    ...BOX_PROPS_META.interactive,
    defaultValue: String(DEFAULT_ACTION_SURFACE_INTERACTIVE),
  },
  italicDescription: {
    ...TEXT_PROPS_META.italic,
    description: 'Toggles italic styling for the description text.',
  },
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
  },
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
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
    options: ACTION_SURFACE_TEXT_ALIGNS,
    defaultValue: String(DEFAULT_ACTION_SURFACE_TEXT_ALIGN),
  },
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_ACTION_SURFACE_VARIANT),
  },
}

export { ACTION_SURFACE_PROPS_META }
