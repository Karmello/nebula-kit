import { DropdownListProps, HtmlTagProps } from 'lib/components'

type SelectOwnProps = {
  options: { value: string; label: string }[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'>

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'variant' | 'intent' | 'size' | 'itemBorderIntent' | 'scrollAlign' | 'inlineSize' | 'visibleItemsCount'
>

export type SelectProps = PropsFromHtmlTag & PropsFromDropdownList & SelectOwnProps
