import { BoxProps, DropdownListProps } from 'lib/components'

export const DEFAULT_AUTOCOMPLETE_INLINE_SIZE: AutocompleteProps['inlineSize'] = '100%'
export const DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING: AutocompleteProps['disableFiltering'] = false
export const DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE: AutocompleteProps['showToggle'] = true

type AutocompleteOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
  dropdownPlacement?: DropdownListProps['placement']
  disableFiltering?: boolean
  debounceDelay?: number
  placeholder?: string
  showToggle?: boolean
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'>

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'tagAttrs' | 'tagRef' | 'color' | 'size' | 'intent' | 'scrollAlign' | 'visibleItemsCount' | 'noOptionsLabel'
> & {
  children: DropdownListProps['children']
}

export type AutocompleteProps = PropsFromBox & PropsFromDropdownList & AutocompleteOwnProps
