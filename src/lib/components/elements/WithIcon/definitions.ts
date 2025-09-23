import { HtmlTagProps, IconProps } from 'lib/components'

export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'
export const IconPosition = ['left', 'right'] as const

export type IconPosition = (typeof IconPosition)[number]

type WithIconOwnProps = {
  position?: IconPosition
}

type PropsFromHtmlTag = Omit<HtmlTagProps<'span'>, 'tag' | 'children'> & {
  children: HtmlTagProps<'span'>['children']
}

export type WithIconProps = WithIconOwnProps & IconProps & PropsFromHtmlTag
