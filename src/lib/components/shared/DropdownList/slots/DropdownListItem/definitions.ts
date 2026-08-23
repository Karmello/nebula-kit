import { ComponentPropsWithoutRef } from 'react'

import { BoxProps } from 'lib/index.core'

export type DropdownListItemProps = {
  // Box
  blockSize?: BoxProps['blockSize']
  children?: BoxProps['children']
  disabled?: BoxProps['disabled']
  elevated?: BoxProps['elevated']
  inlineSize?: BoxProps['inlineSize']
  maxBlockSize?: BoxProps['maxBlockSize']
  maxInlineSize?: BoxProps['maxInlineSize']
  minBlockSize?: BoxProps['minBlockSize']
  minInlineSize?: BoxProps['minInlineSize']
  padding?: BoxProps['padding']
  paddingBlock?: BoxProps['paddingBlock']
  paddingInline?: BoxProps['paddingInline']
  ripple?: BoxProps['ripple']
  surface?: BoxProps['surface']
  // own
  onClick?: ComponentPropsWithoutRef<'button'>['onClick']
}
