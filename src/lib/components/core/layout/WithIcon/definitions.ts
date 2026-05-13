import { BoxProps, FlexProps, HtmlTagProps, IconProps } from 'lib/components'
import { CssFlexJustifyContent } from 'lib/definitions'
import { RotateProps } from 'lib/components/core/motion/Rotate/definitions'

export const DEFAULT_WITH_ICON_ICON_PLACEMENT: WithIconProps['iconPlacement'] = 'left'
export const DEFAULT_WITH_ICON_GAP: WithIconProps['gap'] = 'xs'

export const WITH_ICON_ICON_PLACEMENTS = ['left', 'right'] as const
export const WITH_ICON_JUSTIFY_CONTENT = ['center', 'flex-start', 'space-between'] as const satisfies CssFlexJustifyContent[]

export type WithIconIconPlacement = (typeof WITH_ICON_ICON_PLACEMENTS)[number]
export type WithIconJustifyContent = (typeof WITH_ICON_JUSTIFY_CONTENT)[number]

type WithIconOwnProps = {
  iconPlacement?: WithIconIconPlacement
}

type PropsFromHtmlTag = Omit<HtmlTagProps<'span'>, 'tag' | 'children'> & {
  children: HtmlTagProps<'span'>['children']
}

type PropsFromBox = Pick<BoxProps<'span'>, 'inlineSize'>

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

export type WithIconProps = PropsFromHtmlTag & PropsFromBox & PropsFromFlex & PropsFromIcon & PropsFromRotate & WithIconOwnProps
