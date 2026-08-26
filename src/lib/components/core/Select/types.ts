import { TShirtSize } from 'lib/types'

import { BoxColor, BoxIntent, BoxProps } from '../Box'

export type SelectProps = {
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  scale?: TShirtSize
  visibleItemsCount?: number
  staticLabel?: string
  // Box
  children: BoxProps['children']
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
}
