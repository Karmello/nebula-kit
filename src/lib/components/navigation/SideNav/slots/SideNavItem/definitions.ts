import { ButtonProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'a'>['children']
}

type PropsFromButton = Pick<ButtonProps<'a'>, 'variant' | 'intent' | 'textIntent'>

export type SideNavItemProps = PropsFromHtmlTag & PropsFromButton
