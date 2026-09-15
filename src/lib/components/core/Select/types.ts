import { TShirtSize } from 'lib/types'

import { BoxColor, BoxIntent, BoxProps } from '../Box'
import { SELECT_VARIANTS } from './constants'

export type SelectVariant = (typeof SELECT_VARIANTS)[number]

export type SelectProps = {
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  scale?: TShirtSize
  visibleItemsCount?: number
  staticLabel?: string
  variant?: SelectVariant
  // Box
  children: BoxProps['children']
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
}
