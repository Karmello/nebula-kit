import {
  DEFAULT_ICON_BUTTON_INTENT,
  DEFAULT_ICON_BUTTON_RIPPLE,
  DEFAULT_ICON_BUTTON_SCALE,
  DEFAULT_ICON_BUTTON_VARIANT,
  ICON_BUTTON_TAGS,
} from 'lib/components/core/IconButton/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { IconButtonProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'
import { ICON_META } from '../Icon'

export const ICON_BUTTON_PROPS: Record<keyof IconButtonProps, Prop> = {
  color: BOX_META.props.color,
  customSvgIcon: {
    ...ICON_META.props.children,
    description: 'Custom SVG icon rendered instead of iconName.',
  },
  disabled: BOX_META.props.disabled,
  elevated: BOX_META.props.elevated,
  iconName: ICON_META.props.name,
  intent: {
    ...BOX_META.props.intent,
    defaultValue: String(DEFAULT_ICON_BUTTON_INTENT),
  },
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
  },
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the element.',
  },
  ripple: {
    ...BOX_META.props.ripple,
    defaultValue: String(DEFAULT_ICON_BUTTON_RIPPLE),
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_ICON_BUTTON_SCALE,
    description: 'Controls the overall interaction geometry and icon proportions',
  },
  tag: {
    ...BOX_META.props.tag,
    options: ICON_BUTTON_TAGS,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  variant: {
    ...BOX_META.props.variant,
    defaultValue: String(DEFAULT_ICON_BUTTON_VARIANT),
  },
}
