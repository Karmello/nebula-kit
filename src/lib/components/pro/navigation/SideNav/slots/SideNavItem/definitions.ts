import { HtmlTagProps, LinkProps, ButtonProps } from 'lib/components'

import { SideNavVariant } from '../../definitions'

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'a'>['children']
  variant?: SideNavVariant
}

type PropsFromButton = Pick<ButtonProps, 'color' | 'intent'>

type PropsFromLink = Pick<LinkProps, 'href' | 'onClick'>

export type SideNavItemProps = PropsFromHtmlTag & PropsFromButton & PropsFromLink
