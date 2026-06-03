import { BoxProps, SelectProps } from 'lib/index.core'

export type SelectOptionProps = {
  // Box
  children: BoxProps<'button'>['children']
  // own
  value: string
}

export type SelectOptionInternalProps = {
  // Box
  tagRef: BoxProps<'button'>['tagRef']
  tagAttrs: BoxProps<'button'>['tagAttrs']
  surface: BoxProps['surface']
  // Select
  variant: SelectProps['variant']
  intent: SelectProps['intent']
  color: SelectProps['color']
  size: SelectProps['size']
  // own
  isOpeningDownwards: boolean
  isFirst: boolean
  isLast: boolean
}
