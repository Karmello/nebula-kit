import { HtmlTagProps, LinkButtonProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'a'>['children']
}

type PropsFromLinkButton = Pick<
  LinkButtonProps,
  'href' | 'onClick' | 'variant' | 'intent' | 'labelIntent' | 'borderRadius'
>

export type SideNavItemProps = PropsFromHtmlTag & PropsFromLinkButton
