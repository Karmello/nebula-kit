import type { BoxProps, IconProps, TextProps } from 'lib/index.core'

import { TITLE_ICON_PLACEMENTS, TITLE_TYPOGRAPHY } from './constants'

export type TitleTypography = (typeof TITLE_TYPOGRAPHY)[number]
export type TitleIconPlacement = (typeof TITLE_ICON_PLACEMENTS)[number]

export type TitleProps = {
  // own
  typography?: TitleTypography
  iconPlacement?: TitleIconPlacement
  // Box
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  tagRef?: BoxProps<'span'>['tagRef']
  color?: BoxProps<'span'>['color']
  intent?: BoxProps<'span'>['intent']
  // Text
  children: TextProps['children']
  // Icon
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
}
