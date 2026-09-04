import { RefObject } from 'react'

import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

export type AutocompleteProps = {
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
  size?: TShirtSize
  disableFiltering?: boolean
  debounceDelay?: number
  placeholder?: string
  showToggle?: boolean
  visibleItemsCount?: number
  noOptionsLabel?: string
  tagRef?: RefObject<HTMLDivElement | null>
  // Box
  children: BoxProps['children']
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: BoxProps['inlineSize']
  disabled?: BoxProps['disabled']
}
