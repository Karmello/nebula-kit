import { ComponentMeta } from 'client/definitions'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

import { type IconButtonProps, ICON_BUTTON_TAGS } from '../definitions'
import { ACTION_SURFACE_PROPS_META } from '../../ActionSurface/meta/props'
import { WITH_ICON_PROPS_META } from '../../WithIcon/meta/props'

const ICON_BUTTON_PROPS_META: ComponentMeta<IconButtonProps>['props'] = {
  color: ACTION_SURFACE_PROPS_META.color,
  customSvgIcon: {
    ...WITH_ICON_PROPS_META.customSvgIcon,
    description: 'Custom SVG icon rendered instead of iconName.',
  },
  disabled: ACTION_SURFACE_PROPS_META.disabled,
  elevated: ACTION_SURFACE_PROPS_META.elevated,
  iconAngle: WITH_ICON_PROPS_META.iconAngle,
  iconName: WITH_ICON_PROPS_META.iconName,
  intent: ACTION_SURFACE_PROPS_META.intent,
  interactive: ACTION_SURFACE_PROPS_META.interactive,
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
