import { ComponentMeta } from 'client/definitions'
import { ActionSurfaceProps } from 'lib/components'
import { DEFAULT_ACTION_SURFACE_RIPPLE } from 'lib/components/core/ActionSurface'

import { BOX_PROPS_META } from '../Box/props'

const ACTION_SURFACE_PROPS_META: ComponentMeta<ActionSurfaceProps>['props'] = {
  children: BOX_PROPS_META.children,
  color: BOX_PROPS_META.color,
  disabled: BOX_PROPS_META.disabled,
  elevated: BOX_PROPS_META.elevated,
  intent: BOX_PROPS_META.intent,
  interactive: BOX_PROPS_META.interactive,
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
  tag: BOX_PROPS_META.tag,
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: BOX_PROPS_META.variant,
}

export { ACTION_SURFACE_PROPS_META }
