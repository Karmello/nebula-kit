import { IconProps } from 'lib/components'

import { HtmlTagProps } from '../HtmlTag'

export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'
export const IconPosition = ['left', 'right'] as const

export type IconPosition = (typeof IconPosition)[number]

export type WithIconOwnProps = {
  iconPosition?: IconPosition
}

export type WithIconProps = Omit<HtmlTagProps<'span'>, 'tag'> &
  Pick<IconProps, 'iconName' | 'iconSize'> &
  WithIconOwnProps
