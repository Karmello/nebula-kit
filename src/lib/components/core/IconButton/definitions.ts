import { type ControlSize } from 'lib/definitions'

import { DEFAULT_ICON_BUTTON_TAG } from './icon-button'
import { ActionSurfaceProps } from '../ActionSurface'
import { WithIconProps } from '../WithIcon'

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
