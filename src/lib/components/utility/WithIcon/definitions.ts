import { SvgIconProps } from 'lib/components'

import { NativeElemProps } from '../NativeElem'

export const IconPosition = ['left', 'right'] as const
export type IconPosition = (typeof IconPosition)[number]

export const DEFAULT_WITH_ICON_ICON_POSITION: IconPosition = 'left'

export type WithIconOwnProps = {
  iconPosition?: IconPosition
}

export const WITH_ICON_INHERITED_PROPS = {
  NativeElem: ['children', 'elemProps'] as const satisfies readonly (keyof NativeElemProps<'span'>)[],
  SvgIcon: ['iconName', 'iconSize'] as const satisfies readonly (keyof SvgIconProps)[],
}

export type WithIconInheritedProps = Pick<
  NativeElemProps<'span'>,
  (typeof WITH_ICON_INHERITED_PROPS)['NativeElem'][number]
> &
  Pick<SvgIconProps, (typeof WITH_ICON_INHERITED_PROPS)['SvgIcon'][number]>

export type WithIconProps = WithIconOwnProps & WithIconInheritedProps
