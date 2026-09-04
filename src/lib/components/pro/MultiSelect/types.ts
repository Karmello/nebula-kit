import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { MULTI_SELECT_VARIANTS } from './constants'

type MultiSelectVariant = (typeof MULTI_SELECT_VARIANTS)[number]

export type MultiSelectProps = {
  // own
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
  size?: TShirtSize
  visibleItemsCount?: number
  staticLabel?: string
  // Box
  children: BoxProps['children']
  variant?: MultiSelectVariant
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
}
