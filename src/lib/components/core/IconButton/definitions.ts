import { ComponentPropsWithoutRef } from 'react'

import { BoxProps, WithIconProps } from 'lib/index.core'
import { ControlSize, IconButtonTag } from 'lib/types'

export const DEFAULT_ICON_BUTTON_VARIANT: IconButtonProps['variant'] = 'solid'
export const DEFAULT_ICON_BUTTON_INTENT: IconButtonProps['intent'] = 'tertiary'
export const DEFAULT_ICON_BUTTON_RIPPLE: IconButtonProps['ripple'] = true

export type IconButtonProps<T extends IconButtonTag = 'button'> = Pick<
  BoxProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'ripple' | 'elevated'
> &
  Pick<WithIconProps, 'customSvgIcon' | 'iconName' | 'iconAngle'> & {
    size?: ControlSize
    loading?: boolean
    onClick?: ComponentPropsWithoutRef<T>['onClick']
  }
