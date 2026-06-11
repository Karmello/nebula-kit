import { ButtonProps, LinkProps } from 'lib/index.core'

import { SideNavVariant } from '../../definitions'

type PropsFromButton = Pick<
  ButtonProps<'a'>,
  | 'tagRef'
  | 'tagAttrs'
  | 'color'
  | 'intent'
  | 'bold'
  | 'customSvgIcon'
  | 'iconName'
  | 'iconPlacement'
  | 'align'
  | 'elevated'
  | 'selected'
> & {
  children: ButtonProps<'a'>['children']
  variant?: SideNavVariant
}

type PropsFromLink = Pick<LinkProps, 'href' | 'onClick'>

export type SideNavItemProps = PropsFromButton & PropsFromLink
