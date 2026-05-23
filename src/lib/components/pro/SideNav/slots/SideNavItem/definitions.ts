import { HtmlTagProps, LinkProps, ButtonProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

import { SideNavVariant } from '../../definitions'

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'a'>['children']
  variant?: RespValue<SideNavVariant>
}

type PropsFromButton = Pick<
  ButtonProps,
  'color' | 'intent' | 'bold' | 'customSvgIcon' | 'iconName' | 'iconPlacement' | 'align' | 'elevated' | 'selected' | 'description'
>

type PropsFromLink = Pick<LinkProps, 'href' | 'onClick'>

export type SideNavItemProps = PropsFromHtmlTag & PropsFromButton & PropsFromLink
