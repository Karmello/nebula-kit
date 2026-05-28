import { BoxProps } from 'lib/components'
import { DropdownListProps } from 'lib/components/shared'
import { ControlSize } from 'lib/definitions'

export const DEFAULT_AUTOCOMPLETE_INLINE_SIZE: AutocompleteProps['inlineSize'] = '100%'
export const DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING: AutocompleteProps['disableFiltering'] = false
export const DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE: AutocompleteProps['showToggle'] = true
export const DEFAULT_AUTOCOMPLETE_INTENT: AutocompleteProps['intent'] = 'tertiary'

type AutocompleteOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
  size?: ControlSize
  dropdownPlacement?: DropdownListProps['placement']
  disableFiltering?: boolean
  debounceDelay?: number
  placeholder?: string
  showToggle?: boolean
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'> & {
  children: BoxProps<'div'>['children']
}

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'scrollAlign' | 'visibleItemsCount' | 'noOptionsLabel'
>

export type AutocompleteProps = PropsFromBox & PropsFromDropdownList & AutocompleteOwnProps
