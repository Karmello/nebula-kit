import { ComponentMeta } from 'client/definitions'
import { IconButtonProps } from 'lib/components'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'
import { ICON_BUTTON_TAGS } from 'lib/components/core/IconButton'

import { ICON_PROPS_META } from '../Icon/props'
import { ACTION_SURFACE_PROPS_META } from '../ActionSurface/props'

const ICON_BUTTON_PROPS_META: ComponentMeta<IconButtonProps>['props'] = {
  children: {
    ...ICON_PROPS_META.children,
    description: 'Custom SVG icon rendered instead of iconName.',
  },
  color: ACTION_SURFACE_PROPS_META.color,
  disabled: ACTION_SURFACE_PROPS_META.disabled,
  iconName: ICON_PROPS_META.name,
  intent: ACTION_SURFACE_PROPS_META.intent,
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
  },
  onClick: ACTION_SURFACE_PROPS_META.onClick,
  ripple: ACTION_SURFACE_PROPS_META.ripple,
  size: {
    options: CONTROL_SIZES,
    defaultValue: DEFAULT_CONTROL_SIZE,
    description: 'Controls the overall interaction geometry and icon proportions',
  },
  tag: {
    ...ACTION_SURFACE_PROPS_META.tag,
    options: ICON_BUTTON_TAGS,
  },
  tagAttrs: ACTION_SURFACE_PROPS_META.tagAttrs,
  tagRef: ACTION_SURFACE_PROPS_META.tagRef,
  variant: ACTION_SURFACE_PROPS_META.variant,
}

export { ICON_BUTTON_PROPS_META }
