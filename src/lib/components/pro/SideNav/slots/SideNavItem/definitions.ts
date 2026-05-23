import { LinkProps, ButtonProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

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
