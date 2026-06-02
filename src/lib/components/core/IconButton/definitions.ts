import { ICON_BUTTON_TAGS } from 'lib/constants'
import { WithIconProps } from 'lib/index.core'
import { ControlSize, IconButtonTag } from 'lib/types'

import { ActionSurfaceProps } from '../ActionSurface'

export const DEFAULT_ICON_BUTTON_VARIANT: IconButtonProps['variant'] = 'solid'
export const DEFAULT_ICON_BUTTON_INTENT: IconButtonProps['intent'] = 'tertiary'
export const DEFAULT_ICON_BUTTON_RIPPLE: IconButtonProps['ripple'] = true

type IconButtonOwnProps = {
  size?: ControlSize
  loading?: boolean
}

type PropsFromActionSurface<T extends IconButtonTag = (typeof ICON_BUTTON_TAGS)[0]> = Pick<
  ActionSurfaceProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'ripple' | 'onClick' | 'elevated' | 'interactive'
>

type PropsFromWithIcon = Pick<WithIconProps, 'customSvgIcon' | 'iconName' | 'iconAngle'>

export type IconButtonProps<T extends IconButtonTag = (typeof ICON_BUTTON_TAGS)[0]> = PropsFromActionSurface<T> &
  PropsFromWithIcon &
  IconButtonOwnProps
