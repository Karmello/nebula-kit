import { HtmlTagProps, ButtonLinkProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'a'>['children']
}

type PropsFromButtonLink = Pick<ButtonLinkProps, 'href' | 'onClick' | 'variant' | 'intent' | 'labelIntent'>

export type SideNavItemProps = PropsFromHtmlTag & PropsFromButtonLink
