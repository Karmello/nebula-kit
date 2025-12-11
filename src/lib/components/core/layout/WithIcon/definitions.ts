import { FlexProps, HtmlTagProps, IconProps } from 'lib/components'
import { RotateProps } from 'lib/components/core/motion/Rotate/definitions'

export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'
export const DEFAULT_WITH_ICON_COLUMN_GAP: WithIconProps['columnGap'] = '7px'
export const ICON_POSITIONS = ['left', 'right'] as const

export type IconPosition = (typeof ICON_POSITIONS)[number]

type WithIconOwnProps = {
  position?: IconPosition
}

type PropsFromHtmlTag = Omit<HtmlTagProps<'span'>, 'tag' | 'children'> & {
  children: HtmlTagProps<'span'>['children']
}

type PropsFromFlex = Pick<FlexProps<'span'>, 'justifyContent' | 'columnGap'>

type PropsFromIcon = Pick<IconProps, 'name' | 'size' | 'intent'>

type PropsFromRotate = {
  iconAngle?: RotateProps['angle']
}

export type WithIconProps = PropsFromHtmlTag &
  PropsFromFlex &
  PropsFromIcon &
  PropsFromRotate &
  WithIconOwnProps
