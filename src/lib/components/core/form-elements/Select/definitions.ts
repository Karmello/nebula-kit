import { BoxProps, DropdownListProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'

type SelectOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  dropdownPlacement?: DropdownListProps['placement']
  staticLabel?: string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'>

type PropsFromDropdownList = Pick<DropdownListProps, 'color' | 'size' | 'intent' | 'scrollAlign' | 'visibleItemsCount'>

export type SelectProps = PropsFromHtmlTag & PropsFromBox & PropsFromDropdownList & SelectOwnProps
