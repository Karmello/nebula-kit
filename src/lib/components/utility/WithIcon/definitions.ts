import { IconPosition } from 'lib/definitions'
import { IconName } from 'lib/icons'

import { NativeElemProps } from '../NativeElem'

export type WithIconOwnProps = {
  iconName: IconName
  iconPosition?: IconPosition
}

export const WITH_ICON_INHERITED_PROPS = {
  NativeElem: ['children', 'elemProps', 'elemRef'] as const satisfies readonly (keyof NativeElemProps<any>)[],
}

export type WithIconInheritedProps = Pick<
  NativeElemProps<'span'>,
  (typeof WITH_ICON_INHERITED_PROPS)['NativeElem'][number]
>

export type WithIconProps = WithIconOwnProps & WithIconInheritedProps
