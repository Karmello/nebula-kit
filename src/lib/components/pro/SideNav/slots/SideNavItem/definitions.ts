import { ButtonProps, LinkProps } from 'lib/index.core'
import { RespValue } from 'lib/types'

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
  | 'description'
> & {
  children: ButtonProps<'a'>['children']
  variant?: RespValue<SideNavVariant>
}

type PropsFromLink = Pick<LinkProps, 'href' | 'onClick'>

export type SideNavItemProps = PropsFromButton & PropsFromLink
