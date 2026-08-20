import { ComponentPropsWithoutRef } from 'react'

import { BoxProps, IconProps } from 'lib/index.core'
import type { IconButtonTag, TShirtSize } from 'lib/types'

export type IconButtonProps<T extends IconButtonTag = 'button'> = {
  scale?: TShirtSize
  loading?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
} & {
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
} & Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'elevated' | 'ripple'>
