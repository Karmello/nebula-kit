import { BoxProps, DropdownListProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_AUTOCOMPLETE_INLINE_SIZE: AutocompleteProps['inlineSize'] = '100%'

type AutocompleteOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  dropdownPlacement?: DropdownListProps['placement']
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'>

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'intent' | 'color' | 'size' | 'itemBorderIntent' | 'scrollAlign' | 'visibleItemsCount'
>

export type AutocompleteProps = PropsFromHtmlTag & PropsFromBox & PropsFromDropdownList & AutocompleteOwnProps
