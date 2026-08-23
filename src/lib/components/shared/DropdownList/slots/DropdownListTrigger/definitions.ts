import { ComponentPropsWithoutRef, ElementType } from 'react'

import { BoxProps } from 'lib/index.core'

export const DEFAULT_DROPDOWN_LIST_TRIGGER_VARIANT: DropdownListTriggerProps['variant'] = 'solid'

export type DropdownListTriggerProps<T extends ElementType = 'button'> = {
  // Box
  tag?: BoxProps<T>['tag']
  blockSize?: BoxProps<T>['blockSize']
  children?: BoxProps<T>['children']
  disabled?: BoxProps<T>['disabled']
  inlineSize?: BoxProps<T>['inlineSize']
  maxBlockSize?: BoxProps<T>['maxBlockSize']
  minBlockSize?: BoxProps<T>['minBlockSize']
  maxInlineSize?: BoxProps<T>['maxInlineSize']
  minInlineSize?: BoxProps<T>['minInlineSize']
  padding?: BoxProps<T>['padding']
  paddingBlock?: BoxProps<T>['paddingBlock']
  paddingInline?: BoxProps<T>['paddingInline']
  ripple?: BoxProps<T>['ripple']
  surface?: BoxProps<T>['surface']
  variant?: BoxProps<T>['variant']
  intent?: BoxProps<T>['intent']
  // own
  onClick?: ComponentPropsWithoutRef<T>['onClick']
}
