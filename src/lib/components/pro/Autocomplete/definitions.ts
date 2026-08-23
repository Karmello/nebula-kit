import { DropdownListProps } from 'lib/components/shared'
import { BoxProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

export const DEFAULT_AUTOCOMPLETE_INLINE_SIZE: AutocompleteProps['inlineSize'] = '100%'
export const DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING: AutocompleteProps['disableFiltering'] = false
export const DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE: AutocompleteProps['showToggle'] = true
export const DEFAULT_AUTOCOMPLETE_INTENT: AutocompleteProps['intent'] = 'tertiary'

type AutocompleteOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
  size?: TShirtSize
  dropdownPlacement?: DropdownListProps['placement']
  disableFiltering?: boolean
  debounceDelay?: number
  placeholder?: string
  showToggle?: boolean
}

type PropsFromBox = {
  inlineSize?: BoxProps<'div'>['inlineSize']
  disabled?: BoxProps<'div'>['disabled']
  children: BoxProps<'div'>['children']
}

type PropsFromDropdownList = {
  tagAttrs?: DropdownListProps['tagAttrs']
  tagRef?: DropdownListProps['tagRef']
  color?: DropdownListProps['color']
  intent?: DropdownListProps['intent']
  scrollAlign?: DropdownListProps['scrollAlign']
  visibleItemsCount?: DropdownListProps['visibleItemsCount']
  noOptionsLabel?: DropdownListProps['noOptionsLabel']
}

export type AutocompleteProps = PropsFromBox & PropsFromDropdownList & AutocompleteOwnProps
