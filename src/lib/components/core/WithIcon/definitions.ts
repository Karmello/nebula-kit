import { BoxProps, FlexProps, IconProps } from 'lib/components'
import { CssFlexJustifyContent } from 'lib/definitions'
import { RotateProps } from 'lib/components/core/Rotate/definitions'

import { TextTypography } from '../Text/definitions'

export const DEFAULT_WITH_ICON_ICON_PLACEMENT: WithIconProps['iconPlacement'] = 'left'
export const DEFAULT_WITH_ICON_GAP: WithIconProps['gap'] = 'xs'

export const WITH_ICON_ICON_PLACEMENTS = ['left', 'right'] as const
export const WITH_ICON_JUSTIFY_CONTENT = ['center', 'flex-start', 'space-between'] as const satisfies CssFlexJustifyContent[]

export type WithIconIconPlacement = (typeof WITH_ICON_ICON_PLACEMENTS)[number]
export type WithIconJustifyContent = (typeof WITH_ICON_JUSTIFY_CONTENT)[number]

type WithIconOwnProps = {
  iconTypography?: TextTypography
  iconPlacement?: WithIconIconPlacement
}

type PropsFromBox = Pick<BoxProps<'span'>, 'children' | 'tagAttrs' | 'tagRef' | 'inlineSize'>

type PropsFromFlex = Pick<FlexProps, 'gap'> & {
  justifyContent?: WithIconJustifyContent
}

type PropsFromIcon = {
  iconName?: IconProps['name']
  iconSize?: IconProps['size']
  iconIntent?: IconProps['intent']
  iconColor?: IconProps['color']
  customSvgIcon?: IconProps['children']
}

type PropsFromRotate = {
  iconAngle?: RotateProps['angle']
}

export type WithIconProps = PropsFromBox & PropsFromFlex & PropsFromIcon & PropsFromRotate & WithIconOwnProps
