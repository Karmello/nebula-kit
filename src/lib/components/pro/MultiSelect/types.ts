import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'
import type { SelectVariant } from 'lib/components/core/Select/types'
import { TShirtSize } from 'lib/types'

export type MultiSelectVariant = SelectVariant

export type MultiSelectProps = {
  // own
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
  scale?: TShirtSize
  visibleItemsCount?: number
  staticLabel?: string
  variant?: MultiSelectVariant
  // Box
  children: BoxProps['children']
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
}
