import { ActionSurfaceProps, IconProps } from 'lib/components'
import { ControlSize } from 'lib/definitions'
import { DEFAULT_ICON_BUTTON_TAG } from 'lib/components/core/IconButton/icon-button'

export const ICON_BUTTON_TAGS = ['button', 'a'] as const

export type IconButtonTag = (typeof ICON_BUTTON_TAGS)[number]

type IconButtonOwnProps = {
  size?: ControlSize
  loading?: boolean
}

type PropsFromActionSurface<T extends IconButtonTag = typeof DEFAULT_ICON_BUTTON_TAG> = Pick<
  ActionSurfaceProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'ripple' | 'onClick'
>

type PropsFromIcon = Pick<IconProps, 'children'> & {
  iconName?: IconProps['name']
}

export type IconButtonProps<T extends IconButtonTag = typeof DEFAULT_ICON_BUTTON_TAG> = PropsFromActionSurface<T> &
  PropsFromIcon &
  IconButtonOwnProps
