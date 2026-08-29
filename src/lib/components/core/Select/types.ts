import { TShirtSize } from 'lib/types'

import { BoxColor, BoxIntent, BoxProps, BoxVariant } from '../Box'

export type SelectProps = {
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  scale?: TShirtSize
  visibleItemsCount?: number
  staticLabel?: string
  variant?: BoxVariant
  // Box
  children: BoxProps['children']
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
}
