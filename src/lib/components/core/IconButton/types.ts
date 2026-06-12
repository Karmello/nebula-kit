import { ComponentPropsWithoutRef } from 'react'

import { FlexProps, IconProps } from 'lib/index.core'
import type { IconButtonTag, TShirtSize } from 'lib/types'

export type IconButtonProps<T extends IconButtonTag = 'button'> = {
  size?: TShirtSize
  loading?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
} & {
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
} & Pick<FlexProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'elevated' | 'ripple'>
