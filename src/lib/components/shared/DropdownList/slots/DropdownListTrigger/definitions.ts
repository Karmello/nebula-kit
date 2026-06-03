import { ComponentPropsWithoutRef, ElementType } from 'react'

import { BoxProps } from 'lib/index.core'

export const DEFAULT_DROPDOWN_LIST_TRIGGER_VARIANT: DropdownListTriggerProps['variant'] = 'solid'

export type DropdownListTriggerProps<T extends ElementType = 'button'> = Pick<
  BoxProps<T>,
  | 'tag'
  | 'blockSize'
  | 'children'
  | 'disabled'
  | 'inlineSize'
  | 'maxBlockSize'
  | 'minBlockSize'
  | 'maxInlineSize'
  | 'minInlineSize'
  | 'padding'
  | 'paddingBlock'
  | 'paddingInline'
  | 'ripple'
  | 'surface'
  | 'variant'
  | 'intent'
> & {
  onClick?: ComponentPropsWithoutRef<T>['onClick']
}
