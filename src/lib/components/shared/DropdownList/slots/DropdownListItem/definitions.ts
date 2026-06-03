import { ComponentPropsWithoutRef } from 'react'

import { BoxProps } from 'lib/index.core'

export type DropdownListItemProps = Pick<
  BoxProps,
  | 'blockSize'
  | 'children'
  | 'disabled'
  | 'elevated'
  | 'inlineSize'
  | 'maxBlockSize'
  | 'maxInlineSize'
  | 'minBlockSize'
  | 'minInlineSize'
  | 'padding'
  | 'paddingBlock'
  | 'paddingInline'
  | 'ripple'
  | 'surface'
> & {
  onClick?: ComponentPropsWithoutRef<'button'>['onClick']
}
