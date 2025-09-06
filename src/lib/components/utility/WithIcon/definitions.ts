import { IconPosition } from 'lib/definitions'

import { NativeElemProps } from '../NativeElem'
import { SvgIconProps } from 'lib/components/elements'

export type WithIconOwnProps = {
  iconPosition?: IconPosition
}

export const WITH_ICON_INHERITED_PROPS = {
  NativeElem: ['children', 'elemRef'] as const satisfies readonly (keyof NativeElemProps<any>)[],
  SvgIcon: ['iconName'] as const satisfies readonly (keyof SvgIconProps)[],
}

export type WithIconInheritedProps = Pick<
  NativeElemProps<'span'>,
  (typeof WITH_ICON_INHERITED_PROPS)['NativeElem'][number]
> &
  Pick<SvgIconProps, (typeof WITH_ICON_INHERITED_PROPS)['SvgIcon'][number]>

export type WithIconProps = WithIconOwnProps & WithIconInheritedProps
