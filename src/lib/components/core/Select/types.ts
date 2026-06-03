import { ControlSize } from 'lib/types'

import { BoxColor, BoxIntent, BoxProps } from '../Box'
import { SELECT_VARIANTS } from './constants'

type SelectVariant = (typeof SELECT_VARIANTS)[number]

export type SelectProps = {
  // Box
  children: BoxProps['children']
  variant?: SelectVariant
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  size?: ControlSize
  visibleItemsCount?: number
  staticLabel?: string
}
