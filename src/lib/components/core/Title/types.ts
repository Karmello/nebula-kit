import { FlexProps, IconProps, TextProps } from 'lib/index.core'

import { TITLE_ICON_PLACEMENTS, TITLE_TYPOGRAPHY } from './constants'

export type TitleTypography = (typeof TITLE_TYPOGRAPHY)[number]
export type TitleIconPlacement = (typeof TITLE_ICON_PLACEMENTS)[number]

export type TitleProps = {
  typography?: TitleTypography
  iconPlacement?: TitleIconPlacement
} & Pick<FlexProps<'span'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent'> & {
    children: TextProps['children']
    iconName?: IconProps['name']
    customSvgIcon?: IconProps['children']
  }
