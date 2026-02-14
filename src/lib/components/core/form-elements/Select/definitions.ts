import { BoxProps, ButtonProps, DropdownListProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'
export const DEFAULT_SELECT_LIST_INTENT: SelectProps['listIntent'] = 'secondary'

type SelectOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  dropdownPlacement?: DropdownListProps['placement']
  staticLabel?: string
  triggerIntent?: ButtonProps['intent']
  listIntent?: DropdownListProps['intent']
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'>

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'color' | 'size' | 'itemBorderIntent' | 'scrollAlign' | 'visibleItemsCount'
>

export type SelectProps = PropsFromHtmlTag & PropsFromBox & PropsFromDropdownList & SelectOwnProps
