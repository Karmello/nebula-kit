import { BoxProps, ButtonProps, DropdownListProps, HtmlTagProps } from 'lib/components'

type SelectOwnProps = {
  options: { value: string; label: string }[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'>

type PropsFromDropdownList = Pick<DropdownListProps, 'itemBorderIntent' | 'scrollAlign'>

type PropsFromBox = Pick<BoxProps, 'inlineSize'>

type PropsFromButton = Pick<ButtonProps, 'variant' | 'intent' | 'size'>

export type SelectProps = PropsFromHtmlTag &
  PropsFromDropdownList &
  PropsFromBox &
  PropsFromButton &
  SelectOwnProps
