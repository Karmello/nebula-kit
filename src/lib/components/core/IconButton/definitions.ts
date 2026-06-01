import { type ControlSize } from '../../../types'

import { ActionSurfaceProps } from '../ActionSurface'
import { WithIconProps } from '../WithIcon'

export const DEFAULT_ICON_BUTTON_TAG: IconButtonTag = 'button'
export const DEFAULT_ICON_BUTTON_VARIANT: IconButtonProps['variant'] = 'solid'
export const DEFAULT_ICON_BUTTON_INTENT: IconButtonProps['intent'] = 'tertiary'
export const DEFAULT_ICON_BUTTON_RIPPLE: IconButtonProps['ripple'] = true

export const ICON_BUTTON_TAGS = ['button', 'a'] as const

export type IconButtonTag = (typeof ICON_BUTTON_TAGS)[number]

type IconButtonOwnProps = {
  size?: ControlSize
  loading?: boolean
}

type PropsFromActionSurface<T extends IconButtonTag = typeof DEFAULT_ICON_BUTTON_TAG> = Pick<
  ActionSurfaceProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'ripple' | 'onClick' | 'elevated' | 'interactive'
>

type PropsFromWithIcon = Pick<WithIconProps, 'customSvgIcon' | 'iconName' | 'iconAngle'>

export type IconButtonProps<T extends IconButtonTag = typeof DEFAULT_ICON_BUTTON_TAG> = PropsFromActionSurface<T> &
  PropsFromWithIcon &
  IconButtonOwnProps
