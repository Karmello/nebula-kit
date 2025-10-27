import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'

type SelectOwnProps = {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'>

type PropsFromBox = Pick<BoxProps, 'inlineSize'>

type PropsFromButton = Pick<ButtonProps, 'variant' | 'intent' | 'size'>

export type SelectProps = PropsFromHtmlTag & PropsFromBox & PropsFromButton & SelectOwnProps
