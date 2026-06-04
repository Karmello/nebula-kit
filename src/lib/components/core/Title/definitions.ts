import { FlexProps, IconProps, RotateProps } from 'lib/index.core'
import { CssFlexJustifyContent } from 'lib/types'

import { BoxProps } from '../Box'
import { TextTypography } from '../Text'

export const DEFAULT_TITLE_ICON_PLACEMENT: TitleProps['iconPlacement'] = 'left'
export const DEFAULT_TITLE_GAP: TitleProps['gap'] = 'xs'

export const TITLE_ICON_PLACEMENTS = ['left', 'right'] as const
export const TITLE_JUSTIFY_CONTENT = ['center', 'flex-start', 'space-between'] as const satisfies CssFlexJustifyContent[]

export type TitleIconPlacement = (typeof TITLE_ICON_PLACEMENTS)[number]
export type TitleJustifyContent = (typeof TITLE_JUSTIFY_CONTENT)[number]

type TitleOwnProps = {
  iconTypography?: TextTypography
  iconPlacement?: TitleIconPlacement
}

type PropsFromBox = Pick<BoxProps<'span'>, 'children' | 'tagAttrs' | 'tagRef' | 'inlineSize'>

type PropsFromFlex = Pick<FlexProps, 'gap'> & {
  justifyContent?: TitleJustifyContent
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

export type TitleProps = PropsFromBox & PropsFromFlex & PropsFromIcon & PropsFromRotate & TitleOwnProps
