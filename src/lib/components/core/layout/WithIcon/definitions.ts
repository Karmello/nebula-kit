import { BoxProps, FlexProps, HtmlTagProps, IconProps } from 'lib/components'
import { RotateProps } from 'lib/components/core/motion/Rotate/definitions'

export const DEFAULT_WITH_ICON_ICON_PLACEMENT: WithIconProps['iconPlacement'] = 'left'
export const DEFAULT_WITH_ICON_GAP: WithIconProps['gap'] = '7px'
export const ICON_PLACEMENT = ['left', 'right'] as const

export type IconPlacement = (typeof ICON_PLACEMENT)[number]

type WithIconOwnProps = {
  iconPlacement?: IconPlacement
}

type PropsFromHtmlTag = Omit<HtmlTagProps<'span'>, 'tag' | 'children'> & {
  children: HtmlTagProps<'span'>['children']
}

type PropsFromBox = Pick<BoxProps<'span'>, 'inlineSize'>

type PropsFromFlex = Pick<FlexProps, 'justifyContent' | 'gap'>

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

export type WithIconProps = PropsFromHtmlTag &
  PropsFromBox &
  PropsFromFlex &
  PropsFromIcon &
  PropsFromRotate &
  WithIconOwnProps
