import { ComponentPropsWithoutRef } from 'react'

import { FlexProps, IconProps } from 'lib/index.core'
import { ControlSize, IconButtonTag } from 'lib/types'

export type IconButtonProps<T extends IconButtonTag = 'button'> = {
  size?: ControlSize
  loading?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
} & {
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
} & Pick<FlexProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'elevated' | 'ripple'>
