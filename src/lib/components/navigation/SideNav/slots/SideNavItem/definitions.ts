import { HtmlTagProps, LinkProps, ButtonProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'a'>['children']
}

type PropsFromButton = Pick<ButtonProps, 'variant' | 'intent' | 'labelIntent'>

type PropsFromLink = Pick<LinkProps, 'href' | 'onClick'>

export type SideNavItemProps = PropsFromHtmlTag & PropsFromButton & PropsFromLink
