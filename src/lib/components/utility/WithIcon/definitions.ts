import { SvgIconProps } from 'lib/components'

import { HtmlTagProps } from '../HtmlTag'

export const IconPosition = ['left', 'right'] as const
export type IconPosition = (typeof IconPosition)[number]

export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'

export type WithIconOwnProps = {
  iconPosition?: IconPosition
}

export const WITH_ICON_INHERITED_PROPS = {
  HtmlTag: ['children', 'tagAttrs'] as const satisfies readonly (keyof HtmlTagProps<'span'>)[],
  SvgIcon: ['iconName', 'iconSize'] as const satisfies readonly (keyof SvgIconProps)[],
}

export type WithIconInheritedProps = Pick<
  HtmlTagProps<'span'>,
  (typeof WITH_ICON_INHERITED_PROPS)['HtmlTag'][number]
> &
  Pick<SvgIconProps, (typeof WITH_ICON_INHERITED_PROPS)['SvgIcon'][number]>

export type WithIconProps = WithIconOwnProps & WithIconInheritedProps
