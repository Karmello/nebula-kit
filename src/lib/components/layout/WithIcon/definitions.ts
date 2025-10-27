import { FlexProps, HtmlTagProps, IconProps } from 'lib/components'

export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'
export const DEFAULT_WITH_ICON_COLUMN_GAP: WithIconProps['columnGap'] = 10
export const IconPosition = ['left', 'right'] as const

export type IconPosition = (typeof IconPosition)[number]

type WithIconOwnProps = {
  position?: IconPosition
}

type PropsFromHtmlTag = Omit<HtmlTagProps<'span'>, 'tag' | 'children'> & {
  children: HtmlTagProps<'span'>['children']
}

type PropsFromFlex = Pick<FlexProps<'span'>, 'justifyContent' | 'columnGap'>

type PropsFromIcon = Pick<IconProps, 'name' | 'size' | 'intent'>

export type WithIconProps = PropsFromHtmlTag & PropsFromFlex & PropsFromIcon & WithIconOwnProps
